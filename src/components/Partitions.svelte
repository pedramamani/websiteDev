<script lang="ts">
    import {onMount} from "svelte";
    import {validIds, categories, navbarId, footerId} from "../app";

    let heights: number[] = [0, 0, 0, 0, 0, 0]
    let elements: Element[] = []
    let index, clientWidth, clientHeight: number

    onMount(() => {
        elements.push(document.getElementById(navbarId))
        for (let id of validIds.keys()) {
            elements.push(document.getElementById(categories.get(id).id))
        }
        elements.push(document.getElementById(footerId))
    })

    function adjust() {
        const partitionHeight = clientWidth * 75 / 1000
        const partitionOffset = clientWidth * 30 / 1000 - 50

        index = 1
        while (index < elements.length - 1) {
            heights[index] = elements[index].getBoundingClientRect().top - elements[index - 1].getBoundingClientRect().top - partitionHeight
            index++
        }
        heights[index] = elements[index].getBoundingClientRect().bottom - elements[index - 1].getBoundingClientRect().top - partitionOffset
        heights[1] += partitionOffset
    }

    $: {
        if (clientWidth || clientHeight) {
            adjust()
        }
    }
</script>


<div class="parent" bind:clientWidth bind:clientHeight>
    <svg height="{heights[1]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="first" height="100%" width="100%"/>
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="first"
              d="M0,44.643c0,-58.177 0,-44.643 0,-44.643l1000,-0l-0,5.149c-86.655,-7.777 -195.392,4.301 -280.416,26.199c-71.105,18.313 -194.893,38.647 -277.137,39.624c-73.287,0.872 -144.036,-19.133 -216.331,-33.758c-86.746,-17.549 -162.474,-9.993 -226.116,7.429Z"/>
        <path class="second"
              d="M0,44.643c0,-58.177 0,30.357 0,30.357l1000,-0l-0,-69.851c-86.655,-7.777 -195.392,4.301 -280.416,26.199c-71.105,18.313 -194.893,38.647 -277.137,39.624c-73.287,0.872 -144.036,-19.133 -216.331,-33.758c-86.746,-17.549 -162.474,-9.993 -226.116,7.429Z"/>
    </svg>
    <svg height="{heights[2]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="second" height="100%" width="100%"/>
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="second"
              d="M0,19.643l0,-19.643l1000,-0l-0,52.605c-94.655,18.223 -271.961,34.396 -421.89,-1.743c-60.109,-14.488 -115.777,-49.148 -177.686,-46.876c-65.166,2.392 -128.772,54.494 -213.308,61.228c-82.735,6.59 -154.474,-27.993 -187.116,-45.571Z"/>
        <path class="third"
              d="M0,19.643c0,-16.434 0,55.357 0,55.357l1000,-0l-0,-22.395c-94.655,18.223 -271.961,34.396 -421.89,-1.743c-60.109,-14.488 -115.777,-49.148 -177.686,-46.876c-65.166,2.392 -128.772,54.494 -213.308,61.228c-82.735,6.59 -154.474,-27.993 -187.116,-45.571Z"/>
    </svg>
    <svg height="{heights[3]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="third" height="100%" width="100%"/>
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="third"
              d="M1000,19.643l-0,-19.643l-1000,-0l0,52.605c52.49,-35.782 86.946,-36.886 143.532,-33.435c86.28,5.263 179.812,60.518 270.358,38.692c60.109,-14.488 105.75,-46.384 162.686,-44.876c58.833,1.559 105.84,46.694 190.308,54.228c118.735,10.59 187.474,-20.993 233.116,-47.571Z"/>
        <path class="fourth"
              d="M1000,19.643c-0,-16.434 -0,55.357 -0,55.357l-1000,-0l0,-22.395c52.49,-35.782 86.946,-36.886 143.532,-33.435c86.28,5.263 179.812,60.518 270.358,38.692c60.109,-14.488 105.75,-46.384 162.686,-44.876c58.833,1.559 105.84,46.694 190.308,54.228c118.735,10.59 187.474,-20.993 233.116,-47.571Z"/>
    </svg>
    <svg height="{heights[4]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="fourth" height="100%" width="100%"/>
    </svg>
    <svg viewBox="0 0 1000 75" xmlns="http://www.w3.org/2000/svg">
        <path class="fourth"
              d="M0,19.643l0,-19.643l1000,-0l-0,60.195c-119.49,-57.783 -324.446,29.642 -413.89,3.667c-67.109,-19.488 -110.216,-51.922 -208.686,-45.876c-64.923,3.987 -97.183,38.193 -143.308,46.228c-74.984,13.061 -141.474,2.007 -234.116,-44.571Z"/>
        <path class="fifth"
              d="M0,19.643c0,-16.434 0,55.357 0,55.357l1000,-0l-0,-14.805c-119.49,-57.783 -324.446,29.642 -413.89,3.667c-67.109,-19.488 -110.216,-51.922 -208.686,-45.876c-64.923,3.987 -97.183,38.193 -143.308,46.228c-74.984,13.061 -141.474,2.007 -234.116,-44.571Z"/>
    </svg>
    <svg height="{heights[5]}px" width="100%" xmlns="http://www.w3.org/2000/svg">
        <rect class="fifth" height="100%" width="100%"/>
    </svg>
</div>


<style>
    .parent {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100%;
    }

    .first {
        fill: var(--firstAccent);
    }

    .second {
        fill: var(--secondAccent);
    }

    .third {
        fill: var(--thirdAccent);
    }

    .fourth {
        fill: var(--fourthAccent);
    }

    .fifth {
        fill: var(--fifthAccent);
    }
</style>