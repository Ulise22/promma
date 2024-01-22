import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc297 from '@/assets/articulos/previews/ufc297.jpg'
import ufc300 from '@/assets/articulos/previews/ufc300.jpg'
import goats from '@/assets/articulos/previews/ufc-goats.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc297'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc297} alt='' />
                <h2 className={styles.page__title}>UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!</h2>
                <p className={styles.pagehero__bigArticle__text}>En la noche en que se celebró el UFC 297 en Canadá después de mucho tiempo, nos sorprendió cómo...</p>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/ufc300'>
                <Image className={styles.pagehero__article__img} src={ufc300} alt='' />
                <h2 className={styles.page__title}>UFC 300: Todo lo que sabemos hasta ahora del mayor evento de MMA en la historia según Dana White</h2>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/top5-mejores-peleadores'>
                <Image className={styles.pagehero__article__img} src={goats} alt='' />
                <h2 className={styles.page__title}>Los 5 mejores peleadores de la historia</h2>
            </Link>
        </section>
    )
}