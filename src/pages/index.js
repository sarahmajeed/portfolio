import React from "react"
import Layout from "../components/Layout"

import Head from "../components/head"
import Hero from "../components/Hero"
import About from "../components/about"
import Skills from "../components/Skills"
import Blog from "../components/blog"
import Icons from "../components/Icons"
import Work from "../components/work"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <div className="main">
      <Layout>
        <Head />

        <Hero />

        <About />

        <Skills />
        <Blog />
        <Work />
        <Contact />
      </Layout>
    </div>
  )
}
