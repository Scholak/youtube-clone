import { Categories, Sidebar } from '@/components'
import React from 'react'

const Home = () => {
  return (
		<div className='w-screen flex overflow-hidden'>
			<Sidebar />
			<div className='pl-4 ml-[240px] w-[calc(100vw-240px)]'>
				<Categories />
			</div>
		</div>
	)
}

export default Home