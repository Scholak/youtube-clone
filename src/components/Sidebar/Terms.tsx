import React from 'react'

const Terms = () => {
  return (
		<div className='font-medium text-xs text-[#aaa] pl-7 pr-4'>
			<div className='mb-4 flex flex-wrap gap-2'>
				<span className='cursor-pointer'>Hakkında</span>
				<span className='cursor-pointer'>Basın</span>
				<span className='cursor-pointer'>Telif hakkı</span>
				<span className='cursor-pointer'>Bize ulaşın</span>
				<span className='cursor-pointer'>İçerik Üreticiler</span>
				<span className='cursor-pointer'>Reklam verme</span>
				<span className='cursor-pointer'>Geliştiriciler</span>
			</div>
			<div className='mb-6 flex flex-wrap gap-2'>
				<span>Şartlar</span>
				<span>Gizlilik</span>
				<span>Politika ve Güvenlik</span>
				<span>YouTube Nasıl Çalışıyor?</span>
				<span>Yeni özellikleri deneyin</span>
			</div>
			<p className='font-light'>© {new Date().getFullYear()} Google LLC</p>
		</div>
	)
}

export default Terms