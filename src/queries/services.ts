const services = `
  query {
    services {
        updatedAt
        id
        title
        stage
        publishedAt
        featuredText
        featuredLinkText
        featuredDeck
        featuredImage {
            url
            height
        }
        deck
        createdAt
        linkText
        work {
            slug
        }
    }
    servicesPages(first:1) {
      quote
      quoter
      keywords
    }
  }  
`;

export default services;