import React from 'react'
import PlaylistDetail from '../Playlist/PlaylistDetail'
import PlaylistItems from '../Playlist/PlaylistItems'
import { IPlaylistDetail } from '@/types/playlistTypes'

interface PlaylistContentProps {
	playlist: IPlaylistDetail
}

const PlaylistContent = ({ playlist }: PlaylistContentProps) => {
	return (
		<div className='mt-20 px-10 flex flex-col items-start gap-10 text-white md:flex-row md:px-20 lg:px-20 lg:ml-[120px] xl:px-40'>
			<PlaylistDetail playlist={playlist} />
			<PlaylistItems items={playlist.items} channel={playlist.channel.title} />
		</div>
	)
}

export default PlaylistContent