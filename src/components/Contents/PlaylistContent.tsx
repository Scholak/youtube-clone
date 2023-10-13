import Image from 'next/image'
import React from 'react'
import PlaylistDetail from '../playlist/PlaylistDetail'
import PlaylistItems from '../playlist/PlaylistItems'

interface PlaylistContentProps {
	data: any
}

const PlaylistContent = ({ data }: PlaylistContentProps) => {
	return (
		<div className='mt-20 px-10 flex flex-col items-start gap-10 text-white md:flex-row md:px-20 lg:px-20 lg:ml-[120px] xl:px-40'>
			<PlaylistDetail playlist={data.playlist} />
			<PlaylistItems items={data.playlist.items} channel={data.playlist.channel.title} />
		</div>
	)
}

export default PlaylistContent