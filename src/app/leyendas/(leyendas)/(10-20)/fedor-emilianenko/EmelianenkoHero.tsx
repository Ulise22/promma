import styles from './EmilianenkoHero.module.css'

export default function EmelianenkoHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Fedor Emelianenko</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>40-7 (1)</b>
            </section>
        </>
    )
}