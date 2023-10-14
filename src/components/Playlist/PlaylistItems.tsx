import { IPlaylistItem } from '@/types/playlistTypes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PlaylistItemsProps {
	items: IPlaylistItem[]
	channel: string
}

const PlaylistItems = ({ items, channel }: PlaylistItemsProps) => {
  return (
		<div className='mb-10 grid gap-4'>
			{items.map((playlistItem: any) => (
				<Link href={{pathname: '/watch', query: { v: playlistItem.videoId }}} key={playlistItem.id} className='flex gap-4 '>
					<Image
						src={playlistItem.thumbnail}
						alt='playlist item thumbnail'
						width={160}
						height={90}
						className='shrink-0 w-56 h-28 object-cover rounded-lg'
					/>
          <div>
            <p className='mb-1 font-mediumold'>{playlistItem.title}</p>
            <p className='flex items-center gap-1 text-[#aaa] text-sm'>
              {channel}
              <span className='w-0.5 h-0.5 rounded-full bg-white'></span>
              {playlistItem.publishedAt}
            </p>
          </div>
				</Link>
			))}
		</div>
	)
}

export default PlaylistItems