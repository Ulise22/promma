import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufcBaku from '@/assets/eventos/fight-night/0-150/0-15/fiziev-torres.webp'
import topuriaPereira from '@/assets/noticias/0-100/40-50/topuria_and_pereira.webp'
import UFCNewRankings from '@/assets/noticias/0-100/40-50/new_rakings.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/fight-night-fiziev-torres'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufcBaku} alt='' />
                <h2 className={styles.home__title}>UFC Baku: ¡Rafael Fiziev vs Manuel Torres! </h2>
                <span>¡Shara Magomedov vs Michel Pereira! ¡Javier Reyes vs Kaan Ofli!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/ilia-topuria-y-alex-pereira'>
                <Image className={styles.homehero__article__img} quality={50} src={topuriaPereira} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Ilia Topuria y Alex Pereira: La Amistad Menos Pensada</h2>
                    <p>Como Ilia Topuria se volvió amigo de Alex Pereira luego de la defensa ante Josh Hokit</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>26/05/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/como-funciona-el-nuevo-ranking-de-ufc'>
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