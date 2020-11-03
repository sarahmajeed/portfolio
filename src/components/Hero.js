import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"

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
        <Slide top>
          <h1 className="name"> Hi, I'm {data.site.siteMetadata.author}</h1>
        </Slide>

        <Fade>
          <p className="desc">
            I am a {data.site.siteMetadata.description}. My love for solving
            real world problems through visually attractive and highly
            functional websites, having an educational background in software
            engineering and strong technical skills make me stand out in my
            field of interest.
          </p>
        </Fade>
      </div>
      <Slide bottom>
        <div className="button">
          {data.allFile.edges.map(file => {
            return (
              <a download href={file.node.publicURL}>
                <div
                  // data-sal="slide-up"
                  // data-sal-delay="500"
                  // data-sal-easing="ease"
                  className="btn"
                >
                  Download Resume.
                </div>
              </a>
            )
          })}

          <a href="mailto:sarahmajeed368@gmail.com">
            <div className="btn">Get in touch.</div>
          </a>
        </div>
      </Slide>
    </div>
  )
}

export default Hero
