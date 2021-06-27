<script context="module">
	import fetchData from '../../helpers/fetchData';
	import query from '../../queries/blogs';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const data = await fetchData(fetch, query);
		const blogs = data.blogs.filter((blog) => blog.stage === 'PUBLISHED');

		return {
			props: {
				...data,
				blogs
			}
		};
	}
</script>

<script>
	import IntersectionObserver from '../../components/atoms/IntersectionObserver.svelte';
	import Image from '../../components/atoms/Image.svelte';
	import Container from '../../components/atoms/Container.svelte';
	import ListH1 from '../../components/atoms/ListH1.svelte';
	import H2 from '../../components/atoms/H2.svelte';

	export let blogs;
</script>

<svelte:head>
	<title>Blog - Abell Design</title>
</svelte:head>

<Container>
	<ListH1>Blog</ListH1>

	<ul class="blog-list">
		{#each blogs as blog (blog.id)}
			<li class="blog-list-item">
				<a href={`/blog/${blog.slug}`}>
					<div style="height: 200px">
						<IntersectionObserver
							once={true}
							let:intersecting
							style="display: flex; align-items: center; justify-content: center;"
						>
							<Image src={blog.featuredImage.url} height="200" />
						</IntersectionObserver>
					</div>

					<H2 style="text-align: left;">{blog.title}</H2>
					<p>{blog.featuredLinkText}</p>
				</a>
			</li>
		{/each}
	</ul>
</Container>

<style>
	@media (min-width: 768px) {
		.blog-list {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		.blog-list-item {
			width: 30%;
			padding: 20px;
		}
	}
	.blog-list-item {
		margin-bottom: 40px;
	}
	.blog-list-item p {
		color: #b40808;
	}
</style>
