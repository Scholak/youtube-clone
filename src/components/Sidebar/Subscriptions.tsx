import axios from 'axios'
import React from 'react'
import SideLink from './SideLink'

const Subscriptions = async () => {
	const response = await axios.get(`${process.env.APP_URL}/api/subscriptions`)
	const subscriptions = response.data.subscriptions

  return (
		<div className='px-3'>
			<p className='mb-2 font-medium'>Abonelikler</p>
			<ul>
				{subscriptions.map((subscription: any) => (
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