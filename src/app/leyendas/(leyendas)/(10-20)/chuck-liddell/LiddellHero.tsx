import styles from './LiddellHero.module.css'

export default function LiddellHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Chuck Liddell</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>21-9</b>
            </section>
        </>
    )
}