<script lang="ts">
    import Link from ".//Link.svelte";
</script>


<footer class="footer">
    <span class="text">
        Hosted on <Link href="https://pages.github.com/" text="GitHub Pages"/>
    </span>
    <span class="bullet">
        •
    </span>
    <span class="text">
        Powered by <Link href="https://svelte.dev" text="Svelte"/> and <Link href="https://fonts.google.com" text="Google Fonts"/>
    </span>
</footer>


<style>
    .footer {
        margin-top: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        column-gap: 7px;
        padding: 120px 0 12px;
        font-size: 14px;
    }

    .text {
        white-space: nowrap;
    }

    @media (max-width: 432px) {
        .bullet {
            display: none;
        }

        .footer {
            flex-direction: column;
        }
    }
</style>