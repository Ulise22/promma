import Image from 'next/image'
import styles from './ArticleHero.module.css'

export default function ArticleHero ({title, subtitle, image}) {
    return(
        <section className={styles.articleHero}>
            <h1 className={styles.articleHero__title}> {title} </h1>
            <h2 className={styles.articleHero__subtitle}> {subtitle} </h2>
            <Image className={styles.articleHero__image} src={image}  alt='title'/>
        </section>
    )
}