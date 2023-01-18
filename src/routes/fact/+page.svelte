<script>
      /** @type {import('./$types').PageServerData} */
    export let data;
    console.log(data);    
</script>

<ul>
    {#each data.facts as fact}
        <lI>{fact.fact}</lI>
    {/each}
</ul>
