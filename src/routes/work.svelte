<script context="module">
    import fetchData from '../helpers/fetchData';
    import workQuery from '../queries/work';

	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
        const work = await fetchData(fetch, workQuery);
        return { props: work };
  }
</script>

<script>
    // @ts-nocheck
    import IntersectionObserver from '../components/atoms/IntersectionObserver.svelte';
    import Image from '../components/atoms/Image.svelte';
    
    export let works;
    export let worksPages = [{quote: '', quoter: ''}];
    let {quote, quoter} = worksPages[0];
</script>

<svelte:head>
    <title>Work - Abell Design</title>
</svelte:head>

<div>
    <h2>Work</h2>

    <ul>
        {#each works as work (work.id)}
            <li>
                <a href={work.slug}>
                    <h3>{work.featuredText}</h3>
                    <p>{work.featuredDeck}</p>
                    <p>{work.featuredLinkText}</p>

                    <IntersectionObserver once={true} let:intersecting={intersecting}>
                        {#if intersecting}
                            <Image
                                alt=''
                                src={work.featuredImage.url}
                                height={work.featuredImage.height}
                            />
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
