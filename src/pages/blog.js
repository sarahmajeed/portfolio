import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"
import Fade from "react-reveal/Fade"

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
                <Fade left>
                  <div className="blog-card">
                    <h1 className="head">{edge.node.frontmatter.title}</h1>
                    <p className="date">Dated: {edge.node.frontmatter.date}</p>
                    <p className="excerpt">
                      <i>{edge.node.excerpt}</i>
                    </p>
                    <button className="btn">Read More ></button>
                  </div>
                </Fade>
              </div>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default Blog
