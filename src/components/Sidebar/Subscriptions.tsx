import React from 'react'
import SideLink from './SideLink'
import { mySubscribers } from '@/data/mySubscribers'

const Subscriptions = () => {
  return (
		<div className='px-3'>
			<p className='mb-2 font-medium'>Abonelikler</p>
			<ul>
				{mySubscribers.map((subscription: any) => (
					<SideLink
					key={subscription.id}
						href='/'
						text={subscription.snippet.title}
						isActive={false}
						img={subscription.snippet.thumbnails.default.url}
					/>
				))}
			</ul>
		</div>
	)
}

export default Subscriptions