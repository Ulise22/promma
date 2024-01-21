import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/articulos/heros/mostppv_hero.jpg'

export default function MostPPV () {
    return(
        <main>
            <ArticleHero title='Los 5 Combates que más PPV Vendieron en la Historia' subtitle='Estas son las 5 peleas que más vendieron en la historia de las MMA, una lista completamente dominada por Conor McGregror.' image={hero} />
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