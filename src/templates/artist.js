import React from 'react'
import logo from '../images/logo.svg'
import {Helmet} from 'react-helmet'
import Product from '../components/Product'
import PostPreview from '../components/PostPreview'
import './artist.css'

export default function blog({pageContext}) {
    const dummies = [1,2,3,4,5,6]
    const products = dummies.map((i) => {
        return <Product key={i} image="https://picsum.photos/180/120" alt="#" title="Product" author="Artist" price="$10.00"/>
    })
    const posts = dummies.map((i) => {
        return <PostPreview key={i} image="https://picsum.photos/130/130" alt="#" title="This is a blog post" preview="This is a preview of the post's content. Lorem ipsum lorem lorem ipsum"/>
    })

    return(
        <div className="pageRoot">
        <Helmet>
            <title>{pageContext.displayName}</title>
        </Helmet>
        <header>
            <a href="/"><img className="logo grow" src={logo} alt="Magenta Rejects Logo"/></a>
            <h1>{pageContext.displayName}</h1>
        </header>
        <main>
            <section className="about container">
                <h3>about the artist</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga debitis expedita dolorem autem. Magnam quam, debitis nam vero sint quas aliquam soluta minima deserunt tenetur deleniti, voluptatum esse quisquam, itaque quasi exercitationem ipsa architecto possimus beatae non eos ipsum atque. Corrupti veritatis doloribus eius laboriosam ab eaque minus facere.</p>
            </section>   
            <section className="products">
            {products}
            </section>
            <button><a href="/shop?rebecca">See More</a></button>
        </main>
        <section className="posts">
                {posts}
            </section> 
        </div>
    )
}