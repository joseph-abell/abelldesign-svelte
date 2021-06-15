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
        transition: opacity 300ms ease-out, height 300px ease-out;
        height: var(--height);
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        img {
            height: auto;
        }
    }

    img.loaded {
        opacity: 1;
    }
</style>

<div><img class:loaded bind:this={thisImage} {src} {alt} style="--height:{heightPx};" /></div>