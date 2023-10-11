import { ResultsContent, Sidebar } from '@/components'
import axios from 'axios'
import React from 'react'

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
	const response = await axios.get('http://localhost:3000/api/search', { params: { q: searchParams.search_query } })

	return (
		<div className='flex'>
			<Sidebar />
			<ResultsContent results={response.data.search} />
		</div>
	)
}

export default Results