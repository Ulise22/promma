import PromotorasHero from '../PromotorasHero'
import styles from '../promo.module.css'

export default function Dogfight () {
    return(
        <main>
            <PromotorasHero title='Dogfight Wild Tournament' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2>DWT MMA</h2>
                </article>
            </section>
        </main>
    )
}