import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "./Header.scss"
import Icons from "./Icons"

const Header = () => {
  return (
    <div className="nav">
      <div className="fixed-icons">
        <Icons />
      </div>

      <div className="links">
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="about" to="/about">
          About
        </Link>
        <Link className="skills" to="/skills">
          Skills
        </Link>
        <Link className="blog" to="/blog">
          Blogs
        </Link>
        <Link className="work" to="/work">
          Work
        </Link>
        <Link className="contact" to="/contact">
          {" "}
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
