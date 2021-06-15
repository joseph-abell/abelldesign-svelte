const works = `
  query {
    works {
      id
      createdAt
      publishedAt
      title
      featuredDeck
      featuredImage {
        url
        height
      }
      featuredLinkText
    }
    worksPages(first:1) {
      quote
      quoter
      keywords
    }
  }  
`;

export default works;