import { PlaylistContent, Sidebar } from '@/components'
import axios from 'axios'
import React from 'react'

interface PlaylistProps {
	searchParams: {
		list: string
	}
}

const Playlist = async ({ searchParams }: PlaylistProps) => {
	const playlistResponse = await axios.get(`http://localhost:3000/api/playlists/${searchParams.list}`)

  return (
		<div className='flex'>
			<Sidebar />
			<PlaylistContent data={playlistResponse.data} />
		</div>
	)
}

export default Playlist