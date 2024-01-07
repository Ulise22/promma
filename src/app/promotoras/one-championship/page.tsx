import PromotorasHero from '../PromotorasHero'
import styles from '../promo.module.css'

export default function One () {
    return(
        <main>
            <PromotorasHero title='One Championship' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2>One MMA</h2>
                </article>
            </section>
        </main>
    )
}