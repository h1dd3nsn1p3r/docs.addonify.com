import nextra from 'nextra'

/**
 * Nextra config.
 */
const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.jsx',
	latex: true,
	defaultShowCopyCode: true,
	search: {
		codeblocks: true
	},
});

/**
 * Next JS Config.
 *
 * @ref https://nextjs.org/docs/app/api-reference/next-config-js
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true // mandatory, otherwise won't export
	},
}

export default withNextra(nextConfig)