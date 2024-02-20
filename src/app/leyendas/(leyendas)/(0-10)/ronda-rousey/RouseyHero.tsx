import styles from './rouseyHero.module.css'

export default function RouseyHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Ronda Rousey</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>12-2</b>
            </section>
        </>
    )
}