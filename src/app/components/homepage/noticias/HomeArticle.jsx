import Image from 'next/image'
import styles from './homeArticle.module.css'
import Link from 'next/link'

export default function HomeArticle ({img, title, description, author, date, link}) {
    return(
        <Link className={styles.noticiaArticle} href={link}>
            <Image className={styles.noticiaArticle__image} src={img} alt={title} />
            <article className={styles.noticiaArticle__container}>
                <h3 className={styles.noticiaArticle__title}> {title} </h3>
                <p className={styles.noticiaArticle__desc}> {description} </p>
                <div className={styles.noticiaArticle__info}>
                    <b className={styles.noticiaArticle__info__author}> {author} </b>
                    <span className={styles.noticiaArticle__info__date}> {date} </span>
                </div>
            </article>
        </Link>
    )
}