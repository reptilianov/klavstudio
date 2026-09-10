export const allSlugs = [
	'okhosting',
	'firstchoice',
	'caintra',
	'mindsherpa',
	'titos',
	'airtm',
	'artearabia',
	'babilonia',
	'steps',
	'raicesuniversales',
];

export const thumbnails = {
	okhosting: '/siteimages/thumbnail_okhosting.webp',
	firstchoice: '/siteimages/thumbnail_firstchoice.webp',
	caintra: '/siteimages/thumbnail_caintra.webp',
	mindsherpa: '/siteimages/thumbnail_mindsherpa.webp',
	airtm: '/siteimages/thumbnail_airtm.webp',
	artearabia: '/siteimages/thumbnail_artearabia.webp',
	babilonia: '/siteimages/babilonia.webp',
	steps: '/siteimages/thumbnail_steps.webp',
	raicesuniversales: '/siteimages/thumbnail_raicesuniversales.webp',
};

export const visibleSlugs = allSlugs.filter(
	(s) => s !== 'babilonia' && thumbnails[s],
);
