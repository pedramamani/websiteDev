<script lang="ts">
    import type {CircleType} from "../app.ts";
    import {Backgrounds, backgroundStore} from "../app.ts";
    import {onMount} from "svelte";

    onMount(() => {
        backgroundStore.subscribe(b => {
            background = b
            if (background === Backgrounds.On) {
                mouseClick = create
                interval = setInterval(evolve, 50)
            } else {
                mouseClick = _ => {}
                clearInterval(interval)
                circles = []
            }
        })
    })

    let innerWidth: number = 0
    let innerHeight: number = 0
    let circles: CircleType[] = []
    let evolutionCount: number = 0
    const timeConstant: number = 6
    const maxRadius: number = 60
    const opacityOffset: number = 1 / (maxRadius / timeConstant + 1)
    let period: number
    let background: Backgrounds
    let mouseClick
    let interval
    $: period = Math.ceil(1E6 / (innerWidth * innerHeight))

    function opacity(r: number): number {
        return 1 / (r / timeConstant + 1) - opacityOffset
    }

    function create(e: MouseEvent) {
        circles.push({x: e.clientX, y: e.clientY, r: 1})
        circles = circles
    }

    function evolve() {
        if (evolutionCount % period == 0) {
            circles.push({x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: 0})
            evolutionCount
        }
        evolutionCount++
        // if (interferenceCount % 8 == 0) {
        //     circles.push({x: 90, y: 100, r: 1})
        //     circles.push({x: 110, y: 100, r: 1})
        //     interferenceCount = 0
        // }
        // interferenceCount++

        let index = circles.length - 1
        let circle: CircleType
        while (index >= 0) {
            circle = circles[index]
            circle.r += 1
            if (circle.r > maxRadius) {
                circles.splice(index, 1)
                index--
            }
            index--
        }
        circles = circles
    }
</script>


<svelte:window bind:innerWidth bind:innerHeight on:click={mouseClick}/>
<svg class="parent" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
    {#if background === Backgrounds.On}
        {#each circles as circle}
            <circle class="circle" cx={circle.x} cy={circle.y} r={circle.r}
                    stroke-opacity={opacity(circle.r)}/>
        {/each}
    {/if}
</svg>


<style>
    .parent {
        background-color: var(--white);
        position: absolute;
        z-index: -1;
        transition: background-color var(--transitionDuration);
    }

    .circle {
        stroke: var(--gray);
        fill: none;
        transition: stroke var(--transitionDuration);
    }
</style>
