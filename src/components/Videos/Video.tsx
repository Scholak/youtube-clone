import { IVideo } from '@/types/videoTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface VideoProps {
  video: IVideo
}

const Video = ({video}: VideoProps) => {
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
					<Link href={`/channel/${video.channel.id}`}>
						<Image
							src={video.channel.thumbnail}
							alt='channel thumbnail'
							width={40}
							height={40}
							className='w-full h-full object-cover'
						/>
					</Link>
				</div>
				<p>{video.title}</p>
			</div>
			<div className='ml-12 text-[#aaa] text-sm'>
				<p>{video.channel.title}</p>
				<p className='flex items-center gap-1'>
					<span>{video.viewCount} görüntüleme</span>
					<span className='w-0.5 h-0.5 rounded-full bg-white'></span>
					<span>{video.publishedAt}</span>
				</p>
			</div>
		</Link>
	)
}

export default Video