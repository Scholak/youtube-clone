'use client'

import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import SideLink from './SideLink'
import axios from 'axios'
import Playlists from './Playlists'
import { IPlaylist } from '@/types/playlistTypes'

const You = () => {
	const [playlists, setPlaylists] = useState<IPlaylist[]>([])

	useEffect(() => {
		axios.get(`http://localhost:3000/api/playlists`).then((res: any) => {
			setPlaylists(res.data.playlists)
		})
	}, [])

  return (
		<div className='px-3'>
			<div className='flex items-center gap-2 py-2 px-4 rounded-lg text-white hover:bg-light-gray cursor-pointer'>
				<span className='font-bold'>Siz</span>
				<FaChevronRight />
			</div>
			<ul>
				<SideLink
					href='/'
					text='Kanalınız'
					isActive={false}
					svg={
						<svg viewBox='0 0 24 24' focusable='false' width='24' height='24' fill='#fff'>
							<path d='M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z'></path>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Geçmiş'
					isActive={false}
					svg={
						<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
							<g>
								<path d='M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z'></path>
							</g>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Videolarınız'
					isActive={false}
					svg={
						<svg
							enableBackground='new 0 0 24 24'
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<path d='m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z'></path>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Daha Sonra İzle'
					isActive={false}
					svg={
						<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
							<path d='M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z'></path>
						</svg>
					}
				/>
				{playlists && <Playlists playlists={playlists} />}
			</ul>
		</div>
	)
}

export default You