import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-reveal/Slide"

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaNode,
  FaSass,
} from "react-icons/fa"

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
      <div className="flex-wrapper">
        <FaReact className="react" size={70} />

        <FaCss3Alt className=" css" size={70} />
        <FaJs className=" js" size={70} />
        <FaNode className=" node" size={70} />
        <FaDatabase className=" db" size={70} />
        <FaSass className=" sass" size={70} />
        <FaHtml5 className="html" size={70} />
        <div className="section">
          <Slide top>
            <h1> Hi,</h1>
            <div className="name">
              <div className="head">
                {" "}
                <h1>I'm </h1>
              </div>
              <div className="part">
                <h1> {data.site.siteMetadata.author},</h1>
              </div>
            </div>

            <h1 className="profession">
              {data.site.siteMetadata.description}.
            </h1>
            <p>CSS / JavaScript / React / Node</p>
          </Slide>
        </div>

        <div className="button">
          {data.allFile.edges.map(file => {
            return (
              <a download href={file.node.publicURL}>
                <div className="btn">Download Resume.</div>
              </a>
            )
          })}

          <a href="mailto:sarahmajeed368@gmail.com">
            <div className="btn">Get in touch.</div>
          </a>
        </div>
      </div>
      {/* <div className="grid">
        
      </div> */}
    </div>
  )
}

export default Hero
