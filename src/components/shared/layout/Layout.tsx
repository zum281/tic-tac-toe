import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/GameContext'
import { Header } from './Header'
import { InitGame } from '@components/init-game'
import { Results } from '@components/results'

type Props = {
	children: React.ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
	const { winner, tie } = useGameContext()
	return (
		<>
			<InitGame />
			{winner && <Results />}
			{tie && <Results withWinner={false} />}
			<Header />
			<main>{children}</main>
		</>
	)
}
