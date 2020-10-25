import React from "react"
import Layout from "../components/Layout"
import Head from "../components/head"

function Skills() {
  return (
    <div className="main" id="skills">
      <Layout>
        <Head title="Skills" />
        <h1 className="title">Skills</h1>
        <div className="grid-wrapper">
          <div className="frontend">
            <span></span>
            <ul>
              <li>HTML5</li>
              <li>CSS, SCSS, Bootstrap</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>GatsbyJS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="backend">
            <span></span>
            <ul>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>REST Api</li>
              <li>SQL Database (PostgreSQl)</li>
              <li>Familiar with GraphQl</li>
            </ul>
          </div>
          <div className="Tools">
            <span></span>
            <ul>
              <li>Git/Github</li>
              <li>Contentful</li>
              <li>Heroku, AWS, Azure and Firebase Hosting</li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Skills
