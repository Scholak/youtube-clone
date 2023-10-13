import { Sidebar, HomeContent } from '@/components'
import React from 'react'

export const revalidate = 0

const Home = () => {
  return (
		<div className='flex'>
			<Sidebar />
			<HomeContent />
		</div>
	)
}

export default Home