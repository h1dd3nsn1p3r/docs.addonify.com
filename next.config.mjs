import nextra from 'nextra'

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.jsx',
	latex: true,
	defaultShowCopyCode: true,
	search: {
		codeblocks: false
	},
})

export default withNextra()
