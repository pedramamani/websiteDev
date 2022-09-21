<script lang="ts">
    import {
        applyTheme,
        categories,
        description,
        initRain,
        initTheme,
        themeStore,
        validIds
    } from "../app.js";
    import Category from "$lib/Category.svelte";
    import About from "$lib/About.svelte";
    import Section from "$lib/Section.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import TopButton from "$lib/TopButton.svelte";
    import {onMount} from "svelte";
    import Rain from "$lib/Rain.svelte";

    let projectTitles: string[] = []
    for (let id of validIds.keys()) {
        projectTitles.push(categories.get(id).title)
    }
    const descriptionText: string = description + projectTitles.join(", ")

    let initialized: boolean = false
    onMount(() => {
        initTheme()
        initRain()
        themeStore.subscribe(applyTheme)
        initialized = true
    })

    let scrollTop: number = 0
    function scroll({target}) {
        scrollTop = target.scrollTop
    }

    let innerHeight: number = 0
    let parentElement: HTMLElement
    $: {
        if (parentElement) parentElement.style.height = `${innerHeight}px`
    }
</script>


<svelte:head>
    <title>Pedram's Portfolio</title>
    <meta name="description" content={descriptionText}>
</svelte:head>
<svelte:window bind:innerHeight/>
{#if initialized}
    <TopButton top={scrollTop}/>
    <Rain/>
    <div class="parent" bind:this={parentElement} on:scroll={scroll}>
        <Section index={0}>
            <Navbar/>
            <About/>
        </Section>
        {#each [...validIds] as [id, _], index}
            <Section index={index + 1} isLast={index + 1 === validIds.size}>
                <Category id={id} top={scrollTop}/>
                {#if index + 1 === validIds.size}
                    <Footer/>
                {/if}
            </Section>
        {/each}
    </div>
    <slot/>
{/if}


<style>
    .parent {
        width: 100vw;
        font-size: 17px;
        overflow-x: hidden;
        overflow-y: overlay;
        color: var(--black);
        border-color: var(--gray);
        transition-property: color, border-color;
        transition-duration: var(--transitionDuration);
    }

    :global(html) {
        background-color: var(--white);
        transition: background-color var(--transitionDuration);
    }
</style>
