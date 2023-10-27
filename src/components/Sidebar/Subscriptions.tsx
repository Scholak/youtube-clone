import React from 'react'
import SideLink from './SideLink'
import { mySubscribers } from '@/data/mySubscribers'
import { ISubscriber } from '@/types/subscriptionTypes'

const Subscriptions = () => {
  return (
		<div className='px-3'>
			<p className='mb-2 font-medium'>Abonelikler</p>
			<ul>
				{mySubscribers.map((subscription: ISubscriber) => (
					<SideLink
						key={subscription.id}
						href={`/channel/${subscription.id}`}
						text={subscription.title}
						isActive={false}
						img={subscription.thumbnail}
					/>
				))}
			</ul>
		</div>
	)
}

export default Subscriptions