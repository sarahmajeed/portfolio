import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import reactjs from "../components/images/react.jpg"
import {
  FaReact,
  FaHtml5,
  FaCss3,
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
      <div className="grid">
        <FaReact className="react" size={100} />

        <FaCss3 className=" css" size={100} />
        <FaJs className=" js" size={100} />
        <FaNode className=" node" size={100} />
        <FaDatabase className=" db" size={100} />
        <FaSass className=" sass" size={100} />
        <FaHtml5 className="html" size={100} />
      </div>
    </div>
  )
}

export default Hero
