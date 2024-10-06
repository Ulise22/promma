import styles from './aldoHero.module.css'

export default function AldoHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>José Aldo</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>32-9</b>
            </section>
        </>
    )
}