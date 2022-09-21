<script lang="ts">
    import type {CircleType} from "../app.ts";
    import {Rains, rainStore} from "../app.ts";
    import {onMount} from "svelte";

    onMount(() => {
        rainStore.subscribe(r => {
            rain = r
            if (r === Rains.On) {
                mouseClick = create
                interval = setInterval(evolve, 50)
            } else {
                mouseClick = _ => {
                }
                clearInterval(interval)
                circles = []
            }
        })
    })

    let circles: CircleType[] = []
    let evolutionCount: number = 0
    const timeConstant: number = 6
    const maxRadius: number = 60
    const opacityOffset: number = 1 / (maxRadius / timeConstant + 1)
    let period: number
    let rain: Rains
    let mouseClick
    let interval
    let innerHeight: number = 0
    let innerWidth: number = 0

    function opacity(r: number): number {
        return 1 / (r / timeConstant + 1) - opacityOffset
    }

    function create(e: MouseEvent) {
        circles.push({x: e.clientX, y: e.clientY, r: 1})
        circles = circles
    }

    function evolve() {
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

        if (evolutionCount % period == 0) {
            circles.push({x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: 1})
            evolutionCount = 0
        }
        evolutionCount++
        circles = circles
    }

    $: {
        period = Math.ceil(1E6 / (innerWidth * innerHeight))
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight on:click={mouseClick}/>
<svg class="parent" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
    {#each circles as circle}
        <circle class="circle" cx={circle.x} cy={circle.y} r={circle.r} stroke-opacity={opacity(circle.r)}/>
    {/each}
</svg>


<style>
    .parent {
        position: absolute;
        z-index: -1;
        background-color: var(--white);
        transition: background-color var(--transitionDuration);
    }

    .circle {
        stroke: var(--gray);
        fill: none;
        transition: stroke var(--transitionDuration);
    }
</style>
