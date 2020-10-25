import React from "react"
import Laptop from "../components/images/laptop.jpg"
import { FaHome } from "react-icons/fa"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"
import { FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa"

function Contact() {
  return (
    <div id="contact" className="main">
      <Head title="Contact" />
      <Layout>
        <div className="image">
          <img src={Laptop} alt="" />
          {/* <div className="layer"></div> */}
          <div className="contact-box">
            <div className="head">
              <h1>Start a project</h1>
              <div className="icons">
                <FaLinkedin className="linkedin" />
                <FaGoogle className="google" />
                <FaTwitter className="twitter" />
              </div>
            </div>
            <div className="contact1">
              <p className="header">Location</p>
              <p>Karachi, PK</p>
            </div>
            <div className="contact2">
              <p className="header">Email</p>
              <p>sarahmajeed368@gmail.com</p>
            </div>
            <div className="contact3">
              <p className="header-last">
                Interested in working together? We should queue up a chat
              </p>
            </div>
            <div className="btn">Wan't to chat</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
