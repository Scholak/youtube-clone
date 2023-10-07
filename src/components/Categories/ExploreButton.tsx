'use client'

import React from 'react'
import { FaRegCompass } from 'react-icons/fa'

const ExploreButton = () => {
  return (
		<div className='h-full flex gap-4'>
			<div className='flex items-center justify-center bg-gray rounded-sm py-1 px-3'>
				<FaRegCompass color='#F8F8F8' className='text-xl' />
			</div>
			<span className='h-full w-px py-1 bg-slate-300'></span>
		</div>
	)
}

export default ExploreButton