import { Info, Gem } from "lucide-react";

interface Props {
	title: string;
	link?: string | undefined;
	children: React.ReactNode;
}

/**
 * Renders a need pro alert message,
 *
 * @param param0
 * @returns
 */
export function GoPro({ title, link, children }: Props) {
	return (
		<div
			role="alert"
			className="mt-6 mb-6 bg-blue-50 border-2 border-blue-500 text-sm text-gray-500 rounded-lg p-5 dark:bg-blue-600/10 dark:border-blue-700"
		>
			<div className="flex relative">
				<Info size={32} className="inline-flex text-blue-600" />

				<div className="ms-3 relative">
					<h3 className="mb-2 text-base text-blue-600 font-semibold dark:font-medium dark:text-white">
						{title}
					</h3>

					{children}

					<div className="mt-3 block relative">
						<a
							target="_blank"
							href={link ? link : "https://addonify.com/"}
							className="py-3 px-6 inline-flex items-center gap-2 text-base font-normal text-blue-600 border-2 border-blue-600 hover:text-purple-600 hover:border-purple-600 rounded-full transition-colors duration-300 ease-in"
						>
							Get premium
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
