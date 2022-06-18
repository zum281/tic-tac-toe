import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/GameContext'
import { StyledHeader } from './Layout.style'
import { Button } from '@styles/Button'
export const Header: FC = () => {
	const { currentPlayer, resetGame } = useGameContext()
	return (
		<StyledHeader currentPlayer={currentPlayer}>
			<h1>Tic Tac Toe</h1>
			<nav>
				<p>
					<span>{currentPlayer}</span>'s turn
				</p>
				<Button onClick={resetGame} variant='small'>
					New Game
				</Button>
			</nav>
		</StyledHeader>
	)
}
