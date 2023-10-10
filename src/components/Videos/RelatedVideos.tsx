import { teaser } from '@/lib/teaser'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface RelatedVideosProps {
	data: any
}

const RelatedVideos = ({ data }: RelatedVideosProps) => {
  return (
		<div className='grid gap-2'>
			{data.video.relatedVideos.data.map((video: any) => (
				<Link key={video.id} href={{ pathname: '/watch', query: { v: video.id } }} className='w-[400px] flex gap-4'>
					<div className='shrink-0 rounded-xl overflow-hidden w-[168px] h-[96px]'>
						<Image
							src={video.thumbnail}
							alt='video thumbnail'
							width={200}
							height={100}
							className='w-full h-full object-cover'
						/>
					</div>
					<div>
						<p className='mb-2 font-medium text-sm'>{teaser(video.title)}</p>
						<p className='text-xs'>{video.channel}</p>
						<p className='flex items-center gap-3 text-xs'>
							<span>{video.view}</span>
							<span className='w-0.5 h-0.5 bg-white rounded-full'></span>
							<span>{video.publishedAt}</span>
						</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default RelatedVideos