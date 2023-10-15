import { api } from "@/lib/api";
import { dateFormatter } from "@/lib/dateFormatter";
import { teaser } from "@/lib/teaser";
import { viewFormatter } from "@/lib/viewFormatter";
import { IVideoResponse } from '@/types/videoTypes'
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams
		const pageToken = searchParams.get('pageToken')

		const videoResponse = await api.get('/videos', {
			params: {
				maxResults: 25,
				part: 'snippet,statistics',
				chart: 'mostPopular',
				pageToken,
			},
		})

		const channelIds = videoResponse.data.items.map((video: IVideoResponse) => video.snippet.channelId)

		const channelResponse = await api.get('/channels', {
			params: {
				id: channelIds.join(','),
				part: 'snippet',
			},
		})

		const channels = channelResponse.data.items

		const videos = videoResponse.data.items.map((video: IVideoResponse, idx: number) => {
			const channel = channels.filter((channel: any) => channel.id === video.snippet.channelId)[0]

			return {
				id: video.id,
				title: teaser(video.snippet.title),
				publishedAt: dateFormatter(video.snippet.publishedAt),
				thumbnail: video.snippet.thumbnails.standard.url,
				viewCount: viewFormatter.format(Number(video.statistics.viewCount)),
				channel: {
					id: channel.id,
					title: channel.snippet.title,
					thumbnail: channel.snippet.thumbnails.default.url,
				},
			}
		})

		return new Response(JSON.stringify({ videos, pageToken: videoResponse.data.nextPageToken }))
	} catch (error: any) {
		return new Response(JSON.stringify({message: 'Internal server error'}), {status: 500})
	}
}