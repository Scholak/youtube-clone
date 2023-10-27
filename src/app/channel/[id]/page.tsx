import { ChannelContent, Sidebar } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

interface ChannelProps {
	params: {
		id: string
	}
}

export async function generateMetadata({ params }: ChannelProps) {
	const response = await axios.get(`${process.env.APP_URL}/api/channels/${params.id}`)

	return {
		title: response.data.channel.title,
	}
}

const Channel = async ({ params }: ChannelProps) => {
	try {
		const response = await axios.get(`${process.env.APP_URL}/api/channels/${params.id}`)

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