<div>
    {#if headerType === 'h1'}
        <ListH1>{title}</ListH1>
    {:else}
        <H2>{title}</H2>
    {/if}
    
    
    <ContentList>
        {#each data as item (item.id)}
            <ServiceListItem {item} />
        {/each}
        </ContentList>

    {#if linkText && linkText.length > 0}
        <CenteredLink href={`/work/${slug}`}>{linkText}</CenteredLink>
    {/if}
</div>

<script>
    import ListH1 from '../atoms/ListH1.svelte';
    import H2 from '../atoms/H2.svelte';
    import ContentList from '../atoms/ContentList.svelte';
    import ServiceListItem from './ServiceListItem.svelte';
    import CenteredLink from '../atoms/CenteredLink.svelte';

    export let title;
    export let data;
    console.log(data);
    export let slug = '';
    export let linkText = ''
    export let headerType = 'h2';
</script>