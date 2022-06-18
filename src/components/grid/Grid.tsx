import React, { FunctionComponent as FC } from 'react'
import { Cell } from '@components/cell'
import { useGameContext } from '@context/GameContext'
import { Container } from './Grid.style'
export const Grid: FC = () => {
	const { grid } = useGameContext()

	return (
		<Container>
			{grid.map((item, index) => (
				<Cell key={index} item={item} />
			))}
		</Container>
	)
}
