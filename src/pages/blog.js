import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"
import Fade from "react-reveal/Fade"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
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
                    <a
                      target="_blank"
                      href={
                        edge.node.frontmatter.title ===
                        "Things you need to know about LinkedIn if you’re new"
                          ? "https://sarahmajeed.medium.com/things-you-need-to-know-about-linkedin-if-youre-new-8869f230d16c"
                          : edge.node.frontmatter.title ===
                            "Object Destructuring in ES6"
                          ? "https://sarahmajeed.medium.com/object-destructuring-in-es6-e3165ee374a9"
                          : "https://sarahmajeed.medium.com/array-destructuring-in-es6-ee80c0f516fa"
                      }
                    >
                      <button className="btn">Read More ></button>
                    </a>
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
