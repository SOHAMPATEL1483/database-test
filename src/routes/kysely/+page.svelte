<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<h1>kysely</h1>
<h1>time taken: {data.timeElapsed}  </h1>
<pre>{JSON.stringify(data,null,4)}</pre>