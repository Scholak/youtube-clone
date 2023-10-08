'use client'

import { IVideo } from '@/types/videoTypes'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Video from './Video'

const VideoContainer = () => {
  const [videos, setVideos] = useState<IVideo[]>([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/videos').then((response: any) => {
      setVideos(response.data.videos)
    })
  }, [])

  return (
    <div className='grid grid-cols-5 gap-4 text-white'>
      {videos?.map((video: IVideo) => <Video key={video.id} video={video} />)}
    </div>
  )
}

export default VideoContainer