import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sarah from "../content/about/image.jpg"

function About() {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             description
  //           }
  //           html
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div id="about">
      <h1 className="title">About Me</h1>
      <div className="grid">
        <div className="description">
          <p>
            Hello! I am Sarah Majeed, an undergraduate software engineer based
            in Karachi, Pakistan.{" "}
          </p>

          <p>
            I love making websites that have the potential to not just attract
            visitors but also give them an easy time by applying the best set of
            functionalities. I prefer my code to be clean and performant and my
            UI to be as sleek as possible.{" "}
          </p>

          <p>
            I have worked both on the frontend and the backend side and im
            continuing to grow in these areas with time , practice, experience
            and learning.
          </p>
          <p>
            Apart from coding, which takes up major chunk of my day, I
            absolutely love reading books and writing random excerpts. I also
            enjoy my time outdoors be it a long drive or a park visit!{" "}
          </p>
        </div>
        <div className="image">
          <img
            className="me"
            height="300px"
            width="300px"
            src={Sarah}
            alt="Sarah"
          />
          <div className="wrapper"></div>
        </div>
      </div>
    </div>
  )
}

export default About
