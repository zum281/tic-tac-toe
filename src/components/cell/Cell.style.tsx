import styled from "@emotion/styled";
import { Player } from "@/types/game";

export const StyledCell = styled.button<{ index: number; player: Player }>`
	aspect-ratio: 1;
	outline: none;
	background-color: transparent;
	font-size: 2.5rem;
	width: 100px;
	height: 100px;
	cursor: pointer;
	color: ${({ player }) => `var(--clr-player-${player})`};

	border: ${({ index }) =>
		index % 2 !== 0 || index === 4 ? "2px solid var(--clr-black)" : "none"};
	border-block: ${({ index }) => (index === 1 || index === 7) && "none"};
	border-inline: ${({ index }) => (index === 3 || index === 5) && "none"};
`;
