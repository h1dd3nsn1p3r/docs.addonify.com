import path from "node:path";
import { copyFile } from "node:fs/promises";

/**
 * Copy the _redirects file to the out dir.
 *
 * Cloudflare Pages uses the _redirects file to configure redirects.
 *
 * @ref https://developers.cloudflare.com/pages/configuration/redirects/
 *
 * @throw {Error} If the file cannot be copied.
 * @since 1.0.0
 */
const redirects = async () => {
	const src = path.join(process.cwd(), "_redirects");

	const out = path.join(process.cwd(), "out", "_redirects");

	await copyFile(src, out).catch((e: unknown) => {
		throw Error(e as unknown as string);
	});
};

redirects();
