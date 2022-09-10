<script lang="ts">
    import {CategoryIds, categories, validIds, ProjectIds} from "../app";
    import type {CategoryType} from "../app";
    import Project from "./Project.svelte";
    import CategoryIcon from "./CategoryIcon.svelte";
    import {onMount} from "svelte";

    export let id: CategoryIds
    const category: CategoryType = categories.get(id)
    const projectIds: ProjectIds[] = validIds.get(id)
    let animate: boolean = false
    let element
    onMount(() => {
        element.setAttribute("tabindex", "0");
    })
</script>


{#if projectIds.length !== 0}
    <div class="parent">
        <div class="header" id={category.id} bind:this={element} on:mouseover={() => animate = true}
             on:mouseleave={() => animate = false} on:focus={() => animate = true} on:blur={() => animate = false}>
            <CategoryIcon id={id} animate={animate}/>
            <h1 class="title">{category.title}</h1>
        </div>
        {#each projectIds as id}
            <Project id={id}/>
        {/each}
    </div>
{/if}


<style>
    .parent {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-top: 72px;
    }

    .header {
        display: flex;
        flex-direction: row;
        gap: 22px;
        padding: 8px 16px 12px 0;
        margin-bottom: 12px;
        align-items: center;
    }

    .header:hover > .title {
        text-decoration: underline;
        text-decoration-color: var(--black);
    }

    .title {
        font-size: 38px;
        font-weight: 500;
    }

    @media (max-width: 500px) {
        .title {
            font-size: 28px;
        }
    }
</style>
