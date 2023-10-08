'use client'

import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../Categories/CategoryContainer'

const HomeContent = () => {
  const sidebarToggle = useSelector((state: RootState) => state.sidebarToggle.toggle)

  return (
    <div className={`${sidebarToggle ? 'xl:ml-[60px]' : 'xl:ml-[240px]'} relative ml-[60px] overflow-hidden`}>
      <div
        className={`${sidebarToggle ? 'absolute' : 'hidden'} inset-0 z-10 ml-[60px] bg-black opacity-30 xl:hidden`}
      ></div>
      <Categories />
    </div>
	)
}

export default HomeContent