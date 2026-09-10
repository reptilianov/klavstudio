import { readdir, readFile } from 'node:fs/promises';
import { imageMetadata } from 'astro/assets/utils';

const imageDirectory = new URL('../../public/placeholders/', import.meta.url);
const formats = ['webp', 'avif', 'jpg', 'jpeg', 'png', 'svg'];
const naturalOrder = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

// Match the full slug boundary; choose one format per basename, preferring WebP.
export function selectProjectImages(files, slug) {
  const selected = new Map();
  for (const file of files) {
    const dot = file.lastIndexOf('.');
    const stem = file.slice(0, dot);
    const extension = file.slice(dot + 1).toLowerCase();
    if (!stem.startsWith(`${slug}-`) || !formats.includes(extension)) continue;
    const previous = selected.get(stem);
    if (!previous || formats.indexOf(extension) < formats.indexOf(previous.extension)) {
      selected.set(stem, { stem, file, extension });
    }
  }
  return [...selected.values()].sort((a, b) => naturalOrder.compare(a.stem, b.stem));
}

function localized(value, locale) {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') return value[locale] || value.es || value.en || '';
  return '';
}

export async function getProjectImages(slug, locale = 'es') {
  const files = await readdir(imageDirectory);
  const selected = selectProjectImages(files, slug);
  const images = await Promise.all(selected.map(async (image) => {
    let metadata = {};
    const sidecar = `${image.stem}.json`;
    if (files.includes(sidecar)) {
      try {
        metadata = JSON.parse(await readFile(new URL(sidecar, imageDirectory), 'utf8'));
        if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) {
          throw new Error('Expected a JSON object');
        }
      } catch (error) {
        // Do not silently publish a case with missing editorial copy.
        throw new Error(`Revisa public/placeholders/${sidecar}: ${error.message}`);
      }
    }
    const dimensions = await imageMetadata(await readFile(new URL(image.file, imageDirectory)), image.file);
    return {
      ...image,
      src: `/placeholders/${encodeURIComponent(image.file)}`,
      width: dimensions.width,
      height: dimensions.height,
      title: localized(metadata.title, locale),
      comment: localized(metadata.comment, locale),
      alt: localized(metadata.alt, locale),
      hidden: metadata.hidden === true,
      order: typeof metadata.order === 'number' ? metadata.order : 0,
    };
  }));
  const cover = images.find(image => image.stem === `${slug}-cover`);
  const system = images.find(image => image.stem === `${slug}-system`);
  const gallery = images.filter(image => image !== cover && image !== system && !image.hidden)
    .sort((a, b) => a.order - b.order || naturalOrder.compare(a.stem, b.stem));
  return { cover, system, gallery };
}
