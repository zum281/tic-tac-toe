import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/game-context/GameContext'
import { Header } from './Header'
import { Results } from '@components/results'

type Props = {
	children: React.ReactNode
}
export const Layout: FC<Props> = ({ children }) => {
	const { winner, tie } = useGameContext()
	return (
		<>
			{winner && <Results />}
			{tie && <Results withWinner={false} />}
			<Header />
			<main>{children}</main>
		</>
	)
}
