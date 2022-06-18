import styled from '@emotion/styled'
import { Player } from '@/types/game'

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
