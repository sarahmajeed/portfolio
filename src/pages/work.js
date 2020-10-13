import React from "react"
import Layout from "../components/Layout"
import elegantclothing from "../components/images/elegantclothing.png"
import facedetection from "../components/images/facedetection.png"
import weatherforecast from "../components/images/weatherforecast.png"
import { FaStar, FaGithub, FaArrowRight, FaLink } from "react-icons/fa"

function Work() {
  return (
    <div id="work" className="main">
      <Layout>
        <h1 className="title">My projects</h1>
        <div className="project-wrapper">
          <div className="img-wrapper">
            <div className="plain"></div>
            <img className="img" src={elegantclothing} alt="elegant clothing" />
          </div>
          <div className="text">
            <p className="header">
              Elegant Clothing - Version 1.0
              <div className="icns">
                <a
                  className="git"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sarahmdawood/clothing-app"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://elegant-clothing.web.app/"
                >
                  <FaLink />
                </a>
              </div>
            </p>
            <p>
              A PERN Stack e-commerce application that helps people shop online
            </p>
            <p>Key Features:</p>

            <p>
              <FaArrowRight /> Display of entire collection with prices
            </p>
            <p>
              <FaArrowRight /> Choice to opt for desired size - small, medium,
              large
            </p>
            <p>
              <FaArrowRight /> Checkout
            </p>
            <p>
              <FaArrowRight /> Download receipt after payment
            </p>
          </div>
        </div>

        <div className="project-wrapper">
          <div className="img-wrapper">
            <div className="plain"></div>
            <img className="img" src={facedetection} alt="elegant clothing" />
          </div>
          <div className="text">
            <p className="header">
              Face Recognition - Version 1.0
              <div className="icns">
                <a
                  className="git"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sarahmdawood/face-recognition-app"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://facedetectionhub.web.app/"
                >
                  <FaLink />
                </a>
              </div>
            </p>
            <p>
              A PERN Stack application that detects faces in an image through{" "}
              <b>clarifai</b> api.
            </p>
            {/* <p>Key Features:</p>

            <p>
              <FaArrowRight /> Signin/Signout routes through expressjs.
            </p>
            <p>
              <FaArrowRight /> Choice to opt for desired size - small, medium,
              large
            </p>
            <p>
              <FaArrowRight /> Checkout
            </p>
            <p>
              <FaArrowRight /> Download receipt after payment
            </p> */}
          </div>
        </div>

        <div className="project-wrapper">
          <div className="img-wrapper">
            <div className="plain"></div>
            <img className="img" src={weatherforecast} alt="elegant clothing" />
          </div>
          <div className="text">
            <p className="header">
              weatherforecast
              <div className="icns">
                <a
                  className="git"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Sarahmdawood/WeatherForecastApp"
                >
                  <FaGithub />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://weatherforecastapp-f3371.web.app/"
                >
                  <FaLink />
                </a>
              </div>
            </p>
            <p>
              A PERN Stack e-commerce application that helps people shop online
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Work
