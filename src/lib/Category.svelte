<script lang="ts">
    import {CategoryIds, categories, validIds, ProjectIds} from "../app";
    import type {CategoryType} from "../app";
    import Project from "./Project.svelte";
    import CategoryIcon from "./CategoryIcon.svelte";

    export let id: CategoryIds
    export let top: number = 0
    const category: CategoryType = categories.get(id)
    const projectIds: ProjectIds[] = validIds.get(id)
    let animate: boolean = false
    let position: number
    let element: HTMLElement

    $: {
        if (element && top) {
            position = element.getBoundingClientRect().top
            animate = -60 < position && position < 200
        }
    }
</script>


{#if projectIds.length !== 0}
    <div class="parent">
        <div class="header" id={category.id} bind:this={element}>
            <CategoryIcon id={id} animate={animate}/>
            <h1 class="title">{category.title}</h1>
        </div>
        <div class="projects">
            {#each projectIds as id}
                <Project id={id}/>
            {/each}
        </div>
    </div>
{/if}


<style>
    .parent {
    }

    .projects {
        display: flex;
        flex-direction: column;
        gap: 90px;
    }

    .header {
        display: flex;
        flex-direction: row;
        gap: 22px;
        padding: 8px 0 24px;
        align-items: center;
    }

    .title {
        font-size: 38px;
        font-weight: 600;
    }

    @media (max-width: 500px) {
        .title {
            font-size: 28px;
        }
    }
</style>
