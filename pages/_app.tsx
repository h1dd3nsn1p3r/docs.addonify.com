import "../assets/app.css";

import { Inter, DM_Mono } from "next/font/google";

import type { AppProps } from "next/app";
import type { ReactElement } from "react";

export const dm_mono = DM_Mono({
	display: "swap",
	weight: ["400"],
	subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps): ReactElement {
	return (
		<Component
			suppressHydrationWarning={true}
			className={inter.className}
			{...pageProps}
		/>
	);
}
