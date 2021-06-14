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
    import IntersectionObserver from '../../components/atoms/IntersectionObserver.svelte';
    import Image from '../../components/atoms/Image.svelte';

    export let blogs;

</script>

<div>Hi</div>