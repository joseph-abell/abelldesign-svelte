<script context="module">
	import fetchData from '../helpers/fetchData';
	import query from '../queries/home';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		const data = (await fetchData(fetch, query)) || {
			works: [],
			services: [],
			homepage: [{}],
			brands: []
		};

		if (data && data.works) {
			data.works =
				(data.works &&
					data.works.map((work, index) => {
						work.oddEven = index % 2;
						return work;
					})) ||
				[];
		} else {
			data.works = [];
		}

		if (data && data.services) {
			data.services = data.services.map((service, index) => {
				service.oddEven = index % 2;
				return service;
			});
		} else {
			data.services = [];
		}

		return { props: data };
	}
</script>

<script>
	// @ts-nocheck
	import Container from '../components/atoms/Container.svelte';
	import Quote from '../components/molecules/Quote.svelte';
	import Intro from '../components/molecules/Intro.svelte';
	import List from '../components/molecules/List.svelte';
	import Services from '../components/molecules/Services.svelte';
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
	<Services title="Services" data={services} slugPrefix="/work" linkText="More Services" />
	<List title="Work" data={works} slugPrefix="/work" linkText="More Work" />
	<Brands {brands} brandsText={homepage[0].brandsText} />
	<Quote quote={homepage[0].quote} quoter={homepage[0].quoter} />
</Container>
