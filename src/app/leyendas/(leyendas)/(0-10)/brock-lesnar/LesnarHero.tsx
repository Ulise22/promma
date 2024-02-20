import styles from './lesnarHero.module.css'

export default function LesnarHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Brock Lesnar</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>5-3-(1)</b>
            </section>
        </>
    )
}