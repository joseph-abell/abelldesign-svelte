<script>
	import IntroText from '../atoms/IntroText.svelte';
	import H1 from '../atoms/H1.svelte';
	import HeaderParagraph from '../atoms/HeaderParagraph.svelte';
	import A from '../atoms/A.svelte';
	import IntroImage from '../atoms/IntroImage.svelte';
	import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
	import FullWidthMobileImage from '../atoms/FullWidthMobileImage.svelte';

	export let homepage;
</script>

<div>
	<IntroText>
		<H1>{homepage[0].title}</H1>
		<HeaderParagraph
			>{homepage[0].subtitle} <A href="/contact">{homepage[0].contactLinkText}</A></HeaderParagraph
		>
	</IntroText>

	<IntroImage>
		<IntersectionObserver once={true} let:intersecting>
			{#if intersecting}
				<FullWidthMobileImage
					alt=""
					src={homepage[0].image.url}
					height={homepage[0].image.height}
				/>
			{/if}
		</IntersectionObserver>
	</IntroImage>
</div>

<style>
	div {
		margin-bottom: 40px;
	}

	@media (min-width: 768px) {
        div {
            display: flex;
        }
		div::after {
			clear: both;
			content: ' ';
			display: block;
		}
	}
</style>
