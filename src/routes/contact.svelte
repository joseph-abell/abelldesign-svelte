<script context="module">
    import fetchData from '../helpers/fetchData';
    import query from '../queries/contact';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = await fetchData(fetch, query);
        return { props: data };
  }
</script>

<script>
    // @ts-nocheck
        import IntersectionObserver from '../components/atoms/IntersectionObserver.svelte';
        import Image from '../components/atoms/Image.svelte';
    
        export let contacts;
        let {address, addressImage, instagramImage, instagramLink, phoneImage, phoneText, slug, title} = contacts[0];
    </script>

<svelte:head>
    <title>Contact - Abell Design</title>
</svelte:head>