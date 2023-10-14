import { ChannelContent, Sidebar } from '@/components'
import React from 'react'

const Channel = () => {
  return (
		<div className='flex'>
			<Sidebar />
			<ChannelContent />
		</div>
	)
}

export default Channel