import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "./Header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div className="nav">
      <div className="title">
        <h1>{data.site.siteMetadata.author}</h1>
      </div>

      <div className="links">
        <Link className="about" to="#about">
          About
        </Link>
        <Link className="skills" to="#skills">
          Skills
        </Link>
        <Link className="work" to="#work">
          Work
        </Link>
        <Link className="contact" to="#contact">
          {" "}
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
