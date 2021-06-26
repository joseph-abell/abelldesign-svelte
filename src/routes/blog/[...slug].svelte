<script context="module">
	import fetchData from '../../helpers/fetchData';
	import query from '../../queries/blog';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch, page }) {
		console.log(page.params.slug);
		const data = await fetchData(fetch, query, { slug: page.params.slug });
		console.log('data', data);
		return { props: data };
	}
</script>

<script>
	import ListH1 from '../../components/atoms/ListH1.svelte';
	import H2 from '../../components/atoms/H2.svelte';
	import Container from '../../components/atoms/Container.svelte';
	import IntersectionObserver from '../../components/atoms/IntersectionObserver.svelte';
	import Image from '../../components/atoms/Image.svelte';
	import Quote from '../../components/molecules/Quote.svelte';

	export let blog;
</script>

<svelte:head>
	<title>Abell Design</title>
</svelte:head>

<Container>
	<ListH1>{blog.title}</ListH1>
	{#if blog.image}
		<IntersectionObserver
			once={true}
			let:intersecting
			style="display: flex; align-items: center; justify-content: center;"
		>
			<Image src={blog.image.url} height={blog.image.height} />
		</IntersectionObserver>
	{/if}
	<H2>{blog.subtitle}</H2>
	<div>
		{@html blog.content.html}
	</div>
	{#if blog.quote}
		<Quote quote={blog.quote} quoter={blog.quoter} />
	{/if}
</Container>
