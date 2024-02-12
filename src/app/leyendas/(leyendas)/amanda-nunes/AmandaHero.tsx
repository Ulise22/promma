import styles from './amandaHero.module.css'

export default function AmandaHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Amanda Nunes</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>23-5</b>
            </section>
        </>
    )
}