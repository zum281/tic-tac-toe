import React, { FunctionComponent as FC, useState } from "react";
import { useGameContext } from "@context/GameContext";
import { Grid as GridType } from "@/types/game";
import {
	Container,
	Overlay,
	Close,
	CloseIcon,
	PlayAgain,
	Text,
} from "./Modal.style";
export const Modal: FC = () => {
	const { winner, setWinner, setGrid, setCurrentPlayer } = useGameContext();
	const [isOpen, setIsOpen] = useState(winner ? true : false);

	const resetGame = () => {
		setWinner(null);
		const newGrid: GridType = Array(9)
			.fill("")
			.map((_, index) => {
				return { value: "", index };
			});
		setGrid([...newGrid]);
		setCurrentPlayer("X");
		setIsOpen(false);
	};

	const closeModal = () => setIsOpen(false);

	return (
		<>
			{isOpen && (
				<>
					<Overlay onClick={closeModal} />
					<Container>
						<Close onClick={closeModal} aria-label='Close'>
							<CloseIcon />
						</Close>
						<Text>
							<p>The winner is</p>
							<h2>{winner}</h2>
						</Text>
						<PlayAgain onClick={resetGame}>Play again</PlayAgain>
					</Container>
				</>
			)}
		</>
	);
};
