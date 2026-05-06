import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import emmetVSvallejos from '@/assets/eventos/fight-night/0-150/0-15/emmet_vallejos.webp'
import chimaevGuerra from '@/assets/articulos/0-100/80-90/khamzat_chimaev-guerra.webp'
import seanStricklandInfancia from '@/assets/articulos/0-100/80-90/sean_strickland-infancia.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/fight-night-emmet-vallejos'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={emmetVSvallejos} alt='' />
                <h2 className={styles.home__title}>UFC Fight Night: ¡Kevin Vallejos Noquea a Josh Emmet en el Primer Asalto!</h2>
                <span>¡Gillian Robertson Derrota a Amanda Lemos Por Decisión Unánime! ¡El español Hecher Sosa Debuta con Victoria!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/khamzat-chimaev-guerra'>
                <Image className={styles.homehero__article__img} quality={50} src={chimaevGuerra} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Khamzat Chimaev y la Guerra: De Refugiado en Suecia a Campeón de UFC</h2>
                    <p>La dura infancia marcada por la guerra en Chechenia que forjó al lobo que hoy es campeón de la UFC.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>06/05/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/sean-strickland-infancia'>
                <Image className={styles.homehero__article__img} quality={50} src={seanStricklandInfancia} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La Traumática Infancia de Sean Strickland</h2>
                    <p>Como fue la durísima infancia del excampeón de UFC Sean Strickland, marcada por la violencia, el odio y el miedo hacia un padre abusivo.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/02/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}