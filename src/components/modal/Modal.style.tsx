import styled from '@emotion/styled'
import { Player } from '@/types/game'

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
`

export const Text = styled.div<{ winner: Player | null }>`
	text-align: center;
	p {
		font-size: 1.1rem;
		font-weight: 500;
	}

	h2 {
		font-size: 3.5rem;
		font-weight: 700;
		color: ${({ winner }) =>
			winner ? `var(--clr-player-${winner})` : 'unset'};
	}
`

export const Overlay = styled.div`
	position: absolute;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: -1;
`

export const Close = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 40px;
	height: 40px;
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
		background-color: rgba(var(--rgb-primary), 0.7);

		path {
			fill: var(--clr-white);
			stroke: var(--clr-white);
		}
	}
`
