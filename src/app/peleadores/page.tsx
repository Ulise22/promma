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
                        <p className={styles.peleadores__card__name}>Alexander Volkanovski</p>
                    </Link>
                    <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
                        <p className={styles.peleadores__card__name}>Sean Strickland</p>
                    </Link>
                    <Link href='/peleadores/jiri-prochazka' className={`${styles.peleadores__card} ${styles.peleadores__card_prochazka}`}>
                        <p className={styles.peleadores__card__name}>Jiri Prochazka</p>
                    </Link>
                    <Link href='/peleadores/tony-ferguson' className={`${styles.peleadores__card} ${styles.peleadores__card_ferguson}`}>
                        <p className={styles.peleadores__card__name}>Tony Ferguson</p>
                    </Link>
                    <Link href='/peleadores/conor-mcgregor' className={`${styles.peleadores__card} ${styles.peleadores__card_mcgregor}`}>
                        <p className={styles.peleadores__card__name}>Conor Mcgregor</p>
                    </Link>
                    <Link href='/peleadores/israel-adesanya' className={`${styles.peleadores__card} ${styles.peleadores__card_adesanya}`}>
                        <p className={styles.peleadores__card__name}>Israel Adesanya</p>
                    </Link>
                    <Link href='/peleadores/khamzat-chimaev' className={`${styles.peleadores__card} ${styles.peleadores__card_chimaev}`}>
                        <p className={styles.peleadores__card__name}>Khamzat Chimaev</p>
                    </Link>
                    <Link href='/peleadores/charles-oliveira' className={`${styles.peleadores__card} ${styles.peleadores__card_oliveira}`}>
                        <p className={styles.peleadores__card__name}>Charles Oliveira</p>
                    </Link>
                    <Link href='/peleadores/justin-gaethje' className={`${styles.peleadores__card} ${styles.peleadores__card_gaethje}`}>
                        <p className={styles.peleadores__card__name}>Justin Gaethje</p>
                    </Link>
                    <Link href='/peleadores/dustin-poirier' className={`${styles.peleadores__card} ${styles.peleadores__card_poirier}`}>
                        <p className={styles.peleadores__card__name}>Dustin Poirier</p>
                    </Link>
                    <Link href='/peleadores/michael-chandler' className={`${styles.peleadores__card} ${styles.peleadores__card_chandler}`}>
                        <p className={styles.peleadores__card__name}>Michael Chandler</p>
                    </Link>
                    <Link href='/peleadores/max-holloway' className={`${styles.peleadores__card} ${styles.peleadores__card_holloway}`}>
                        <p className={styles.peleadores__card__name}>Max Holloway</p>
                    </Link>
                    <Link href='/peleadores/kamaru-usman' className={`${styles.peleadores__card} ${styles.peleadores__card_usman}`}>
                        <p className={styles.peleadores__card__name}>Kamaru Usman</p>
                    </Link>
                    <Link href='/peleadores/colby-covington' className={`${styles.peleadores__card} ${styles.peleadores__card_covington}`}>
                        <p className={styles.peleadores__card__name}>Colby Covington</p>
                    </Link>
                    <Link href='/peleadores/marlon-vera' className={`${styles.peleadores__card} ${styles.peleadores__card_vera}`}>
                        <p className={styles.peleadores__card__name}>Marlon Vera</p>
                    </Link>
                    <Link href='/peleadores/arman-tsarukyan' className={`${styles.peleadores__card} ${styles.peleadores__card_tsarukyan}`}>
                        <p className={styles.peleadores__card__name}>Arman Tsarukyan</p>
                    </Link>
                    <Link href='/peleadores/paddy-pimblett' className={`${styles.peleadores__card} ${styles.peleadores__card_pimblett}`}>
                        <p className={styles.peleadores__card__name}>Paddy Pimblett</p>
                    </Link>
                    <Link href='/peleadores/raul-rosas-jr' className={`${styles.peleadores__card} ${styles.peleadores__card_rosasjr}`}>
                        <p className={styles.peleadores__card__name}>Raúl Rosas Jr.</p>
                    </Link>
                    <Link href='/peleadores/francis-ngannou' className={`${styles.peleadores__card} ${styles.peleadores__card_ngannou}`}>
                        <p className={styles.peleadores__card__name}>Francis Ngannou</p>
                    </Link>
                    <Link href='/peleadores/belal-muhammad' className={`${styles.peleadores__card} ${styles.peleadores__card_belal}`}>
                        <p className={styles.peleadores__card__name}>Belal Muhammad</p>
                    </Link>
                </article>
                <h2 className={styles.peleadores__subtitle}>Campeones de UFC</h2>
                <article className={styles.peleadores__container}>
                <Link href='/peleadores/ilia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
                        <p className={styles.peleadores__card__name}>Ilia Topuria</p>
                    </Link>
                    <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
                        <p className={styles.peleadores__card__name}>Islam Makhachev</p>
                    </Link>
                    <Link href='/peleadores/sean-omalley' className={`${styles.peleadores__card} ${styles.peleadores__card_omalley}`}>
                        <p className={styles.peleadores__card__name}>Sean O&apos;malley</p>
                    </Link>
                    <Link href='/peleadores/alex-pereira' className={`${styles.peleadores__card} ${styles.peleadores__card_pereira}`}>
                        <p className={styles.peleadores__card__name}>Alex Pereira</p>
                    </Link>
                    <Link href='/peleadores/alexandre-pantoja' className={`${styles.peleadores__card} ${styles.peleadores__card_pantoja}`}>
                        <p className={styles.peleadores__card__name}>Alexandre Pantoja</p>
                    </Link>
                    <Link href='/peleadores/leon-edwards' className={`${styles.peleadores__card} ${styles.peleadores__card_edwards}`}>
                        <p className={styles.peleadores__card__name}>Leon Edwards</p>
                    </Link>
                    
                    <Link href='/peleadores/jon-jones' className={`${styles.peleadores__card} ${styles.peleadores__card_jones}`}>
                        <p className={styles.peleadores__card__name}>Jon Jones</p>
                    </Link>
                    
                    <Link href='/peleadores/tom-aspinall' className={`${styles.peleadores__card} ${styles.peleadores__card_aspinall}`}>
                        <p className={styles.peleadores__card__name}>Tom Aspinall</p>
                    </Link>
                    <Link href='/peleadores/du-plessis' className={`${styles.peleadores__card} ${styles.peleadores__card_duPlessis}`}>
                        <p className={styles.peleadores__card__name}>Dricus Du Plessis</p>
                    </Link>
                </article>
                <h2 className={styles.peleadores__subtitle}>Peleadores argentinos de MMA</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/emiliano-sordi' className={`${styles.peleadores__card} ${styles.peleadores__card_emiliano}`}>
                        <p className={styles.peleadores__card__name}>Emiliano Sordi</p>
                    </Link>
                    <Link href='/peleadores/santiago-ponzinibbio' className={`${styles.peleadores__card} ${styles.peleadores__card_ponzinibbio}`}>
                        <p className={styles.peleadores__card__name}>Santiago Ponzinibbio</p>
                    </Link>
                    <Link href='/peleadores/laureano-staropoli' className={`${styles.peleadores__card} ${styles.peleadores__card_staropoli}`}>
                        <p className={styles.peleadores__card__name}>Laureano Staropoli</p>
                    </Link>
                    <Link href='/peleadores/franco-tenaglia' className={`${styles.peleadores__card} ${styles.peleadores__card_tenaglia}`}>
                        <p className={styles.peleadores__card__name}>Franco Tenaglia</p>
                    </Link>
                    <Link href='/peleadores/guido-cannetti' className={`${styles.peleadores__card} ${styles.peleadores__card_canetti}`}>
                        <p className={styles.peleadores__card__name}>Guido Cannetti</p>
                    </Link>
                </article>
            </section>
        </main>
    )
}