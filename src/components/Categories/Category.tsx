'use client'

import { ICategory } from '@/types/categoryTypes'
import React from 'react'

interface CategoryProps {
  category: ICategory
}

const Category = ({category}: CategoryProps) => {
  return <div className='text-white bg-gray rounded-md py-1 px-4 capitalize whitespace-nowrap cursor-pointer'>{category.snippet.title}</div>
}

export default Category