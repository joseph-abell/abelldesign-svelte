<script context="module">


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
    import Header from '../components/molecules/Header.svelte';
    import Footer from '../components/molecules/Footer.svelte';
    import WhiteBackground from '../components/atoms/WhiteBackground.svelte';
    export let headers = [];
    export let footers = [];
    export let menu = [];

    let header = headers[0]
    let footer = footers[0];
</script>

<div>
    <WhiteBackground>
        <Header {header} {menu} />
        <slot></slot>
    </WhiteBackground>
    

    <Footer {footer} />
</div>
