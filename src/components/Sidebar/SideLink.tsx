import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SideLinkProps {
	text: string
	Icon?: any
	svg?: any
	img?: string
	href: string
	isActive: boolean
}

const SideLink = ({ text, Icon, svg, img, href, isActive }: SideLinkProps) => {
	return (
		<li>
			<Link
				href={{ pathname: href }}
				className={`${
					isActive && 'bg-light-gray font-medium'
				} flex items-center gap-4 py-2 px-4 rounded-lg text-white whitespace-nowrap text-ellipsis overflow-hidden hover:bg-light-gray`}
			>
				{Icon && <Icon />}
				{svg && <span className='w-6'>{svg}</span>}
				{img && <Image src={img} alt='icon' width={30} height={30} className='rounded-full' />}
				{text}
			</Link>
		</li>
	)
}

export default SideLink