import styles from './andersonHero.module.css'

export default function AndersonHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Anderson Silva</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>34-11-(1)</b>
            </section>
        </>
    )
}