<script lang="ts">
    import {ChipColors, ProjectIds, MediaFormats, projects} from "../src/app.ts";
    import type {ProjectType} from "../src/app.ts";
    import Chip from "./Chip.svelte";
    import Link from "../src/components/Link.svelte";
    import Image from "../src/components/Image.svelte";
    import Video from "../src/components/Video.svelte";
    import SwitchImage from "../src/components/SwitchImage.svelte";

    export let id: ProjectIds
    const project: ProjectType = projects.get(id)
</script>

<div class="parent">
    <h2 class="title">{project.title}</h2>
    <div class="chips">
        <div class="row">
            <Chip style="margin-left: -7px;" color={ChipColors.Violet} title="Date"/>
            <p class="date">
                {project.date}
            </p>
        </div>
        <div class="row">
            <Chip style="margin-left: -7px;" color={ChipColors.Green} title="Links"/>
            {#each project.links as link}
                <Link href={link.href} text={link.name} isFile={link.isFile}/>
            {/each}
        </div>
        <div class="row wrap">
            <Chip style="margin-left: -7px;" color={ChipColors.Blue} title="About"/>
            <p>
                {project.about}
            </p>
        </div>
    </div>
    {#if project.media !== null}
        <div class="medias">
            {#if project.media.mediaFormat === MediaFormats.Image}
                <Image src={project.media.src} alt={project.media.alt}/>
            {:else if project.media.mediaFormat === MediaFormats.SwitchImage}
                <SwitchImage src={project.media.src} switchSrc={project.media.switchSrc} alt={project.media.alt}/>
            {:else if project.media.mediaFormat === MediaFormats.Video}
                <Video src={project.media.src}/>
            {/if}
        </div>
    {/if}
</div>


<style>
    .parent {
        margin-bottom: 80px;
    }

    .title {
        margin-bottom: 20px;
        font-size: var(--largeFont);
        font-weight: 500;
    }

    .date {
        white-space: nowrap;
    }

    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 10px;
        row-gap: 4px;
    }

    .chips {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        padding-left: 7px;
        margin-bottom: 24px;
    }

    .medias {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 400px;
    }

    @media (min-width: 500px) {
        .wrap {
            flex-wrap: nowrap;
        }
    }
</style>