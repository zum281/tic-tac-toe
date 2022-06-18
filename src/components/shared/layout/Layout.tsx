import React, { FunctionComponent as FC } from 'react'
import { Header } from './Header'

type Props = {
	children: React.ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
