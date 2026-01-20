import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import bestUFC2025 from '@/assets/eventos/articulos/0-10/mejores_eventos_ufc-2025.webp'
import makhachevNextMatch2026 from '@/assets/noticias/0-100/30-40/makhachev-next_fight.2026.webp'
import gaethjeRetiro from '@/assets/noticias/0-100/30-40/gaethje-retiro.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/mejores-eventos-ufc-2025'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={bestUFC2025} alt='' />
                <h2 className={styles.home__title}>Los Mejores Eventos de UFC en 2025</h2>
                <span>La lista de los 3 mejores eventos de la UFC en el año 2025: Islam Makhachev, Alex Pereira, Merab Dvalishvili, Alexander Volkanovski.</span>
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
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/justin-gaethje-retiro'>
                <Image className={styles.homehero__article__img} quality={50} src={gaethjeRetiro} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>UFC 324: ¿El Retiro de Justin Gaethje?</h2>
                    <p>El entrenador de Gaethje ha dejado claro que en caso de perder se nos retira una leyenda...</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>20/01/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}