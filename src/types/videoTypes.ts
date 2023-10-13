export interface IVideoResponse {
	kind: string
	etag: string
	id: string
	snippet: {
		publishedAt: string
		channelId: string
		title: string
		description: string
		thumbnails: {
			default: {
				url: string
				width: number
				height: number
			}
			medium: {
				url: string
				width: number
				height: number
			}
			high: {
				url: string
				width: number
				height: number
			}
			standard: {
				url: string
				width: number
				height: number
			}
			maxres: {
				url: string
				width: number
				height: number
			}
		}
		channelTitle: string
		categoryId: string
		liveBroadcastContent: string
		defaultLanguage: string
		localized: {
			title: string
			description: string
		}
		defaultAudioLanguage: string
	}
	statistics: {
		viewCount: string
		likeCount: string
		favoriteCount: string
		commentCount: string
	}
	player: {
		embedHtml: string
	}
}

export interface IVideo {
	id: string
	title: string
	publishedAt: string
	thumbnail: string
	viewCount: string
	channel: {
		title: string
		thumbnail: string
	}
}

export interface IVideoDetail {
	detail: {
		id: string
		publishedAt: string
		title: string
		description: string
		view: string
		like: string
		comment: string
		player: string
	}
	channel: {
		id: string
		title: string
		thumbnail: string
		subscribers: string
	}
	comments: {
		data: Array<{
			id: string
			text: string
			author: string
			authorImage: string
			authorChannelId: string
			like: string
		}>
		nextPageToken: string
	}
	relatedVideos: {
		data: Array<{
			id: string
			title: string
			publishedAt: string
			thumbnail: string
			view: string
			channel: string
		}>
		nextPageToken: string
	}
}
