import styles from '@/app/leyendas/components/leyenda.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/leyendas/components/AsideChamps'
import AndersonHero from './AndersonHero'


export default function Cormier () {
    return(
        <main>
            <AndersonHero />
            <section className={styles.leyenda__articles__container}>
                <article className={styles.leyenda__article}>
                    <h2 className={styles.leyenda__article__title}>Anderson Silva UFC</h2>
                    <p className={styles.leyenda__article__text}>Khabib es un luchador ruso de MMA, que se ganó su posición en el salón de la fama en la UFC</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}