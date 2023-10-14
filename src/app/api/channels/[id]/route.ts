import { api } from "@/lib/api";
import { dateFormatter } from "@/lib/dateFormatter";
import { teaser } from "@/lib/teaser";
import { viewFormatter } from "@/lib/viewFormatter";
import { NextRequest } from "next/server";

interface Params {
	params: {
		id: string
	}
}

export async function GET(request: NextRequest, { params }: Params) {
  const searchParams = request.nextUrl.searchParams

	const channelResponse = await api.get('/channels', { params: {
    id: params.id,
    part: 'snippet,id,statistics,brandingSettings' 
  }})
  const channelVideosResponse = await api.get('/search', {
		params: {
			channelId: params.id,
			part: 'snippet',
			pageToken: searchParams.get('pageToken'),
      maxResults: '25'
		},
	})

  const channel = {
		id: channelResponse.data.items[0].id,
		title: channelResponse.data.items[0].snippet.title,
		desciption: teaser(channelResponse.data.items[0].snippet.description, 200),
		banner: channelResponse.data.items[0].brandingSettings.image.bannerExternalUrl,
		thumbnail: channelResponse.data.items[0].snippet.thumbnails.default.url,
		customUrl: channelResponse.data.items[0].snippet.customUrl,
		subscribers: viewFormatter.format(channelResponse.data.items[0].statistics.subscriberCount),
		videoCount: channelResponse.data.items[0].statistics.videoCount,
		videos: channelVideosResponse.data.items.map((video: any) => {
			return {
				id: video.id.videoId,
				title: video.snippet.title,
				publishedAt: dateFormatter(video.snippet.publishedAt),
				channel: channelResponse.data.items[0].snippet.title,
				thumbnail: video.snippet.thumbnails.high.url,
			}
		}),
	}

  return new Response(JSON.stringify({ channel, pageToken: channelVideosResponse.data.nextPageToken }))
}