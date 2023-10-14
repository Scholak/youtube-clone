import Image from 'next/image'
import React from 'react'

interface ChannelDetailProps {
  channel: any
}

const ChannelDetail = ({ channel }: ChannelDetailProps) => {
	return (
		<div className='mb-8 flex items-start gap-10 px-10 sm:px-20 md:px-40 lg:px-52 xl:px-60'>
			<Image
				src={channel.thumbnail}
				alt='channel thumbnail'
				width={128}
				height={128}
				className='shrink-0 w-32 h-32 obejct-cover rounded-full'
			/>
			<div className='flex flex-col'>
				<h1 className='text-xl font-medium'>{channel.title}</h1>
				<p className='mt-1 mb-4 flex gap-2 items-center text-[#aaa]'>
					<strong>{channel.customUrl}</strong>
					<span>{channel.subscribers}</span>
					<span>{channel.videoCount} video</span>
				</p>
				<p className='text-[#aaa]'>{channel.desciption}</p>
			</div>
			<button className='ml-auto flex items-center py-2 px-4 rounded-3xl bg-white text-dark-gray font-medium whitespace-nowrap'>
				Abone ol
			</button>
		</div>
	)
}

export default ChannelDetail