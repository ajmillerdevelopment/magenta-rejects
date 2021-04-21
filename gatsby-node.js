const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
    const {createPage} = actions
    const result = await graphql(`
    query MyQuery {
      allContentfulAuthor {
        nodes {
          displayName
          product {
            title
            price
            gallery {
              description
              file {
                url
              }
              title
            }
            contentful_id
          }
          about {
            about
          }
          path
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
                products: node.product
            }
        })
    })
}