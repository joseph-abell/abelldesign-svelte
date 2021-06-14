<script>
    import { onMount } from 'svelte';

    export let src = ''
    export let alt = ''
    export let height;

    let loaded = false;
    let thisImage;
    let heightPx = height ? height + 'px' : 'auto';

    onMount(() => {
        thisImage.onload = () => {
            loaded = true;
        }
        thisImage.src = src;
        thisImage.alt = alt;
    })
</script>

<style>
    img {
        opacity: 0;
        transition: opacity 300ms ease-out;
        width: 100%;
    }

    img.loaded {
        opacity: 1;
    }

    @media (min-width: 768px) {
        img {
            width: var(--heightPx);
        }
    }
</style>

<img class:loaded bind:this={thisImage} {src} {alt} style="--height:{heightPx}" />