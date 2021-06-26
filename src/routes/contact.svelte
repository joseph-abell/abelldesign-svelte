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
		title
	} = contacts[0];
</script>

<svelte:head>
	<title>Contact - Abell Design</title>
</svelte:head>

<Container>
	<ListH1>{title}</ListH1>
	<p>
		<IntersectionObserver>
			<Image height={50} src={emailImage.url} />
		</IntersectionObserver>
		{emailTitle}
		<A href={emailLink}>{emailLinkText}</A>
	</p>
	<p>
		<IntersectionObserver>
			<Image height={50} src={phoneImage.url} />
		</IntersectionObserver>{phoneText}
	</p>
	<p>
		<IntersectionObserver>
			<Image height={50} src={addressImage.url} />
		</IntersectionObserver>
		{address}
	</p>
	<p>
		<IntersectionObserver>
			<Image height={50} src={linkedInImage.url} />
		</IntersectionObserver>
		<A href={linkedInLink}>{linkedInLinkText}</A>
	</p>
	<p>
		<IntersectionObserver>
			<Image height={50} src={instagramImage.url} />
		</IntersectionObserver>
		<A href={instagramLink}>{instagramLinkText}</A>
	</p>
</Container>
