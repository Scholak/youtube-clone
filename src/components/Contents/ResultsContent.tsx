import React from 'react'
import Video from '../Search/Video'
import Channel from '../Search/Channel'
import Playlist from '../Search/Playlist'

interface ResultsContentProps {
	results: any
}

const ResultsContent = ({ results }: ResultsContentProps) => {
	return (
    <div className='text-white mt-20 ml-[120px] px-[calc(20%)]'>
      {results.map((data: any) => {
        switch (data.type) {
					case 'video':
						return <Video video={data} />
						break

					case 'channel':
						return <Channel channel={data} />
						break

					case 'video':
						return <Playlist playlist={data} />
						break
				}
      })}
    </div>
  )
}

export default ResultsContent