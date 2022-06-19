import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/game-context/GameContext'
import { StyledHeader, Title } from './Layout.style'
import { Button } from '@styles/Button'
export const Header: FC = () => {
	const { currentPlayer, resetGame } = useGameContext()
	return (
		<StyledHeader currentPlayer={currentPlayer}>
			<Title>
				Tic<span>-</span>Tac<span>-</span>Toe
			</Title>
			<nav>
				<p>
					<span>{currentPlayer}</span>&apos;s turn
				</p>
				<Button onClick={resetGame} variant='small'>
					New Game
				</Button>
			</nav>
		</StyledHeader>
	)
}
