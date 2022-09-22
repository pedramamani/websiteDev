<script lang="ts">
    import {Rains, rainStore, toggleRain} from "../src/app.ts";

    export let style: string = ""

    let backgroundOn: boolean
    let tooltip: string
    rainStore.subscribe(b => {
        backgroundOn = b === Rains.On
        tooltip = backgroundOn ? "stop the rain" : "start the rain"
    })
</script>


<button class="parent" on:click={toggleRain} style={style} tooltip={tooltip}>
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 24 24">
        <path d="M7.5,16c-1.517,0 -2.812,-0.538 -3.887,-1.613c-1.075,-1.075 -1.613,-2.37 -1.613,-3.887c0,-1.383 0.458,-2.592 1.375,-3.625c0.917,-1.033 2.05,-1.642 3.4,-1.825c0.533,-0.95 1.263,-1.696 2.188,-2.238c0.925,-0.541 1.937,-0.812 3.037,-0.812c1.5,0 2.804,0.479 3.912,1.438c1.109,0.958 1.78,2.154 2.013,3.587c1.15,0.1 2.117,0.575 2.9,1.425c0.783,0.85 1.175,1.867 1.175,3.05c0,1.25 -0.437,2.313 -1.312,3.188c-0.875,0.875 -1.938,1.312 -3.188,1.312l-10,-0Z"/>
        {#if backgroundOn}
            <path d="M13.95,21.9c-0.25,0.133 -0.504,0.154 -0.762,0.062c-0.259,-0.091 -0.455,-0.262 -0.588,-0.512l-1.5,-3c-0.133,-0.25 -0.154,-0.504 -0.062,-0.762c0.091,-0.259 0.262,-0.455 0.512,-0.588c0.25,-0.133 0.504,-0.154 0.762,-0.062c0.259,0.091 0.455,0.262 0.588,0.512l1.5,3c0.133,0.25 0.154,0.504 0.063,0.762c-0.092,0.259 -0.263,0.455 -0.513,0.588Zm6,-0c-0.25,0.133 -0.504,0.154 -0.762,0.062c-0.259,-0.091 -0.455,-0.262 -0.588,-0.512l-1.5,-3c-0.133,-0.25 -0.154,-0.504 -0.062,-0.762c0.091,-0.259 0.262,-0.455 0.512,-0.588c0.25,-0.133 0.504,-0.154 0.762,-0.062c0.259,0.091 0.455,0.262 0.588,0.512l1.5,3c0.133,0.25 0.154,0.504 0.063,0.762c-0.092,0.259 -0.263,0.455 -0.513,0.588Zm-12,-0c-0.25,0.133 -0.504,0.154 -0.762,0.062c-0.259,-0.091 -0.455,-0.262 -0.588,-0.512l-1.5,-3c-0.133,-0.25 -0.154,-0.504 -0.062,-0.762c0.091,-0.259 0.262,-0.455 0.512,-0.588c0.25,-0.133 0.504,-0.154 0.762,-0.062c0.259,0.091 0.455,0.262 0.588,0.512l1.5,3c0.133,0.25 0.154,0.504 0.063,0.762c-0.092,0.259 -0.263,0.455 -0.513,0.588Z"/>
        {/if}
    </svg>
</button>


<style>
    .parent {
        position: relative;
        border-radius: 100px;
        padding: var(--small);
        transition-property: background-color, outline-color;
        transition: var(--transitionDuration);
    }

    .parent:focus-visible {
        outline: 2px solid var(--black);
    }

    .parent:hover {
        background-color: var(--lightGray);
    }

    .parent::after {
        position: absolute;
        content: attr(tooltip);
        white-space: nowrap;
        background-color: var(--black);
        color: var(--white);
        border-radius: 4px;
        padding: 0 6px 2px 6px;
        line-height: 1.3;
        top: 52px;
        right: -32px;
    }

    .parent::before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 8px solid var(--black);
        top: 44px;
        right: 16px;
    }

    .parent::before,
    .parent::after {
        transition: color var(--transitionDuration), background-color var(--transitionDuration), border-bottom-color var(--transitionDuration);
        display: none;
    }

    .parent:hover::before,
    .parent:hover::after {
        display: block;
    }

    .icon {
        width: 28px;
        height: 28px;
    }
</style>
