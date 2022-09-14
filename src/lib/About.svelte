<script lang="ts">
    import Image from "../lib/Image.svelte";
    import {name, about, headshotSrc, headshotAlt} from "../app.js";
</script>


<div class="parent">
    <h1 class="name">{name}</h1>
    <p class="about">
        {about}
    </p>
    <div class="headshot">
        <Image src={headshotSrc} alt={headshotAlt}/>
    </div>
</div>


<style>

    .parent {
        padding: 62px 0 44px;
        display: grid;
        align-items: center;
        align-self: center;
        max-width: 900px;
    }

    .name {
        padding-bottom: 12px;
        font-size: 56px;
        font-weight: 600;
        white-space: nowrap;
        align-self: end;
        grid-area: 1 / 1 / span 1 / span 1;
    }

    .about {
        align-self: start;
        font-size: 18px;
        padding-right: 40px;
    }

    .headshot {
        height: 300px;
        width: 293px;
        grid-area: 1 / 2 / span 2 / span 1;
    }

    @media (max-width: 680px) {
        .parent {
            padding-top: 24px;
        }

        .name {
            justify-self: center;
            padding-top: 12px;
            grid-area: 2 / 1 / span 1 / span 1;
        }

        .about {
            text-align: center;
            padding-right: 0;
        }

        .headshot {
            justify-self: center;
            grid-area: 1 / 1 / span 1 / span 1;
        }
    }
</style>