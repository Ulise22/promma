import Link from 'next/link'
import styles from './argentinos.module.css'

export default function Argentinos () {
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Argentinos de MMA</h1>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Peleadores argentinos de MMA</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/argentinos/emiliano-sordi' className={`${styles.peleadores__card} ${styles.peleadores__card_emiliano}`}>
                        <h3 className={styles.peleadores__card__name}>Emiliano Sordi</h3>
                    </Link>
                    <Link href='/argentinos/santiago-ponzinibbio' className={`${styles.peleadores__card} ${styles.peleadores__card_ponzinibbio}`}>
                        <h3 className={styles.peleadores__card__name}>Santiago Ponzinibbio</h3>
                    </Link>
                    <Link href='/argentinos/laureano-staropoli' className={`${styles.peleadores__card} ${styles.peleadores__card_staropoli}`}>
                        <h3 className={styles.peleadores__card__name}>Laureano Staropoli</h3>
                    </Link>
                    <Link href='/argentinos/ailin-perez' className={`${styles.peleadores__card} ${styles.peleadores__card_ailin}`}>
                        <h3 className={styles.peleadores__card__name}>Ailín Pérez</h3>
                    </Link>
                    <Link href='/argentinos/franco-tenaglia' className={`${styles.peleadores__card} ${styles.peleadores__card_tenaglia}`}>
                        <h3 className={styles.peleadores__card__name}>Franco Tenaglia</h3>
                    </Link>
                    <Link href='/argentinos/guido-cannetti' className={`${styles.peleadores__card} ${styles.peleadores__card_canetti}`}>
                        <h3 className={styles.peleadores__card__name}>Guido Cannetti</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}