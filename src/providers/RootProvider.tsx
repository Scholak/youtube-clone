'use client'

import React from 'react'
import ReduxProvider from './ReduxProvider'

interface RootProviderProps {
  children: React.ReactNode
}

// Windows 11 overflow issue solution
if (typeof screen !== 'undefined' && screen.width > 1200 && screen.width < 1800) {
	const main = document.querySelector('main')
	
	if (main) {
		// @ts-ignore
		main.style.zoom = 0.75
	}
}

const RootProvider = ({children}: RootProviderProps) => {
  return (
		<>
			<ReduxProvider>{children}</ReduxProvider>
		</>
	)
}

export default RootProvider