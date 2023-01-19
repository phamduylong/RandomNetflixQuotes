import { API_KEY } from '$env/static/private'
/** @type {import('./$types').PageServerLoad} */
export async function load ({data, fetch}) {
    const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=30`, {
        headers: {
            'X-Api-Key': ''
        }
    });

    const facts = await response.json();

    return {
        facts: facts
    };
}