export interface IPlaylist {
	id: string
	title: string
}

export interface IPlaylistDetail {
	id: string
	title: string
	description: string
	thumbnail: string
	totalVideos: number
	channel: {
		title: string
		thumbnail: string
	}
	items: IPlaylistItem[]
}

export interface IPlaylistItem {
	id: string
	title: string
	description: string
	thumbnail: string
	publishedAt: string
	videoId: string
}
