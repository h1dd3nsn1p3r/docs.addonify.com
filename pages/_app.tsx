import { Inter } from "next/font/google";

import "../assets/app.css";

import type { AppProps } from "next/app";
import type { ReactElement } from "react";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps): ReactElement {
	return <Component className={inter.className} {...pageProps} />;
}
