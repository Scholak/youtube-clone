import Image from 'next/image'
import React from 'react'

interface VideoProps {
  video: any
}

const Video = ({ video }: VideoProps) => {
	return (
		<div className='w-full flex items-center justiy-between cursor-pointer'>
			<div className='shrink-0 w-80 h-52 flex items-center justify-center rounded-lg overflow-hidden'>
				<Image src={video.thumbnail} alt='channel thumbnail' width={150} height={150} className='w-full h-full' />
			</div>
			<div>
				<p className='mb-3 text-xl font-medium'>{video.title}</p>
				<p className='mb-2 text-[#aaa] text-xs'>@{video.title}</p>
				<p className='text-[#aaa] text-xs'>{video.description}</p>
			</div>
			<button className='h-full ml-8 flex items-center px-4 py-2 rounded-3xl bg-white text-dark-gray font-medium whitespace-nowrap'>
				Abone ol
			</button>
		</div>
	)
}

export default Video