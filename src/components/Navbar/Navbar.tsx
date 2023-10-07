import React from 'react'
import LeftNav from './LeftNav'
import MidNav from './MidNav'
import RightNav from './RightNav'

const Navbar = () => {
  return (
    <nav className='h-14 px-6 flex items-center justify-between bg-dark-gray'>
      <LeftNav />
      <MidNav />
      <RightNav />
    </nav>
  )
}

export default Navbar