'use client'
import Image from 'next/image'
import styles from './ArticleHero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function ArticleHero ({title, subtitle, image, date, author}) {
    const defaultAuthor = 'FULLMMA'
    return(
        <section className={styles.articleHero}>
            <h1 className={styles.articleHero__title}> {title} </h1>
            <h2 className={styles.articleHero__subtitle}> {subtitle} </h2>
            <Image className={styles.articleHero__image} src={image}  alt='title'/>
            {date && <p className={styles.articleHero__info}> 
                <b>{author || defaultAuthor }</b>,
                <time datatime={date}>{date}</time>
                <a target='_Blank' href='https://www.facebook.com/people/Fullmma/61565690940390/'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a>
                <a target='_Blank' href='https://x.com/MmaFull265'> <FontAwesomeIcon icon={faSquareXTwitter} size='xl' /> </a>
                 </p>}
        </section>
    )
}