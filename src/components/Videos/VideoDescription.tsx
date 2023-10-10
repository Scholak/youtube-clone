'use client'

import React, { useState } from 'react'

interface VideoDescriptionProps {
  video: any
}

const VideoDescription = ({ video }: VideoDescriptionProps) => {
  const [toggle, setToggle] = useState<boolean>(false)

	return (
		<div className='mb-2 p-2 bg-light-gray rounded-lg'>
			<div className='flex items-center gap-2 text-sm font-medium'>
				<p>{video.detail.view} görüntüleme</p>
				<p>{video.detail.publishedAt}</p>
			</div>
			<div className={`${toggle ? 'h-auto' : 'h-6'} overflow-hidden`}>
				<p className='text-sm leading-6' dangerouslySetInnerHTML={{ __html: video.detail.description }}></p>
			</div>
			<button onClick={() => setToggle(!toggle)}>daha {toggle ? 'az' : 'fazla'}...</button>
		</div>
	)
}

export default VideoDescription