import Link from 'next/link'
import styles from './campeones.module.css'

export default function Campeones () {
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Luchadores Campeones de MMA</h1>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Campeones UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/ilia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
                        <h3 className={styles.peleadores__card__name}>Ilia Topuria</h3>
                    </Link>
                    <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
                        <h3 className={styles.peleadores__card__name}>Islam Makhachev</h3>
                    </Link>
                    <Link href='/peleadores/sean-omalley' className={`${styles.peleadores__card} ${styles.peleadores__card_omalley}`}>
                        <h3 className={styles.peleadores__card__name}>Sean O&apos;malley</h3>
                    </Link>
                    <Link href='/peleadores/alex-pereira' className={`${styles.peleadores__card} ${styles.peleadores__card_pereira}`}>
                        <h3 className={styles.peleadores__card__name}>Alex Pereira</h3>
                    </Link>
                    <Link href='/peleadores/alexandre-pantoja' className={`${styles.peleadores__card} ${styles.peleadores__card_pantoja}`}>
                        <h3 className={styles.peleadores__card__name}>Alexandre Pantoja</h3>
                    </Link>
                    <Link href='/peleadores/leon-edwards' className={`${styles.peleadores__card} ${styles.peleadores__card_edwards}`}>
                        <h3 className={styles.peleadores__card__name}>Leon Edwards</h3>
                    </Link>
                    <Link href='/mujeres/zhang-weili' className={`${styles.peleadores__card} ${styles.peleadores__card_weili}`}>
                        <h3 className={styles.peleadores__card__name}>Zhang Weili</h3>
                    </Link>
                    <Link href='/peleadores/jon-jones' className={`${styles.peleadores__card} ${styles.peleadores__card_jones}`}>
                        <h3 className={styles.peleadores__card__name}>Jon Jones</h3>
                    </Link>
                    <Link href='/mujeres/alexa-grasso' className={`${styles.peleadores__card} ${styles.peleadores__card_grasso}`}>
                        <h3 className={styles.peleadores__card__name}>Alexa Grasso</h3>
                    </Link>
                    <Link href='/peleadores/tom-aspinall' className={`${styles.peleadores__card} ${styles.peleadores__card_aspinall}`}>
                        <h3 className={styles.peleadores__card__name}>Tom Aspinall</h3>
                    </Link>
                    <Link href='/peleadores/du-plessis' className={`${styles.peleadores__card} ${styles.peleadores__card_duPlessis}`}>
                        <h3 className={styles.peleadores__card__name}>Dricus Du Plessis</h3>
                    </Link>
                    <Link href='/mujeres/raquel-pennington' className={`${styles.peleadores__card} ${styles.peleadores__card_pennington}`}>
                        <h3 className={styles.peleadores__card__name}>Raquel Pennington</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}