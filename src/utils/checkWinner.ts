import { Grid, Player } from "@/types/game";

const checkWinner = (grid: Grid, currentPlayer: Player): Player | null => {
	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningCombinations.length; i++) {
		const [a, b, c] = winningCombinations[i];
		if (
			grid[a].value === currentPlayer &&
			grid[b].value === currentPlayer &&
			grid[c].value === currentPlayer
		) {
			return currentPlayer;
		}
	}
	return null;
};

export default checkWinner;
