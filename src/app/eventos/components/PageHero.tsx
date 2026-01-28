import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc324 from '@/assets/eventos/ufc/0-150/0-15/ufc324.webp'
import kapeRoyval from '@/assets/eventos/fight-night/0-150/0-15/royval-kape.webp'
import deridderAllen from '@/assets/eventos/fight-night/0-150/0-15/deridder-allen.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc324'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc324} alt='' />
                <h2 className={styles.page__title}>¡Justin Gaethje Derrota a Paddy Pimblett y es Nuevo Campeón Interino! ¡Sean O&apos;Malley Derrota a Song Yadong Por Decisión Unánime!</h2>
                <p>¡Waldo Cortes Acosta Noquea a Derrick Lewis en el Segundo Asalto! ¡Jean Silva Derrota a Arnold Allen en La Pelea de la Noche! ¡Umar Nurmagomedov Derrota a Deiveson Figueiredo Por Decisión Unánime!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-deridder-allen'>
                <Image className={styles.pagehero__article__img} quality={50} src={deridderAllen} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Vancouever: ¡Brendan Allen Derrota a Reiner De Ridder Por Rendición en el Cuarto Asalto!</h2>
                    <p>¡Mike Mallot Derrota a Kevin Holland Por Decisión Unánime! ¡Aiemann Zahabi Derrota a Marlon Vera por Decisión Dividida en una Pelea Cerradísima!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>18/10/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-royval-kape'>
                <Image className={styles.pagehero__article__img} quality={50} src={kapeRoyval} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Vegas 112: ¡Manel Kape Noquea a Brandon Royval en el Primer Asalto! ¡Kevin Vallejos Da un Nocaut Espectacular a Giga Chikadze en el Segundo Asalto!</h2>
                    <p>¡Deiveson Figueiredo Derrota a Montel Jackson Por Decisión Dividida! ¡Joel Álvarez Domina y Derrota a Vicente Luque por Decisión Unánime!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>13/12/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}