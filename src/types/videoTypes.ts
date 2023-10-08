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