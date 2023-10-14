import React from 'react'
import ChannelBanner from '../channel/ChannelBanner'
import ChannelDetail from '../channel/ChannelDetail'
import ChannelVideos from '../channel/ChannelVideos'
import ChannelSections from '../channel/ChannelSections'

interface ChannelContentProps {
	channel: any
	pageToken: string
}

const ChannelContent = ({ channel, pageToken }: ChannelContentProps) => {
	return (
		<div className='w-full text-white md:ml-[240px]'>
			<ChannelBanner banner={channel.banner} />
			<ChannelDetail channel={channel} />
			<ChannelSections />
			<ChannelVideos initialPageToken={pageToken} defaultVideos={channel.videos} channel={channel} />
		</div>
	)
}

export default ChannelContent