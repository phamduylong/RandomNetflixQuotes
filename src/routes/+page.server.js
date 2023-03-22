import { error } from '@sveltejs/kit';
// eslint-disable-next-line no-unused-vars
export async function load({ data, fetch }) {
	const urls = [
		'https://bcs-quotes.vercel.app/api/quotes',
		'https://lucifer-quotes.vercel.app/api/quotes',
		'https://strangerthings-quotes.vercel.app/api/quotes',
		'https://api.breakingbadquotes.xyz/v1/quotes'
	];
	const rand_idx = Math.floor(Math.random() * urls.length);
	const rand_res = urls[rand_idx];
	const response = await fetch(rand_res);

	if (response.status === 404) {
		// If API is down, throw Internal Server Error
		throw error(500, { message: 'Error fetching from API!' });
	}

	const quote = await response.json();
	switch (rand_idx) {
		case 0:
			quote[0].series = 'Better Call Saul (2015)';
			break;
		case 1:
			quote[0].series = 'Lucifer (2016)';
			break;
		case 2:
			quote[0].series = 'Stranger Things (2016)';
			break;
		case 3:
			quote[0].series = 'Breaking Bad (2019)';
			break;
		default:
			quote[0].series = 'Unknown';
			break;
	}
	return { content: quote };
}
