import React from "react"
import "../styles/global.scss"
import Layout from "../components/Layout"
import Head from "../components/head"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
import { FaArrowRight } from "react-icons/fa"

function About() {
  const handleNext = () => {
    document.getElementById("first").style.display = "none"
    document.getElementById("second").style.display = "block"
  }
  const handleImpact = () => {
    document.getElementById("second").style.display = "none"
    document.getElementById("third").style.display = "block"
  }

  return (
    <div className="main" id="about">
      <Layout>
        <Head title="About" />

        <section id="first">
          <div className="content">
            <h1>About Me</h1>
            <p className="desc">
              <h3>Hey there fellas!</h3>I am a Full Stack Web Developer. My love
              for solving real world problems through visually attractive and
              highly functional websites, having an educational background in
              software engineering and strong technical skills make me stand out
              in my field of interest.
            </p>
            <a href="#second">
              <button className="btn">
                skills
                <FaArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </section>

        <section id="second">
          <div className="content">
            <h1>Skills</h1>
            <p className="skills">
              {/* <h3>My Skills</h3> */}
              <div className="frontend">
                <p>FRONT END</p>
                <span></span>
                <ul>
                  <li> JavaScript</li>
                  <li>React</li>
                  <li>CSS/ SCSS</li>
                  <li>Bootstrap</li>
                  <li>Responsive Layout / Flex / Grid</li>
                  <li>HTML5</li>
                </ul>
              </div>
              <div className="backend">
                <p>BACK END</p>
                <span></span>
                <ul>
                  <li> Node / Express</li>
                  <li>REST API</li>
                  <li>SQL (PostgreSQL)</li>
                </ul>
              </div>
              <div className="tools">
                <p>TOOLS</p>
                <span></span>
                <ul>
                  <li> Git/ Github</li>
                  <li>Web Hosting - Firebase, Heroku, AWS, Azure</li>
                  <li>Communication Tools - Slack, Trello</li>
                </ul>
              </div>
            </p>
            <a href="#third">
              <button className="btn">
                Building Impact
                <FaArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </section>

        <section id="third">
          <div className="content">
            <h1>Building Impact</h1>
            <p className="impact">
              I am active community builder with the solid aim of building
              impact through my work. I am part of communities like DSC, MLSA
              and ACM. I help fellow tech enthusiasts through blogs,
              contributing to open source and hosting meaningful events.
            </p>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default About
