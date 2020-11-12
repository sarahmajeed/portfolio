import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.scss"
import favicon from "./images/favicon.ico"
import Helmet from "react-helmet"

function Layout(props) {
  return (
    <div className="layout">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
