'use client'

import Image from 'next/image'
import React from 'react'
import { HiMenu } from 'react-icons/hi'
import youtubeLogo from '@/assets/youtube-dark-logo.png'
import Link from 'next/link'

const LeftNav = () => {
  return (
		<div className='flex items-center gap-4'>
			<HiMenu color='white' className='text-2xl cursor-pointer' />
			<Link href='/'>
				<Image src={youtubeLogo} alt='youtube logo' width={90} height={40} />
			</Link>
		</div>
	)
}

export default LeftNav