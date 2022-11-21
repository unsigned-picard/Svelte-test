<script>
    import {pokemon} from "../stores/pokestore.js";
    console.log($pokemon)
</script>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<svelte:head>
    <title> Home | Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

{#each $pokemon as creature}
    <div>{creature.name}</div>
{/each}