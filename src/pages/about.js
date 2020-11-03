import React from "react"
import "../styles/global.scss"
import Layout from "../components/Layout"
import Head from "../components/head"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"

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
        <Slide right delay={100}>
          <div id="about-me">
            <p
              //data-sal="slide-left" data-sal-delay="200"
              className="head"
            >
              About Me
              <div className="span"></div>
            </p>

            <p>
              Hello! I am Sarah Majeed, an undergraduate software engineer based
              in Karachi, Pakistan.{" "}
            </p>

            <p>
              I love making websites that have the potential to not just attract
              visitors but also give them an easy time by applying the best set
              of functionalities. I prefer my code to be clean and performant
              and my UI to be as sleek as possible.{" "}
            </p>

            <p>
              I have worked both on the frontend and the backend side and im
              continuing to grow in these areas with time , practice, experience
              and learning.
            </p>
          </div>
        </Slide>
        <Slide right delay={100}>
          <div id="education">
            <p className="head">
              Education
              <div className="span"></div>
            </p>
            <ul>
              <li>
                NED University Of Engineering and Technology{" "}
                <p>Bachelors in Software Engineering</p>
              </li>
              <li>
                BAMM Pechs College For Women
                <p>Intermediate- Pre-Engineering</p>
              </li>
              <li>
                The Mama Parsi Girls' Secondary School
                <p>Matriculation - Biology</p>
              </li>
            </ul>
          </div>
        </Slide>
        <Slide right delay={100}>
          <div id="blog-writing">
            <p className="head">
              Blog Writing
              <div className="span"></div>
            </p>
            <p>
              Being a passionate learner, I also practice being a passionate
              mentor. Practicing mentorship through blogs helps me learn much
              myslef and hence I love it
            </p>
            <p>
              You can view all the blogs <Link to="/blog">Here</Link>
            </p>
          </div>
        </Slide>
        <Slide right delay={100}>
          <div id="community-work">
            <p className="head">
              Community Building
              <div className="span"></div>
            </p>
            <p>
              I like building communities and making an impact by forming core
              leadership skills.{" "}
            </p>
            <p>Some of my community related work is mentioned below:</p>
            <ul>
              <li>
                Microsoft Learn Student Ambassador ,Karachi - Technical Lead{" "}
                <p>
                  Being an MLSA, I work as a technical lead at my city
                  community. I co-organize, host and mentor events with the
                  passion of bringing a change.
                </p>
              </li>
              <li>
                Developer Student Clubs, NEDUET - Marketing Lead <p></p>
              </li>
              <li>ACM, NEDUET - Manager Corporate Relations</li>
            </ul>
          </div>
        </Slide>
        <Slide right delay={100}>
          <div id="other-interests">
            <p className="head">
              Other Interests
              <div
                data-sal="slide-left"
                data-sal-delay="200"
                className="span"
              ></div>
            </p>
            <p className="last-para">
              Apart from coding, which takes up major chunk of my day, I
              absolutely love reading books and writing random excerpts. I also
              enjoy my time outdoors be it a long drive or a park visit!{" "}
            </p>
          </div>
        </Slide>
      </Layout>
    </div>
  )
}

export default About
