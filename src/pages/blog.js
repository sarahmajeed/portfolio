import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"

function Blog() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div id="blog" className="main">
      <Layout>
        <h1 className="title">Blogs</h1>
        {/* <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h1>{edge.node.frontmatter.title}</h1>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol> */}
      </Layout>
    </div>
  )
}

export default Blog