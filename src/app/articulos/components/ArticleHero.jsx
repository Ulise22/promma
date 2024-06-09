'use client'
import Image from 'next/image'
import styles from './ArticleHero.module.css'

export default function ArticleHero ({title, subtitle, image, date, author}) {
    const defaultAuthor = 'FULLMMA'
    return(
        <section className={styles.articleHero}>
            <h1 className={styles.articleHero__title}> {title} </h1>
            <h2 className={styles.articleHero__subtitle}> {subtitle} </h2>
            <Image className={styles.articleHero__image} src={image}  alt='title'/>
            {date && <p> <b>{author || defaultAuthor }</b>, <time datatime={date}>{date}</time> </p>}
        </section>
    )
}