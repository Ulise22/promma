import Link from 'next/link'
import styles from './ArticlePreview.module.css'
import Image from 'next/image'

export default function ArticlePreview ({title, img, url}) {
    return(
        <Link className={styles.articlePreview} href={url}>
            <Image className={styles.articlePreview__image} src={img} alt={title} />
            <h3 className={styles.articlePreview__title}> {title} </h3>
        </Link>
    )
}