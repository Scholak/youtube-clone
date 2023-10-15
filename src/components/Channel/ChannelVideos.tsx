'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ChannelVideo from './ChannelVideo'
import { useRouter } from 'next/navigation'

interface ChannelVideosProps {
	defaultVideos: any
	initialPageToken: string
	channel: any
}

const ChannelVideos = ({ defaultVideos, initialPageToken, channel }: ChannelVideosProps) => {
	const router = useRouter()
	const { ref, inView } = useInView({
		threshold: 0,
	})

	const [videos, setVideos] = useState<any>(defaultVideos)
	const [pageToken, setPageToken] = useState<string>(initialPageToken)
	const [isFetching, setIsFetching] = useState<boolean>(false)

	const fetchMore = () => {
		axios
			.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/channels/${channel.id}?pageToken=${pageToken}`)
			.then((response: any) => {
				setVideos((prev: any) => [...prev, ...response.data.channel.videos])
				setPageToken(response.data.pageToken)
				setIsFetching(false)
			})
			.catch((err: any) => {
				console.log(err.response.data.message)
			})
	}

	if (inView && !isFetching) {
		setIsFetching(true)
		fetchMore()
	}

	useEffect(() => {
		router.refresh()
	}, [])

	return (
		<div className='mt-12 grid gap-6 px-10 sm:px-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
			{videos.map((video: any) => (
				<ChannelVideo key={video.id} video={video} channel={channel} />
			))}
			<span className='text-transparent'>{videos.length && !isFetching && <div ref={ref}></div>}</span>
		</div>
	)
}

export default ChannelVideos