export default {
	index: {
		type: "page",
		title: "Addonify",
		display: "hidden",
		theme: {
			layout: "raw",
		},
	},
	kb: {
		type: "page",
		title: "Docs",
	},
	products: {
		type: "menu",
		title: "Products",
		items: {
			"quick-view": {
				type: "page",
				title: "Quick view",
				href: "/kb/quick-view/",
			},
			wishlist: {
				type: "page",
				title: "Wishlist",
				href: "/kb/wishlist/",
			},
			"floating-cart": {
				type: "page",
				title: "Floating Cart",
				href: "/kb/floating-cart/",
			},
			"compare-products": {
				type: "page",
				title: "Compare Products",
				href: "/kb/compare-products/",
			},
		},
	},
	general: {
		type: "menu",
		title: "General",
		items: {
			support: {
				type: "page",
				title: "Support",
				href: "/kb/support/",
			},
			license: {
				type: "page",
				title: "License",
				href: "/kb/license/",
			},
		},
	},
	store: {
		type: "page",
		title: "Store ↗",
		href: "https://addonify.com/",
		newWindow: true,
	},
};
