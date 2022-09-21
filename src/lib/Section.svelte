<script lang="ts">
    export let index: number = 0
    export let isLast: boolean = false
    const isAlternate: boolean = index % 2 == 0
</script>


<div class="parent">
    <div class="background" class:alternate="{isAlternate}">
        <div class="content">
            <slot/>
        </div>
    </div>
    {#if !isLast}
        <div class="top" class:alternate={isAlternate}></div>
        <svg viewBox="0 0 100 7" xmlns="http://www.w3.org/2000/svg">
            <path class="divider" class:alternate={isAlternate} d="M0,0l100,0l-20,7l-80,-7Z"/>
            <path class="divider" class:alternate={!isAlternate} d="M100,7l0,-7l-20,7l-80,-7l0,7l100,0Z"/>
        </svg>
        <div class="bottom" class:alternate={!isAlternate}></div>
    {/if}
</div>


<style>
    .content {
        display: flex;
        flex-direction: column;
        width: 1032px;
        max-width: 100%;
        padding: 0 16px;
        margin: 0 auto;
    }

    .divider {
        fill: none;
    }

    .top {
        height: 66px;
    }

    .bottom {
        height: 34px;
    }

    .background.alternate, .top.alternate, .bottom.alternate {
        background-color: var(--accent);
        transition: background-color var(--transitionDuration);
    }

    .divider.alternate {
        fill: var(--accent);
        transition: fill var(--transitionDuration);
    }
</style>
