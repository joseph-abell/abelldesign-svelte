<script>
	import Image from '../atoms/Image.svelte';
	import FooterA from '../atoms/FooterA.svelte';
	import IntersectionObserver from '../atoms/IntersectionObserver.svelte';

	export let image = '';
	export let text = '';
	export let link = '';
	export let alt = '';
</script>

<li>
	{#if !!link}
		<a href={link}>
			<div class="imageContainer">
				<IntersectionObserver once={true} let:intersecting>
					{#if intersecting}
						<Image src={image} {alt}/>
					{/if}
				</IntersectionObserver>
			</div>

			<FooterA>{text}</FooterA>
		</a>
	{:else}
		<div class="flex">
			<div class="imageContainer">
				<IntersectionObserver
                    once={true}
                    let:intersecting
                    style="display: flex;"
                >
					<Image src={image} {alt} />
				</IntersectionObserver>
			</div>

			<div>{text}</div>
		</div>
	{/if}
</li>

<style>
	li {
		padding: 10px 0;
		list-style: none;
	}
	a,
	.flex {
		color: white;
		display: flex;
		flex-flow: start;
		align-items: center;
		text-decoration: none;
	}
	.imageContainer {
		width: 50px;
		margin-right: 20px;
	}
</style>
