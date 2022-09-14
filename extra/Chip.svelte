<script lang="ts">
    import {ChipColors} from "../src/app.ts"
    export let title: string
    export let color: ChipColors
    export let style: string = ""
</script>


<span class="chip" class:blue={color===ChipColors.Blue} class:violet={color===ChipColors.Violet} class:green={color===ChipColors.Green} style={style}>{title}</span>


<style>
    .chip {
        height: 24px;
        padding: 0 9px 3px 9px;
        border-radius: 100px;
        font-size: 16px;
    }

    .blue {
        background-color: var(--lightBlue);
        color: var(--darkBlue);
    }

    .violet {
        background-color: var(--lightViolet);
        color: var(--darkViolet);
    }

    .green {
        background-color: var(--lightGreen);
        color: var(--darkGreen);
    }
</style>