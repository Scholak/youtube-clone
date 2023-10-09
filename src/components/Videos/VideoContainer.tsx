'use client'

import { IVideo } from '@/types/videoTypes'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Video from './Video'

const VideoContainer = () => {
  const { ref, inView } = useInView({
		threshold: 0,
	})

  const [videos, setVideos] = useState<IVideo[]>([])
  const [pageToken, setPageToken] = useState<string>('')
  const [isFetching, setIsFetching] = useState<boolean>(false)

  const fetchMore = () => {
    axios.get(`http://localhost:3000/api/videos?pageToken=${pageToken}`).then((response: any) => {
      setVideos((prev: IVideo[]) => [...prev, ...response.data.videos])
      setPageToken(response.data.pageToken)
      setIsFetching(false)
    }).catch((err: any) => {
      console.log(err.response.data.message)
    })
  }

  if (inView && !isFetching) {
    setIsFetching(true)
    fetchMore()
	}

  useEffect(() => {
    axios
			.get('http://localhost:3000/api/videos')
			.then((response: any) => {
				setVideos(response.data.videos)
				setPageToken(response.data.pageToken)
			})
			.catch((err: any) => {
				console.log(err.response.data.message)
			})
  }, [])

  return (
    <div className='grid gap-6 text-white md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {videos.map((video: IVideo) => (
        <Video key={video.id} video={video} />
      ))}
      {videos.length && !isFetching && <div ref={ref}></div>}
    </div>
	)
}

export default VideoContainer