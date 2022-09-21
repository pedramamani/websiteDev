<script lang="ts">
    import {navbarId} from "../app";

    export let top: number = 0
    let topPrevious: number = 0
    let show: boolean = false
    let timeout

    function scheduleHide() {
        timeout = setTimeout(() => show = false, 1500)
    }

    function cancelHide() {
        clearTimeout(timeout)
    }

    $: {
        cancelHide()
        if (800 < top && top < topPrevious) {
            show = true
            scheduleHide()
        } else {
            show = false
        }
        topPrevious = top
    }

    function scrollToTop() {
        document.getElementById(navbarId).scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>


<button class="parent" class:show={show} on:click|preventDefault={scrollToTop} on:mouseover={cancelHide}
        on:mouseleave={scheduleHide} on:focus={cancelHide} on:blur={scheduleHide} aria-label="scroll to top">
    <svg class="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 20V7.825l-5.6 5.6L4 12l8-8 8 8-1.4 1.425-5.6-5.6V20Z"/>
    </svg>
</button>


<style>
    .parent {
        position: fixed;
        bottom: -48px;
        right: calc(50% - 22px);
        border-radius: 100px;
        z-index: 3;
        padding: 8px;
        background-color: var(--black);
        transition-property: background-color, bottom, opacity;
        transition-duration: var(--transitionDuration);
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
