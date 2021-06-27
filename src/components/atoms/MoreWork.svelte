<div class='more-work'>
    <a href={next.slug}>
        <div class='more-work-text'>
            <h3>More Work:</h3>
            <p>{next.title}</p>
            <SpanAsLink width='120px'>Read More ></SpanAsLink>
        </div>
        
        <IntersectionObserver
            once={true}
            let:intersecting
            style="display: flex; align-items: center; justify-content: center;"
        >
            <Image src={next.featuredImage.url} height={next.featuredImage.height} />
        </IntersectionObserver>
    </a>
</div>

<script>
    import IntersectionObserver from './IntersectionObserver.svelte';
    import Image from './Image.svelte';
    import SpanAsLink from './SpanAsLink.svelte';

    export let next;
</script>

<style>
    .more-work {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 40px 0;
        padding: 40px 0;
        color: rgba(0, 0, 0, 0.8);
    }

    a {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        color: rgba(0, 0, 0, 0.8);
    }

    .more-work-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>