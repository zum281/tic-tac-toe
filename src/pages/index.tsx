import type { NextPage } from 'next'
import { Grid } from '@components/grid'
import { History } from '@components/history'
import { useGameContext } from '@context/game-context/GameContext'
import { useHistoryContext } from '@context/history-context/HistoryContext'
import { useEffect } from 'react'

const Home: NextPage = () => {
	const { winner, tie } = useGameContext()
	const { addResult } = useHistoryContext()

	useEffect(() => {
		if (winner) addResult(winner)
		if (tie) addResult('tie')
	}, [winner, tie])

	return (
		<>
			<Grid />
			<History />
		</>
	)
}

export default Home
