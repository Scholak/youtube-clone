import { WatchContent } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

interface WatchProps {
  searchParams: {
    v: string
  }
}

export async function generateMetadata({searchParams}: WatchProps) {
  const response = await axios.get(`http://localhost:3000/api/videos/${searchParams.v}`)

  return {
    title: response.data?.video.detail.title
  }
}

const Watch = async ({searchParams}: WatchProps) => {
  if (!searchParams.v) {
    redirect('/')
  }

  try {
    const response = await axios.get(`http://localhost:3000/api/videos/${searchParams.v}`)

    return <WatchContent videoDetail={response.data} />
  } catch (error: any) {
    redirect('/')
  }
}

export default Watch