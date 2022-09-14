<script lang="ts">
    import {ProjectIds, projects} from "../app.ts";
    import type {ProjectType} from "../app.ts";
    import Link from "./Link.svelte";
    import Media from "./Media.svelte";

    export let id: ProjectIds
    const project: ProjectType = projects.get(id)
</script>

<div class="parent">
    <h2 class="title">{project.title}</h2>
    <p class="about">
        {project.about}
    </p>
    <div class="links">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/>
        </svg>
        {#each project.links as link}
            <Link href={link.href} text={link.name} isFile={link.isFile}/>
        {/each}
    </div>
    {#if project.medias.length > 0}
        <div class="medias" class:two={project.medias.length === 2}>
            {#each project.medias as media, index}
                <Media media={media}/>
            {/each}
        </div>
    {/if}
</div>


<style>
    .parent {
        display: flex;
        flex-direction: column;
        padding-bottom: 72px;
    }

    .title {
        padding-bottom: 16px;
        font-size: 28px;
        font-weight: 600;
    }

    .about {
        padding-bottom: 10px;
    }

    .icon {
        height: 18px;
        padding: 1px 4px 0 0;
    }

    .links {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 4px;
        row-gap: 4px;
    }

    .medias {
        display: grid;
        gap: 24px;
        justify-content: center;
        padding-top: 22px;
    }

    .two {
        grid-template-columns: repeat(2, auto);
    }

    @media (max-width: 500px) {
        .two {
            grid-template-columns: auto;
        }

        .title {
            font-size: 20px;
        }
    }
</style>