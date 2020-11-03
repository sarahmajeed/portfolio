import React from "react"
import Laptop from "../components/images/laptop.jpg"
import { FaHome } from "react-icons/fa"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"
import { FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

function Contact() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitterUsername
          githubUsername
          linkedinUsername
        }
      }
    }
  `)
  return (
    <div id="contact" className="main">
      <Head title="Contact" />
      <Layout>
        <div className="image">
          <img src={Laptop} alt="" />
          {/* <div className="layer"></div> */}
          <div className="contact-box">
            <Fade>
              <div className="head">
                <h1>Start a project</h1>
                <div className="icons">
                  <FaLinkedin className="linkedin" />
                  <FaGoogle className="google" />
                  <FaTwitter className="twitter" />
                </div>
              </div>
            </Fade>
            <Fade>
              <div className="contact1">
                <p className="header">Location</p>
                <p>Karachi, PK</p>
              </div>
            </Fade>
            <Fade>
              <div className="contact2">
                <p className="header">Email</p>
                <p>sarahmajeed368@gmail.com</p>
              </div>
            </Fade>
            <Fade>
              <div className="contact3">
                <p className="header-last">
                  Interested in working together? We should queue up a chat
                </p>
              </div>
            </Fade>
            <Fade>
              <div className="btn">Wan't to chat</div>
            </Fade>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
