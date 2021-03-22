import * as React from "react"
import logo from '../images/logo.svg'
import './global.css'

// markup
const IndexPage = () => {
  return (
    <>
    <header>
      <img src={logo} alt="Magenta Rejects Logo"/>
      <div className="titlegroup">
        <h1>MAGENTA REJECTS</h1>
        <p className="subhead">...is an art collective</p>
      </div>
    </header>
    <nav>
      <a href="/rebecca">rebecca</a>
      <a href="/mars">mars</a>
      <a href="/luxpacifica">lux pacifica</a>
      <a href="/saribble">s.a. ribble</a>
      <a href="/collabs">collabs</a>
      <a href="/shop">shop</a>
    </nav>
    <main>
      <section>
        <h2>Shop</h2>
        <div className="container">

        </div>
      </section>
      <section>
        <h2>Blog</h2>
        <div className="container">
          
        </div>
      </section>
    </main>
    </>
  )
}

export default IndexPage
