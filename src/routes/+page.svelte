<script lang="ts">
    import Category from "../lib/Category.svelte";
    import {categories, title, description, validIds} from "../app.js";
    import About from "$lib/About.svelte";

    let projectTitles: string[] = []
    for (let id of validIds.keys()) {
        projectTitles.push(categories.get(id).title)
    }
    const descriptionText: string = description + projectTitles.join(", ")
</script>


<svelte:head>
    <title>{title}</title>
    <meta name="description" content={descriptionText}>
</svelte:head>
<About/>
<div>
    {#each [...validIds] as [id, _]}
        <Category id={id}/>
    {/each}
</div>
