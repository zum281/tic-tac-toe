import type { NextPage } from "next";
import { Grid } from "@components/grid";
import { useGameContext } from "@context/GameContext";
import { Modal } from "@components/modal";
import { isGridFull } from "@utils/misc";

const Home: NextPage = () => {
	const { currentPlayer, winner, grid } = useGameContext();

	return (
		<div>
			<h2>Current player: {currentPlayer}</h2>
			<Grid />
			{winner && <Modal />}
			{!winner && isGridFull(grid) && <div>Tie</div>}
		</div>
	);
};

export default Home;
