import type { NextPage } from 'next'
import { Grid } from '@components/grid'
import { useGameContext } from '@context/game-context/GameContext'
import { useHistoryContext } from '@context/history-context/HistoryContext'
import { useEffect } from 'react'

const Home: NextPage = () => {
	const { winner, tie } = useGameContext()
	const { result, addResult } = useHistoryContext()

	useEffect(() => {
		if (winner) addResult(winner)
		if (tie) addResult('tie')
	}, [winner, tie])

	return (
		<div>
			{result.map((item, index) => (
				<div key={index}>
					{index}: {item}
				</div>
			))}
			<Grid />
		</div>
	)
}

export default Home
