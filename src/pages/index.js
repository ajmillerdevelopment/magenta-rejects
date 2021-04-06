import * as React from "react"
import logo from '../images/logo.svg'
import {Helmet} from 'react-helmet'
import './index.css'

// markup
const IndexPage = () => {
  return (
    <div className="pageRoot">
    <Helmet>
      <title>Magenta Rejects</title>
    </Helmet>
    <header>
      <a href="/"><img className="logo grow" src={logo} alt="Magenta Rejects Logo"/></a>
      <div className="titlegroup">
        <h1>MAGENTA REJECTS</h1>
        <p className="subhead">...is an art collective</p>
      </div>
    </header>
    <nav>
      <a className="textLink" href="/rebecca">rebecca</a>
      <a className="textLink" href="/mars">mars</a>
      <a className="textLink" href="/luxpacifica">lux pacifica</a>
      <a className="textLink" href="/saribble">s.a. ribble</a>
      <a className="textLink" href="/collabs">collabs</a>
      <a className="textLink" href="/shop">shop</a>
    </nav>
      <section className="shop">
        <h2>Shop</h2>
        <div className="container">
          <h3>See what's new from MR</h3>
          <div className="storePreview">
            <img className="storePreview grow" src="https://picsum.photos/480/480" alt="placeholder"/>
          </div>
          <a className="textLink shopLink" href="/shop">Shop All</a>
        </div>
      </section>
      <section className="blog">
        <h2>Blog</h2>
        <div className="container">
          <h3>This is a blog post</h3>
          <p className="subtitle">By: Poppy</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst proin orci quis interdum ultricies nibh. Mi euismod eu in nunc dui mauris placerat. Quam pretium nisi, et integer in pretium, sit felis elit. Dui in quam viverra libero ultrices nibh sed elementum leo. Hendrerit arcu aenean sed lacus, gravida ipsum. Sit turpis gravida laoreet sed nunc pellentesque. Fringilla pellentesque proin at sed lectus massa. Semper ut phasellus mattis posuere ullamcorper ultrices lorem. Ullamcorper commodo nulla pulvinar fames in id ut vestibulum, rhoncus. Quis suscipit convallis tortor venenatis donec metus elementum.</p>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
