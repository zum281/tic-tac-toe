import styled from '@emotion/styled'

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-block: 20px;
	border-bottom: 2px solid var(--clr-primary);

	h1 {
		font-family: var(--font-header);
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1em;
	}
`
