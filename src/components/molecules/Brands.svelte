<script>
	import H2 from '../atoms/H2.svelte';
	import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
	import Image from '../atoms/Image.svelte';
	export let brands;
	export let brandsText;
</script>

<div>
	<H2>{brandsText}</H2>

	<ul class="brand-list">
		{#each brands as brand (brand.id)}
			<li>
				<IntersectionObserver
					once={true}
					let:intersecting
					style="display: flex; align-items: center; justify-content: center;"
				>
					{#if intersecting}
						<Image alt="" src={brand.image.url} margin="0 auto 20px" />
					{/if}
				</IntersectionObserver>
			</li>
		{/each}
	</ul>
</div>

<style>
	.brand-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		justify-items: stretch;
		align-items: stretch;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 40px;
		row-gap: 40px;
		margin-bottom: 30px;
	}
</style>
