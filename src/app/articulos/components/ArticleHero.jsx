import Image from 'next/image'
import styles from './ArticleHero.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareXTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function ArticleHero ({title, subtitle, image, date, author, updatedDate}) {
    const defaultAuthor = 'FULLMMA'
    return(
        <section className={styles.articleHero}>
            <h1 className={styles.articleHero__title}> {title} </h1>
            <h2 className={styles.articleHero__subtitle}> {subtitle} </h2>
            <Image className={styles.articleHero__image} priority={true} src={image} alt={title} width={800} height={450} quality={65} />
            {date && <p className={styles.articleHero__info}> 
                {/* <b>{author || defaultAuthor }</b>, */}
                <time dataTime={date}>{date}</time>
                <a target='_Blank' href='https://www.facebook.com/people/Fullmma/61565690940390/'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a>
                <a target='_Blank' href='https://x.com/MmaFull265'> <FontAwesomeIcon icon={faSquareXTwitter} size='xl' /> </a>
                <a target='_Blank' href='https://www.instagram.com/fullmmarg/'> <FontAwesomeIcon icon={faInstagram} size='xl' /> </a>
                <a target='_Blank' href='https://www.tiktok.com/@fullmmarg'> <FontAwesomeIcon icon={faTiktok} size='xl' /> </a>
                <a target='_Blank' href='https://www.youtube.com/@Fullmmarg'> <FontAwesomeIcon icon={faYoutube} size='xl' /> </a>
                {updatedDate && <span className={styles.articleHero__info}>Fecha de Actualización: <time dateTime={updatedDate}> {updatedDate} </time></span>}
                 </p>}
        </section>
    )
}