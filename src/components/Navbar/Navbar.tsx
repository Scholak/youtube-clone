import React from 'react'
import LeftNav from './LeftNav'
import MidNav from './MidNav'
import RightNav from './RightNav'

const Navbar = () => {
  return (
		<nav className='fixed top-0 w-full h-14 px-4 flex items-center bg-dark-gray z-10 sm:px-6 sm:justify-between'>
			<LeftNav />
			<MidNav />
			<RightNav />
		</nav>
	)
}

export default Navbar