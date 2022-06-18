import React, { FunctionComponent as FC, useState } from 'react'
import { useGameContext } from '@context/GameContext'
import { Grid as GridType } from '@/types/game'
import { CloseIcon } from '@components/shared/CloseIcon'
import { Container, Overlay, Close, PlayAgain, Text } from './Modal.style'

type Props = {
	withWinner?: boolean
}

export const Modal: FC<Props> = ({ withWinner = true }) => {
	const { winner, setWinner, setGrid, setCurrentPlayer } = useGameContext()

	const resetGame = () => {
		setWinner(null)
		const newGrid: GridType = Array(9)
			.fill('')
			.map((_, index) => {
				return { value: '', index }
			})
		setGrid([...newGrid])
		setCurrentPlayer('X')
	}

	return (
		<>
			<Overlay onClick={resetGame} />
			<Container>
				<Close onClick={resetGame} aria-label='Close'>
					<CloseIcon />
				</Close>
				{withWinner && (
					<Text winner={winner}>
						<p>The winner is</p>
						<h2>{winner}</h2>
					</Text>
				)}
				{!withWinner && (
					<Text winner={winner}>
						<h2>Tie!</h2>
					</Text>
				)}
				<PlayAgain onClick={resetGame}>Play again</PlayAgain>
			</Container>
		</>
	)
}
