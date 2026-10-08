import { realpath } from 'node:fs/promises';
import { resolve, relative, isAbsolute } from 'node:path';
import sharp from 'sharp';

const cache = new Map();

/** Read actual bytes at build time, rather than trusting manually entered dimensions. */
export async function socialImageMetadata(src, siteUrl, publicRoot = resolve('public')) {
  const url = new URL(src, siteUrl);
  if (url.origin !== new URL(siteUrl).origin) throw new Error(`SEO image must be a verified local asset: ${src}`);
  const root = await realpath(publicRoot);
  const file = await realpath(resolve(root, `.${decodeURIComponent(url.pathname)}`));
  const rel = relative(root, file);
  if (rel.startsWith('..') || isAbsolute(rel)) throw new Error(`SEO image outside public directory: ${src}`);
  if (!cache.has(file)) cache.set(file, sharp(file).metadata());
  const { width, height } = await cache.get(file);
  if (!width || !height) throw new Error(`Cannot determine SEO image dimensions: ${src}`);
  return { width, height };
}
