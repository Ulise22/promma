import PromotorasHero from '../PromotorasHero'
import styles from '../promo.module.css'

export default function KOTS () {
    return(
        <main>
            <PromotorasHero title='King Of The Streets' />
            <section className={styles.promotoras__container}>
                <article className={styles.promotoras__article}>
                    <h2 className={styles.promotoras__article__title}>KOTS MMA</h2>
                    <p>King Of The Streets es una organización clandestina que prepara peleas callejeras sin reglas donde vale todo, apenas un vendaje cubre las manos de los peleadores, y ambos se golpean sin parar hasta que uno se rinde. </p>
                </article>
            </section>
        </main>
    )
}