import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/articulos/previews/ufc300.jpg'

export default function UFC300 () {
    return(
        <main>
            <ArticleHero title='UFC 300: Todas las Peleas Confirmadas Hasta Ahora' subtitle='Dana White ha prometido que este será el mayor evento de MMA en la historia, estos son los combates que confirmados hasta ahora!' image={hero} />
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