'use client'

import React from 'react'
import ReduxProvider from './ReduxProvider'

interface RootProviderProps {
  children: React.ReactNode
}

const RootProvider = ({children}: RootProviderProps) => {
  return (
		<>
			<ReduxProvider>{children}</ReduxProvider>
		</>
	)
}

export default RootProvider