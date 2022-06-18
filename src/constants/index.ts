import { Grid } from '@/types/game'

export const INITIAL_GRID: Grid = Array(9)
	.fill('')
	.map((_, index) => {
		return { value: '', index }
	})

export const COLORS = {
	X: '#016fb9',
	O: '#ff9505',
}
