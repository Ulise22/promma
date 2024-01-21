import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
/* Images */
import hero from '@/assets/peleadores__images/peleadores__hero.jpg'

export default function KhabibVsConor () {
    return(
        <main>
            <ArticleHero title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' subtitle='¿Cuál es la historia de la rivalidad más grande en la historia de las MMA? Desde el ataque de Conor a Khabib en el bus, hasta la vez que Khabib se fue a pelear con la esquina de Conor...' image={hero} />
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