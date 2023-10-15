import { PlaylistContent, Sidebar } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

export const revalidate = 0

interface PlaylistProps {
	searchParams: {
		list: string
	}
}

export async function generateMetadata({ searchParams }: PlaylistProps) {
	const playlistResponse = await axios.get(`${process.env.APP_URL}/api/playlists/${searchParams.list}`)

	return {
		title: playlistResponse.data.playlist.title
	}
}

const Playlist = async ({ searchParams }: PlaylistProps) => {
	try {
		const playlistResponse = await axios.get(`${process.env.APP_URL}/api/playlists/${searchParams.list}`)

		return (
			<div className='flex'>
				<Sidebar />
				<PlaylistContent playlist={playlistResponse.data.playlist} />
			</div>
		)
	} catch (error: any) {
		redirect('/')
	}
}

export default Playlist