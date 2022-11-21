<script>
    export let data;
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>


    <div class="text-center p-6 bg-gray-20 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
        <h2 class="gray-200 uppercase">{data.props.pokemon.id} - {data.props.pokemon.name}</h2>

        <div class="m-8 w-full h-full grid gap-4 md:grid-cols-4 sm:grid-cols-1 ">
            <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{data.props.pokemon.id}.png"
                 alt="{data.props.pokemon.name}">
            </div>
            <div>
                <p class="text-left">Weight :{data.props.pokemon.weight}</p>
            </div>
            <div>
                <p class="text-left">Type :</p>
                {#each data.props.pokemon.types as type}
                    <li class="text-left">{type.type.name}</li>
                {/each}
            </div>
            <div >
                <p class="text-left">Moves :</p>
                {#each data.props.pokemon.moves.slice(0, 5) as moves}
                    <li class="text-left">{moves.move.name}</li>
                {/each}
            </div>
        </div>
    </div>
