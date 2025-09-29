import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import alexPereiraTribu from '@/assets/articulos/0-100/70-80/alex_pereira-tribu.webp'
import chimaevCicatriz from '@/assets/articulos/0-100/60-70/chimaev_cicatriz.webp'
import merabCardio from '@/assets/articulos/0-100/70-80/merab_dvalishvili-cardio.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/articulos/alex-pereira-tribu'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={alexPereiraTribu} alt='Alex Pereira Pintado Como Si Formara Parte de una Tribu Indigena' />
                <h2 className={styles.home__title}>¿Cuál es la Tribu de Alex Pereira?</h2>
                <span>El origen de Alex Pereira y su relación la tribu indigena brasileña Pataxó, de la que es descendiente</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/que-le-paso-en-el-labio-a-khamzat-chimaev'>
                <Image className={styles.homehero__article__img} quality={50} src={chimaevCicatriz} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Qué le Pasó en el Labio a Khamzat Chimaev</h2>
                    <p>Descubre la historia detrás la característica cicatríz que tiene la estrella de la UFC Khamzat Chimaev.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>07/08/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/merab-dvalishvili-cardio'>
                <Image className={styles.homehero__article__img} quality={50} src={merabCardio} alt='Islam Dulatov, el modelo de UFC' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>El Cardio de Merab Dvalishvili</h2>
                    <p>¿Cómo Conseguir el Cardio de Merab Dvalishvili? El Secreto de Merab Para Tener un Cardio Inhumano.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>18/09/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}