'use client'

import React, { useState } from 'react'
import Video from '../Search/Video'
import Channel from '../Search/Channel'
import Playlist from '../Search/Playlist'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useInView } from 'react-intersection-observer'

interface ResultsContentProps {
	results: any
	nextPageToken: string
}

const ResultsContent = ({ results, nextPageToken }: ResultsContentProps) => {
	const searchParams = useSearchParams()
	const search_query = searchParams.get('search_query')

	const { ref, inView } = useInView({
		threshold: 0,
	})

	const [data, setData] = useState<any>(results)
	const [isFetching, setIsFetching] = useState<boolean>(false)
	const [pageToken, setPageToken] = useState<string>(nextPageToken)

	const fetchMore = () => {
    axios.get(`http://localhost:3000/api/search`, {params: { pageToken, q: search_query }}).then((response: any) => {
      setData((prev: any[]) => [...prev, ...response.data.search])
      setPageToken(response.data.pageToken)
      setIsFetching(false)
    }).catch((err: any) => {
      console.log(err.response.data.message)
    })
  }

	if (inView && !isFetching) {
		setIsFetching(true)
		fetchMore()
	}
	
	return (
		<div className='grid gap-4 text-white mt-20 ml-[120px] px-[calc(20%)]'>
			{data.map((result: any) => {
				switch (result.type) {
					case 'video':
						return <Video key={result.id} video={result} />
						break

					case 'channel':
						return <Channel key={result.id} channel={result} />
						break

					case 'playlist':
						return <Playlist key={result.id} playlist={result} />
						break
				}
			})}
			<span className='text-transparent'>{data.length && !isFetching && <div ref={ref}></div>}</span>
		</div>
	)
}

export default ResultsContent