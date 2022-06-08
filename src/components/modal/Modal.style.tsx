import styled from "@emotion/styled";

export const Container = styled.div`
	--width: 400px;
	position: absolute;
	left: calc(50% - var(--width) / 2);
	bottom: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	width: var(--width);
	min-height: 35vh;
	border: 1px solid var(--clr-black);
	border-radius: 2px;
	background-color: #fff;
	z-index: 1;
`;

export const Text = styled.div`
	text-align: center;
	p {
		font-size: 1.1rem;
		font-weight: 500;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 700;
	}
`;

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: -1;
`;

export const Close = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 44px;
	height: 44px;
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	path {
		fill: var(--clr-black);
		stroke: var(--clr-black);
		transition: all 0.3s ease-in-out;
	}

	&:focus,
	&:hover {
		border-radius: 50%;
		background-color: var(--clr-black);
		color: var(--clr-white);

		path {
			fill: var(--clr-white);
			stroke: var(--clr-white);
		}
	}
`;

export const CloseIcon = () => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 44 44'
			aria-hidden='true'
			focusable='false'>
			<path d='M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z' />
			<path d='M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z' />
		</svg>
	);
};

export const PlayAgain = styled.button`
	border: 1px solid var(--clr-black);
	border-radius: 2px;
	outline: none;
	background-color: var(--clr-white);
	color: var(--clr-black);
	font-size: 1.2rem;
	font-weight: 500;
	padding: 10px 20px;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:focus,
	&:hover {
		background-color: var(--clr-black);
		color: var(--clr-white);
	}
`;
