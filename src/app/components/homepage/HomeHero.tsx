import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc329 from '@/assets/eventos/ufc/0-150/0-15/ufc329.webp'
import mcgregorQuePaso from '@/assets/noticias/0-100/40-50/mcgregor_que_le_paso.webp'
import UFCNewRankings from '@/assets/noticias/0-100/40-50/new_rakings.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc329'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc329} alt='' />
                <h2 className={styles.home__title}>UFC 329: ¡Conor McGregor Se Lesiona Nuevamente y Cae Derrota ante Holloway! ¡Paddy Pimblett Somete a Benoit Saint Denis en el Primer Asalto!</h2>
                <span>¡Mario Bautista Derrota a Cory Sandhagen por Decisión Unánime! ¡Brandon Royval Somete a Loneer Kavanagh en el Tercer Asalto!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/que-le-paso-a-conor-mcgregor'>
                <Image className={styles.homehero__article__img} quality={50} src={mcgregorQuePaso} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Qué Le Pasó a Conor McGregor?</h2>
                    <p>Descubre que le pasó en la pierna a Conor McGregor en su pelea contra Max Holloway en el UFC329</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/07/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/como-funciona-el-nuevo-ranking-de-ufc'>
                <Image className={styles.homehero__article__img} quality={50} src={UFCNewRankings} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Cómo Funciona el Nuevo Ranking de UFC?</h2>
                    <p>El nuevo sistema de rankings de UFC en asociación con Meta que reemplaza a los periodistas y promete ser más justo.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>25/06/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}