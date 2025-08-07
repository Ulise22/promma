import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import chimaevEnfermedad from '@/assets/articulos/0-100/60-70/khamzat_chimaev_enfermedad.webp'
import chimaevCicatriz from '@/assets/articulos/0-100/60-70/chimaev_cicatriz.webp'
import modeloUFC from '@/assets/noticias/0-100/30-40/modelo_ufc.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/articulos/que-enfermedad-tiene-khamzat-chimaev'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={chimaevEnfermedad} alt='Khamzat Chimaev en una camilla de un hospital generado por IA' />
                <h2 className={styles.home__title}>¿Qué Enfermedad Tiene Khamzat Chimaev? Los Problemas de Salud de la Estrella de la UFC</h2>
                <span>Todos los problemas de salud que sufrió Khamzat Chimaev que le impidieron pelear seguido y como se sobrepuso a ellos.</span>
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
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/modelo-de-ufc'>
                <Image className={styles.homehero__article__img} quality={50} src={modeloUFC} alt='Islam Dulatov, el modelo de UFC' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Islam Dulatov: El Modelo de UFC Que Debuta en el UFC 318</h2>
                    <p>Conoce al alemán Islam Dulatov, que renunció a su exitosa carrera de modelo de Gucci y Hugo Boss para convertirse en peleador de MMA y debutar en la UFC.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>17/07/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}