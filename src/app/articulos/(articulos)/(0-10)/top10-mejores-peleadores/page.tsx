import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/articulos/previews/ufc-goats.webp'

export default function Top10 () {
    return(
        <main>
            <ArticleHero title='Los 10 Mejores Peleadores de la Historia de las MMA' subtitle='¿Quiénes son los mejores peleadores en la historia de las MMA? ¿Jon Jones? ¿Khabib? ¿George St-Pierre? ¿Anderson Silva?' image={hero} />
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