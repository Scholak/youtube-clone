import Image from 'next/image'
import React from 'react'

interface VideoProps {
  video: any
}

const Video = ({ video }: VideoProps) => {
	return (
		<div className='w-full flex gap-2 cursor-pointer sm:gap-4'>
			<div className='w-40 h-22 shrink-0 flex items-center justify-center rounded-lg overflow-hidden sm:w-80 sm:h-44'>
				<Image
					src={video.thumbnail}
					alt='channel thumbnail'
					width={150}
					height={150}
					className='w-full h-full object-cover'
				/>
			</div>
			<div>
				<p className='mb-2 font-medium sm:text-xl sm:mb-3'>{video.title}</p>
				<p className='mb-1 text-[#aaa] text-xs sm:mb-2'>@{video.title}</p>
				<p className='text-[#aaa] text-xs'>{video.description}</p>
			</div>
		</div>
	)
}

export default Video