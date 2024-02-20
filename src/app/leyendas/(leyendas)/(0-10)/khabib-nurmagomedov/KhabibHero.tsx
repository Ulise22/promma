import styles from './khabibHero.module.css'

export default function KhabibHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>Khabib Nurmagomedov</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>29-0</b>
            </section>
        </>
    )
}