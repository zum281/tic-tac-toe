import type { NextPage } from "next";
import { Grid } from "@components/grid";
import { useGameContext } from "@context/GameContext";
import { Modal } from "../components/modal";

const Home: NextPage = () => {
	const { currentPlayer, winner } = useGameContext();

	return (
		<div>
			<h2>Current player: {currentPlayer}</h2>
			<Grid />
			{winner && <Modal />}
			<Modal />
		</div>
	);
};

export default Home;
