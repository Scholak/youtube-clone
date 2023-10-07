import React from 'react'
import Category from '@/components/Categories/Category'
import { ICategory } from '@/types/categoryTypes'
import axios from 'axios'
import ExploreButton from './ExploreButton'

const CategoryContainer = async () => {
  const response = await axios.get(`${process.env.APP_URL}/api/categories`)
  const categories = response.data.categories

  return (
		<div className='flex gap-4 overflow-x-auto p-2 sm:px-none'>
      <div className='sm:hidden'>
        <ExploreButton />
      </div>
			{categories.map((category: ICategory) => (
				<Category category={category} />
			))}
		</div>
	)
}

export default CategoryContainer