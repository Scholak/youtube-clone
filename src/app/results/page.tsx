import { ResultsContent, Sidebar } from '@/components'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'

export const revalidate = 0

interface SearchParams {
	searchParams: {
		search_query: string
	}
}

export async function generateMetadata({ searchParams }: SearchParams) {
  return {
		title: `${searchParams.search_query} - YouTube`,
	}
}

const Results = async ({ searchParams }: SearchParams) => {
	try {
		const response = await axios.get(`${process.env.APP_URL}/api/search`, { params: { q: searchParams.search_query } })

		return (
			<div className='flex'>
				<Sidebar />
				<ResultsContent results={response.data.search} nextPageToken={response.data.pageToken} />
			</div>
		)
	} catch (error: any) {
		redirect('/')
	}
}

export default Results