import type { AppProps } from 'next/app'
import GameProvider from '@context/game-context/GameProvider'
import { HistoryProvider } from '@context/history-context/HistoryProvider'
import { Layout } from '@components/shared/layout'
import GlobalStyles from '@styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<HistoryProvider>
			<GameProvider>
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</GameProvider>
		</HistoryProvider>
	)
}

export default MyApp
