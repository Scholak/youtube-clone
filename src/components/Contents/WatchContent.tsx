import React from 'react'
import { Comments, RelatedVideos, VideoDetail } from '@/components'

interface WatchContentProps {
	videoDetail: any
}

const WatchContent = ({ videoDetail }: WatchContentProps) => {
	return (
		<div className='flex gap-6 mt-14 py-8 px-28 text-white'>
			<div className='shrink-1 w-full'>
				<VideoDetail data={videoDetail} />
				<Comments data={videoDetail} />
			</div>
			<RelatedVideos data={videoDetail} />
		</div>
	)
}

export default WatchContent