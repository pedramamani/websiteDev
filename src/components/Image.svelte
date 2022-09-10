<script lang="ts">
    export let src: string
    export let alt: string
    export let style: string = ""
</script>


<img class="image" src={src} alt={alt} style={style}/>


<style>
    .image {
        height: 100%;
        border-radius: 4px;
        -webkit-user-drag: none;
        filter: brightness(var(--imageBrightness));
        transition: filter var(--transitionDuration);
    }
</style>