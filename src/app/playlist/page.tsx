import { PlaylistContent, Sidebar } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

interface PlaylistProps {
	searchParams: {
		list: string
	}
}

const Playlist = async ({ searchParams }: PlaylistProps) => {
	try {
		const playlistResponse = await axios.get(`http://localhost:3000/api/playlists/${searchParams.list}`)

		return (
			<div className='flex'>
				<Sidebar />
				<PlaylistContent data={playlistResponse.data} />
			</div>
		)
	} catch (error: any) {
		redirect('/')
	}
}

export default Playlist