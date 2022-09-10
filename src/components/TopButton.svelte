<script lang="ts">
    import {navbarId} from "../app";

    export let y: number = 0
    export let step: number = 0
    export let style: string = ""

    let show: boolean = false
    let timeout

    $: {
        clearTimeout(timeout)
        if (step < 0 && y > 600) {
            show = true
            timeout = setTimeout(() => show = false, 2000)
        } else {
            show = false
        }
    }

    function scrollToTop() {
        document.getElementById(navbarId).scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<button class="parent" class:show={show} on:click|preventDefault={scrollToTop} style={style}>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24">
        <path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20Z"/>
    </svg>
</button>


<style>
    .parent {
        position: fixed;
        bottom: -48px;
        right: calc(50% - 22px);
        border-radius: 100px;
        z-index: 1;
        padding: 8px;
        background-color: var(--black);
        transition: background-color var(--transitionDuration), outline-color var(--transitionDuration), bottom var(--transitionDuration), opacity var(--transitionDuration);
        opacity: 0;
    }

    .show {
        bottom: 32px;
        opacity: 1;
    }

    .icon {
        width: 28px;
        height: 28px;
        fill: var(--white);
        transition: fill var(--transitionDuration);
    }
</style>
