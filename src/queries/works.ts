const works = `
  query {
    works {
      id
      createdAt
      publishedAt
      title
      featuredDeck
      slug
      featuredImage {
        url
        height
      }
      featuredLinkText
    }
    worksPages(first:1) {
      quote
      quoter

    }
  }  
`;

export default works;