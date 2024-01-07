import PromotorasHero from '../PromotorasHero'
import styles from '../promo.module.css'

export default function KOTS () {
    return(
        <main>
            <PromotorasHero title='King Of The Streets' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2>KOTS MMA</h2>
                </article>
            </section>
        </main>
    )
}