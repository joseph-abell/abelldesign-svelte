<div>
    <H2>{brandsText}</H2>

    <ul class='brand-list'>
        {#each brands as brand (brand.id)}
            <li>
                <IntersectionObserver once={true} let:intersecting={intersecting}>
                    {#if intersecting}
                        <Image alt='' src={brand.image.url} height='auto' />
                    {/if}
                </IntersectionObserver>
            </li>
        {/each}
    </ul>
</div>

<script>
    import H2 from '../atoms/H2.svelte';
    import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
    import Image from '../atoms/Image.svelte'
    export let brands;
    export let brandsText;
</script>

<style>
    .brand-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        justify-items: stretch;
        align-items: stretch;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;
        margin-bottom: 30px;
    }
</style>