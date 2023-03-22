import { error } from '@sveltejs/kit';
// eslint-disable-next-line no-unused-vars
export async function load({ data, fetch }) {
	let api = 'https://lucifer-quotes.vercel.app/api/quotes';
	const response = await fetch(api, {
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (response.status === 404) {
		// If API is down, throw Internal Server Error
		throw error(500, { message: 'Error fetching from API!' });
	}

	const quote = await response.json();

	return {
		content: quote
	};
}
