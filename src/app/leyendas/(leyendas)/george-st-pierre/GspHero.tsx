import styles from './gspHero.module.css'

export default function GspHero () {
    return(
        <>
            <section className={styles.leyenda__hero}>
                <h1 className={styles.leyenda__hero__title}>George St-Pierre</h1>
            </section>
            <section className={styles.leyenda__record__container}>
                <b className={styles.leyenda__record}>26-2</b>
            </section>
        </>
    )
}