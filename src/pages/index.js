import * as React from "react"
import logo from '../images/logo.svg'
import './index.css'

// markup
const IndexPage = () => {
  return (
    <div className="pageRoot">
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
          <h3>See what's new from MR</h3>
          <img src="https://picsum.photos/500/400" alt="placeholder"/>
          <a href="/shop">Shop All</a>
        </div>
      </section>
      <section>
        <h2>Blog</h2>
        <div className="container">
          <h3>This is a blog post</h3>
          <h4>By: Poppy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst proin orci quis interdum ultricies nibh. Mi euismod eu in nunc dui mauris placerat. Quam pretium nisi, et integer in pretium, sit felis elit. Dui in quam viverra libero ultrices nibh sed elementum leo. Hendrerit arcu aenean sed lacus, gravida ipsum. Sit turpis gravida laoreet sed nunc pellentesque. Fringilla pellentesque proin at sed lectus massa. Semper ut phasellus mattis posuere ullamcorper ultrices lorem. Ullamcorper commodo nulla pulvinar fames in id ut vestibulum, rhoncus. Quis suscipit convallis tortor venenatis donec metus elementum.</p>
        </div>
      </section>
    </main>
    </div>
  )
}

export default IndexPage
