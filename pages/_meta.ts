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
				href: "https://docs.addonify.com/kb/quick-view/",
			},
			wishlist: {
				type: "page",
				title: "Wishlist",
				href: "https://docs.addonify.com/kb/wishlist/",
			},
			"floating-cart": {
				type: "page",
				title: "Floating Cart",
				href: "https://docs.addonify.com/kb/floating-cart/",
			},
			"compare-products": {
				type: "page",
				title: "Compare Products",
				href: "https://docs.addonify.com/kb/compare-products/",
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
