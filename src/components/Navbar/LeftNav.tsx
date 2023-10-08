'use client'

import Image from 'next/image'
import React from 'react'
import { HiMenu } from 'react-icons/hi'
import youtubeLogo from '@/assets/youtube-dark-logo.png'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggle } from '@/store/slices/sidebarToggleSlice'

const LeftNav = () => {
	const dispatch = useDispatch()

	const handleToggleSidebar = () => {
		dispatch(toggle())
	}

  return (
		<div className='flex items-center gap-4 mr-auto sm:mr-0'>
			<HiMenu color='white' className='text-2xl cursor-pointer hidden sm:block' onClick={handleToggleSidebar} />
			<Link href='/' className='select-none'>
				<Image src={youtubeLogo} alt='youtube logo' width={90} height={40} priority />
			</Link>
		</div>
	)
}

export default LeftNav