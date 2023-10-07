import React from 'react'
import LeftNav from './LeftNav'
import MidNav from './MidNav'
import RightNav from './RightNav'

const Navbar = () => {
  return (
		<nav className='relative h-14 px-2 flex items-center  bg-dark-gray sm:px-6 sm:justify-between'>
			<LeftNav />
			<MidNav />
			<RightNav />
		</nav>
	)
}

export default Navbar