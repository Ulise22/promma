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
                    <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
                        <h3 className={styles.peleadores__card__name}>Alexander Volkanovski</h3>
                    </Link>
                    <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
                        <h3 className={styles.peleadores__card__name}>Sean Strickland</h3>
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
                    <Link href='/peleadores/khamzat-chimaev' className={`${styles.peleadores__card} ${styles.peleadores__card_chimaev}`}>
                        <h3 className={styles.peleadores__card__name}>Khamzat Chimaev</h3>
                    </Link>
                    <Link href='/peleadores/charles-oliveira' className={`${styles.peleadores__card} ${styles.peleadores__card_oliveira}`}>
                        <h3 className={styles.peleadores__card__name}>Charles Oliveira</h3>
                    </Link>
                    <Link href='/peleadores/justin-gaethje' className={`${styles.peleadores__card} ${styles.peleadores__card_gaethje}`}>
                        <h3 className={styles.peleadores__card__name}>Justin Gaethje</h3>
                    </Link>
                    <Link href='/peleadores/dustin-poirier' className={`${styles.peleadores__card} ${styles.peleadores__card_poirier}`}>
                        <h3 className={styles.peleadores__card__name}>Dustin Poirier</h3>
                    </Link>
                    <Link href='/peleadores/michael-chandler' className={`${styles.peleadores__card} ${styles.peleadores__card_chandler}`}>
                        <h3 className={styles.peleadores__card__name}>Michael Chandler</h3>
                    </Link>
                    <Link href='/peleadores/max-holloway' className={`${styles.peleadores__card} ${styles.peleadores__card_holloway}`}>
                        <h3 className={styles.peleadores__card__name}>Max Holloway</h3>
                    </Link>
                    <Link href='/peleadores/kamaru-usman' className={`${styles.peleadores__card} ${styles.peleadores__card_usman}`}>
                        <h3 className={styles.peleadores__card__name}>Kamaru Usman</h3>
                    </Link>
                    <Link href='/peleadores/colby-covington' className={`${styles.peleadores__card} ${styles.peleadores__card_covington}`}>
                        <h3 className={styles.peleadores__card__name}>Colby Covington</h3>
                    </Link>
                    <Link href='/peleadores/marlon-vera' className={`${styles.peleadores__card} ${styles.peleadores__card_vera}`}>
                        <h3 className={styles.peleadores__card__name}>Marlon Vera</h3>
                    </Link>
                    <Link href='/peleadores/arman-tsarukyan' className={`${styles.peleadores__card} ${styles.peleadores__card_tsarukyan}`}>
                        <h3 className={styles.peleadores__card__name}>Arman Tsarukyan</h3>
                    </Link>
                </article>
                <h2 className={styles.peleadores__subtitle}>Peleadores argentinos de MMA</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/argentinos/emiliano-sordi' className={`${styles.peleadores__card} ${styles.peleadores__card_emiliano}`}>
                        <h3 className={styles.peleadores__card__name}>Emiliano Sordi</h3>
                    </Link>
                    <Link href='/argentinos/santiago-ponzinibbio' className={`${styles.peleadores__card} ${styles.peleadores__card_ponzinibbio}`}>
                        <h3 className={styles.peleadores__card__name}>Santiago Ponzinibbio</h3>
                    </Link>
                    <Link href='/argentinos/laureano-staropoli' className={`${styles.peleadores__card} ${styles.peleadores__card_staropoli}`}>
                        <h3 className={styles.peleadores__card__name}>Laureano Staropoli</h3>
                    </Link>
                    <Link href='/argentinos/ailin-perez' className={`${styles.peleadores__card} ${styles.peleadores__card_ailin}`}>
                        <h3 className={styles.peleadores__card__name}>Ailín Pérez</h3>
                    </Link>
                    <Link href='/argentinos/franco-tenaglia' className={`${styles.peleadores__card} ${styles.peleadores__card_tenaglia}`}>
                        <h3 className={styles.peleadores__card__name}>Franco Tenaglia</h3>
                    </Link>
                    <Link href='/argentinos/guido-cannetti' className={`${styles.peleadores__card} ${styles.peleadores__card_canetti}`}>
                        <h3 className={styles.peleadores__card__name}>Guido Cannetti</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}