<script>
    import { onMount } from 'svelte';

    export let src = ''
    export let alt = ''
    export let margin = '0';
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
        margin: var(--margin);
    }
    @media (min-width: 768px) {
        img {
            height: auto;
        }

        div {
            position: absolute;
            top: 50%;
            margin-top: -25px;
            width: 100%;
        }
    }

    img.loaded {
        opacity: 1;
    }
</style>

<div><img class:loaded bind:this={thisImage} {src} {alt} style="--height:{heightPx}; --margin:{margin}" /></div>