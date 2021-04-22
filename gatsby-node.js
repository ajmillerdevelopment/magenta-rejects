const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    const result = await graphql(`
    query MyQuery {
      allContentfulAuthor {
        nodes {
          displayName
          about {
            about
          }
          path
          post {
            title
            body {
              raw
              references {
                file {
                  url
                }
                description
                title
                contentful_id
              }
            }
            contentful_id
            createdAt
          }
        }
      }
    }
    `)
    result.data.allContentfulAuthor.nodes.forEach((node) => {
        createPage({
            path: `/${node.path}`,
            component: path.resolve('./src/templates/artist.js'),
            context: {
                displayName: node.displayName,
                about: node.about.about,
                posts: node.post
            }
        })
    })
}