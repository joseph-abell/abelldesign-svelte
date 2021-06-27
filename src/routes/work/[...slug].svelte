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
			next = nextData.works[0];
		}

		return { props: { ...data, next } };
	}
</script>

<script>
	import WorkImage from '../../components/atoms/WorkImage.svelte';
	import IntersectionObserver from '../../components/atoms/IntersectionObserver.svelte';
	import Container from '../../components/atoms/Container.svelte';
	import ListH1 from '../../components/atoms/ListH1.svelte';
    import WorkPrimaryImages from '../../components/atoms/WorkPrimaryImages.svelte';
    import WorkPrimaryImage from '../../components/atoms/WorkPrimaryImage.svelte';
    import WorkMain from '../../components/atoms/WorkMain.svelte';
	import Quote from '../../components/molecules/Quote.svelte';
    import MoreWork from '../../components/atoms/MoreWork.svelte';

	export let work;
	export let next;
</script>

<svelte:head>
	<title>{work.title} - Abell Design</title>
</svelte:head>

<Container>
	<ListH1>{work.title}</ListH1>
	<WorkPrimaryImages>
		{#each work.images as image (image.url)}
			<WorkPrimaryImage>
                <IntersectionObserver
                    once={true}
                    let:intersecting
                    style="display: flex; align-items: center; justify-content: center;"
                >
				    <WorkImage src={image.url} height="400" />
                </IntersectionObserver>
			</WorkPrimaryImage>
		{/each}
    </WorkPrimaryImages>

    <WorkMain>
        <p class='subtitle'>{work.subtitle}</p>
        <div class='markdown'>
            {@html work.content.html}
        </div>
        {#if (work.quote && work.quote.length > 0)}
            <Quote quote={work.quote} quoter={work.quoteAuthor} />
        {/if}
        <WorkPrimaryImages>
            {#each work.secondaryImages as image (image.url)}
                <WorkPrimaryImage>
                    <IntersectionObserver
                        once={true}
                        let:intersecting
                        style="display: flex; align-items: center; justify-content: center;"
                    >
                        <WorkImage src={image.url} height="400" />
                    </IntersectionObserver>
                </WorkPrimaryImage>
            {/each}
        </WorkPrimaryImages>
        <MoreWork {next} />
    </WorkMain>

</Container>

<style>
    .subtitle {
        color: #16688c;
        margin-bottom: 1em;
    }

    .markdown :global(p) {
        margin-bottom: 1em;
    }
</style>