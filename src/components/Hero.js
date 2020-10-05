import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `)
  return (
    <div id="hero">
      <div className="section">
        <h1 className="name">{data.site.siteMetadata.author}</h1>
        <h3 className="desc">{data.site.siteMetadata.description}</h3>
      </div>
    </div>
  )
}

export default Hero
