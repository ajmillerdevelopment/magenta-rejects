import * as React from "react"
import logo from '../images/logo.svg'
import {Helmet} from 'react-helmet'
import './index.css'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { graphql } from "gatsby"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

// markup
const IndexPage = ({data}) => {
  const slides = data.allContentfulProduct.nodes.map((i) => {
    return (<div>
    <img className="slide-image" src={i.gallery[0].file.url} alt={i.gallery[0].description} />
    <p className="legend">{i.title} by {i.author.displayName}, ${i.price}</p>
    </div>)
  })
  const post = data.contentfulPost
  const postBodyJSON = JSON.parse(post.body.raw)
  console.log(postBodyJSON)
  const postBody = documentToReactComponents(postBodyJSON)
  console.log(postBody)
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
      <a href="/ansel" className="textLink">ansel (test)</a>
      <a className="textLink" href="/collabs">collabs</a>
      <a className="textLink" href="/shop">shop</a>
    </nav>
    <section className="shop">
        <h2>Shop</h2>
        <div className="container">
          <h3>See what's new from MR</h3>
          <div className="storePreview">
          <Carousel infiniteLoop={true} autoPlay={true} interval={10000} showThumbs={false} showStatus={false} showIndicators={false}>
            {slides}
        </Carousel>
          </div>
          <a className="textLink shopLink" href="/shop">Shop All</a>
        </div>
      </section>
      <section className="blog">
        <h2>Blog</h2>
        <div className="container">
          <h3>{post.title}</h3>
          <p className="subtitle">By: {post.author.displayName}</p>
          {postBody}
        </div>
      </section>
      
    </div>
  )
}

export default IndexPage
export const query = graphql`
query MyQuery {
  allContentfulProduct {
    nodes {
      price
      title
      gallery {
        file {
          url
        }
        description
      }
      author {
        displayName
      }
    }
  }
  contentfulPost {
    body {
      raw
      references {
        description
        file {
          url
        }
      }
    }
    author {
      displayName
    }
    title
  }
}
`