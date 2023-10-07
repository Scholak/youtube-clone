'use client'

import React from 'react'
import { BiSolidMicrophone } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'

const MidNav = () => {
  return (
		<div className='flex items-center gap-4 max-w-[732px]'>
			<div className='flex flex-1'>
				<input
					type='text'
					className='flex-1 w-96 px-4 text-white bg-mid-dark-gray rounded-s-[40px] focus:outline-none'
					placeholder='Ara'
				/>
				<button className='h-10 w-16 flex items-center justify-center bg-gray rounded-e-[40px]'>
					<AiOutlineSearch color='#F8F8F8' className='text-2xl' />
				</button>
			</div>
			<div className='w-10 h-10 flex items-center justify-center bg-gray rounded-full cursor-pointer'>
				<BiSolidMicrophone color='#F8F8F8' className='text-xl' />
			</div>
		</div>
	)
}

export default MidNav