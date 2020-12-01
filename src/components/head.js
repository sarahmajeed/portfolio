import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Head({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300"
        rel="stylesheet"
      /> */}
    </Helmet>
  )
}

export default Head
