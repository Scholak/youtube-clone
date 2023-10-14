import { ChannelContent, Sidebar } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

interface ChannelProps {
	searchParams: {
		id: string
	}
}

const Channel = async ({ searchParams }: ChannelProps) => {
	try {
		const response = await axios.get(`http://localhost:3000/api/channels/${searchParams.id}`)

		return (
			<div className='flex'>
				<Sidebar />
				<ChannelContent channel={response.data.channel} pageToken={response.data.pageToken} />
			</div>
		)
	} catch (error: any) {
		redirect('/')
	}
}

export default Channel