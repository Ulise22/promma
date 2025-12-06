import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc323 from '@/assets/eventos/ufc/0-150/0-15/ufc323.webp'
import iliaNextMatch2026 from '@/assets/noticias/0-100/30-40/ilia-next_fight-2026.webp'
import makhachevNextMatch2026 from '@/assets/noticias/0-100/30-40/makhachev-next_fight.2026.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc323'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc323} alt='' />
                <h2 className={styles.home__title}>UFC 323: ¡Merab Dvalishvili vs Petr Yan 2! ¡Alexandre Pantoja vs Joshua Van!</h2>
                <span>¡Brandon Moreno vs Tatsuro Taira! ¡Henry Cejudo vs Payton Talbott!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/islam-makhachev-proxima-pelea-2026'>
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
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/ilia-topuria-proxima-pelea-2026'>
                <Image className={styles.homehero__article__img} quality={50} src={iliaNextMatch2026} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Próxima Pelea de Ilia Topuria 2026: ¿Arman Tsarukyan o Paddy Pimblett?</h2>
                    <p>Todo parece indicar que ya tenemos nuevo rival para el campeón español de UFC Ilia Topuria...</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>26/11/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}