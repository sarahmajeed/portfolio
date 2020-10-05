import React from "react"
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
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
        rel="noopener noreferrer"
        target="_blank"
        href={`https://github.com/${data.site.siteMetadata.githubUsername}`}
        className="github"
      >
        <FaGithub size={32} />
      </a>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/${data.site.siteMetadata.twitterUsername}`}
        className="twitter"
      >
        <FaTwitter size={32} />
      </a>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://linkedin.com/in/${data.site.siteMetadata.linkedinUsername}`}
        className="linkedin"
      >
        <FaLinkedin size={32} />
      </a>
    </div>
  )
}

export default Icons
