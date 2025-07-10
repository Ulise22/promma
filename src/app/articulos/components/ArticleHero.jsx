import Image from 'next/image'
import styles from './ArticleHero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function ArticleHero ({title, subtitle, image, date, author, updatedDate}) {
    const defaultAuthor = 'FULLMMA'
    return(
        <section className={styles.articleHero}>
            <h1 className={styles.articleHero__title}> {title} </h1>
            <h2 className={styles.articleHero__subtitle}> {subtitle} </h2>
            <Image className={styles.articleHero__image} loading='eager' sizes='(max-width: 768px) 100vw, (max-widht: 1200px) 50vw, 33vw' priority={true} src={image} alt={title} width={800} />
            {date && <p className={styles.articleHero__info}> 
                <b>{author || defaultAuthor }</b>,
                <time dataTime={date}>{date}</time>
                <a target='_Blank' href='https://www.facebook.com/people/Fullmma/61565690940390/'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a>
                <a target='_Blank' href='https://x.com/MmaFull265'> <FontAwesomeIcon icon={faSquareXTwitter} size='xl' /> </a>
                {updatedDate && <span className={styles.articleHero__info}>Fecha de Actualización: <time dateTime={date}> {updatedDate} </time></span>}
                 </p>}
        </section>
    )
}