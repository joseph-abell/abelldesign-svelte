<script lang='typescript'>
    import Image from '../atoms/Image.svelte';
    import IntersectionObserver from '../atoms/IntersectionObserver.svelte';
    import Menu from './Menu.svelte';
    import MenuButton from '../atoms/MenuButton.svelte';

    export let header = { image: { url: '', height: ''}};
    export let menu;

    let src = header.image.url;
    let alt = 'Abell Design'
    let menuOpen = false;
    let onClick = () => menuOpen = !menuOpen;
</script>

<style>
    .header-container {
        position: relative;
    }
    header {
        position: fixed;
        background: #FFFFEE;
        left: 0;
        width: 100vw;
        z-index: 2;
    }
    header div {
        margin: 20px auto;
        width: 104px;
    }

    @media (min-width: 768px) {
        .header-container {
            margin: 20px auto 0;
            width: 80vw;
        }
        header {
            position: static;
            width: auto;
            display: flex;
            align-items: center;
        }
        header div {
            margin: 0;
            float: left;
        }
    }

    @media (min-width: 1200px) {
        .header-container {
            width: 1024px;
        }
    }
</style>

<div class='header-container'>
    <header>
        <div>
            <IntersectionObserver once={true} let:intersecting={intersecting}>
                {#if intersecting}
                    <a href={`${menu[0].slug}`}>
                        <Image {alt} {src} height="50" />
                    </a>
                {/if}
            </IntersectionObserver>
        </div>
    
        <MenuButton onClick={onClick} {menuOpen} />
    
        <Menu {menu} {menuOpen} />
    </header>
</div>
