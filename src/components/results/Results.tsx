import React, { FunctionComponent as FC } from 'react'
import { Modal } from '@components/shared/modal'
import { useGameContext } from '@context/GameContext'
import { Button } from '@styles/Button'
import { Text } from './Results.style'

type Props = {
	withWinner?: boolean
}
export const Results: FC<Props> = ({ withWinner = true }) => {
	const { winner, resetGame } = useGameContext()
	return (
		<Modal onClose={resetGame}>
			<Text winner={winner}>
				{withWinner ? (
					<>
						<p>The winner is</p>
						<h2>{winner}</h2>
					</>
				) : (
					<h2>Tie!</h2>
				)}
			</Text>
			<Button onClick={resetGame}>Play Again</Button>
		</Modal>
	)
}
