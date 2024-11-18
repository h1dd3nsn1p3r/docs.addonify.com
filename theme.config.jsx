import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

export default {
	head() {
		const config = useConfig();

		const { route } = useRouter();

		const isDefault = route === "/" || !config.title;

		const image =
			"https://nextra.site/" +
			(isDefault ? "og.jpeg" : `/og?title=${config.title}`);

		const description =
			config.frontMatter.description ||
			"Make beautiful websites with Next.js & MDX.";

		const title = config.title + (route === "/" ? "" : " - Nextra");

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
	logo: <span className="inline-flex text-lg font-semibold">Docs</span>,
	darkMode: true,
	project: {
		link: "https://github.com/shuding/nextra",
	},
	docsRepositoryBase: "https://github.com/shuding/nextra/tree/main/docs",
	editLink: {
		content: "Edit",
	},
	feedback: {
		content: "Question? Give us feedback →",
		labels: "Feedback",
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
		toggleButton: true,
	},
};
