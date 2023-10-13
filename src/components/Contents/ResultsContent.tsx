'use client'

import React, { useState } from 'react'
import Video from '../Search/Video'
import Channel from '../Search/Channel'
import Playlist from '../Search/Playlist'
import axios from 'axios'
import { useSearchParams } from 'next/navigation'
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
		<div className='grid gap-4 text-white px-4 mt-20 md:ml-[60px] md:px-20 lg:px-40 lg:ml-[120px] xl:px-80'>
			{data.map((result: any, idx: number) => {
				switch (result.type) {
					case 'video':
						return <Video key={idx} video={result} />
						break

					case 'channel':
						return <Channel key={idx} channel={result} />
						break

					case 'playlist':
						return <Playlist key={idx} playlist={result} />
						break
				}
			})}
			<span className='text-transparent'>{data.length && !isFetching && <div ref={ref}></div>}</span>
		</div>
	)
}

export default ResultsContent