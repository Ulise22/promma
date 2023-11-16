import PromotorasHero from '../PromotorasHero'
import styles from './ufc.module.css'

export default function UFC () {
    return(
        <main>
            <PromotorasHero title='UFC' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>UFC Historia</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>Argentinos en UFC</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>EA UFC</h2>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>UFC 4</h2>
                    <h3>UFC 4 requisitos pc</h3>
                    <h3>UFC 4 requisitos precio</h3>
                </article>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>UFC Mujeres</h2>
                </article>
            </section>
        </main>
    )
}