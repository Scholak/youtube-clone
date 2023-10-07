import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
})

api.defaults.params = {
	key: process.env.YOUTUBE_API_KEY,
}