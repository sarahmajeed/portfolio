import React from "react"
import "../styles/global.scss"
import Layout from "../components/Layout"
import Head from "../components/head"

function About() {
  const handleAbout = () => {
    const v = document
      .getElementById("about-me")
      .classList.toggle("handle-about")
    console.log(v)
  }
  return (
    <div className="main" id="about">
      <Layout>
        <Head title="About" />
        <div className="tags">
          <div onClick={handleAbout} className="about-tag">
            About Me
          </div>
          <div className="education-tag">Education</div>
          <div className="blog-tag">Blogs</div>
          <div className="community-tag">Community building</div>
          <div className="interest-tag">My interests</div>
        </div>
        <div id="about-me">
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
        </div>
        <div id="education">
          <p>Mama Parsi</p>
        </div>
        <div id="blog-writing">
          <p>write blogs</p>
        </div>
        <div id="community-work">
          <p>MLSA</p>
        </div>
        <div id="other-interests">
          <p className="last-para">
            Apart from coding, which takes up major chunk of my day, I
            absolutely love reading books and writing random excerpts. I also
            enjoy my time outdoors be it a long drive or a park visit!{" "}
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default About
