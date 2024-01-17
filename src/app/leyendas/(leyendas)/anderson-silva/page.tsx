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
                    <p className={styles.leyenda__article__text}>Anderson Silva es un peleador de MMA brasileño que supo ser campeón de peso medio de <Link href='/promotoras/ufc'>UFC</Link>, en donde fue campeón de 2006 a 2013, con un total de 10 defensas del título exitosas, lo que lo convierte en el reinado más largo en la historia de la promoción. Por tamaña hazaña, es que tanto figuras como Dana White, presidente de la UFC, como muchos otros, lo consideran como el artista marcial mixto más grande de la historia. Llegando a ser reconocido con una inclusión en el Salón de la Fama de la UFC en 2023.</p>
                    <h2 className={styles.leyenda__article__title}>Anderson Silva Récord</h2>
                    <p>Anderson Silva cuenta con un récord en las MMA de 34-11(1). Siendo 20 de sus 34 victorias por la vía del nocaut, 6 por la vía de la sumisión y 8 por decisión. Mientras que de sus 11 derrotas 4 fueron la vía del nocaut, 1 por sumisión, 5 por decisión y 1 por descalificación en su combate contra el japonés <b>Yushin Okami</b> a quien le dió una patada alta ilegal que le impidió al japonés continuar el combate.</p>
                    <h2 className={styles.leyenda__article__title}>Anderson Silva Historia</h2>
                    <p>Anderson da Silva nació en São Paulo, Brasil, el 14 de abril de 1975.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}