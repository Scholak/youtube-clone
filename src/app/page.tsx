import { Sidebar, HomeContent } from '@/components'
import React from 'react'

const Home = () => {
  return (
		<div className='flex'>
			<Sidebar />
			<HomeContent />
		</div>
	)
}

export default Home