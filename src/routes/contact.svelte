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
    import Maps from 'svelte-google-maps-embed';
    import IntersectionObserver from '../components/atoms/IntersectionObserver.svelte';
	import Image from '../components/atoms/Image.svelte';
	import Container from '../components/atoms/Container.svelte';
	import ListH1 from '../components/atoms/ListH1.svelte';
	import A from '../components/atoms/A.svelte';

	export let contacts;
	let {
		address,
		addressImage,
		instagramImage,
		instagramLink,
		instagramLinkText,
		phoneImage,
		phoneText,
		linkedInImage,
		linkedInLinkText,
		linkedInLink,
		emailTitle,
		emailLink,
		emailLinkText,
		emailImage,
		title,
        map
	} = contacts[0];
</script>

<svelte:head>
	<title>Contact - Abell Design</title>
</svelte:head>

<Container>
	<ListH1>{title}</ListH1>
    <div class='contact-container'>
        <ul>
            <li>
                <div class='image'>
                    <IntersectionObserver>
                        <Image height={50} src={emailImage.url} />
                    </IntersectionObserver>
                </div>
                <div class='text'>
                    {emailTitle}
                    <A href={emailLink}>{emailLinkText}</A>
                </div>
            </li>
            <li>
                <div class='image'>
                    <IntersectionObserver>
                        <Image height={50} src={phoneImage.url} />
                    </IntersectionObserver>
                </div>
                <div class='text'>
                    {phoneText}
                </div>
    
            </li>
            <li>
                <div class='image'>
                    <IntersectionObserver>
                        <Image height={50} src={addressImage.url} />
                    </IntersectionObserver>
                </div>
                <div class='text'>
                    {address}
                </div>
            </li>
            <li>
                <div class='image'>
                    <IntersectionObserver>
                        <Image height={50} src={linkedInImage.url} />
                    </IntersectionObserver>
                </div>
                <div class='text'>
                    <A href={linkedInLink}>{linkedInLinkText}</A>
                </div>
    
            </li>
            <li>
                <div class='image'>
                    <IntersectionObserver>
                        <Image height={50} src={instagramImage.url} />
                    </IntersectionObserver>
                </div>
                <div class='text'>
                    <A href={instagramLink}>{instagramLinkText}</A>
                </div>
            </li>
        </ul>
        <Maps apiKey="AIzaSyDDwiQ8OPTm6Km78-lpjBmo61uKfmXVVDE" mapMode="view" center={`${map.latitude},${map.longitude}`} zoom="18" maptype="satellite" />
    </div>
</Container>

<style>
    li {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
    }

    .image {
        margin-right: 20px;
    }

    @media (min-width: 768px) {
        .contact-container {
            display: flex;
            align-items: stretch;
        }
    }
</style>