import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufcTampa from '@/assets/covertura_ufc/fight_night/0-15/covington-vs-buckley.jpg'
import iliaPeleador2024 from '@/assets/noticias/0-100/0-10/ilia_peleador_2024.jpg'
import bestEventsUFC2024 from '@/assets/noticias/0-100/20-30/best_ufc_events.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/covertura-ufc/fight-night-covington-buckley'>
                <Image className={styles.homehero__bigArticle__img} src={ufcTampa} alt='' />
                <h2 className={styles.home__title}>UFC TAMPA: ¡Joaquin Buckley Gana a Colby Covington por TKO! ¡Joel Álvarez Noquea a Drakkar Klose!</h2>
                <span>Manel Kape logra una victoria por Nocaut en el tercer asalto de la pelea. Cub Swanson derrota a Billy Quarantillo por nocaut en el tercer asalto en la pelea de la noche. </span>
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