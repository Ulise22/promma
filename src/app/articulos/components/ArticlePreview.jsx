import Link from 'next/link'
import styles from './ArticlePreview.module.css'
import Image from 'next/image'

export default function ArticlePreview ({title, img, url, text, author, date}) {
    return(
        <Link className={styles.articlePreview} href={url}>
            <Image className={styles.articlePreview__image} loading='lazy' src={img} alt={title} />
            <h3 className={styles.articlePreview__title}> {title} </h3>
            <p> {text} </p>
            <div className={styles.articlePreview__info__container}>
                <h4> {author && author || 'FULLMMA'} </h4>
                {date && <p> {date} </p>}
            </div>
        </Link>
    )
}