import React from "react"
import "../styles/global.scss"
import Layout from "../components/Layout"
import Head from "../components/head"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"

function About() {
  return (
    <div className="main" id="about">
      <Layout>
        <Head title="About" />
        <div className="outer-box">
          <p className="desc">
            I am a Full Stack Web Developer. My love for solving real world
            problems through visually attractive and highly functional websites,
            having an educational background in software engineering and strong
            technical skills make me stand out in my field of interest.
          </p>

          <div className="inner-circle"></div>
        </div>
      </Layout>
    </div>
  )
}

export default About
