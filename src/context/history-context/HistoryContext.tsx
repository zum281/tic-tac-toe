import { createContext, useContext } from 'react'
import { Player } from '@/types/game'

export type HistoryContextType = {
	result: (Player | 'tie')[]
	addResult: (result: Player | 'tie') => void
}

export const HistoryContext = createContext<HistoryContextType>({
	result: [],
	addResult: () => {},
})

export const useHistoryContext = () => useContext(HistoryContext)
