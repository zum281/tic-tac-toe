import styled from "@emotion/styled";

export const StyledCell = styled.button<{ index: number }>`
	aspect-ratio: 1;
	outline: none;
	background-color: transparent;
	font-size: 2.5rem;
	width: 100px;
	height: 100px;
	cursor: pointer;

	border: ${({ index }) =>
		index % 2 !== 0 || index === 4 ? "2px solid var(--clr-black)" : "none"};
	border-block: ${({ index }) => (index === 1 || index === 7) && "none"};
	border-inline: ${({ index }) => (index === 3 || index === 5) && "none"};
`;
