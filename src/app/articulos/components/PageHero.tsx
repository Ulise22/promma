import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import alexanderEmelianenko from '@/assets/articulos/20-30/alexander_emelianenko.jpg'
import bestfightsFem from '@/assets/articulos/30-40/mejores_peleas_mujeres.jpg'
import yoelgenetica from '@/assets/articulos/20-30/yoel_romero_genetica.jpg'

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
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/articulos/mejores-peleas-mujeres-ufc'>
                <Image className={styles.pagehero__article__img} src={bestfightsFem} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>Las Mejores Peleas de UFC de Mujeres de la Historia</h2>
                    <p>Los 5 mejores combates femeninos de la historia de UFC.</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>29/06/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}