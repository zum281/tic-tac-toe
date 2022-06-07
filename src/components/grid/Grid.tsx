import React, { FunctionComponent as FC, useEffect } from "react";
import { Cell } from "@components/cell";
import { useGameContext } from "@context/GameContext";
import { Container } from "./Grid.style";
export const Grid: FC = () => {
	const { grid } = useGameContext();

	useEffect(() => {
		console.log("grid changed");
		console.log(grid);
	}, [grid]);

	return (
		<Container>
			{grid.map((item, index) => (
				<Cell key={index} item={item} />
			))}
		</Container>
	);
};
