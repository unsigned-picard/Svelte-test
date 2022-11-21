<script>
    export let creature;
</script>

<div class="w-full mb-4">
    <a class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
       href="/blog/{creature.id}"><img src="{creature.image}" alt="{creature.image}">
        <h2>{creature.id}.{creature.name}</h2></a>
</div>