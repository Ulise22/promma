import styles from './demetriousHero.module.css'

export default function DemetriousHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Demetrious Johnson</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>25-4-1</b>
            </section>
        </>
    )
}