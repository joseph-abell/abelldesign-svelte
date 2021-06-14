<script context="module">
    import fetchData from '../helpers/fetchData';
    import query from '../queries/services';

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
    
    export let services;
    export let servicesPages = [{quote: '', quoter: ''}];
    let {quote, quoter} = servicesPages[0];
</script>

<svelte:head>
    <title>Services - Abell Design</title>
</svelte:head>

<div>
    <h2>Services</h2>

    <ul>
        {#each services as service (service.id)}
            <li>
                <a href={`work/${service.work?.slug}`}>
                    <h3>{service.featuredText}</h3>
                    <p>{service.featuredDeck}</p>
                    <p>{service.featuredLinkText}</p>

                    <IntersectionObserver once={true} let:intersecting={intersecting}>
                        {#if intersecting}
                            <Image alt='' src={service.featuredImage.url} height={service.featuredImage.height} />
                        {/if}
                    </IntersectionObserver>
                </a>
            </li>
        {/each}
    </ul>
</div>

<div>
    <p>{quote}</p>
    <p>{quoter}</p>
</div>
