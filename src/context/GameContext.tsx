import { createContext, useContext } from 'react'
import { Player, Grid } from '@/types/game'

export type GameContextType = {
	currentPlayer: Player
	setCurrentPlayer: (player: Player) => void
	grid: Grid
	setGrid: (grid: Grid) => void
	winner: Player | null
	setWinner: (winner: Player | null) => void
	resetGame: () => void
	tie: boolean
}

export const GameContext = createContext<GameContextType>({
	currentPlayer: 'X',
	setCurrentPlayer: () => {},
	grid: Array(9).fill(''),
	setGrid: () => {},
	winner: null,
	setWinner: () => {},
	resetGame: () => {},
	tie: false,
})

export const useGameContext = () => useContext(GameContext)
