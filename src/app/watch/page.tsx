import { WatchContent } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

export const revalidate = 0

interface WatchProps {
  searchParams: {
    v: string
  }
}

export async function generateMetadata({searchParams}: WatchProps) {
  const response = await axios.get(`${process.env.APP_URL}/api/videos/${searchParams.v}`)

  return {
    title: response.data?.video.detail.title
  }
}

const Watch = async ({searchParams}: WatchProps) => {
  if (!searchParams.v) {
    redirect('/')
  }

  try {
    const response = await axios.get(`${process.env.APP_URL}/api/videos/${searchParams.v}`)

    return <WatchContent videoDetail={response.data.video} />
  } catch (error: any) {
    redirect('/')
  }
}

export default Watch