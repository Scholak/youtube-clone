'use client'

import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaEllipsisV } from 'react-icons/fa'

const RightNav = () => {
  return (
		<div className='flex items-center gap-4'>
			<FaEllipsisV color='white' className='cursor-pointer hidden sm:block' />
			<div className='flex items-center gap-2 px-3 py-2 rounded-[40px] border border-gray cursor-pointer sm:hover:bg-[#1e3c57] transition duration-300'>
				<FaRegUserCircle color='#3092e7' className='text-xl' />
				<span className='text-blue text-sm font-medium hidden sm:block'>Oturum Aç</span>
			</div>
		</div>
	)
}

export default RightNav