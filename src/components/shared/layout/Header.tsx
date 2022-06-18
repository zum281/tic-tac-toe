import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/GameContext'
import { StyledHeader } from './Layout.style'
import { Button } from '@styles/Button'
export const Header: FC = () => {
	const { currentPlayer, resetGame } = useGameContext()
	return (
		<StyledHeader>
			<h1>Tic Tac Toe</h1>
			<nav>
				<span>{currentPlayer}'s turn</span>
				<Button onClick={resetGame}>New Game</Button>
			</nav>
		</StyledHeader>
	)
}
