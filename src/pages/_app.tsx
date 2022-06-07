import type { AppProps } from "next/app";
import GameProvider from "@context/GameProvider";
import GlobalStyles from "@styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<GameProvider>
			<GlobalStyles />
			<Component {...pageProps} />
		</GameProvider>
	);
}

export default MyApp;
