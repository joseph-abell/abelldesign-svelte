const fetchData = async (fetch, query: string, variables?: {id?: string, slug?: string}): Promise<any>  => {
    let response;

    if (variables) {
        response = await fetch("https://api-eu-central-1.graphcms.com/v2/ckouf3olwcb6r01z1db541r29/master", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              query,
              variables
            })
        })
    } else {
        response = await fetch("https://api-eu-central-1.graphcms.com/v2/ckouf3olwcb6r01z1db541r29/master", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              query,
            })
        })
    }

    const { data, ...rest } = await response.json();
    console.log(rest);
    
    return data;
}

export default fetchData;