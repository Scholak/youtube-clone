import { api } from "@/lib/api";
import { dateFormatter } from "@/lib/dateFormatter";
import { NextRequest } from "next/server";

interface Params {
	params: {
		id: string
	}
}

export async function GET(request: NextRequest, { params }: Params) {
  const playlistResponse = await api.get('/playlists', { params: { id: params.id, part: 'snippet,contentDetails' } })
	const channelResponse = await api.get('/channels', { params: { id: playlistResponse.data.items[0].snippet.channelId, part: 'snippet' } })
	const playlistItemsResponse = await api.get('/playlistItems', {
		params: { playlistId: playlistResponse.data.items[0].id, part: 'snippet,contentDetails', maxResults: 100 },
	})
  
	const playlist = {
		id: playlistResponse.data.items[0].id,
		title: playlistResponse.data.items[0].snippet.title,
		description: playlistResponse.data.items[0].snippet.description,
		thumbnail: playlistResponse.data.items[0].snippet.thumbnails.standard.url,
		totalVideos: playlistItemsResponse.data.pageInfo.totalResults,
		channel: {
			id: channelResponse.data.items[0].snippet.id,
			title: channelResponse.data.items[0].snippet.title,
			thumbnail: channelResponse.data.items[0].snippet.thumbnails.medium.url,
		},
		items: playlistItemsResponse.data.items.map((playlistItem: any) => {
			return {
				id: playlistItem.id,
				title: playlistItem.snippet.title,
				description: playlistItem.snippet.description,
				thumbnail: playlistItem.snippet.thumbnails.standard.url,
				publishedAt: dateFormatter(playlistItem.snippet.publishedAt),
				videoId: playlistItem.contentDetails.videoId,
			}
		}),
	}

	return new Response(JSON.stringify({ playlist }))
}