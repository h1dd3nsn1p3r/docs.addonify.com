import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

import Logo from "@components/global/Logo";

/**
 * Next theme configuration.
 *
 * @ref https://nextra.site/docs/docs-theme/theme-configuration
 * @since 1.0.0
 */
export default {
	head() {
		const config = useConfig();

		const { route } = useRouter();

		const isDefault = route === "/" || !config.title;

		const image =
			"https://docs.addonify.com/" +
			(isDefault ? "og.jpeg" : `/og?title=${config.title}`);

		const description = config.frontMatter.description || "";

		const title = config.title + (route === "/" ? "" : " - Addonify Docs");

		return (
			<>
				<title>{title}</title>
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={image} />

				<meta name="msapplication-TileColor" content="#FFFFFF" />
				<meta httpEquiv="Content-Language" content="en" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site:domain" content="nextra.site" />
				<meta name="twitter:url" content="https://nextra.site" />
				<meta name="apple-mobile-web-app-title" content="Nextra" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="icon" href="/favicon.png" type="image/png" />
				<link
					rel="icon"
					href="/favicon-dark.svg"
					type="image/svg+xml"
					media="(prefers-color-scheme: dark)"
				/>
				<link
					rel="icon"
					href="/favicon-dark.png"
					type="image/png"
					media="(prefers-color-scheme: dark)"
				/>
			</>
		);
	},
	logo: <Logo />,
	darkMode: true,
	project: false,
	editLink: false,
	feedback: false,
	sidebar: {
		toggleButton: true,
		autoCollapse: true,
		defaultMenuCollapseLevel: 1,
	},
	docsRepositoryBase: false,
	footer: {
		content() {
			const date = new Date().getFullYear();

			return (
				<div className="w-full flex items-center justify-center gap-2 relative text-sm text-center">
					© {date}{" "}
					<a
						target="_blank"
						href="https://addonify.com"
						className="ms-2 inline-flex items-center text-blue-500 hover:text-blue-600"
					>
						Addonify Docs ↗
					</a>
				</div>
			);
		},
	},
};
