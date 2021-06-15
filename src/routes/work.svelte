<script context="module">
    import fetchData from '../helpers/fetchData';
    import query from '../queries/works';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const data = await fetchData(fetch, query) || { works: []};

        if (data && data.works) {
            data.works = data.works && data.works.map((work, index) => {
            work.oddEven = index % 2;
            return work;
        }) || []
        } else {
            data.works = [];
        }

        return { props: data };
  }
</script>

<script>
    // @ts-nocheck
    import Container from '../components/atoms/Container.svelte';
    import List from '../components/molecules/List.svelte';

    export let works;
</script>

<svelte:head>
    <title>Work - Abell Design</title>
</svelte:head>

<Container>
    <List title='Work' data={works} />

    <!-- <Quote quote={homepage[0].quote} quoter={homepage[0].quoter} /> -->
</Container>
