import { ISearchItem } from '@/types/searchTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ChannelProps {
	channel: ISearchItem
}

const Channel = ({ channel }: ChannelProps) => {
	return (
		<Link href={`/channel?id=${channel.id}`} className='w-full flex items-center justiy-between gap-2 cursor-pointer sm:gap-3'>
			<div className='w-40 h-22 flex items-center justify-center sm:w-80 sm:h-44'>
				<Image
					src={channel.channel.thumbnail}
					alt='channel thumbnail'
					width={150}
					height={150}
					className='shrink-0 w-16 h-16 rounded-full overflow-hidden object-cover sm:w-32 sm:h-32'
				/>
			</div>
			<div>
				<p className='mb-3 text-xl font-medium'>{channel.title}</p>
				<p className='mb-2 text-[#aaa] text-xs'>@{channel.title}</p>
				<p className='text-[#aaa] text-xs'>{channel.description}</p>
			</div>
			<button className='flex items-center px-4 py-2 rounded-3xl bg-white text-dark-gray font-medium whitespace-nowrap'>
				Abone ol
			</button>
		</Link>
	)
}

export default Channel