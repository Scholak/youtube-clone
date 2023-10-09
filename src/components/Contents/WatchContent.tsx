import React from 'react'
import { Comments, RelatedVideos, VideoDetail } from '@/components'

interface WatchContentProps {
	videoDetail: any
}

const WatchContent = ({ videoDetail }: WatchContentProps) => {
	return (
		<div className='mt-14 p-8 text-white'>
			<div>
				<VideoDetail data={videoDetail} />
				<Comments data={videoDetail} />
			</div>
			<RelatedVideos data={videoDetail} />
		</div>
	)
}

export default WatchContent