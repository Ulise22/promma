import Link from "next/link";
import styles from './peleadores.module.css'

export default function Peleadores () {
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Luchadores de MMA</h1>
            </section>
            <section className={styles.peleadores__container}>
                <h2 className={styles.peleadores__subtitle}>Luchadores de UFC</h2>
                <Link href='/peleadores/illia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
                    <h3 className={styles.peleadores__card__name}>Illia Topuria</h3>
                </Link>
            </section>
            <section className={styles.peleadores__container}>
                <h2 className={styles.peleadores__subtitle}>Peleadores argentinos de UFC</h2>
                <Link href='/peleadores/emiliano-sordi' className={`${styles.peleadores__card} ${styles.peleadores__card_emiliano}`}>
                    <h3 className={styles.peleadores__card__name}>Emiliano Sordi</h3>
                </Link>
            </section>
        </main>
    )
}