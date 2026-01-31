import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc325 from '@/assets/eventos/ufc/0-150/0-15/ufc325.webp'
import makhachevNextMatch2026 from '@/assets/noticias/0-100/30-40/makhachev-next_fight.2026.webp'
import saintDenisMilitar from '@/assets/articulos/0-100/80-90/saint_denis-militar.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc325'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc325} alt='' />
                <h2 className={styles.home__title}>UFC 325: ¡Alexander Volkanovski vs Diego Lopes! ¡Benoit Saint Denis vs Dan Hooker!</h2>
                <span>¡Rafael Fiziev vs Mauricio Ruffy! ¡Quillan Salkilld vs Jamie Mullarkey!</span>
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
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/benoit-saint-denis-militar'>
                <Image className={styles.homehero__article__img} quality={50} src={saintDenisMilitar} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>El Pasado Militar de Benoit Saint Denis</h2>
                    <p>Cómo Benoit Saint Denis pasó de ser un militar de las fuerzas especiales francesas a uno de los peleadores más emocionantes de la UFC. </p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/01/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}