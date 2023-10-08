import { api } from "@/lib/api";
import { dateFormatter } from "@/lib/dateFormatter";
import { viewFormatter } from "@/lib/viewFormatter";
import { IVideoResponse } from '@/types/videoTypes'

export async function GET(request: Request) {
  const videoResponse = await api.get('/videos', {
		params: {
			maxResults: 25,
			part: 'snippet,statistics',
			chart: 'mostPopular',
		},
	})

  const channelIds = videoResponse.data.items.map((video: IVideoResponse) => video.snippet.channelId)

  const channelResponse = await api.get('/channels', {params: {
    id: channelIds.join(','),
    part: 'snippet'
  }})

  const channels = channelResponse.data.items

  const videos = videoResponse.data.items.map((video: IVideoResponse, idx: number) => {
		return {
			id: video.id,
			title: video.snippet.title,
			publishedAt: dateFormatter(video.snippet.publishedAt),
			thumbnail: video.snippet.thumbnails.standard.url,
			viewCount: viewFormatter.format(Number(video.statistics.viewCount)),
			channel: {
				title: channels[idx].snippet.title,
				thumbnail: channels[idx].snippet.thumbnails.default.url,
			},
		}
	})

  return new Response(JSON.stringify({ videos }))
}