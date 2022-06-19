import React, {
	FunctionComponent as FC,
	ReactNode,
	useMemo,
	useState,
} from 'react'
import { GameContext } from './GameContext'
import { Player, Grid } from '@/types/game'
import { INITIAL_GRID } from '@constants'
import { isGridFull } from '@utils/misc'

type Props = {
	children: ReactNode
}

const GameProvider: FC<Props> = ({ children }) => {
	const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
	const [grid, setGrid] = useState<Grid>(INITIAL_GRID)
	const [winner, setWinner] = useState<Player | null>(null)
	const [ai, setAi] = useState<boolean>(false)

	const resetGame = () => {
		setWinner(null)
		const newGrid: Grid = Array(9)
			.fill('')
			.map((_, index) => {
				return { value: '', index }
			})
		setGrid([...newGrid])
		setCurrentPlayer('X')
	}

	const tie = useMemo(() => !winner && isGridFull(grid), [currentPlayer])

	const value = {
		currentPlayer,
		setCurrentPlayer,
		grid,
		setGrid,
		winner,
		setWinner,
		resetGame,
		tie,
		ai,
		setAi,
	}

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export default GameProvider
