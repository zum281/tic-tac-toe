import styled from '@emotion/styled'
import { Player } from '@/types/game'

type Props = {
	currentPlayer: Player
}

export const StyledHeader = styled.header<Props>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 20px;
	border-bottom: 2px solid var(--clr-primary);

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2.5em;
	}

	p {
		letter-spacing: 0.2ch;
		font-size: 1.1rem;
	}

	span {
		color: ${({ currentPlayer }) => `var(--clr-player-${currentPlayer})`};
		font-size: 1.75rem;
		font-weight: 700;
	}
`

export const Title = styled.h1`
	font-family: var(--font-header);
	span {
		color: var(--clr-primary);
	}
`
