import React from "react"
import Layout from "../components/Layout"

import Head from "../components/head"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <div className="main">
      <Layout>
        <Head />

        <Hero />
      </Layout>
    </div>
  )
}
