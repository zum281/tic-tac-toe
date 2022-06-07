import React, { FunctionComponent as FC, ReactNode, useState } from "react";
import { GameContext, Player } from "./GameContext";

type Props = {
	children: ReactNode;
};
const GameProvider: FC<Props> = ({ children }) => {
	const [currentPlayer, setCurrentPlayer] = useState<Player>(
		Math.random() > 0.5 ? "X" : "O"
	);
	const [grid, setGrid] = useState<Player[] | ""[]>(Array(9).fill(""));
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
