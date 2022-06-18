import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/GameContext'
import { Modal } from '@components/modal'
import { Header } from './Header'

type Props = {
	children: React.ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
	const { winner, tie } = useGameContext()
	return (
		<>
			{winner && <Modal />}
			{tie && <Modal withWinner={false} />}
			<Header />
			<main>{children}</main>
		</>
	)
}
