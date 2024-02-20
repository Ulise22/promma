import styles from './gracieHero.module.css'

export default function GracieHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Royce Gracie</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>15-2-3</b>
            </section>
        </>
    )
}