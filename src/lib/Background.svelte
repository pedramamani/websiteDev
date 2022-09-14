<script lang="ts">
    import type {CircleType} from "../app.ts";
    import {Backgrounds, backgroundStore, categories, footerId, navbarId, validIds} from "../app.ts";
    import {onMount} from "svelte";

    onMount(() => {
        backgroundStore.subscribe(b => {
            background = b
            if (background === Backgrounds.On) {
                mouseClick = create
                interval = setInterval(evolve, 50)
            } else {
                mouseClick = _ => {
                }
                clearInterval(interval)
                circles = []
            }
        })
        elements.push(document.getElementById(navbarId))
        for (let id of validIds.keys()) {
            elements.push(document.getElementById(categories.get(id).id))
        }
        elements.push(document.getElementById(footerId))
    })

    let circles: CircleType[] = []
    let evolutionCount: number = 0
    const timeConstant: number = 6
    const maxRadius: number = 60
    const opacityOffset: number = 1 / (maxRadius / timeConstant + 1)
    let period: number
    let background: Backgrounds
    let mouseClick
    let interval

    let heights: number[] = [0, 0, 0, 0, 0, 0]
    let elements: Element[] = []
    let index: number
    let clientWidth: number = 0
    let clientHeight: number = 0
    let innerHeight: number = 0

    $: {
        period = Math.ceil(1E6 / (clientWidth * innerHeight))
        if (clientWidth || clientHeight) {
            adjust()
        }
    }

    function adjust() {
        const partitionHeight = clientWidth * 75 / 1000
        const partitionOffset = clientWidth * 40 / 1000 - 50

        index = 1
        while (index < elements.length - 1) {
            heights[index] = elements[index].getBoundingClientRect().top - elements[index - 1].getBoundingClientRect().top - partitionHeight
            index++
        }
        heights[index] = elements[index].getBoundingClientRect().bottom - elements[index - 1].getBoundingClientRect().top - partitionOffset
        heights[1] += partitionOffset
    }

    function opacity(r: number): number {
        return 1 / (r / timeConstant + 1) - opacityOffset
    }

    function create(e: MouseEvent) {
        circles.push({x: e.clientX, y: e.clientY - elements[0].getBoundingClientRect().top, r: 1})
        circles = circles
    }

    function evolve() {
        if (evolutionCount % period == 0) {
            circles.push({x: Math.random() * clientWidth, y: Math.random() * innerHeight - elements[0].getBoundingClientRect().top, r: 0})
            evolutionCount
        }
        evolutionCount++

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

<svelte:window bind:innerHeight on:click={mouseClick}/>
<div class="parent" bind:clientWidth bind:clientHeight>
    <svg height="{heights[1]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="accent" height="100%" width="100%"/>
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="accent" d="M0,0l1000,0l-197.007,70.379l-802.993,-70.379Z"/>
    </svg>
    <svg height="{heights[2]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="accent" d="M1000,75l0,-75l-197.007,70.379l-802.993,-70.379l0,75l1000,0Z"/>
    </svg>
    <svg height="{heights[3]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="accent" height="100%" width="100%"/>
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="accent" d="M0,0l1000,0l-197.007,70.379l-802.993,-70.379Z"/>
    </svg>
    <svg height="{heights[4]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="accent" d="M1000,75l0,-75l-197.007,70.379l-802.993,-70.379l0,75l1000,0Z"/>
    </svg>
    <svg height="{heights[5]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="accent" height="100%" width="100%"/>
    </svg>
    {#if background === Backgrounds.On}
        <svg class="circles" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            {#each circles as circle}
                <circle class="circle" cx={circle.x} cy={circle.y} r={circle.r}
                        stroke-opacity={opacity(circle.r)}></circle>
            {/each}
        </svg>
    {/if}
</div>


<style>
    .parent {
        background-color: var(--white);
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100%;
        z-index: -1;
        transition: background-color var(--transitionDuration);
    }

    .accent {
        fill: var(--accent);
    }

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
    }

    .circle {
        stroke: var(--gray);
        fill: none;
        transition: stroke var(--transitionDuration);
    }
</style>
