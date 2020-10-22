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
      <Layout>
        <Head title="Contact" />
        <div className="image">
          <img src={Laptop} alt="" />
          <div className="layer">
            <Link to="/">
              <FaHome className="home" size={44} />
            </Link>
          </div>
          <div className="contact-box">
            <div className="head">
              <h1>Start a project</h1>
              <div className="fixed-icons">
                <FaLinkedin />
                <FaGoogle />
                <FaTwitter />
              </div>
            </div>

            <p>Interested in working together? We should queue up a chat</p>
            <div className="btn">Wan't to chat</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
