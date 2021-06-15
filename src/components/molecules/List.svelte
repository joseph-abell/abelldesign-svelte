<div>
    <H2>{title}</H2>
    
    <ContentList>
        {#each data as item (item.id)}
            <ListItem {item} />
        {/each}
        </ContentList>

    <CenteredLink href={link}>{linkText}</CenteredLink>
</div>

<script>
    import H2 from '../atoms/H2.svelte';
    import ContentList from '../atoms/ContentList.svelte';
    import ListItem from './ListItem.svelte';
    import CenteredLink from '../atoms/CenteredLink.svelte';

    export let title;
    export let data;
    export let link;
    export let linkText
</script>