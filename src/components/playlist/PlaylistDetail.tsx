import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PlaylistDetailProps {
  playlist: any
}

const PlaylistDetail = ({ playlist }: PlaylistDetailProps) => {
  return (
		<div className='grid grid-cols-2 place-items-center gap-8 md:grid-cols-1'>
			<Link href={{ pathname: '/watch', query: { v: playlist.items[0].videoId } }}>
				<Image
					src={playlist.thumbnail}
					alt='playlist thumbnail'
					width={360}
					height={200}
					className='w-80 h-40 rounded-lg object-cover'
				/>
			</Link>
			<div className='flex flex-col justify-between'>
				<h1 className='text-3xl font-bold'>{playlist.title}</h1>
				<div className='flex items-center justify-between gap-2'>
					<div>
						<p className='my-1'>{playlist.channel.title}</p>
						<p className='mb-1 text-sm text-[#aaa]'>{playlist.items.length} Video</p>
					</div>
					<div className='flex gap-2 items-center'>
						<button className='w-9 h-9 flex items-center justify-center rounded-full bg-light-gray'>
							<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
								<path d='m15.06 16.47-3.76-3.76 1.41-1.41 2.24 2.24 5.3-6.18 1.52 1.3-6.71 7.81zM14 9H2V7h12v2zM2 11h8v2H2v-2zm0 4h8v2H2v-2z'></path>
							</svg>
						</button>
						<button className='w-9 h-9 flex items-center justify-center rounded-full bg-light-gray'>
							<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
								<path d='M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z'></path>
							</svg>
						</button>
						<button className='w-9 h-9 flex items-center justify-center rounded-full bg-light-gray'>
							<svg
								enableBackground='new 0 0 24 24'
								height='24'
								viewBox='0 0 24 24'
								width='24'
								focusable='false'
								fill='#fff'
							>
								<path d='M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z'></path>
							</svg>
						</button>
					</div>
				</div>
				<p>{playlist.description}</p>
				<div className='mt-2 flex gap-2'>
					<button className='flex-1 flex items-center justify-center py-2 rounded-3xl bg-white text-dark-gray font-medium'>
						<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='rgb(15,15,15)'>
							<path d='m7 4 12 8-12 8V4z'></path>
						</svg>
						<p>Tümünü Oynat</p>
					</button>
					<button className='flex-1 flex items-center justify-center py-2 rounded-3xl bg-light-gray text-white font-medium'>
						<svg
							enable-background='new 0 0 24 24'
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<path d='M18.15 13.65 22 17.5l-3.85 3.85-.71-.71L20.09 18H19c-2.84 0-5.53-1.23-7.39-3.38l.76-.65C14.03 15.89 16.45 17 19 17h1.09l-2.65-2.65.71-.7zM19 7h1.09l-2.65 2.65.71.71L22 6.51l-3.85-3.85-.71.71L20.09 6H19c-3.58 0-6.86 1.95-8.57 5.09l-.73 1.34C8.16 15.25 5.21 17 2 17v1c3.58 0 6.86-1.95 8.57-5.09l.73-1.34C12.84 8.75 15.79 7 19 7zM8.59 9.98l.75-.66C7.49 7.21 4.81 6 2 6v1c2.52 0 4.92 1.09 6.59 2.98z'></path>
						</svg>
						<p>Karıştır</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default PlaylistDetail