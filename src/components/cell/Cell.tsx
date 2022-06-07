import React, { FunctionComponent as FC } from "react";
import { useGameContext } from "@context/GameContext";
import { StyledCell } from "./Cell.style";
import { Cell as CellType } from "@/types/game";

type Props = {
	item: CellType;
};
export const Cell: FC<Props> = ({ item }) => {
	const { grid, currentPlayer, setCurrentPlayer, setGrid } = useGameContext();
	const handleClick = () => {
		if (item.value !== "") return;
		const index = item.index;
		const newGrid = [...grid];
		newGrid[index].value = currentPlayer;
		setGrid([...newGrid]);

		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	};

	return <StyledCell onClick={handleClick}>{item.value}</StyledCell>;
};
