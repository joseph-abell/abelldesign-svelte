<script lang="typescript">
	import SocialMediaItem from './SocialMediaItem.svelte';
	import FooterLogoContainer from '../atoms/FooterLogoContainer.svelte';
	import FooterImage from '../atoms/FooterImage.svelte';

	type ImageType = { url: string; height: string };
	type FooterType = {
		emailText: string;
		emailImage: ImageType;
		emailLink: string;
		footerLogoImage: ImageType;
		phoneText: string;
		phoneImage: ImageType;
		instagramText: string;
		instagramImage: ImageType;
		instagramLink: string;
		linkedInText: string;
		linkedInLink: string;
		linkedInImage: ImageType;
	};
	export let footer: FooterType;
</script>

<footer>
	<div class="footer-container">
		<ul>
			<SocialMediaItem
				text={footer.emailText}
				link={footer.emailLink}
				image={footer.emailImage.url}
			/>
			<SocialMediaItem text={footer.phoneText} link={null} image={footer.phoneImage.url} />
		</ul>
		<ul>
			<SocialMediaItem
				text={footer.linkedInText}
				link={footer.linkedInLink}
				image={footer.linkedInImage.url}
			/>
			<SocialMediaItem
				text={footer.instagramText}
				link={footer.instagramLink}
				image={footer.instagramImage.url}
			/>
		</ul>
		<div>
			<FooterLogoContainer>
				<div style="display: flex; align-items: center; justify-content: center;">
					<FooterImage src={footer.footerLogoImage.url} alt="" />
				</div>
			</FooterLogoContainer>
		</div>
	</div>
</footer>

<style>
	footer {
		background: #16688c;
		color: white;
	}

	ul {
		list-style: none;
	}

	.footer-container {
		width: 80vw;
		margin: 0 auto;
		padding: 30px 0;
	}

	@media (min-width: 768px) {
		.footer-container {
			display: flex;
			justify-content: space-between;
			align-items: stretch;
		}
	}

	@media (min-width: 1200px) {
		.footer-container {
			width: 1024px;
			margin: 0 auto;
		}
	}
</style>
