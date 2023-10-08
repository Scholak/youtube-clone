'use client'

import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { BiSolidMicrophone } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'

interface MobileSearchProps {
  setToggle: (toggle: boolean) => void
}

const MobileSearch = ({ setToggle }: MobileSearchProps) => {
	return (
		<div className='fixed top-0 right-0 left-0 h-14 flex items-center gap-3 z-10 bg-gray px-4'>
			<BsArrowLeft color='#F8F8F8' className='text-xl' onClick={() => setToggle(false)} />
			<div className='flex-1 h-8 flex items-center gap-2 px-2 rounded-[32px] bg-light-gray'>
				<input
					type='text'
					className='flex-1 bg-transparent text-white focus:outline-none'
					placeholder="YouTube'da ara"
				/>
				<AiOutlineSearch color='#F8F8F8' className='text-2xl' />
			</div>
			<div className='w-10 h-10 flex items-center justify-center bg-light-gray rounded-full cursor-pointer'>
				<BiSolidMicrophone color='#F8F8F8' className='text-xl' />
			</div>
		</div>
	)
}

export default MobileSearch