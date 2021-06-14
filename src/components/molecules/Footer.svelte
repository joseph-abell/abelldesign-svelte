<script lang="typescript">
    import SocialMediaItem from './SocialMediaItem.svelte';
    import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
    import FooterLogoContainer from '../atoms/FooterLogoContainer.svelte';
    import Image from '../atoms/Image.svelte';

    type ImageType = { url: string, height: string };
    type FooterType = {
        emailText: string,
        emailImage: ImageType,
        emailLink: string,
        footerLogoImage: ImageType,
        phoneText: string,
        phoneImage: ImageType,
        instagramText: string,
        instagramImage: ImageType,
        instagramLink: string,
        linkedInText: string,
        linkedInLink: string,
        linkedInImage: ImageType,
    }
    export let footer: FooterType;
</script>

<style>
    footer {
        background: #16688c;
        color: white;
    }

    div {
        width: 80vw;
        margin: 0 auto;
        padding: 30px 0;
    }

    @media (min-width: 1200px) {
        div {
            width: 1024px;
        }
    }
</style>

<footer>
    <div>
        <ul>
            <SocialMediaItem
                text={footer.emailText}
                link={footer.emailLink}
                image={footer.emailImage.url}
                height={footer.emailImage.height}
            />
            <SocialMediaItem
                text={footer.phoneText}
                link={null}
                image={footer.phoneImage.url}
                height={footer.phoneImage.height}
            />
            <SocialMediaItem
                text={footer.linkedInText}
                link={footer.linkedInLink}
                image={footer.linkedInImage.url}
                height={footer.linkedInImage.height}
            />
            <SocialMediaItem
                text={footer.instagramText}
                link={footer.instagramLink}
                image={footer.instagramImage.url}
                height={footer.instagramImage.height}
            />
        </ul>
        <FooterLogoContainer>
            <IntersectionObserver>
                <Image src={footer.footerLogoImage.url} height='159' alt='' margin="0 auto" />
            </IntersectionObserver>
        </FooterLogoContainer>
    </div>
</footer>