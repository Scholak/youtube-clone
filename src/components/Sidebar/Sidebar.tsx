'use client'

import React from 'react'
import UpperLinks from './UpperLinks'
import You from './You'
import Subscriptions from './Subscriptions'
import Explore from './Explore'
import More from './More'
import LowerLinks from './LowerLinks'
import Terms from './Terms'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import ClosedSidebar from './ClosedSidebar'

const Sidebar = () => {
	const toggleSidebar = useSelector((state: RootState) => state.sidebarToggle.toggle)

  return (
		<>
			<ClosedSidebar className={toggleSidebar ? 'xl:fixed' : 'xl:hidden'} />
			<nav
				className={`fixed top-14 bottom-0 left-0 w-60 text-white overflow-y-scroll transition duration-300 overflow-x-hidden bg-dark-gray z-50 xl:translate-x-0 ${
					toggleSidebar ? 'xl:hidden translate-x-0' : 'xl:fixed -translate-x-60'
				}`}
				id='sidebar'
			>
				<div className='w-60 p-2'>
					<UpperLinks />
					<div className='w-full h-px bg-light-gray my-3'></div>
					<You />
					<div className='w-full h-px bg-light-gray my-3'></div>
					<Subscriptions />
					<div className='w-full h-px bg-light-gray my-3'></div>
					<Explore />
					<div className='w-full h-px bg-light-gray my-3'></div>
					<More />
					<div className='w-full h-px bg-light-gray my-3'></div>
					<LowerLinks />
					<div className='w-full h-px bg-light-gray my-3'></div>
					<Terms />
				</div>
			</nav>
		</>
	)
}

export default Sidebar