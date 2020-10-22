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
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <div id="hero">
      <div className="section">
        <h1
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          className="name"
        >
          {" "}
          Hi, I'm {data.site.siteMetadata.author}
        </h1>
        <p
          data-sal="slide-down"
          data-sal-delay="500"
          data-sal-easing="ease"
          className="desc"
        >
          I am a passionate {data.site.siteMetadata.description} who loves
          building good products for the web. I belive in making good
          eye-catching designs and highly effecient and fast websites.
        </p>
      </div>
      <div className="button">
        {data.allFile.edges.map(file => {
          return (
            <a download href={file.node.publicURL}>
              <div
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="btn"
              >
                Download Resume.
              </div>
            </a>
          )
        })}

        <a href="mailto:sarahmajeed368@gmail.com">
          <div
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            className="btn"
          >
            Get in touch.
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
