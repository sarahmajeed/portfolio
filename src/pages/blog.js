import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <div id="blog" className="main">
      <Layout>
        <Head title="Blog" />
        <h1 className="title">Blogs</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <div className="blog-wrapper">
                <div className="blog-card">
                  <h1 className="head">{edge.node.frontmatter.title}</h1>
                  <p className="date">{edge.node.frontmatter.date}</p>
                  <p className="excerpt">{edge.node.excerpt}</p>
                  <button className="btn">Read More ></button>
                </div>
              </div>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default Blog
