import styles from './Footer.module.css'

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li className={styles.foter__list__item}>Contactanos</li>
                <li className={styles.foter__list__item}>Sobre nosotros</li>
            </ul>
            <div className={styles.footer__line}></div>
            <p className={styles.footer__p}>PROMMA © 2023 todos los derechos reservados</p>
        </footer>
    )
}