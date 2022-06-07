import React, { FunctionComponent as FC } from "react";
import { Player, useGameContext } from "@context/GameContext";
import { StyledCell } from "./Cell.style";

type Props = {
	item: Player | "";
	index: number;
};
export const Cell: FC<Props> = ({ item, index }) => {
	const { grid, currentPlayer, setCurrentPlayer, setGrid } = useGameContext();
	const handleClick = () => {
		if (item !== "") return;
		const newGrid = [...grid];
		newGrid[index] = currentPlayer;
		setGrid([...newGrid] as Player[]);

		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	};

	return <StyledCell onClick={handleClick}>{item}</StyledCell>;
};
