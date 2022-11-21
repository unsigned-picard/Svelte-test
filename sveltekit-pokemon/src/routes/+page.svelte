<script>
    import {pokemon} from "../stores/pokestore.js";
    import CreatureCard from "../components/creatureCard.svelte";
    let searchTerm = "";
    let filtered_pokemon = [];
</script>
<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
<svelte:head>
    <title> Home | Pokedex</title>
</svelte:head>


<div class="p-8 max-w-16xl mx-auto ">

    <h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

    <input type="text" placeholder="Search your creature ... " bind:value={searchTerm}
           class="w-full h-16 p-4 rounded-md text-lg bg-gray-200 border-2 mb-8">
    <div class="columns-3 ">
        {#each $pokemon as creature}
            <CreatureCard creature={creature}></CreatureCard>
        {/each}
    </div>
</div>