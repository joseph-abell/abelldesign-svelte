const blogs = `
    query blogs {
        blogs {
            id
            content {
                html
            }
            featuredImage {
                height
                url
            }
            featuredLinkText
            featuredText
            image {
                height
                url
            }
            quote
            quoteAuthor
            slug
            stage
            subtitle
            title
        }
    }
  
`;

export default blogs;