<script lang="ts">
    import {categories, validIds, navbarId} from "../app";
    import ThemeButton from "./ThemeButton.svelte";
    import BackgroundButton from "./BackgroundButton.svelte";
    import Image from "./Image.svelte";

    let onMobile: boolean
    let menuOpen: boolean = false
    let clientWidth: number

    function scrollIntoView({target}) {
        const element = document.getElementById(target.getAttribute('href'))
        element.scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => element.focus(), 1000)
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
            <button class="menuButton" on:click={() => menuOpen = !menuOpen}>
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {#if menuOpen}
                        <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/>
                    {:else}
                        <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/>
                    {/if}
                </svg>
            </button>
        {:else}
<!--            <Image src="./logo.png" alt="Pedram's logo" style="margin-right: 12px;"/>-->
            {#each [...validIds] as [id, _]}
                <a class="link" href={categories.get(id).id} on:click|preventDefault={scrollIntoView}>{categories.get(id).title}</a>
            {/each}
        {/if}
        <BackgroundButton style="margin-left: auto; z-index: 3;"/>
        <ThemeButton style="z-index: 3;"/>

    </div>
    <div class="menu" class:open="{menuOpen}">
        {#if menuOpen}
            <div class="menuContent">
                {#each [...validIds] as [id, _]}
                    <a class="link" href={categories.get(id).id}
                       on:click|preventDefault={scrollIntoViewMobile}>{categories.get(id).title}</a>
                {/each}
            </div>
        {/if}
    </div>
</nav>

<style>
    .parent {
        position: relative;
    }

    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        gap: 20px;
        padding-top: 16px;
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
        transition: background-color var(--transitionDuration), height var(--transitionDuration), opacity var(--transitionDuration);
        z-index: 2;
    }

    .open {
        opacity: 1;
        height: 264px;
        visibility: visible;
    }

    .menuButton {
        border-radius: 100px;
        padding: 8px;
        transition: background-color var(--transitionDuration), outline-color var(--transitionDuration);
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
    }

    .link {
        -webkit-user-drag: none;
        font-size: 17px;
        border-radius: 100px;
        padding: 0 6px 3px 6px;
        white-space: nowrap;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: outline-color var(--transitionDuration);
    }

    .link:focus-visible {
        outline: 2px solid var(--black);
    }

    .link:hover {
        text-decoration-color: var(--black);
    }
</style>