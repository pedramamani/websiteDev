<script lang="ts">
    export let src: string
    export let autoplay: boolean = false
    export let style: string = ""
</script>


<video class="video" src={src + "#t=0.1"} style={style} controls autoplay={autoplay}></video>


<style>
    .video {
        border-radius: 4px;
        filter: brightness(var(--imageBrightness));
        transition: filter var(--transitionDuration);
    }
</style>