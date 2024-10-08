import Link from 'next/link'
import styles from './Footer.module.css'
import fullmma from '@/assets/FULLMMA.png'
import { faFacebook, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Footer () {
    return(
        <footer className={styles.footer}>
            <Image className={styles.footer__title} src={fullmma} alt='FULLMMA' />
            <section className={styles.footer__container}>
                <div className={styles.footer__container__group}>
                    <h3>Legal</h3>
                    <ul className={styles.footer__list}>
                        <li>
                            <Link className={styles.foter__list__item} href='/cookies'>Política de Cookies</Link>
                        </li>
                        <li>
                            <Link className={styles.foter__list__item} href='/politica-privacidad'>Política de Privacidad</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__container__group}>
                    <h3>Nosotros</h3>
                    <ul className={styles.footer__list}>
                        <li>
                            <Link className={styles.foter__list__item} href='/contacto'>Contactanos</Link>
                        </li>
                        <li>
                            <Link className={styles.foter__list__item} href='/sobre-nosotros'> Sobre nosotros </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer__container__group}>
                    <h3>Nuestras Redes Sociales</h3>
                    <ul className={styles.footer__list__social}>
                        <li>
                            <a target='_Blank' href='https://x.com/MmaFull265'> <FontAwesomeIcon icon={faSquareXTwitter} size='xl' /> </a>
                        </li>
                        <li>
                            <a target='_Blank' href='https://www.facebook.com/people/Fullmma/61565690940390/'> <FontAwesomeIcon icon={faFacebook} size='xl' /> </a>
                        </li>
                    </ul>
                </div>
            </section>
            <h4 className={styles.footer__p}>FULLMMA © 2024</h4>
        </footer>
    )
}