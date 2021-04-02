import React from 'react'
import * as productStyles from './Product.module.css'

export default function Product(props) {
    const path = `/${props.id}`
    return(
        <div className={productStyles.container}>
        <img src={props.image} alt={props.alt} className={productStyles.image}/>
        <h3 className={productStyles.title}>{props.title}</h3>
        <p className={productStyles.subtitle}>By: {props.author}</p>
        <p className={productStyles.price}>{props.price}</p>
        </div>
    )
}