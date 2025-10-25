import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc321 from '@/assets/eventos/ufc/0-150/0-15/ufc321.webp'
import oliveiraGamrot from '@/assets/eventos/fight-night/0-150/0-15/oliveira-vs-gamrot.webp'
import deridderAllen from '@/assets/eventos/fight-night/0-150/0-15/deridder-allen.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc321'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc321} alt='' />
                <h2 className={styles.page__title}>UFC 321: ¡La pelea entre Tom Aspinall y Ciryl Gane Termina Sin Resultado por un Piquete De Ojo y Aspinall Sigue Siendo Campeón! ¡Mackenzie Dern Derrota a Virna Jandiroba y es Nueva Campeona!</h2>
                <p>¡Umar Nurmagomedov Derrota Mario Bautista por Decisión Unánime en una Victoria Dominante! ¡Alexander Volkov Derrota a Jailton Almeida por Decisión Dividida!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-deridder-allen'>
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
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-oliveira-gamrot'>
                <Image className={styles.pagehero__article__img} quality={50} src={oliveiraGamrot} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Río: ¡Charles Oliveira Somete a Mateusz Gamrot en el Segundo Asalto!</h2>
                    <p>¡Deiveson Figueiredo Derrota a Montel Jackson Por Decisión Dividida! ¡Joel Álvarez Domina y Derrota a Vicente Luque por Decisión Unánime!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>11/10/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}