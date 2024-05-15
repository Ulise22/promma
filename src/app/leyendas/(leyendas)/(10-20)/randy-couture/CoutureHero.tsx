import styles from './CoutureHero.module.css'

export default function CoutureHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Randy Couture</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>19-11</b>
            </section>
        </>
    )
}