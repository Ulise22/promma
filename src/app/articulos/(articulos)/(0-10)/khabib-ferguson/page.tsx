import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/articulos/previews/khabibVferguson.jpg'

export default function KhabibVsFerguson () {
    return(
        <main>
            <ArticleHero title='Khabib Vs Ferguson: La pelea que nunca se dió' subtitle='La historia detrás del combate que muchos fanaticos quería ver, pero que sin embargo nunca se dió, a pesar de que se llegó a programar hasta 6 veces el encuentro entre ambos.' image={hero} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>xd</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis enim dolores culpa ad doloribus amet. Sequi consequatur quae officiis, quod exercitationem rem tempore fugit deleniti earum explicabo tempora dolor? Labore.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}