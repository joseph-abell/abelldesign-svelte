<script>
    import A from '../atoms/A.svelte';
    export let menu;
    export let menuOpen;
</script>

<style>
    menu {
        position: fixed;
        z-index: 1;
        left: 100vw;
        width: 100vw;
        top: 0px;
        height: 100vh;
        transition: left 0.3s ease-in-out;
        background: #FFFFEE;
        overflow-y: auto;
    }

    menu.menuOpen {
        left: 0;
    }

    ul {
        border-top: 1px dashed black;
        width: 50vw;
    }

    li {
        display: block;
        border-bottom: 1px dashed black;
    }

    @media (min-width: 768px) {
        menu {
            position: static;
            top: initial;
            left: initial;
            width: calc(80vw - 104px);
            height: initial;
            float: left;
            padding-left: 50px;
        }

        ul {
            border-top: 0;
            width: auto;
            display: flex;
            justify-content: space-between;
        }

        li {
            border-bottom: 0;
        }
    }

    @media (min-width: 1024px) {
        menu {
            width: 550px;
        }
    }

</style>

<menu class:menuOpen>
    <ul>
        {#each menu as menuItem (menuItem.slug)}
            <li>
                <A href={menuItem.slug.length > 1 ? `/${menuItem.slug}` : menuItem.slug} display="block" padding="30px 0" color="rgba(0, 0, 0, 0.8)">
                    {menuItem.text}
                </A>
            </li>
        {/each}
    </ul>
</menu>