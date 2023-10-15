import { ChannelContent, Sidebar } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

interface ChannelProps {
	searchParams: {
		id: string
	}
}

export async function generateMetadata({ searchParams }: ChannelProps) {
	const response = await axios.get(`${process.env.APP_URL}/api/channels/${searchParams.id}`)

	return {
		title: response.data.channel.title
	}
}

const Channel = async ({ searchParams }: ChannelProps) => {
	try {
		const response = await axios.get(`${process.env.APP_URL}/api/channels/${searchParams.id}`)

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