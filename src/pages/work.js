import React from "react"
import Layout from "../components/Layout"
import elegantclothing from "../components/images/elegantclothing.jpeg"
import facedetection from "../components/images/facedetection.jpeg"
import weatherforecast from "../components/images/weatherforecast.jpeg"
import { FaStar, FaGithub, FaArrowRight, FaLink } from "react-icons/fa"
import Head from "../components/head"
import Slide from "react-reveal/Slide"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Work() {
  const data = useStaticQuery(graphql`
    query {
      elegantclothing: file(
        relativePath: { eq: "components/images/elegantclothing.JPEG" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      face: file(relativePath: { eq: "components/images/facedetection.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      weather: file(
        relativePath: { eq: "components/images/weatherforecast.jpeg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="work" className="main">
      <Layout>
        <Head title="Work" />
        <div className="main">
          <Slide up>
            <h1 className="title">My projects</h1>
          </Slide>

          <div className="project-wrapper">
            <Slide left>
              <div className="img-wrapper">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://elegant-clothing.web.app/"
                >
                  <div className="plain"></div>

                  <Img
                    className="img"
                    fluid={data.elegantclothing.childImageSharp.fluid}
                  />
                </a>
              </div>
            </Slide>
            <Slide right>
              <div className="text">
                <p className="header">
                  Elegant Clothing - Version 1.0
                  <div className="icns">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/Sarahmdawood/clothing-app"
                    >
                      <FaGithub className="git" />
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="http://elegant-clothing.web.app/"
                    >
                      <FaLink className="link" />
                    </a>
                  </div>
                </p>
                <p>
                  A PERN Stack e-commerce application that helps people shop
                  online
                </p>
                <p>
                  <h2>TECH STACK</h2>HTML5, SCSS, ReactJs, Node/Express,
                  PostgreSQL
                </p>
              </div>
            </Slide>
          </div>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://facedetectionhub.web.app/"
          >
            <div className="project-wrapper">
              <Slide left>
                <div className="img-wrapper">
                  <div className="plain"></div>

                  <Img
                    className="img"
                    fluid={data.face.childImageSharp.fluid}
                  />
                </div>
              </Slide>
              <Slide right>
                <div className="text">
                  <p className="header">
                    Face Recognition - Version 1.0
                    <div className="icns">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Sarahmdawood/face-recognition-app"
                      >
                        <FaGithub className="git" />
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://facedetectionhub.web.app/"
                      >
                        <FaLink className="link" />
                      </a>
                    </div>
                  </p>
                  <p>
                    A PERN Stack application that detects faces in an image
                    through <b>clarifai</b> api.
                  </p>
                  <p>
                    <h2>TECH STACK</h2>HTML5, SCSS, ReactJs, Node/Express,
                    PostgreSQL, Clarifai API
                  </p>
                </div>
              </Slide>
            </div>
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://weatherforecastapp-f3371.web.app/"
          >
            <div className="project-wrapper">
              <Slide left>
                <div className="img-wrapper">
                  <Img
                    className="img"
                    fluid={data.weather.childImageSharp.fluid}
                  />
                </div>
              </Slide>
              <Slide right>
                <div className="text">
                  <p className="header">
                    weatherforecast
                    <div className="icns">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Sarahmdawood/WeatherForecastApp"
                      >
                        <FaGithub className="git" />
                      </a>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://weatherforecastapp-f3371.web.app/"
                      >
                        <FaLink className="link" />
                      </a>
                    </div>
                  </p>
                  <p>
                    A PERN Stack e-commerce application that helps people shop
                    online
                  </p>
                  <p>
                    <h2>TECH STACK</h2>HTML5, SCSS, ReactJs
                  </p>
                </div>
              </Slide>
            </div>
          </a>
        </div>
      </Layout>
    </div>
  )
}

export default Work
