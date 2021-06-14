<div>
    <H2>Services</H2>
    
    <ContentList>
        {#each services as service (service.id)}
            <ServiceListItem {service} />
        {/each}
        </ContentList>

    <CenteredLink href="/services">More Services</CenteredLink>
</div>

<script>
    import H2 from '../atoms/H2.svelte';
    import ContentList from '../atoms/ContentList.svelte';
    import ServiceListItem from './ServiceListItem.svelte';
    import CenteredLink from '../atoms/CenteredLink.svelte';

    export let services;
</script>