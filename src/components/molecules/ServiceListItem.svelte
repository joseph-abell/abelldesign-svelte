<script>
    import H3 from '../atoms/H3.svelte';
    import P from '../atoms/P.svelte';
    import SpanAsLink from '../atoms/SpanAsLink.svelte';
    import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
    import FullWidthMobileImage from '../atoms/FullWidthMobileImage.svelte';
    export let service;
</script>

<li>
    <a
        class="service-link"
        href={`/${service.work && service.work.slug}`}
        style="--flexDirection: {service.oddEven === 0 ? 'row' : 'row-reverse'}"
    >
        <div class='service-text'>
            <H3>{service.title}</H3>
            <P>{service.featuredDeck} <SpanAsLink>{service.featuredLinkText}</SpanAsLink></P>
        </div>

        <div>
            <IntersectionObserver once={true} let:intersecting={intersecting}>
                {#if intersecting}
                    <FullWidthMobileImage
                        alt=''
                        src={service.featuredImage.url}
                        height='300'
                    />
                {/if}
            </IntersectionObserver>
        </div>
    </a>
</li>

<style>
    .service-link {
        color: #B40808;
        text-decoration: none;
        display: inline-block;
        padding: 0;
        position: relative;
    }

    @media (min-width: 768px) {
        .service-link {
            padding: 0;
            display: flex;
            justify-content: space-between;
            flex-direction: var(--flexDirection);
            align-content: stretch;
            align-items: stretch;
        }

        .service-text {
            flex-grow: 1;
        }
    }
</style>