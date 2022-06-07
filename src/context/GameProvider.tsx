import React, { FunctionComponent as FC, ReactNode, useState } from "react";
import { GameContext } from "./GameContext";
import { Player, Grid } from "@/types/game";

type Props = {
	children: ReactNode;
};

const initialGrid: Grid = Array(9)
	.fill("")
	.map((_, index) => {
		return { value: "", index };
	});

const GameProvider: FC<Props> = ({ children }) => {
	const [currentPlayer, setCurrentPlayer] = useState<Player>(
		Math.random() > 0.5 ? "X" : "O"
	);
	const [grid, setGrid] = useState<Grid>([...initialGrid]);
	const [winner, setWinner] = useState<Player | null>(null);

	const value = {
		currentPlayer,
		setCurrentPlayer,
		grid,
		setGrid,
		winner,
		setWinner,
	};

	return (
		<GameContext.Provider value={value}>{children}</GameContext.Provider>
	);
};

export default GameProvider;
