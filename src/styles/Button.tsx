import styled from '@emotion/styled'

type Props = {
	variant?: 'default' | 'small'
}

export const Button = styled.button<Props>`
	border: 1px solid var(--clr-black);
	border-radius: 2px;
	outline: none;
	background-color: var(--clr-white);
	color: var(--clr-black);
	font-size: ${({ variant }) => (variant === 'small' ? '1.1rem' : '1.2rem')};
	font-weight: 500;
	padding: ${({ variant }) => (variant === 'small' ? '5px 10px' : '10px 20px')};
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:focus,
	&:hover {
		border: 1px solid var(--clr-primary);
		background-color: var(--clr-primary);
		color: var(--clr-white);
	}
`
