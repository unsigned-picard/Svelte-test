/** @type {import('./$types').PageServerLoad} */
export async function load(page) {
    const url = `https://pokeapi.co/api/v2/pokemon/${page.params["slug"]}`
    const res = await fetch(url)
    const pokemon = await res.json()
    return {props:{pokemon}};
};
