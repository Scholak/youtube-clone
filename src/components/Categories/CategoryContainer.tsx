'use client'

import React, { useEffect, useState } from 'react'
import Category from '@/components/Categories/Category'
import { ICategory } from '@/types/categoryTypes'
import axios from 'axios'
import ExploreButton from './ExploreButton'

const CategoryContainer = () => {
  const [categories, setCategories] = useState<ICategory[]>([])

	useEffect(() => {
		axios.get(`http://localhost:3000/api/categories`).then((res: any) => {
			setCategories(res.data.categories)
		})
	}, [])

  return (
		<div className='w-full flex gap-4 overflow-x-auto p-2 sm:px-none'>
      <div className='sm:hidden'>
        <ExploreButton />
      </div>
			{categories?.map((category: ICategory) => (
				<Category key={category.id} category={category} />
			))}
		</div>
	)
}

export default CategoryContainer