<script lang="ts">
    import {
        applyTheme,
        categories,
        description,
        initRain,
        initTheme,
        themeStore,
        validIds
    } from "../app.ts";
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
</script>


<svelte:head>
    <title>Pedram's Portfolio</title>
    <meta name="description" content={descriptionText}>
</svelte:head>
{#if initialized}
    <TopButton top={scrollTop}/>
    <Rain/>
    <div class="parent" on:scroll={scroll}>
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
        position: fixed;
        width: 100vw;
        height: 100vh;
        font-size: 17px;
        overflow-x: hidden;
        overflow-y: overlay;
        font-family: "Font", Marlett, sans-serif;
        color: var(--black);
        border-color: var(--gray);
        transition-property: color, border-color;
        transition-duration: var(--transitionDuration);
    }
</style>
