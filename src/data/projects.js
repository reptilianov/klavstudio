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
];

export const thumbnails = {
	okhosting: '/siteimages/Okhosting.webp',
	firstchoice: '/siteimages/firstchoice.webp',
	caintra: '/siteimages/caintra.webp',
	mindsherpa: '/siteimages/mindsherpa.webp',
	airtm: '/siteimages/airtm.webp',
	artearabia: '/siteimages/artearabia.webp',
	babilonia: '/siteimages/babilonia.webp',
	steps: '/siteimages/steps.webp',
};

export const visibleSlugs = allSlugs.filter(
	(s) => s !== 'babilonia' && thumbnails[s],
);
