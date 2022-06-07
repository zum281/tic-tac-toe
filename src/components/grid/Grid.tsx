import React, { FunctionComponent as FC } from "react";
import { Cell } from "@components/cell";
import { useGameContext } from "@context/GameContext";
export const Grid: FC = () => {
	const { grid } = useGameContext();

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3,100px)",
			}}>
			{grid.map((item, index) => (
				<Cell key={index} item={item} />
			))}
		</div>
	);
};
