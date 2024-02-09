import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc297 from '@/assets/articulos/previews/ufc297.jpg'
import ufc300 from '@/assets/articulos/previews/ufc300.jpg'
import dwt2 from '@/assets/articulos/previews/dogfight2.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc297'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc297} alt='' />
                <h2 className={styles.page__title}>UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!</h2>
                <p className={styles.pagehero__bigArticle__text}>En la noche en que se celebró el UFC 297 en Canadá después de mucho tiempo, tanto la pelea estelar como la coestelar se definieron por decisión...</p>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/ufc300'>
                <Image className={styles.pagehero__article__img} src={ufc300} alt='' />
                <h2 className={styles.page__title}>UFC 300: Todo lo que sabemos hasta ahora del mayor evento de MMA en la historia según Dana White</h2>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/dogfight-wild-tournament-2'>
                <Image className={styles.pagehero__article__img} src={dwt2} alt='' />
                <h2 className={styles.page__title}>Lo Mejor de Dogfight Wild Tournament</h2>
            </Link>
        </section>
    )
}