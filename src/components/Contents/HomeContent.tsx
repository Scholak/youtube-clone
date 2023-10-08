'use client'

import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../Categories/CategoryContainer'
import Videos from '../Videos/VideoContainer'

const HomeContent = () => {
  const sidebarToggle = useSelector((state: RootState) => state.sidebarToggle.toggle)

  return (
		<div className={`${sidebarToggle ? 'xl:ml-[60px]' : 'xl:ml-[240px]'} relative ml-[60px] px-4 overflow-x-hidden`}>
      <Categories />
      <Videos />
		</div>
	)
}

export default HomeContent