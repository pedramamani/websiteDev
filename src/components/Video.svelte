<script lang="ts">
    export let src: string
    export let autoplay: boolean = false
    export let style: string = ""
</script>


{#if autoplay}
    <video class="video" src={src} style={style} controls autoplay></video>
{:else}
    <video class="video" src={src} style={style} controls></video>
{/if}


<style>
    .video {
        height: 100%;
        border-radius: 4px;
        filter: brightness(var(--imageBrightness));
        transition: filter var(--transitionDuration);
    }
</style>