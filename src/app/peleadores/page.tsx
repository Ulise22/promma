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
                    <Link href='/peleadores/francis-ngannou' className={`${styles.peleadores__card} ${styles.peleadores__card_ngannou}`}>
                        <h3 className={styles.peleadores__card__name}>Francis Ngannou</h3>
                    </Link>
                    <Link href='/peleadores/tony-ferguson' className={`${styles.peleadores__card} ${styles.peleadores__card_ferguson}`}>
                        <h3 className={styles.peleadores__card__name}>Tony Ferguson</h3>
                    </Link>
                    <Link href='/peleadores/conor-mcgregor' className={`${styles.peleadores__card} ${styles.peleadores__card_mcgregor}`}>
                        <h3 className={styles.peleadores__card__name}>Conor Mcgregor</h3>
                    </Link>
                    <Link href='/peleadores/jon-jones' className={`${styles.peleadores__card} ${styles.peleadores__card_jones}`}>
                        <h3 className={styles.peleadores__card__name}>Jon Jones</h3>
                    </Link>
                </article>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Campeones UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
                        <h3 className={styles.peleadores__card__name}>Alexander Volkanovski</h3>
                    </Link>
                    <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
                        <h3 className={styles.peleadores__card__name}>Islam Makhachev</h3>
                    </Link>
                    <Link href='/peleadores/sean-omalley' className={`${styles.peleadores__card} ${styles.peleadores__card_omalley}`}>
                        <h3 className={styles.peleadores__card__name}>Sean O&apos;malley</h3>
                    </Link>
                    <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
                        <h3 className={styles.peleadores__card__name}>Sean Strickland</h3>
                    </Link>
                    <Link href='/peleadores/alex-pereira' className={`${styles.peleadores__card} ${styles.peleadores__card_pereira}`}>
                        <h3 className={styles.peleadores__card__name}>Alex Pereira</h3>
                    </Link>
                    <Link href='/peleadores/alexandre-pantoja' className={`${styles.peleadores__card} ${styles.peleadores__card_pantoja}`}>
                        <h3 className={styles.peleadores__card__name}>Alexandre Pantoja</h3>
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
                    <Link href='/peleadores/laureano-staropoli' className={`${styles.peleadores__card} ${styles.peleadores__card_staropoli}`}>
                        <h3 className={styles.peleadores__card__name}>Laureano Staropoli</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}