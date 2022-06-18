import type { NextPage } from 'next'
import { Grid } from '@components/grid'
import { useGameContext } from '@context/GameContext'
import { Modal } from '@components/modal'
import { isGridFull } from '@utils/misc'

const Home: NextPage = () => {
	const { winner, grid } = useGameContext()

	return (
		<>
			<Grid />
			{winner && <Modal />}
			{!winner && isGridFull(grid) && <Modal withWinner={false} />}
		</>
	)
}

export default Home
