import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				:root {
					--clr-black: #333;
					--clr-white: #eee;
					--clr-primary: #db5461;
					--rgb-primary: 219, 84, 97;
					--clr-player-X: #016fb9;
					--clr-player-O: #ff9505;
					--font-body: 'Lato', sans-serif;
				}
				*,
				*::before,
				*::after {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
				}

				html,
				body {
					font-family: var(--font-body);
					font-size: 1rem;
					font-weight: 400;
					font-style: normal;
				}

				body {
					background-color: var(--clr-white);
					color: var(--clr-black);
				}

				header,
				main {
					max-width: 800px;
					margin: 0 auto;
				}
			`}
		/>
	)
}

export default GlobalStyles
