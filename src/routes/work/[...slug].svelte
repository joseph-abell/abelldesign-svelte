<script context="module">
    import fetchData from '../../helpers/fetchData';
    import query from '../../queries/work';
    import nextWorkQuery from '../../queries/nextWork';
    import firstWorkQuery from '../../queries/firstWork';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
        const data = await fetchData(fetch, query, { slug: page.params.slug });
        const nextWork = await fetchData(fetch, nextWorkQuery, { id: data.work.id });
        let nextData = nextWork.worksConnection.edges[0];
        let next;

        if (!!nextData) {
            next = nextData && nextData.node;
        } else {
            nextData = await fetchData(fetch, firstWorkQuery);
            next = nextData.works[0]
        }

        return { props: { ...data, next } };
  }
</script>

<script>
    import Image from '../../components/atoms/Image.svelte';
    import IntersectionObserver from '../../components/atoms/IntersectionObserver.svelte';
    import Container from '../../components/atoms/Container.svelte';
    import ListH1 from '../../components/atoms/ListH1.svelte';
    import Quote from '../../components/molecules/Quote.svelte';

    export let work;
    export let next;
</script>

<svelte:head>
    <title>{work.title} - Abell Design</title>
</svelte:head>

<Container>
    <ListH1>{work.title}</ListH1>
    <ul>
        {#each work.images as image(image.url)}
            <li>
                <IntersectionObserver once={true} let:intersecting={intersecting} style="display: flex; align-items: center; justify-content: center;">
                    <Image src={image.url} height={image.url} />
                </IntersectionObserver>
            </li>
        {/each}
    </ul>
    <p>{work.subtitle}</p>
    <div>
        {@html work.content.html}
    </div>
    <Quote quote={work.quote} quoter={work.quoteAuthor} />
    <ul>
        {#each work.secondaryImages as image(image.url)}
            <li>
                <IntersectionObserver once={true} let:intersecting={intersecting} style="display: flex; align-items: center; justify-content: center;">
                    <Image src={image.url} height={image.height} />
                </IntersectionObserver>
            </li>
        {/each}
    </ul>
    <div>
        <a href={next.slug}>
            <h3>More Work:</h3>
            <p>{next.title}</p>  
            <IntersectionObserver once={true} let:intersecting={intersecting} style="display: flex; align-items: center; justify-content: center;">
                <Image src={next.featuredImage.url} height={next.featuredImage.height} />
            </IntersectionObserver>
        </a>
    </div>
</Container>