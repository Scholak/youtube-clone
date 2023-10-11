import React from 'react'
import Video from '../Search/Video'
import Channel from '../Search/Channel'
import Playlist from '../Search/Playlist'

interface ResultsContentProps {
	results: any
}

const ResultsContent = ({ results }: ResultsContentProps) => {
	return (
    <div className='grid gap-4 text-white mt-20 ml-[120px] px-[calc(20%)]'>
      {results.map((data: any) => {
        switch (data.type) {
					case 'video':
						return <Video key={data.id} video={data} />
						break

					case 'channel':
						return <Channel key={data.id} channel={data} />
						break

					case 'video':
						return <Playlist key={data.id}  playlist={data} />
						break
				}
      })}
    </div>
  )
}

export default ResultsContent