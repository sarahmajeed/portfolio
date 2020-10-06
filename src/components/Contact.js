import React from "react"
import Laptop from "./images/laptop.jpg"

function Contact() {
  return (
    <div id="contact">
      <div className="image">
        <img src={Laptop} alt="" />
        <div className="layer"></div>
        <div className="contact-box">
          <h1 className="title">Contact Me</h1>
          <h3>Location</h3>
          <h4>Karachi, Pakistan</h4>
          <h3>Email</h3>
          <h4>sarahmajeed368@gmail.com</h4>
        </div>
      </div>
    </div>
  )
}

export default Contact