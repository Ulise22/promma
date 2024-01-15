import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/leyendas/components/AsideChamps'
import AldoHero from './AldoHero'


export default function Aldo () {
    return(
        <main>
            <AldoHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Jose Aldo UFC</h2>
                    <p className={styles.leyenda__article__text}>Khabib es un luchador ruso de MMA, que se ganó su posición en el salón de la fama en la UFC</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}