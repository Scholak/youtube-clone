import { PlaylistContent, Sidebar } from '@/components'
import React from 'react'

const Playlist = () => {
  return (
		<div className='flex'>
			<Sidebar />
			<PlaylistContent />
		</div>
	)
}

export default Playlist