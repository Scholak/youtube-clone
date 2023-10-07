export interface ICategory {
	kind: string
	etag: string
	id: string
	snippet: {
		title: string
		assignable: boolean
		channelId: string
	}
}