<script context="module">
	import fetchData from '../../helpers/fetchData';
	import query from '../../queries/blog';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		const data = await fetchData(fetch, query, { slug: page.params.slug });
		return { props: data };
	}
</script>

<script>
	import ListH1 from '../../components/atoms/ListH1.svelte';
	import H2 from '../../components/atoms/H2.svelte';
	import Container from '../../components/atoms/Container.svelte';
	import Quote from '../../components/molecules/Quote.svelte';

	export let blog;
</script>

<svelte:head>
	<title>Abell Design</title>
</svelte:head>

<Container>
	<ListH1>{blog.title}</ListH1>
	{#if blog.image}
		<div
			style="display: flex; align-items: center; justify-content: center;"
		>
			<img src={blog.image.url} alt="" />
</div>
	{/if}
	<H2>{blog.subtitle}</H2>
	<div>
		{@html blog.content.html}
	</div>
	{#if blog.quote}
		<Quote quote={blog.quote} quoter={blog.quoter} />
	{/if}
</Container>
