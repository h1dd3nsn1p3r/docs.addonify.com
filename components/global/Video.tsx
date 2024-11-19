interface Props {
	src: string;
}

/**
 * Renders a video element with the given source.
 *
 * @param props
 * @returns
 */
export default function VideoPlayer({ src }: Props) {
	return (
		<div className="sm:my-6 my-4 sm:p-6 p-2 relative flex flex-col items-center justify-center overflow-hidden bg-blue-400 rounded-2xl shadow-sm">
			<video className="w-full relative overflow-hidden rounded-xl" controls>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}
