import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/40-50/bestfight-hero.jpeg'

export const metadata: Metadata = {
    title: 'El manco de las MMA',
    description: '',
    openGraph: {
        title: 'El manco de las MMA',
        description: '',
        url: 'https://fullmma.org/articulos/luchador-manco-de-mma'
    }
}

export default function HelwaniVSWhite () {
    return(
        <main>
            <ArticleHero title='' subtitle='' image={hero} date='2024-08-29' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}