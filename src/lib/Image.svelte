<script lang="ts">
    export let src: string
    export let alt: string
    export let style: string = ""
</script>


<img class="image" src={src} alt={alt} style={style} draggable="false"/>


<style>
    .image {
        border-radius: 4px;
        filter: brightness(var(--imageBrightness));
        transition: filter var(--transitionDuration);
    }
</style>