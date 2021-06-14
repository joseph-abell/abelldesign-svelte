<QuoteContainer>
    <Quote>{quote}</Quote>
    <Quoter>{quoter}</Quoter>
</QuoteContainer>

<script>
    import QuoteContainer from '../atoms/QuoteContainer.svelte';
    import Quote from '../atoms/Quote.svelte';
    import Quoter from '../atoms/Quoter.svelte';

    export let quote;
    export let quoter;
</script>