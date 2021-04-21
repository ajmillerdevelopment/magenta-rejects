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
            }
            contentful_id
            createdAt
          }
        }
      }
    }
    `)
    result.data.allContentfulAuthor.nodes.forEach((node) => {
      console.log(node)
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