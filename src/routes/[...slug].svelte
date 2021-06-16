<script context="module">
    import fetchData from '../helpers/fetchData';
    import query from '../queries/work';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = await fetchData(fetch, query);
        return { props: data };
  }
</script>

<script>
    import IntersectionObserver from '../components/atoms/IntersectionObserver.svelte';
    import Image from '../components/atoms/Image.svelte';
    import Container from '../components/atoms/Container.svelte';
</script>

<svelte:head>
    <title>Abell Design</title>
</svelte:head>

<Container>Hi</Container>