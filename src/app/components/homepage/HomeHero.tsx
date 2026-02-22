import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import stricklandVShernandez from '@/assets/eventos/fight-night/0-150/0-15/strickland_hernandez.webp'
import makhachevNextMatch2026 from '@/assets/noticias/0-100/30-40/makhachev-next_fight.2026.webp'
import seanStricklandInfancia from '@/assets/articulos/0-100/80-90/sean_strickland-infancia.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/fight-night-strickland-hernandez'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={stricklandVShernandez} alt='' />
                <h2 className={styles.home__title}>UFC Houston: ¡Sean Strickland vs Anthony Hernandez!</h2>
                <span>¡Uros Medic Noquea a Geoff Neal en el Primer Asalto! ¡Melquizael Costa Noquea a Dan Ige en el Primer Asalto!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/islam-makhachev-proxima-pelea-2026'>
                <Image className={styles.homehero__article__img} quality={50} src={makhachevNextMatch2026} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Próxima Pelea de Islam Makhachev 2026: ¿Ian Garry? ¿Ilia Topuria? ¿Michael Morales?</h2>
                    <p>La división de peso wélter está más movida que nunca, y son muchos los candidatos a enfrentar al campeón de de UFC Islam Makhachev.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/11/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/sean-strickland-infancia'>
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