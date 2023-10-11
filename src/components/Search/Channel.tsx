import Image from 'next/image'
import React from 'react'

interface ChannelProps {
	channel: any
}

const Channel = ({ channel }: ChannelProps) => {
	return (
		<div className='w-full flex items-center justiy-between cursor-pointer'>
			<div className='w-80 h-52 flex items-center justify-center'>
				<Image
					src={channel.channel.thumbnail}
					alt='channel thumbnail'
					width={150}
					height={150}
					className='shrink-0 w-32 h-32 rounded-full overflow-hidden'
				/>
			</div>
			<div>
				<p className='mb-3 text-xl font-medium'>{channel.title}</p>
				<p className='mb-2 text-[#aaa] text-xs'>@{channel.title}</p>
				<p className='text-[#aaa] text-xs'>{channel.description}</p>
			</div>
			<button className='h-full ml-8 flex items-center px-4 py-2 rounded-3xl bg-white text-dark-gray font-medium whitespace-nowrap'>
				Abone ol
			</button>
		</div>
	)
}

export default Channel