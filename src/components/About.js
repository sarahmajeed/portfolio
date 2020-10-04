import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sarah from "../content/about/image.jpg"

function About() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             description
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div id="about">
      <h1 className="title">About Me</h1>
      <div className="grid">
        <div className="description">
          Hi there. I am Sarah Majeed. I am a web developer based in Karachi,
          Pakistan.
        </div>
        <div className="image">
          <img
            className="me"
            height="300px"
            width="300px"
            src={Sarah}
            alt="Sarah"
          />
          <div className="wrapper"></div>
        </div>
      </div>
    </div>
  )
}

export default About
