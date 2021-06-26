<script>
	import H3 from '../atoms/H3.svelte';
	import P from '../atoms/P.svelte';
	import A from '../atoms/A.svelte';
	import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
	import FullWidthMobileImage from '../atoms/FullWidthMobileImage.svelte';
	export let item;
</script>

<li>
	<div class="data-item-text">
		<H3>{item.title}</H3>
		<P>{item.featuredDeck}</P>
		<P><A href={`/work/${item.work.slug}`}>{item.featuredLinkText}</A></P>
	</div>

	{#if item.featuredImage.url}
		<div>
			<IntersectionObserver
				once={true}
				let:intersecting
				style="display: flex; align-items: center; justify-content: center;"
			>
				{#if intersecting}
					<FullWidthMobileImage alt="" src={item.featuredImage.url} height="300" />
				{/if}
			</IntersectionObserver>
		</div>
	{/if}
</li>

<style>
	.data-item-link {
		color: #b40808;
		text-decoration: none;
		display: inline-block;
		padding: 0;
		position: relative;
		margin-bottom: 40px;
	}

	@media (min-width: 768px) {
		.data-item-link {
			padding: 0;
			display: flex;
			justify-content: space-between;
			flex-direction: var(--flexDirection);
			align-content: stretch;
			align-items: stretch;
		}

		.data-item-text {
			flex-grow: 1;
		}

		.row .data-item-text {
			margin-right: 40px;
		}

		.row-reverse .data-item-text {
			margin-left: 40px;
		}
	}
</style>
