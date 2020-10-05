const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, "md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //getting path to template
  const blogTemplate = path.resolve("./src/templates/Blog.js")
  //fetch markdown data-this function returns a promise
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // creating page
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      //just the path to the component
      component: blogTemplate,
      path: `blog/${edge.node.fields.slug}`,
      //stuff we want to pass down to the template
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
