import { api } from "@/lib/api"
import { dateFormatter } from "@/lib/dateFormatter"
import { viewFormatter } from "@/lib/viewFormatter"

interface Params {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: Params) {
  try {
    const videoResponse = await api.get('/videos', {
			params: {
				id: params.id,
				part: 'snippet,player,statistics',
				maxWidth: '1440',
				maxHeight: '810',
			},
		})

		const otherVideosResponse = await api.get('/videos', {
			params: {
				part: 'snippet,statistics',
				chart: 'mostPopular',
				maxResults: 20,
			},
		})

		const channelResponse = await api.get('/channels', {
			params: {
				id: videoResponse.data.items[0].snippet.channelId,
				part: 'snippet,id,statistics',
			},
		})

		const commentsResponse = await api.get('/commentThreads', {
			params: {
				videoId: params.id,
				part: 'snippet',
				maxResults: '20',
			},
		})

		const video = {
			detail: {
				id: videoResponse.data.items[0].id,
				publishedAt: dateFormatter(videoResponse.data.items[0].snippet.publishedAt),
				title: videoResponse.data.items[0].snippet.title,
				description: videoResponse.data.items[0].snippet.description,
				view: viewFormatter.format(Number(videoResponse.data.items[0].statistics.viewCount)),
				like: viewFormatter.format(Number(videoResponse.data.items[0].statistics.likeCount)),
				comment: viewFormatter.format(Number(videoResponse.data.items[0].statistics.commentCount)),
				player: videoResponse.data.items[0].player.embedHtml,
			},
			channel: {
				id: channelResponse.data.items[0].id,
				title: channelResponse.data.items[0].snippet.title,
				thumbnail: channelResponse.data.items[0].snippet.thumbnails.default.url,
				subscribers: viewFormatter.format(Number(channelResponse.data.items[0].statistics.subscriberCount)),
			},
			comments: {
				data: commentsResponse.data.items.map((comment: any) => {
					return {
						id: comment.snippet.topLevelComment.id,
						text: comment.snippet.topLevelComment.snippet.textOriginal,
						author: comment.snippet.topLevelComment.snippet.authorDisplayName,
						authorImage: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
						authorChannelId: comment.snippet.topLevelComment.snippet.authorChannelId.value,
						like: viewFormatter.format(Number(comment.snippet.topLevelComment.snippet.likeCount)),
					}
				}),
				nextPageToken: commentsResponse.data.nextPageToken,
			},
			relatedVideos: {
				data: otherVideosResponse.data.items.map((video: any) => {
					return {
						id: video.id,
						title: video.snippet.title,
						publishedAt: dateFormatter(video.snippet.publishedAt),
						thumbnail: video.snippet.thumbnails.standard.url,
						view: viewFormatter.format(Number(video.statistics.viewCount)),
						channel: video.snippet.channelTitle,
					}
				}),
				nextPageToken: otherVideosResponse.data.nextPageToken,
			},
		}

		return new Response(JSON.stringify({ video }))
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.response.data.error }), { status: 500 })
  }

}