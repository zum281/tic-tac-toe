import React, { FunctionComponent as FC, ReactNode, useState } from "react";
import { GameContext } from "./GameContext";
import { Player, Grid } from "@/types/game";
import { INITIAL_GRID } from "../constants";

type Props = {
	children: ReactNode;
};

const GameProvider: FC<Props> = ({ children }) => {
	const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
	const [grid, setGrid] = useState<Grid>(INITIAL_GRID);
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
