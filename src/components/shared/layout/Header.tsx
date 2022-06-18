import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/GameContext'
import { StyledHeader } from './Layout.style'
export const Header: FC = () => {
	const { currentPlayer } = useGameContext()
	return (
		<StyledHeader>
			<h1>Tic Tac Toe</h1>
			<nav>
				<span>{currentPlayer}'s turn</span>
				<button>New Game</button>
			</nav>
		</StyledHeader>
	)
}
