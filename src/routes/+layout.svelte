<script lang="ts">
    import {applyTheme, initTheme, initBackground, themeStore} from "../app.ts";
    import {onMount} from "svelte";
    import Background from "../lib/Background.svelte";
    import Footer from "../lib/Footer.svelte";
    import Navbar from "../lib/Navbar.svelte";
    import TopButton from "../lib/TopButton.svelte";

    let initialized: boolean = false
    onMount(() => {
        initTheme()
        initBackground()
        themeStore.subscribe(applyTheme)
        initialized = true
    })

    let y: number = 0
    let step: number = 0
    function scroll({target}) {
        step = target.scrollTop - y
        y = target.scrollTop
    }
</script>


{#if initialized}
    <TopButton y={y} step="{step}"/>
    <div class="body" on:scroll={scroll}>
        <div class="backdrop">
            <Background/>
            <div class="content">
                <Navbar/>
                <slot/>
                <Footer/>
            </div>
        </div>
    </div>
{/if}


<style>
    :root {
        --white: null;
        --black: null;
        --whiteTrans: null;
        --lightGray: null;
        --gray: null;
        --ripple: null;
        --accent: null;

        --imageBrightness: null;
        --transitionDuration: 400ms;
    }

    .body::-webkit-scrollbar {
        width: 5px;
    }

    .body::-webkit-scrollbar-track {
        display: none;
    }

    .body::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border-style: solid;
        border-width: 5px;
        border-color: inherit;
    }

    .body {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: overlay;
        color: var(--black);
        fill: var(--black);
        border-color: var(--gray);
        font-size: 17px;
        transition: color var(--transitionDuration), fill var(--transitionDuration), border-color var(--transitionDuration);
    }

    .backdrop {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 16px;
    }

    .content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 1000px;
        max-width: 100%;
    }
</style>
