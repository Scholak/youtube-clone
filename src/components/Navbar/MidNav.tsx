'use client'

import React, { useState } from 'react'
import { BiSolidMicrophone } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import MobileSearch from './MobileSearch'
import { useRouter } from 'next/navigation'

const MidNav = () => {
	const router = useRouter()

	const [toggle, setToggle] = useState<boolean>(false)
	const [searchQuery, setSearchQuery] = useState<string>('')

	const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleSearch = () => {
		if (window.innerWidth < 640) {
			setToggle(!toggle)
		} else {
			router.push(`/results?search_query=${searchQuery}`)
		}
	}

  return (
		<>
			<div className='flex items-center gap-4 max-w-[732px]'>
				<div className='flex sm:flex-1'>
					<input
						type='text'
						className='flex-1 px-4 text-white bg-mid-dark-gray rounded-s-[40px] hidden focus:outline-none sm:block md:w-96'
						placeholder='Ara'
						onChange={handleChangeSearch}
					/>
					<button
						className='h-10 w-16 flex items-center justify-center rounded-e-[40px] sm:bg-gray'
						onClick={handleSearch}
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