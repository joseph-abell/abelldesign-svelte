<script context="module">
    import Header from '../components/molecules/Header.svelte';
    import Footer from '../components/molecules/Footer.svelte';

    import fetchData from '../helpers/fetchData';
    import query from '../queries/site';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = fetchData(fetch, query);
        return { props: data };
  }
</script>

<script>
    export let headers = [];
    export let footers = [];
    export let menu = [];

    let header = headers[0]
    let footer = footers[0];
</script>

<div>
    <Header {header} {menu} />
    <slot></slot>

    <Footer {footer} />
</div>
