import { Grid, Player } from '@/types/game'

export const isGridFull = (grid: Grid) => {
	let res = true
	grid.forEach((cell) => {
		if (cell.value === '') res = false
	})

	return res
}

export const hexToRgb = (hex: string) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null
}

const getOccurrence = (array: (Player | 'tie')[], value: string) => {
	var count = 0
	array.forEach((v) => v === value && count++)
	return count
}

export const getXWins = (result: (Player | 'tie')[]) =>
	getOccurrence(result, 'X')
export const getOWins = (result: (Player | 'tie')[]) =>
	getOccurrence(result, 'O')
export const getTies = (result: (Player | 'tie')[]) =>
	getOccurrence(result, 'tie')
