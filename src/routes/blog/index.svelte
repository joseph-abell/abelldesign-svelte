<script context="module">
    import fetchData from '../../helpers/fetchData';
    import query from '../../queries/blogs';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = await fetchData(fetch, query);
        return { props: data };
  }
</script>

<script>
    import IntersectionObserver from '../../components/atoms/IntersectionObserver.svelte';
    import Image from '../../components/atoms/Image.svelte';
    import Container from '../../components/atoms/Container.svelte';
</script>

<Container>Hi</Container>