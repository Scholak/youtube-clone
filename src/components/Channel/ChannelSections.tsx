import React from 'react'

const ChannelSections = () => {
  return (
		<div className='mx-4 w-full border-b border-white overflow-hidden px-10 sm:px-20 md:px-40 lg:px-52 xl:px-60'>
			<ul className='flex items-center gap-2 capitalize overflow-hidden'>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer font-bold border-b-2 border-white'>ana sayfa</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>videolar</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>shorts</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>canlı</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>yayınlananlar</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>oynatma listeleri</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>topluluk</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>kanallar</li>
				<li className='pb-2 px-6 whitespace-nowrap cursor-pointer'>hakkkında</li>
			</ul>
		</div>
	)
}

export default ChannelSections