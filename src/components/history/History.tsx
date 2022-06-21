import React, { FunctionComponent as FC, useMemo } from 'react'
import { useHistoryContext } from '@context/history-context/HistoryContext'
import { getXWins, getOWins, getTies } from '@utils/misc'
import { Container } from './History.style'

export const History: FC = () => {
	const { result } = useHistoryContext()
	const xWins = useMemo(() => getXWins(result), [result])
	const oWins = useMemo(() => getOWins(result), [result])
	const ties = useMemo(() => getTies(result), [result])

	return (
		<Container>
			<p>X: {xWins}</p>
			<p>O: {oWins}</p>
			<p>Ties: {ties}</p>
		</Container>
	)
}
