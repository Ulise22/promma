import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc299 from '@/assets/articulos/previews/10-20/ufc299_preview.jpg'
import ufc300 from '@/assets/articulos/previews/0-10/ufc300.jpg'
import dwt2 from '@/assets/promotoras/dogfight.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc299'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc299} alt='' />
                <h2 className={styles.page__title}>UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!</h2>
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