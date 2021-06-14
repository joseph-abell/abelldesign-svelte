const contact = `
    query {
        contacts {
            id
            address
            addressImage {
                url
                height
            }
            instagramImage {
                height
                url
            }
            instagramLink
            instagramLinkText
            linkedInImage {
                height
                url
            }
            linkedInLink
            linkedInLinkText
            phoneImage {
                height
                url
            }
            phoneText
            slug
            title
            updatedAt
        }
    }
`;

export default contact;