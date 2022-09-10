<script lang="ts">
    import {CategoryIds} from "../app";

    export let id: CategoryIds
    export let animate: boolean
    let state: number = 0
    let interval
    let stateDuration: number // in units of 100ms
    let stateCount: number

    if (id === CategoryIds.Code) {
        stateDuration = 6
        stateCount = 2
    } else if (id === CategoryIds.Teach) {
        stateDuration = 5
        stateCount = 3
    } else if (id === CategoryIds.Research) {
        stateDuration = 5
        stateCount = 4
    } else if (id === CategoryIds.Design3d) {
        stateDuration = 4
        stateCount = 4
    }

    $: {
        if (animate) {
            let time: number = 0
            interval = setInterval(() => {
                time += 1
                state = Math.floor(time % (stateCount * stateDuration) / stateDuration)
            }, 100)
        } else {
            clearInterval(interval)
            state = 0
        }
    }
</script>


{#if id === CategoryIds.Code}
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22">
        <path d="M4.8,19.2c-0.495,0 -0.919,-0.176 -1.271,-0.528c-0.353,-0.353 -0.529,-0.777 -0.529,-1.272l-0,-10.8c-0,-0.495 0.176,-0.919 0.529,-1.271c0.352,-0.353 0.776,-0.529 1.271,-0.529l14.4,-0c0.495,-0 0.919,0.176 1.272,0.529c0.352,0.352 0.528,0.776 0.528,1.271l0,10.8c0,0.495 -0.176,0.919 -0.528,1.272c-0.353,0.352 -0.777,0.528 -1.272,0.528l-14.4,0Zm0,-1.8l14.4,0l0,-9l-14.4,0l0,9Zm3.15,-0.9l-1.26,-1.26l2.318,-2.34l-2.34,-2.34l1.282,-1.26l3.6,3.6l-3.6,3.6Z"/>
        {#if state === 0}
            <rect x="12" y="14.7" width="5.4" height="1.8"/>
        {/if}
    </svg>
{:else if id === CategoryIds.Research}
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="1 1 21 21">
        <path d="M4,20l0,-2l5,0l0,-2c-1.383,0 -2.562,-0.488 -3.537,-1.463c-0.975,-0.975 -1.463,-2.154 -1.463,-3.537c0,-1.017 0.271,-1.925 0.812,-2.725c0.542,-0.8 1.18,-1.375 1.913,-1.725c-0.067,0.35 -0.054,0.708 0.038,1.075c0.091,0.367 0.237,0.7 0.437,1c-0.383,0.25 -0.679,0.575 -0.888,0.975c-0.208,0.4 -0.312,0.867 -0.312,1.4c-0,0.833 0.292,1.542 0.875,2.125c0.583,0.583 1.292,0.875 2.125,0.875l8,0l0,2l-5,0l0,2l6,0l0,2l-14,0Zm5.5,-11.2c-0.5,0 -0.925,-0.175 -1.275,-0.525c-0.35,-0.35 -0.525,-0.775 -0.525,-1.275c0,-0.5 0.175,-0.925 0.525,-1.275c0.35,-0.35 0.775,-0.525 1.275,-0.525c0.5,0 0.925,0.175 1.275,0.525c0.35,0.35 0.525,0.775 0.525,1.275c0,0.5 -0.175,0.925 -0.525,1.275c-0.35,0.35 -0.775,0.525 -1.275,0.525Z"/>
        {#if state === 0 || state === 2}
            <path d="M13,11.1l-0.3,-0.95l-0.95,0.35l-0.5,-1.325c0.333,-0.25 0.592,-0.567 0.775,-0.95c0.183,-0.383 0.275,-0.792 0.275,-1.225c0,-0.783 -0.279,-1.446 -0.837,-1.988c-0.559,-0.541 -1.23,-0.812 -2.013,-0.812l-0.45,-1.25l0.95,-0.35l-0.35,-0.9l1.9,-0.7l0.3,0.95l0.95,-0.35l2.75,7.5l-0.95,0.35l0.35,0.95l-1.9,0.7Z"/>
        {:else if state === 1}
            <path d="M11.374,12.03l0.044,-0.996l-1.013,0.004l-0.017,-1.416c0.399,-0.121 0.75,-0.33 1.054,-0.627c0.303,-0.298 0.529,-0.65 0.677,-1.057c0.268,-0.737 0.232,-1.455 -0.107,-2.155c-0.339,-0.7 -0.877,-1.183 -1.613,-1.451l0.004,-1.329l1.013,-0.004l-0.021,-0.965l2.024,-0.008l-0.043,0.995l1.013,-0.004l0.019,7.988l-1.013,0.004l0.004,1.013l-2.025,0.008Z"/>
        {:else}
            <path d="M13.908,10.091l-0.535,-0.841l-0.828,0.584l-0.825,-1.15c0.257,-0.328 0.425,-0.701 0.503,-1.119c0.078,-0.416 0.06,-0.836 -0.052,-1.254c-0.203,-0.757 -0.644,-1.324 -1.322,-1.704c-0.681,-0.377 -1.399,-0.465 -2.156,-0.263l-0.758,-1.091l0.828,-0.584l-0.572,-0.779l1.654,-1.167l0.536,0.84l0.827,-0.584l4.597,6.532l-0.827,0.584l0.584,0.828l-1.654,1.168Z"/>
        {/if}
    </svg>
{:else if id === CategoryIds.Teach}
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        {#if state === 1}
            <path class="stroke" style="stroke-width: 4.63px;" d="M53.069,22.43l5,5l5,-5l5,5l5,-5l5,5"/>
        {:else if state === 2}
            <path class="stroke" style="stroke-width: 4.63px;" d="M53.069,22.43l5,5l5,-5l5,5l5,-5l5,5"/>
            <path class="stroke" style="stroke-width: 4.63px;" d="M58.033,39.505l5,-5l5,5l5,-5l5,5"/>
        {/if}
        <path d="M50,58.333c-5.521,0 -10,4.479 -10,10c0,5.521 4.479,10 10,10c5.521,0 10,-4.479 10,-10c0,-5.52 -4.479,-10 -10,-10Z"/>
        <path d="M56.667,83.333l-13.334,0c-3.682,0 -6.667,2.985 -6.667,6.667l26.667,0c0,-3.682 -2.981,-6.667 -6.666,-6.667Z"/>
        <path d="M86.667,83.333l-13.334,0c-3.682,0 -6.667,2.985 -6.667,6.667l26.667,0c0,-3.682 -2.981,-6.667 -6.666,-6.667Z"/>
        <path d="M80,58.333c-5.521,0 -10,4.479 -10,10c0,5.521 4.479,10 10,10c5.521,0 10,-4.479 10,-10c0,-5.52 -4.479,-10 -10,-10Z"/>
        <path d="M20,10c-5.521,0 -10,4.479 -10,10c0,5.521 4.479,10 10,10c5.522,0 10,-4.479 10,-10c0,-5.521 -4.478,-10 -10,-10Z"/>
        <path d="M90,10l-53.333,0l0,6.667l46.666,0l0,30l-46.666,0l0,6.666l53.333,0l0,-43.333Z"/>
        <path d="M48.538,28.7c-4.967,5.138 -11.551,7.967 -18.54,7.967l-19.998,0l-0,53.333l6.668,0l-0,-20l6.665,0l-0,20l6.667,0l0,-46.667c9.11,0 17.357,-3.822 23.333,-10l-4.795,-4.633Z"/>
    </svg>
{:else if id === CategoryIds.Compete}
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26">
        <path d="m9.675 13.7.875-2.85L8.25 9h2.85l.9-2.8.9 2.8h2.85l-2.325 1.85.875 2.85-2.3-1.775ZM6 23v-7.725q-.95-1.05-1.475-2.4Q4 11.525 4 10q0-3.35 2.325-5.675Q8.65 2 12 2q3.35 0 5.675 2.325Q20 6.65 20 10q0 1.525-.525 2.875T18 15.275V23l-6-2Zm6-7q2.5 0 4.25-1.75T18 10q0-2.5-1.75-4.25T12 4Q9.5 4 7.75 5.75T6 10q0 2.5 1.75 4.25T12 16Z"/>
    </svg>
{:else if id === CategoryIds.Design3d}
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" style="stroke-linejoin:round;">
        {#if state === 0}
            <path class="stroke" style="stroke-width: 1.65px;"
                  d="M4.5,7.67l7.5,-4.33l7.5,4.33l0,8.66l-7.5,4.33l-7.5,-4.33l0,-8.66Z"/>
            <path class="stroke" style="stroke-width: 1.65px;" d="M19.5,7.67l-7.5,4.33l-7.5,-4.33"/>
            <path class="stroke" style="stroke-width: 1.65px;" d="M12,20.66l0,-8.66"/>
        {:else if state === 1}
            <path class="stroke" style="stroke-width: 1.65px;"
                  d="M5.08,6.02l9.79,-2.35l4.05,5.66l0,8.65l-9.79,2.35l-4.05,-5.66l-0,-8.65Z"/>
            <path class="stroke" style="stroke-width: 1.65px;" d="M18.92,9.33l-9.79,2.34l-4.05,-5.65"/>
            <path class="stroke" style="stroke-width: 1.65px;" d="M9.13,20.33l0,-8.66"/>
        {:else if state === 2}
            <rect class="stroke" x="6.7" y="4.61" width="10.6" height="14.78" style="stroke-width:1.65px;"/>
            <path class="stroke" d="M6.7,10.73l10.6,0" style="stroke-width:1.65px;"/>
        {:else}
            <path class="stroke" style="stroke-width: 1.65px;"
                  d="M18.92,6.02l-9.79,-2.35l-4.05,5.66l-0,8.65l9.79,2.35l4.05,-5.66l0,-8.65Z"/>
            <path class="stroke" style="stroke-width: 1.65px;" d="M5.08,9.33l9.79,2.34l4.05,-5.65"/>
            <path class="stroke" style="stroke-width: 1.65px;" d="M14.87,20.33l-0,-8.66"/>
        {/if}
    </svg>
{:else}
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M6.5 11 12 2l5.5 9Zm11 11q-1.875 0-3.188-1.312Q13 19.375 13 17.5q0-1.875 1.312-3.188Q15.625 13 17.5 13q1.875 0 3.188 1.312Q22 15.625 22 17.5q0 1.875-1.312 3.188Q19.375 22 17.5 22ZM3 21.5v-8h8v8Z"/>
    </svg>
{/if}


<style>
    .icon {
        height: 42px;
        margin-top: 6px;
    }

    .stroke {
        fill: none;
        stroke: var(--black);
        transition: stroke var(--transitionDuration);
    }

    @media (max-width: 500px) {
        .icon {
            height: 30px;
            margin-top: 4px;
        }
    }
</style>