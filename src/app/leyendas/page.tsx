import Link from 'next/link'
import styles from './leyendas.module.css'

export default function Leyendas () {
    return(
        <main>
            <section className={styles.leyendas__hero}>
                <h1 className={styles.leyendas__hero__title}>Leyendas de MMA</h1>
            </section>
            <section className={styles.leyendas__content__container}>
                <h2>Leyendas de la UFC</h2>
                <article className={styles.leyendas__content}>
                    <Link href='/leyendas/khabib-nurmagomedov' className={`${styles.leyendas__card} ${styles.leyendas__card__khabib}`}>
                        <h3 className={styles.leyendas__card__title}>Khabib Nurmagomedov</h3>
                    </Link>
                    <Link href='/leyendas/george-st-pierre' className={`${styles.leyendas__card} ${styles.leyendas__card__gsp}`}>
                        <h3 className={styles.leyendas__card__title}>George St-Pierre</h3>
                    </Link>
                    <Link href='/leyendas/anderson-silva' className={`${styles.leyendas__card} ${styles.leyendas__card__anderson}`}>
                        <h3 className={styles.leyendas__card__title}>Anderson Silva</h3>
                    </Link>
                    <Link href='/leyendas/brock-lesnar' className={`${styles.leyendas__card} ${styles.leyendas__card__lesnar}`}>
                        <h3 className={styles.leyendas__card__title}>Brock Lesnar</h3>
                    </Link>
                    <Link href='/leyendas/daniel-cormier' className={`${styles.leyendas__card} ${styles.leyendas__card__dc}`}>
                        <h3 className={styles.leyendas__card__title}>Daniel Cormier</h3>
                    </Link>
                    <Link href='/leyendas/jose-aldo' className={`${styles.leyendas__card} ${styles.leyendas__card__aldo}`}>
                        <h3 className={styles.leyendas__card__title}>Jose Aldo</h3>
                    </Link>
                    <Link href='/leyendas/ronda-rousey' className={`${styles.leyendas__card} ${styles.leyendas__card__rousey}`}>
                        <h3 className={styles.leyendas__card__title}>Ronda Rousey</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
} 