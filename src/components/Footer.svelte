<script lang="ts">
    import Link from "../components/Link.svelte";
    import {footerId} from "../app";
</script>


<footer class="footer" id={footerId}>
    <p>
        Made by Pedram Amani under a<Link href="https://creativecommons.org/publicdomain/zero/1.0" text="CC0 1.0"/>license
        with<Link href="https://svelte.dev" text="Svelte"/>and<Link href="https://fonts.google.com" text="Google Fonts"/>
    </p>
</footer>


<style>
    .footer {
        margin-top: auto;
        text-align: center;
        padding-bottom: 16px;
        font-size: 14px;
    }
</style>