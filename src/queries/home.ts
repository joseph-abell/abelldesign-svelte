export const home = `
  query {
    works(first:2) {
      id
      createdAt
      publishedAt
      title
      slug
      featuredText
      featuredDeck
      featuredImage {
        url
        height
      }
      featuredLinkText
      content {
        markdown
      }
    }
    services(first:2) {
      id
      createdAt
      publishedAt
      title
      featuredText
      featuredDeck
      featuredImage {
        url
        height
      }
      featuredLinkText
      work {
          slug
      }
    }
    homepage: homepages(first: 1) {
      title
      subtitle
      image {
        url
        height
      }
      contactLinkText
      callToActionText
      workLinkText
      servicesLinkText
      brandsText
      quote
      quoter
    }
    brands {
        id
        image {
            url
            height
        }
    }
  }  
`;

export default home;