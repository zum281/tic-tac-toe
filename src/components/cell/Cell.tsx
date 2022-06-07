import React, { FunctionComponent as FC } from "react";
import { useGameContext } from "@context/GameContext";
import { StyledCell } from "./Cell.style";
import { Cell as CellType } from "@/types/game";
import checkWinner from "@utils/checkWinner";

type Props = {
	item: CellType;
};
export const Cell: FC<Props> = ({ item }) => {
	const {
		grid,
		currentPlayer,
		setCurrentPlayer,
		setGrid,
		winner,
		setWinner,
	} = useGameContext();
	const handleClick = () => {
		if (item.value !== "") return;
		if (winner) return;

		const newGrid = [...grid];
		newGrid[item.index].value = currentPlayer;
		setGrid([...newGrid]);

		const w = checkWinner(newGrid, currentPlayer);
		if (w) setWinner(currentPlayer);

		setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
	};

	return (
		<StyledCell onClick={handleClick} index={item.index}>
			{item.value}
		</StyledCell>
	);
};
