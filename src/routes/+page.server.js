/** @type {import('./$types').PageServerLoad} */
export async function load ({ data, fetch }) {

    const urls = [
        'https://bcs-quotes.vercel.app/api/quotes',
        'https://lucifer-quotes.vercel.app/api/quotes',
        'https://strangerthings-quotes.vercel.app/api/quotes'
    ];
    const rand_idx = Math.floor(Math.random() * urls.length);
    const rand_res = urls[rand_idx];
    const response = await fetch(rand_res);

    const quote = await response.json();
    switch (rand_idx) {
        case 0:
            quote[0].series = 'Better Call Saul';
            break;
        case 1:
            quote[0].series = 'Lucifer';
            break;
        case 2:
            quote[0].series = 'Stranger Things';
            break;
        default:
            quote[0].series = 'Unknown';
            break;
    }
    return { content: quote };
}