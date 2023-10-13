export interface ISearchItem {
	id: string
	type: string
	title: string
	description: string
	publishedAt: string
	thumbnail: string
	channel: {
		title: string
		thumbnail: string
	}
}
