import React from 'react'
import ChannelBanner from '../Channel/ChannelBanner'
import ChannelDetail from '../Channel/ChannelDetail'
import ChannelVideos from '../Channel/ChannelVideos'
import ChannelSections from '../Channel/ChannelSections'

interface ChannelContentProps {
	channel: any
	pageToken: string
}

const ChannelContent = ({ channel, pageToken }: ChannelContentProps) => {
	return (
		<div className='w-full mt-14 text-white overflow-x-hidden sm:ml-[60px] lg:ml-[240px]'>
			<ChannelBanner banner={channel.banner} />
			<ChannelDetail channel={channel} />
			<ChannelSections />
			<ChannelVideos initialPageToken={pageToken} defaultVideos={channel.videos} channel={channel} />
		</div>
	)
}

export default ChannelContent