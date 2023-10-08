'use client'

import { IPlaylist } from '@/types/playlistTypes'
import React, { useState } from 'react'
import SideLink from './SideLink'

interface IPlaylistProps {
	playlists: IPlaylist[]
}

const Playlists = ({ playlists }: IPlaylistProps) => {
  const [isActive, setIsActive] = useState<boolean>(false)

	return (
		<ul>
			{isActive &&
				playlists.map((playlist: IPlaylist) => (
					<SideLink
					key={playlist.id}
						href='/'
						text={playlist.snippet.title}
						isActive={false}
						svg={
							<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
								<path d='M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z'></path>
							</svg>
						}
					/>
				))}
			<li
				className='flex items-center gap-4 py-2 px-4 rounded-lg text-white text-[14px] whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer hover:bg-light-gray'
				onClick={() => setIsActive(!isActive)}
			>
				<p>Daha {isActive ? 'Az' : 'Fazla'} Göster</p>
				<svg
					height='24'
					viewBox='0 0 24 24'
					width='24'
					focusable='false'
					fill='#fff'
					className={`${isActive && 'rotate-180'}`}
				>
					<path d='m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z'></path>
				</svg>
			</li>
		</ul>
	)
}

export default Playlists