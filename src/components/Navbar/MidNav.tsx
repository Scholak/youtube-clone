'use client'

import React, { useState } from 'react'
import { BiSolidMicrophone } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import MobileSearch from './MobileSearch'

const MidNav = () => {
	const [toggle, setToggle] = useState<boolean>(false)

  return (
		<>
			<div className='flex items-center gap-4 max-w-[732px]'>
				<div className='flex sm:flex-1'>
					<input
						type='text'
						className='flex-1 sm:w-96 px-4 text-white bg-mid-dark-gray rounded-s-[40px] hidden sm:block focus:outline-none'
						placeholder='Ara'
					/>
					<button
						className='h-10 w-16 flex items-center justify-center rounded-e-[40px] sm:bg-gray'
						onClick={() => setToggle(!toggle)}
					>
						<AiOutlineSearch color='#F8F8F8' className='text-2xl' />
					</button>
				</div>
				<div className='w-10 h-10 items-center justify-center bg-gray rounded-full cursor-pointer hidden sm:flex'>
					<BiSolidMicrophone color='#F8F8F8' className='text-xl' />
				</div>
			</div>
			{toggle && <MobileSearch setToggle={setToggle} />}
		</>
	)
}

export default MidNav