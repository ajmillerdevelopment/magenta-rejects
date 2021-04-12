const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    const result = await graphql(`
        query getAuthors {
            allContentfulAuthor {
                edges {
                  node {
                    id
                    path
                    displayName
                  }
                }
              }
            }
    `)
    result.data.allContentfulAuthor.edges.forEach(({node}) => {
        createPage({
            path: `/${node.path}`,
            component: path.resolve('./src/templates/artist.js'),
            context: {
                id: node.id,
                displayName: node.displayName
            }
        })
    })
}