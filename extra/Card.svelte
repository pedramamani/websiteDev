<script lang="ts">
    import type {ProjectType} from "../src/app.ts"
    export let thing: ProjectType
</script>

<a class="card" href={thing.id}>
    <div class="info">
        <p class="title">{thing.title}</p>
        <p class="date">{thing.date}</p>
    </div>
    <div class="image" style="background-image: url({thing.image})"></div>
</a>

<style>
    .card {
        display: flex;
        flex-direction: column;
        height: var(--cardSize);
        border-radius: var(--tiny);
        outline: var(--gray) solid var(--hairline);
        overflow: hidden;
        background-color: var(--white);
    }

    a:hover {
        box-shadow: 0 10px 15px -3px var(--shadow), 0 4px 6px -4px var(--shadow);
    }

    .info {
        width: 100%;
        padding: var(--small) var(--medium) var(--medium) var(--medium);
    }

    .image {
        position: relative;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        filter: brightness(var(--imageBrightness));
    }

    .title {
        font-size: 19px;
        font-weight: 500;
    }

    .date {
        font-size: var(--regularFont);
    }
</style>