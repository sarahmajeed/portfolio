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
        <h1 className="name"> Hi, I'm {data.site.siteMetadata.author}</h1>
        <p className="desc">
          I am a passionate {data.site.siteMetadata.description} who loves
          building good products for the web. I belive in making good
          eye-catching designs and highly effecient and fast websites.
        </p>
      </div>
      <div className="button">
        <a href="SarahMajeed.pdf">
          <div className="btn">Download Resume.</div>
        </a>

        <a href="mailto:sarahmajeed368@gmail.com">
          <div className="btn">Get in touch.</div>
        </a>
      </div>
    </div>
  )
}

export default Hero
