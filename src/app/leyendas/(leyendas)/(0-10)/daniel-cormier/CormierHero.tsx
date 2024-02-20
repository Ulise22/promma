import styles from './cormierHero.module.css'

export default function CormierHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Daniel Cormier</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>22-3-(1)</b>
            </section>
        </>
    )
}