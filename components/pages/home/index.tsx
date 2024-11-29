"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Redirect the homepage component.
 *
 * @returns {JSX.Element} The homepage component.
 * @since 1.0.0
 */
export const Homepage = (): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		/**
		 * Redirect to the "/kb" page.
		 */
		router.push("/kb");
	}, []);
	return (
		<section className="min-h-screen flex flex-col items-center justify-center">
			<Loading />
		</section>
	);
};

/**
 * Redirect loading component.
 *
 * @returns {JSX.Element} The loading component.
 * @since 1.0.0
 */
const Loading = (): JSX.Element => {
	return (
		<div
			role="status"
			aria-label="loading"
			className="animate-spin inline-block size-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
};
