interface Props {
	src: string;
	type?: string;
}

/**
 * Renders a video element with the given source.
 *
 * @param props
 * @returns
 */
export default function VideoPlayer({ src, type }: Props) {
	return (
		<div className="sm:my-6 my-4 sm:p-6 p-2 relative flex flex-col items-center justify-center overflow-hidden bg-blue-400 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md shadow-sm">
			<video className="w-full relative overflow-hidden rounded-md" controls>
				<source src={src} type={type || "video/mp4"} />
			</video>
		</div>
	);
}
