import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "./Header.scss"
import Icons from "./Icons"

const Header = () => {
  // const openNav = () => {
  //   console.log("Opening it dude!")
  //   let v = document
  //     .getElementById("hidden-burger")
  //     .classList.toggle("after-click")
  //   console.log(v)
  //   document.getElementById("link-lists").classList.toggle("link-show")
  //   document.getElementById("link-lists").classList.toggle("main")
  // }
  return (
    <div className="nav">
      <div className="fixed-icons">
        <Icons />
      </div>

      <div className="links">
        <span className="hidden">></span>
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

        {/* <div onClick={openNav} id="hidden-burger">
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div> */}
      </div>
    </div>
  )
}

export default Header
