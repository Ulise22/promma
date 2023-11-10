import Link from "next/link";
import styles from './peleadores.module.css'

export default function Peleadores () {
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Luchadores de MMA</h1>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Luchadores de UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/illia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
                        <h3 className={styles.peleadores__card__name}>Ilia Topuria</h3>
                    </Link>
                    <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
                        <h3 className={styles.peleadores__card__name}>Sean Strickland</h3>
                    </Link>
                    <Link href='/peleadores/francis-ngannou' className={`${styles.peleadores__card} ${styles.peleadores__card_ngannou}`}>
                        <h3 className={styles.peleadores__card__name}>Francis Ngannou</h3>
                    </Link>
                </article>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Peleadores argentinos de MMA</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/emiliano-sordi' className={`${styles.peleadores__card} ${styles.peleadores__card_emiliano}`}>
                        <h3 className={styles.peleadores__card__name}>Emiliano Sordi</h3>
                    </Link>
                    <Link href='/peleadores/santiago-ponzinibbio' className={`${styles.peleadores__card} ${styles.peleadores__card_ponzinibbio}`}>
                        <h3 className={styles.peleadores__card__name}>Santiago Ponzinibbio</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}