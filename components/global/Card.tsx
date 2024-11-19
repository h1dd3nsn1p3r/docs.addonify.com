interface Props {
	title: string;
	link: string;
	icon: React.ReactNode;
}

/**
 * Renders a card element with an icon, title and link.
 *
 * @param {Props}
 * @returns {JSX.Element}
 * @since 1.0.0
 */
export default function Card({ icon, title, link }: Props): JSX.Element {
	return (
		<>
			<a
				href={link}
				className="p-4 w-full flex items-center gap-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-gray-700 border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 ease"
			>
				<span className="inline-flex leading-3 relative opacity-50">
					{icon}
				</span>
				<span className="text-base font-normal">{title}</span>
			</a>
		</>
	);
}
