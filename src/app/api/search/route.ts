import { api } from "@/lib/api";
import { dateFormatter } from "@/lib/dateFormatter";
import { teaser } from "@/lib/teaser";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams 

  const searchResponse = await api.get('/search', {params: {
    part: 'snippet',
    maxResults: 20,
    q: searchParams.get('q')
  }})

  const channelIds = searchResponse.data.items.map((video: any) => video.snippet.channelId)

  const channelResponse = await api.get('/channels', {
		params: {
			id: channelIds.join(','),
			part: 'snippet',
		},
	})

  const channels = channelResponse.data.items

  const search = searchResponse.data.items.map((result: any) => {
    const channel = channels.filter((channel: any) => channel.id === result.snippet.channelId)[0]
    let type, id

    if (result.id.kind.includes('video')) {
      type = 'video'
      id = result.id.videoId
    } else if (result.id.kind.includes('channel')) {
      type = 'channel'
      id = result.id.channelId
    } else {
      type = 'playlist'
      id = result.id.playlistId
    }

    return {
			id,
			type,
			title: result.snippet.title,
			description: teaser(result.snippet.description, 200),
			publishedAt: dateFormatter(result.snippet.publishedAt),
			thumbnail: result.snippet.thumbnails.high.url,
			channel: {
				title: channel.snippet.title,
				thumbnail: channel.snippet.thumbnails.high.url,
			},
		}
  })

  return new Response(JSON.stringify({ search, pagetoken: searchResponse.data.nextPageToken }))
}