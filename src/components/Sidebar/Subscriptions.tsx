'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SideLink from './SideLink'

const Subscriptions = () => {
	const [subscriptions, setSubscriptions] = useState<any[]>([])

	useEffect(() => {
		axios.get(`http://localhost:3000/api/subscriptions`).then((res: any) => {
			setSubscriptions(res.data.subscriptions)
		})
	}, [])

  return (
		<div className='px-3'>
			<p className='mb-2 font-medium'>Abonelikler</p>
			<ul>
				{subscriptions?.map((subscription: any) => (
					<SideLink
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