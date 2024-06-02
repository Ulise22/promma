import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/30-40/ufc302-hero.jpg'

export default function UFC302 () {
    return(
        <main>
            <ArticleHero title='UFC 302: ¡Dustin Poirier vs Islam Makhachev!' subtitle='' image={hero} date='01/06/2024' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noticia en desarrollo...</p>
                    <h2>Randy Brown vs Elizeu Zaleski Dos Santos</h2>
                    <p></p>
                    <h2>Niko Price vs Alex Morono</h2>
                    <p></p>
                    <h2>Kevin Holland vs Michal Oleksiejczuk</h2>
                    <p></p>
                    <h2>Sean Strickland vs Paulo Costa</h2>
                    <p></p>
                    <h2>Islam Makhachev vs Dustin Poirier</h2>
                    <p></p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}