import React from "react"
import Layout from "../components/Layout"
import Head from "../components/head"
import { FaYoutube } from "react-icons/fa"

import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

function Talk() {
  const data = useStaticQuery(graphql`
    query {
      web: file(relativePath: { eq: "components/images/webGuide.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="main" id="talks">
      <Layout>
        <Head title="talks" />
        <div className="talk-wrapper">
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=uJVQIVg6BtY"
            className="preview"
          >
            <div className="overlay">
              <FaYoutube className="icon" size={99} />
            </div>

            <Img className="img" fluid={data.web.childImageSharp.fluid} />
          </a>
          <div className="description">
            A beginners Guide to web development is a complete and thorough
            guide for people who plan to learn web development. It contains the
            market value and the complete developer roadmap. Moreover, all
            relevant questions are taken up.
            <a
              className="btn"
              target="_blank"
              href="https://www.youtube.com/watch?v=uJVQIVg6BtY"
            >
              View >
            </a>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Talk
