<script lang="ts">
    import {categories, validIds, navbarId} from "../app";
    import ThemeButton from "./ThemeButton.svelte";
    import RainButton from "./RainButton.svelte";

    let onMobile: boolean
    let menuOpen: boolean = false
    let clientWidth: number

    function scrollIntoView({target}) {
        const element = document.querySelector(target.getAttribute("href"))
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    function scrollIntoViewMobile({target}) {
        menuOpen = false
        scrollIntoView({target})
    }

    $: {
        if (clientWidth < 620) {
            onMobile = true
        } else {
            onMobile = false
            menuOpen = false
        }
    }
</script>

<nav class="parent" id={navbarId} bind:clientWidth>
    <div class="content">
        {#if onMobile}
            <button class="menuButton" on:click={() => menuOpen = !menuOpen} aria-label="navigation menu">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {#if menuOpen}
                        <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/>
                    {:else}
                        <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/>
                    {/if}
                </svg>
            </button>
        {:else}
            {#each [...validIds] as [id, _]}
                <a class="link" href={"#" + categories.get(id).id} on:click|preventDefault={scrollIntoView}>{categories.get(id).title}</a>
            {/each}
        {/if}
        <RainButton style="margin-left: auto; z-index: 3;"/>
        <ThemeButton style="z-index: 3;"/>
    </div>
    <div class="menu" class:open="{menuOpen}">
        {#if menuOpen}
            <div class="menuContent">
                {#each [...validIds] as [id, _]}
                    <a class="link" href={"#" + categories.get(id).id}
                       on:click|preventDefault={scrollIntoViewMobile}>{categories.get(id).title}</a>
                {/each}
            </div>
        {/if}
    </div>
</nav>


<style>
    .parent {
        position: relative;
        padding-top: 8px;
    }

    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 44px;
        gap: 20px;
    }

    .menuContent {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 76px 22px 20px 22px;
    }

    .menu {
        position: absolute;
        top: 0;
        left: -16px;
        width: 100vw;
        height: 1px;
        opacity: 0;
        visibility: hidden;
        overflow-y: hidden;
        background-color: var(--whiteTrans);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition-property: background-color, height, opacity;
        transition-duration: var(--transitionDuration);
        z-index: 2;
    }

    .menu.open {
        opacity: 1;
        height: 264px;
        visibility: visible;
    }

    .menuButton {
        border-radius: 100px;
        padding: 8px;
        transition-property: background-color, outline-color;
        transition-duration: var(--transitionDuration);
        z-index: 3;
    }

    .menuButton:focus-visible {
        outline: 2px solid var(--black);
    }

    .menuButton:hover {
        background-color: var(--lightGray);
    }

    .icon {
        width: 28px;
        height: 28px;
        fill: var(--black);
        transition: fill var(--transitionDuration);
    }

    .link {
        -webkit-user-drag: none;
        font-size: 17px;
        border-radius: 100px;
        padding: 1px 6px 0 6px;
        white-space: nowrap;
        text-decoration: none;
        text-decoration-color: var(--black);
        transition-property: outline-color, text-decoration-color;
        transition-duration: var(--transitionDuration);
    }

    .link:focus-visible {
        outline: 2px solid var(--black);
    }

    .link:hover {
        text-decoration: underline;
    }
</style>
