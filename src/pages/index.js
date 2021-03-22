import * as React from "react"
import logo from '../images/MRlogo-01.2984f31b.svg'

// markup
const IndexPage = () => {
  return (
    <>
    <header>
      <img src={logo} alt="Magenta Rejects Logo"/>
      <div className="titlegroup">
        <h1>MAGENTA REJECTS</h1>
        <h2>...is an art collective</h2>
      </div>
    </header>
    <nav>
      <a href="/rebecca">rebecca</a>
      <a href="/mars">mars</a>
      <a href="/luxpacifica">lux pacifica</a>
      <a href="/saribble"></a>
      <a href="/collabs">collabs</a>
      <a href="/shop">shop</a>
    </nav>
    </>
  )
}

export default IndexPage
