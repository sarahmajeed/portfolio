import React from "react"
import Layout from "../components/Layout"

import Head from "../components/head"
import Hero from "../components/Hero"
import About from "../components/about"
import Skills from "../components/Skills"
import Blog from "../components/blog"
import Icons from "../components/Icons"
export default function Home() {
  return (
    <div className="main">
      <Layout>
        <Head />
        <Icons />
        <Hero />

        <About />

        <Skills />
        <Blog />
      </Layout>
    </div>
  )
}
