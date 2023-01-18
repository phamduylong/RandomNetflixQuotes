import { API_KEY } from '$env/static/private'
/** @type {import('./$types').PageServerLoad} */
export async function load ({data, fetch}) {
    const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=1`, {
        headers: {
            'X-Api-Key': API_KEY
        }
    });

    const kekw = await response.json();

    return {
        facts: kekw
    };
}