import Link from 'next/link'
import styles from './ArticlePreview.module.css'
import Image from 'next/image'

export default function ArticlePreview ({title, img, url, text, author, date}) {
    return(
        <Link className={styles.articlePreview} href={url}>
            <Image className={styles.articlePreview__image} src={img} alt={title} />
            <p className={styles.articlePreview__title}> {title} </p>
            <span> {text} </span>
            <div className={styles.articlePreview__info__container}>
                <h4> {author && author || 'FULMMA'} </h4>
                {date && <p> {date} </p>}
            </div>
        </Link>
    )
}