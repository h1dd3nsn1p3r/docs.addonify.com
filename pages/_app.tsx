import { Inter, DM_Mono } from "next/font/google";

import "../assets/app.css";

import type { AppProps } from "next/app";
import type { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps): ReactElement {
	return (
		<Component
			suppressHydrationWarning={true}
			className={inter.className}
			{...pageProps}
		/>
	);
}
