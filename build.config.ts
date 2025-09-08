import path from "node:path";
import * as fs from "node:fs/promises";

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

	await fs.copyFile(src, out).catch((e: unknown) => {
		throw Error(e as unknown as string);
	});
};

redirects();

/**
 * Generate a JSON file containing all markdown documents.
 *
 * This script reads all markdown files from the 'pages/kb' directory,
 * extracts their content, and compiles them into a single JSON file
 * located at 'public/doc.json'. Each entry in the JSON file includes the
 * URL and content of the document.
 *
 * @throw {Error} If the content directory does not exist or if writing the file fails.
 * @since 1.0.0
 */
async function generateDocsJson() {
	const src = path.join(process.cwd(), "pages", "kb");
	const out = path.join(process.cwd(), "out", "doc.json");

	const docs: { url: string; content: string }[] = [];

	try {
		await fs.access(src);
	} catch (error) {
		throw new Error("[Doc] Content directory does not exist!");
	}

	/**
	 * Recursively read a directory and process markdown files.
	 *
	 * @param dir The directory to read.
	 * @param baseUrl The base URL for the documents.
	 */
	async function readDir(dir: string, baseUrl: string = "") {
		try {
			const entries = await fs.readdir(dir, { withFileTypes: true });

			for (const entry of entries) {
				const fullPath = path.join(dir, entry.name);
				const relativeUrl = path.join(baseUrl, entry.name).replace(/\\/g, "/");

				if (entry.isDirectory()) {
					await readDir(fullPath, relativeUrl);
				} else if (entry.name.endsWith(".mdx") && entry.name !== "_meta.ts") {
					const content = await fs.readFile(fullPath, "utf-8");

					let path = relativeUrl.replace(".mdx", "");

					docs.push({
						url: "https://docs.addonify.com/kb/" + path,
						content: content,
					});
				}
			}
		} catch (error) {
			console.error(`Error reading directory ${dir}:`, error);
		}
	}

	await readDir(src);

	try {
		await fs.mkdir(path.dirname(out), { recursive: true });
		await fs.writeFile(out, JSON.stringify(docs, null, 2));
		console.log(`✨ [Doc] Generated doc.json with ${docs.length} documents.`);
	} catch (error) {
		console.error("[Doc] Failed to write doc.json:", error);
	}
}

generateDocsJson();
