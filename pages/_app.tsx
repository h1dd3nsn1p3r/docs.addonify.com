import "../assets/app.css";

import { Inter, DM_Mono } from "next/font/google";

import MicrosoftClarity from "@components/metrics/MicrosoftClarity";

import type { ReactElement } from "react";

export const dm_mono = DM_Mono({
	display: "swap",
	weight: ["400"],
	subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }): ReactElement {
	return (
		<>
			<Component
				suppressHydrationWarning={true}
				className={inter.className}
				{...pageProps}
			/>

			{/** Microsoft Clarity tracking code: https://clarity.microsoft.com/ */}
			<MicrosoftClarity />
		</>
	);
}
