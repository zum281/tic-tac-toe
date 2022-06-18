import React, { FunctionComponent as FC } from 'react'
import { useGameContext } from '@context/GameContext'
import { CloseIcon } from '@components/shared/close-icon'
import { Container, Overlay, Close, Text } from './Modal.style'
import { Button } from '@styles/Button'

type Props = {
	withWinner?: boolean
}

export const Modal: FC<Props> = ({ withWinner = true }) => {
	const { winner, resetGame } = useGameContext()

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
				<Button onClick={resetGame}>Play Again</Button>
			</Container>
		</>
	)
}
