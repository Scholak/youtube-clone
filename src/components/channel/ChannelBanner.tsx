import Image from 'next/image'
import React from 'react'

interface ChannelBannerProps {
  banner: string
}

const ChannelBanner = ({ banner }: ChannelBannerProps) => {
  return (
    <div className='mb-4 w-full aspect-[5/1]'>
      <Image src={banner} alt='banner image' width={1500} height={300} className='w-full h-full object-cover' />
    </div>
  )
}

export default ChannelBanner