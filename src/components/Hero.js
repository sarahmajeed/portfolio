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
      <h1>{data.site.siteMetadata.author}</h1>
      <h3>{data.site.siteMetadata.description}</h3>
    </div>
  )
}

export default Hero
