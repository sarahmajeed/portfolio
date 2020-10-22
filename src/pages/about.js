import React from "react"
import "../styles/global.scss"
import Layout from "../components/Layout"
import Head from "../components/head"
import { Link } from "gatsby"

function About() {
  return (
    <div className="main" id="about">
      <Layout>
        <Head title="About" />
        <div className="tags">
          <Link style={{ textDecoration: "none" }} to="#about-me">
            <div className="about-tag">About Me</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="#education">
            <div className="education-tag">Education</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="#blog-writing">
            <div className="blog-tag">Blogs</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="#community-work">
            <div className="community-tag">Community building</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="#other-interests">
            <div className="interest-tag">My interests</div>
          </Link>
        </div>
        <div id="about-me">
          <p data-sal="slide-left" data-sal-delay="200" className="head">
            About Me
            <div
              data-sal="slide-left"
              data-sal-delay="200"
              className="span"
            ></div>
          </p>

          <p data-sal="slide-left" data-sal-delay="300">
            Hello! I am Sarah Majeed, an undergraduate software engineer based
            in Karachi, Pakistan.{" "}
          </p>

          <p data-sal="slide-left" data-sal-delay="400">
            I love making websites that have the potential to not just attract
            visitors but also give them an easy time by applying the best set of
            functionalities. I prefer my code to be clean and performant and my
            UI to be as sleek as possible.{" "}
          </p>

          <p data-sal="slide-left" data-sal-delay="500">
            I have worked both on the frontend and the backend side and im
            continuing to grow in these areas with time , practice, experience
            and learning.
          </p>
        </div>
        <div id="education">
          <p data-sal="slide-left" data-sal-delay="200" className="head">
            Education
            <div
              data-sal="slide-left"
              data-sal-delay="200"
              className="span"
            ></div>
          </p>
          <ul>
            <li data-sal="slide-left" data-sal-delay="300">
              NED University Of Engineering and Technology{" "}
              <p>Bachelors in Software Engineering</p>
            </li>
            <li data-sal="slide-left" data-sal-delay="400">
              BAMM Pechs College For Women
              <p>Intermediate- Pre-Engineering</p>
            </li>
            <li data-sal="slide-left" data-sal-delay="500">
              The Mama Parsi Girls' Secondary School
              <p>Matriculation - Biology</p>
            </li>
          </ul>
        </div>
        <div id="blog-writing">
          <p data-sal="slide-left" data-sal-delay="200" className="head">
            Blog Writing
            <div
              data-sal="slide-left"
              data-sal-delay="200"
              className="span"
            ></div>
          </p>
          <p data-sal="slide-left" data-sal-delay="300">
            Being a passionate learner, I also practice being a passionate
            mentor. Practicing mentorship through blogs helps me learn much
            myslef and hence I love it
          </p>
          <p data-sal="slide-left" data-sal-delay="300">
            You can view all the blogs <Link to="/blog">Here</Link>
          </p>
        </div>
        <div id="community-work">
          <p data-sal="slide-left" data-sal-delay="200" className="head">
            Community Building
            <div
              data-sal="slide-left"
              data-sal-delay="200"
              className="span"
            ></div>
          </p>
          <p data-sal="slide-left" data-sal-delay="300">
            I like building communities and making an impact by forming core
            leadership skills.{" "}
          </p>
          <p data-sal="slide-left" data-sal-delay="300">
            Some of my community related work is mentioned below:
          </p>
          <ul>
            <li data-sal="slide-left" data-sal-delay="400">
              Microsoft Learn Student Ambassador ,Karachi - Technical Lead{" "}
              <p>
                Being an MLSA, I work as a technical lead at my city community.
                I co-organize, host and mentor events with the passion of
                bringing a change.
              </p>
            </li>
            <li data-sal="slide-left" data-sal-delay="500">
              Developer Student Clubs, NEDUET - Marketing Lead <p></p>
            </li>
            <li data-sal="slide-left" data-sal-delay="600">
              ACM, NEDUET - Manager Corporate Relations
            </li>
          </ul>
        </div>
        <div id="other-interests">
          <p data-sal="slide-left" data-sal-delay="200" className="head">
            Other Interests
            <div
              data-sal="slide-left"
              data-sal-delay="200"
              className="span"
            ></div>
          </p>
          <p data-sal="slide-left" data-sal-delay="300" className="last-para">
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
