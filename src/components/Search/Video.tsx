import Image from 'next/image'
import React from 'react'

interface VideoProps {
  video: any
}

const Video = ({ video }: VideoProps) => {
	return (
		<div className='w-full flex gap-4 cursor-pointer'>
			<div className='shrink-0 w-80 h-44 flex items-center justify-center rounded-lg overflow-hidden'>
				<Image src={video.thumbnail} alt='channel thumbnail' width={150} height={150} className='w-full h-full object-cover' />
			</div>
			<div>
				<p className='mb-3 text-xl font-medium'>{video.title}</p>
				<p className='mb-2 text-[#aaa] text-xs'>@{video.title}</p>
				<p className='text-[#aaa] text-xs'>{video.description}</p>
			</div>
		</div>
	)
}

export default Video