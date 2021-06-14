<script context="module">
    import fetchData from '../helpers/fetchData';
    import query from '../queries/home';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = await fetchData(fetch, query);

        data.works = data.works.map((work, index) => {
            work.oddEven = index % 2;
            return work;
        })

        data.services = data.services.map((service, index) => {
            service.oddEven = index % 2;
            return service;
        })

        return { props: data };
  }
</script>

<script>
    // @ts-nocheck
    import Container from '../components/atoms/Container.svelte';
    import Quote from '../components/molecules/Quote.svelte';
    import Intro from '../components/molecules/Intro.svelte';
    import Services from '../components/molecules/Services.svelte';
    import Work from '../components/molecules/Work.svelte';
    import Brands from '../components/molecules/Brands.svelte';

    export let homepage;
    export let services;
    export let works;
    export let brands;
</script>

<svelte:head>
    <title>Abell Design</title>
</svelte:head>

<Container>
    <Intro {homepage} />
    <Services {services} />
    <Work {works} />
    <Brands {brands} brandsText={homepage[0].brandsText} />
    <Quote quote={homepage[0].quote} quoter={homepage[0].quoter} />
</Container>
