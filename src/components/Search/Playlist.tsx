import Image from 'next/image'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

interface PlaylistProps {
  playlist: any
}

const Playlist = ({playlist}: PlaylistProps) => {
  return (
		<div className='w-full flex gap-2 cursor-pointer sm:gap-4'>
			<div className='relative shrink-0 w-40 h-22 flex items-center justify-center rounded-lg overflow-hidden sm:w-80 sm:h-22'>
				<div className='absolute inset-0 flex items-center gap-2 justify-center bg-[#0f0f0fc2] z-10 opacity-0 hover:opacity-100'>
					<FaPlay />
					<p className='uppercase text-sm font-medium'>tümünü oynat</p>
				</div>
				<Image
					src={playlist.thumbnail}
					alt='channel thumbnail'
					width={150}
					height={150}
					className='w-full h-full object-cover'
				/>
				<div className='absolute bottom-0 left-0 w-full flex items-center justify-between px-3 py-1 bg-gray'>
					<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
						<path d='M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z'></path>
					</svg>
					<p className='text-sm'>oynatma listesi</p>
				</div>
			</div>
			<div>
				<p className='mb-2 font-medium sm:mb-3 sm:text-xl'>{playlist.title}</p>
				<p className='mb-1 text-[#aaa] text-xs sm:mb-2'>{playlist.title}</p>
				<p className='uppercase text-[#aaa] text-xs'>oynatma listesinin tamamını görüntüle</p>
			</div>
		</div>
	)
}

export default Playlist