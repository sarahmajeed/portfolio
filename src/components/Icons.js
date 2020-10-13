import React from "react"
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMedium,
  FaMediumM,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

function Icons() {
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
    <div className="fixed-icons">
      <a
        className="git"
        rel="noopener noreferrer"
        target="_blank"
        href={`https://github.com/${data.site.siteMetadata.githubUsername}`}
        className="github"
      >
        <FaGithub size={22} />
      </a>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/${data.site.siteMetadata.twitterUsername}`}
        className="twitter"
      >
        <FaTwitter size={22} />
      </a>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://linkedin.com/in/${data.site.siteMetadata.linkedinUsername}`}
        className="linkedin"
      >
        <FaLinkedin size={22} />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://medium.com/@sarahmajeed"
        className="medium"
      >
        <FaMediumM size={22} />
      </a>
    </div>
  )
}

export default Icons
