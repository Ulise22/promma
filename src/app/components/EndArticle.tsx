import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './endArticle.module.css'

export default function EndArticle () {
    return(
        <section className={styles.endArticle}>
            <article className={styles.endArticle__container}>
                <h3>¡No Olvides Seguirme en mis Redes Sociales!</h3>
                <div className={styles.endArticle__socials__container}>
                    <a className={styles.endArticle__socials} target='_Blank' href='https://x.com/MmaFull265'> <FontAwesomeIcon icon={faSquareXTwitter} size='xl' /> Twitter</a>
                    <a className={styles.endArticle__socials} target='_Blank' href='https://www.facebook.com/people/Fullmma/61565690940390/'> <FontAwesomeIcon icon={faFacebook} size='xl' /> Facebook</a>
                </div>
            </article>
            {/* <article className={styles.endArticle__container}>
                <h3>¡Recuerda que este proyecto es posible gracias a tus donaciones!</h3>
                <a className={styles.donation__btn} href="https://paypal.me/uliMontenegro" target="_Blank">PayPal</a>
            </article> */}
        </section>
    )
}