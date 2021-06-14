const nextWork = `
    query nextWork($id: String) {
        worksConnection(stage: PUBLISHED, after: $id, first: 1) {
            edges {
                node {
                    id
                }
            }
        }
    }
`

export default nextWork;