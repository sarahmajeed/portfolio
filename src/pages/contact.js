import React from "react"
import Laptop from "../components/images/laptop.jpg"
import { FaHome } from "react-icons/fa"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"

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
            <h1 className="title">Contact Me</h1>
            <h3>Location</h3>
            <h4>Karachi, Pakistan</h4>
            <h3>Email</h3>
            <h4>sarahmajeed368@gmail.com</h4>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
