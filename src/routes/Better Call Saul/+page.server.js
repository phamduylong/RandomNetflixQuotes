/** @type {import('./$types').PageServerLoad} */
export async function load ({ data, fetch }) {

    let api = "https://bcs-quotes.vercel.app/api/quotes";
    const response = await fetch(api, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const quote = await response.json();

    return {
        content: quote
    };
}