import { Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import RootProvider from '@/providers/RootProvider'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={`${roboto.className} bg-dark-gray overflow-hidden`} suppressHydrationWarning={true}>
				<RootProvider>
					<Navbar />
					<main>{children}</main>
				</RootProvider>
			</body>
		</html>
	)
}
