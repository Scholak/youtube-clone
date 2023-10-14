import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ChannelVideoProps {
	video: any
	channel: any
}

const ChannelVideo = ({ video, channel }: ChannelVideoProps) => {
  return (
		<Link href={{ pathname: '/watch', query: { v: video.id } }}>
			<div className='w-full mb-2 aspect-video rounded-lg overflow-hidden'>
				<Image
					src={video.thumbnail}
					alt='video thumbnail'
					width={640}
					height={480}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='flex items-start gap-2'>
				<div className='shrink-0 w-10 h-10 rounded-full overflow-hidden'>
					<Image
						src={channel.thumbnail}
						alt='channel thumbnail'
						width={40}
						height={40}
						className='w-full h-full object-cover'
					/>
				</div>
				<p>{video.title}</p>
			</div>
			<div className='ml-12 text-[#aaa] text-sm'>
				<p>{channel.title}</p>
				<p>{video.publishedAt}</p>
			</div>
		</Link>
	)
}

export default ChannelVideo