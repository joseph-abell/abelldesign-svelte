<script context="module">
    import fetchData from '../helpers/fetchData';
    import query from '../queries/services';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = await fetchData(fetch, query) || { services: [], servicesPages: []};

        if (data && data.services) {
            data.services = data.services.map((service, index) => {
                service.oddEven = index % 2;
                return service;
            })
        } else {
            data.services = [];
        }

        return { props: data };
  }
</script>

<script>
    // @ts-nocheck
    import Container from '../components/atoms/Container.svelte';
    import List from '../components/molecules/List.svelte';
    import Quote from '../components/molecules/Quote.svelte';

    export let services;
    export let servicesPages;

    let quote = servicesPages[0].quote;
    let quoter = servicesPages[0].quoter;

    console.log(quote, quoter);
</script>

<svelte:head>
    <title>Services - Abell Design</title>
</svelte:head>

<Container>
    <List title='Services' data={services} />

    <Quote quote={quote} quoter={quoter} />
</Container>
