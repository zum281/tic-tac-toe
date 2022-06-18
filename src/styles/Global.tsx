import { Global, css } from '@emotion/react'
import { useGameContext } from '@context/GameContext'
import { useMemo } from 'react'
import { hexToRgb } from '@utils/misc'
import { COLORS } from '@constants'

const GlobalStyles = () => {
	const { currentPlayer, winner } = useGameContext()
	const colorPrimary = useMemo(() => {
		if (winner) return COLORS[winner]
		return COLORS[currentPlayer]
	}, [currentPlayer, winner])

	const rgbPrimary = useMemo(() => {
		return hexToRgb(colorPrimary)
	}, [colorPrimary])

	return (
		<Global
			styles={css`
				:root {
					--clr-black: #333;
					--clr-white: #eee;
					--clr-primary: ${colorPrimary};
					--rgb-primary: ${rgbPrimary?.r}, ${rgbPrimary?.g}, ${rgbPrimary?.b};
					--clr-player-X: ${COLORS.X};
					--clr-player-O: ${COLORS.O};
					--font-header: 'Lora', serif;
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
