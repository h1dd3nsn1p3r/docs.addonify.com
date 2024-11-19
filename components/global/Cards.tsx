interface Props {
	children: React.ReactNode;
}

export default function Cards({ children }: Props): JSX.Element {
	return (
		<div className="p-0 sm:my-8 my-6 w-full grid sm:grid-cols-3 grid-cols-2 items-center gap-6">
			{children}
		</div>
	);
}
