import React, {useState} from 'react'
import logo from '../images/logo.svg'
import {Helmet} from 'react-helmet'
import './artist.css'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'


export default function Blog({pageContext}) {
    const posts = pageContext.posts.map((post) => {
        const json = JSON.parse(post.body.raw)
        const comps = documentToReactComponents(json)
        post.body.text = comps
        return post
    })
    const [hero, setHero] = useState(posts[0])
    const postPreviews = pageContext.posts.map((post, i) => {
        return <div className="postPreview" onClick={() => setHero(posts[i])} key={i}><h3>{post.title}</h3><p>{post.createdAt}</p></div>
    })
    console.log(posts)
    return(
        <div className="pageRoot">
        <Helmet>
            <title>{pageContext.displayName}</title>
        </Helmet>
        <header>
            <a href="/"><img className="logo grow" src={logo} alt="Magenta Rejects Logo"/></a>
            <h1>{pageContext.displayName}</h1>
        </header>
        <aside>
            <div className="container">
                <h3>about the artist</h3>
                <p>{pageContext.about}</p>
                <div>{postPreviews}</div>
            </div>
            <h2>Shop</h2>
        </aside>
        <main>
            <article className="container">
                {hero.body.text}
            </article>
        </main>
        </div>
    )
}