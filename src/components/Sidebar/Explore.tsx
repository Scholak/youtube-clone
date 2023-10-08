import React from 'react'
import SideLink from './SideLink'

const Explore = () => {
  return (
		<div className='px-3'>
			<p className='mb-2 font-medium'>Keşfet</p>
			<ul>
				<SideLink
					href='/'
					text='Trendler'
					isActive={false}
					svg={
						<svg
							enableBackground='new 0 0 24 24'
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<path d='M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z'></path>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Müzik'
					isActive={false}
					svg={
						<svg
							enableBackground='new 0 0 24 24'
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<path d='M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z'></path>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Canlı'
					isActive={false}
					svg={
						<svg
							enableBackground='new 0 0 24 24'
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<g>
								<path d='M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z'></path>
							</g>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Oyun'
					isActive={false}
					svg={
						<svg
							enableBackground='new 0 0 24 24'
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<path d='M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z'></path>
						</svg>
					}
				/>
				<SideLink
					href='/'
					text='Spor'
					isActive={false}
					svg={
						<svg
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
              fill='#fff'
						>
							<path d='M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z'></path>
						</svg>
					}
				/>
			</ul>
		</div>
	)
}

export default Explore