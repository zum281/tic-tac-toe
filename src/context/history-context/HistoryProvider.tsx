import React, { FunctionComponent as FC } from 'react'
import { Player } from '@/types/game'
import { HistoryContext, HistoryContextType } from './HistoryContext'

type Props = {
	children: React.ReactNode
}
export const HistoryProvider: FC<Props> = ({ children }) => {
	const [history, setHistory] = React.useState<HistoryContextType['result']>([])

	const addResult = (result: Player | 'tie') => {
		setHistory([...history, result] as HistoryContextType['result'])
	}

	return (
		<HistoryContext.Provider value={{ result: history, addResult }}>
			{children}
		</HistoryContext.Provider>
	)
}
