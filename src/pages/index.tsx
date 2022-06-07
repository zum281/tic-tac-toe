import type { NextPage } from "next";
import { Grid } from "@components/grid";
import { useGameContext } from "@context/GameContext";
import { Grid as GridType } from "@/types/game";

const Home: NextPage = () => {
	const { currentPlayer, winner, setWinner, setGrid, setCurrentPlayer } =
		useGameContext();

	const resetGame = () => {
		setWinner(null);
		const newGrid: GridType = Array(9)
			.fill("")
			.map((_, index) => {
				return { value: "", index };
			});
		setGrid([...newGrid]);
		setCurrentPlayer("X");
	};

	return (
		<div>
			<h2>Current player: {currentPlayer}</h2>
			<Grid />
			{winner && <h2>Winner: {winner}</h2>}
			{winner && <button onClick={resetGame}>Play again</button>}
		</div>
	);
};

export default Home;
