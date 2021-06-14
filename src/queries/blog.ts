const blog = `
    query blog($id: String) {
        blog(where: {id: $id}) {
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
`
export default blog;