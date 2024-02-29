import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/heros/most-loss_hero.jpg'
import Image from 'next/image'

export default function KOMasRapido () {
    return(
        <main>
            <ArticleHero title='El KO Más Rápido en la Historia de la UFC' subtitle='Cuál es la historia y el trasfondo detrás de la pelea entre Jorge Masvidal y Ben Askren, que terminó en el KO más rápido en la historia de la UFC.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Probablemente el récord que nadie quiera tener, ser el peleador con la mayor cantidad de derrotas en la UFC. Sin embargo, aunque parezca contraituitivo, es algo muy dificil de conseguir, dado que no son muchos los peleadores que cosechan un par de derrotas consecutivas y de alguna manera consigue mantenerse en la compañía. En el caso de la mayoría de los peleadores, con hilar 3 derrotas seguidas estás fuera de la UFC.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}