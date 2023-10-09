import Image from 'next/image'
import React from 'react'

interface VideoDetailProps {
	data: any
}

const VideoDetail = ({ data }: VideoDetailProps) => {
	return (
		<div>
			<div dangerouslySetInnerHTML={{ __html: data.video.detail.player }} className='rounded-xl overflow-hidden'></div>
			<p className='my-2 text-2xl font-semibold'>{data.video.detail.title}</p>
			<div className='flex items-center justify-between'>
				<div className='h-10 flex items-start gap-3'>
					<Image
						src={data.video.channel.thumbnail}
						alt='channel thumbnail'
						width={40}
						height={40}
						className='h-full rounded-full'
					/>
					<div className='flex flex-col justify-between'>
						<p className='font-medium'>{data.video.channel.title}</p>
						<p className='text-sm text-[#aaa]'>{data.video.channel.subscribers} abone</p>
					</div>
					<button className='h-full ml-8 flex items-center px-4 rounded-3xl bg-white text-dark-gray font-medium'>
						Abone ol
					</button>
				</div>
				<div className='h-10 flex gap-2 text-sm'>
					<div className='flex items-center gap-3 h-10 shrink-0 px-4 rounded-full bg-light-gray text-white'>
						<button className='flex items-center gap-1'>
							<svg
								enable-background='new 0 0 24 24'
								height='24'
								viewBox='0 0 24 24'
								width='24'
								focusable='false'
								fill='#fff'
								className='-translate-y-0.5'
							>
								<path d='M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z'></path>
							</svg>
							<span>{data.video.detail.like}</span>
						</button>
						<span className='w-px h-6 bg-slate-300'></span>
						<button>
							<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
								<path d='M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z'></path>
							</svg>
						</button>
					</div>
					<button className='flex items-center gap-1 h-10 shrink-0 px-4 rounded-full bg-light-gray text-white'>
						<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
							<path d='M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z'></path>
						</svg>
						<span>Paylaş</span>
					</button>
					<button className='flex items-center gap-1 h-10 shrink-0 px-4 rounded-full bg-light-gray text-white'>
						<svg height='24' viewBox='0 0 24 24' width='24' focusable='false' fill='#fff'>
							<path d='M22 13h-4v4h-2v-4h-4v-2h4V7h2v4h4v2zm-8-6H2v1h12V7zM2 12h8v-1H2v1zm0 4h8v-1H2v1z'></path>
						</svg>
						<span>Kaydet</span>
					</button>
					<button className='flex items-center justify-center h-10 w-10 shrink-0 rounded-full bg-light-gray text-white'>
						<svg
							height='24'
							viewBox='0 0 24 24'
							width='24'
							focusable='false'
							fill='#fff'
						>
							<path d='M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z'></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail