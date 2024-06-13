import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import alexanderEmelianenko from '@/assets/articulos/previews/20-30/alexander-emelianenko-preview.jpg'
import bispingOjo from '@/assets/articulos/previews/20-30/michael_bisping_ojo-preview.jpg'
import yoelgenetica from '@/assets/articulos/previews/20-30/yoel_romero_genetica-preview.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/yoel-romero-genetica'>
                <Image className={styles.pagehero__bigArticle__img} src={yoelgenetica} alt='' />
                <h2 className={styles.page__title}>La Genética de Yoel Romero</h2>
                <p>Yoel Romero es un superhumano, el admirable prodigio genético que ha demostrado ser el luchador cubano para seguir activo con 47 años y para sorprender a los médicos con lo rápido de su recuperación.</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/articulos/alexander-emelianenko'>
                <Image className={styles.pagehero__article__img} src={alexanderEmelianenko} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>Alexander Emelianenko: El Hermano de Fedor Emelianenko y su Relación con la Mafia Rusa</h2>
                    <p>Los tatuajes de Alexander Emelianenko y el significado que tienen, ¿De verdad formó parte de la mafia rusa?</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/05/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/articulos/michael-bisping-ojo'>
                <Image className={styles.pagehero__article__img} src={bispingOjo} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>Michael Bisping: El Luchador Inglés de UFC Que Perdió un Ojo Peleando</h2>
                    <p>La historia de cómo el peleador de Reino Unido perdió su ojo durante una pelea de UFC, y cómo a pesar de eso logró ser campeón.</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>13/06/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}