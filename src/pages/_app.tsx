import type { AppProps } from 'next/app'
import GameProvider from '@context/GameProvider'
import GlobalStyles from '@styles/Global'
import { Layout } from '@components/shared/layout'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GameProvider>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GameProvider>
	)
}

export default MyApp
