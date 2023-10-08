'use client'

import { RootState } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Categories from '../Categories/CategoryContainer'

const HomeContent = () => {
  const sidebarToggle = useSelector((state: RootState) => state.sidebarToggle.toggle)

  return (
    <div className={`${sidebarToggle ? 'ml-[60px]' : 'ml-[240px]'} overflow-hidden`}>
      <Categories />
    </div>
  )
}

export default HomeContent