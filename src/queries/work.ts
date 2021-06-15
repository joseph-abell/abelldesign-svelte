const work = `
  query {
    works {
      id
      createdAt
      publishedAt
      title
      slug
      keywords
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