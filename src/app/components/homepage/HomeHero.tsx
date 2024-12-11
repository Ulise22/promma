import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc310 from '@/assets/covertura_ufc/ufc/0-15/ufc310.jpg'
import iliaPeleador2024 from '@/assets/noticias/0-10/ilia_peleador_2024.jpg'
import bestEventsUFC2024 from '@/assets/noticias/20-30/best_ufc_events.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/covertura-ufc/ufc310'>
                <Image className={styles.homehero__bigArticle__img} src={ufc310} alt='' />
                <h2 className={styles.home__title}>UFC 310: ¡Alexandre Pantoja vs Kai Asakura por el Campeonato de Peso Mosca de UFC! ¡Shavkat Rakhmonov vs Ian Garry!</h2>
                <span>Movsar Evloev Gana su Pelea por Decisión. Vicente Luque Logra una Victoria por Sumisión en el Primer Asalto. Además Dominick Reyes Derrota a Anthony Smith por TKO en el Segundo Asalto</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/mejores-eventos-ufc-2024'>
                <Image className={styles.homehero__article__img} loading='lazy' src={bestEventsUFC2024} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Los Mejores Eventos de UFC 2024</h2>
                    <p>La lista de los eventos y carteleras de UFC numerados que marcaron este 2024. </p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>10/12/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/ilia-topuria-peleador-del-2024'>
                <Image className={styles.homehero__article__img} loading='lazy' src={iliaPeleador2024} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Opinión: Ilia Topuria es el Peleador del Año 2024 en UFC</h2>
                    <p>Luego de lo realizado en el UFC 308, al Ilia Topuria noquear a Max Holloway, no quedan dudas de que Ilia Topuria es el peleador del año 2024.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/10/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}