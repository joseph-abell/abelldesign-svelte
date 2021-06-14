const work = `
  query {
    works {
      id
      createdAt
      publishedAt
      title
      slug
      keywords
      featuredText
      featuredDeck
      featuredImage {
        url
        height
      }
      featuredLinkText
    }
  }  
`;

export default work;