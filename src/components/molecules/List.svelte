<div>
    {#if headerType === 'h1'}
        <H1 style="font-size: 24px; line-height: 30px; color: #16688C; text-align: center; margin: 20px 0;">{title}</H1>
    {:else}
        <H2>{title}</H2>
    {/if}
    
    
    <ContentList>
        {#each data as item (item.id)}
            <ListItem {item} />
        {/each}
        </ContentList>

    {#if linkText && linkText.length > 0}
        <CenteredLink href={link}>{linkText}</CenteredLink>
    {/if}
</div>

<script>
    import H1 from '../atoms/H1.svelte';
    import H2 from '../atoms/H2.svelte';
    import ContentList from '../atoms/ContentList.svelte';
    import ListItem from './ListItem.svelte';
    import CenteredLink from '../atoms/CenteredLink.svelte';

    export let title;
    export let data;
    export let link = '';
    export let linkText = ''
    export let headerType = 'h2';
</script>