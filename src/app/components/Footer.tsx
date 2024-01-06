import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer__list}>
                <li>
                    <Link className={styles.foter__list__item} href='/contacto'>Contactanos</Link>
                </li>
                <li>
                    <Link className={styles.foter__list__item} href='/cookies'>Política de Cookies</Link>
                </li>
                <li>
                    <Link className={styles.foter__list__item} href='/politica-privacidad'>Política de Privacidad</Link>
                </li>
                <li>
                    <Link className={styles.foter__list__item} href='/sobre-nosotros'> Sobre nosotros </Link>
                </li>
            </ul>
            <div className={styles.footer__line}></div>
            <p className={styles.footer__p}>Web diseñada y desarrollada por Ulises Montenegro</p>
        </footer>
    )
}