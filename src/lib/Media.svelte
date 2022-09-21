<script lang="ts">
    import type {MediaType} from "../app";
    import {MediaFormats} from "../app";
    import Image from "./Image.svelte";
    import SwitchImage from "./SwitchImage.svelte";
    import Video from "./Video.svelte";

    export let media: MediaType
    export let style: string = ""
</script>

<div style={style}>
    {#if media.fmt === MediaFormats.Image}
        <Image  src={media.src} alt={media.alt}/>
    {:else if media.fmt === MediaFormats.SwitchImage}
        <SwitchImage  src={media.src} alt={media.alt} switchSrc={media.switchSrc} switchAlt={media.switchAlt}/>
    {:else if media.fmt === MediaFormats.Video}
        <Video src={media.src}/>
    {/if}
</div>
