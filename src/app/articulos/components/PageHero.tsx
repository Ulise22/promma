import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc298 from '@/assets/articulos/previews/ufc298_preview.jpg'
import ufc300 from '@/assets/articulos/previews/ufc300.jpg'
import dwt2 from '@/assets/promotoras/dogfight.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc298'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc298} alt='' />
                <h2 className={styles.page__title}>UFC 298: ¡Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de UFC!</h2>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/ufc300'>
                <Image className={styles.pagehero__article__img} src={ufc300} alt='' />
                <h2 className={styles.page__title}>UFC 300: Todo lo que sabemos hasta ahora del mayor evento de MMA en la historia según Dana White</h2>
            </Link>
            <Link className={styles.pagehero__article} href='/articulos/dogfight-wild-tournament-2'>
                <Image className={styles.pagehero__article__img} src={dwt2} alt='' />
                <h2 className={styles.page__title}>Lo Mejor de Dogfight Wild Tournament 2</h2>
            </Link>
        </section>
    )
}