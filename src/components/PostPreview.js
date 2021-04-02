import React from 'react'
import * as styles from './PostPreview.module.css'

export default function PostPreview(props) {
    return(
      <div className={styles.container}>
        <div className={styles.textbox}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.preview}>{props.preview}</p>
        </div>
        <img className={styles.image} src={props.image} alt={props.title}/>
    </div>  
    )
}