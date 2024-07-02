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
                        <p className={styles.leyendas__card__title}>Khabib Nurmagomedov</p>
                    </Link>
                    <Link href='/leyendas/george-st-pierre' className={`${styles.leyendas__card} ${styles.leyendas__card__gsp}`}>
                        <p className={styles.leyendas__card__title}>George St-Pierre</p>
                    </Link>
                    <Link href='/leyendas/anderson-silva' className={`${styles.leyendas__card} ${styles.leyendas__card__anderson}`}>
                        <p className={styles.leyendas__card__title}>Anderson Silva</p>
                    </Link>
                    <Link href='/leyendas/brock-lesnar' className={`${styles.leyendas__card} ${styles.leyendas__card__lesnar}`}>
                        <p className={styles.leyendas__card__title}>Brock Lesnar</p>
                    </Link>
                    <Link href='/leyendas/daniel-cormier' className={`${styles.leyendas__card} ${styles.leyendas__card__dc}`}>
                        <p className={styles.leyendas__card__title}>Daniel Cormier</p>
                    </Link>
                    <Link href='/leyendas/jose-aldo' className={`${styles.leyendas__card} ${styles.leyendas__card__aldo}`}>
                        <p className={styles.leyendas__card__title}>Jose Aldo</p>
                    </Link>
                    <Link href='/leyendas/ronda-rousey' className={`${styles.leyendas__card} ${styles.leyendas__card__rousey}`}>
                        <p className={styles.leyendas__card__title}>Ronda Rousey</p>
                    </Link>
                    <Link href='/leyendas/demetrious-johnson' className={`${styles.leyendas__card} ${styles.leyendas__card__demetrious}`}>
                        <p className={styles.leyendas__card__title}>Demetrious Johnson</p>
                    </Link>
                    <Link href='/leyendas/amanda-nunes' className={`${styles.leyendas__card} ${styles.leyendas__card__amanda}`}>
                        <p className={styles.leyendas__card__title}>Amanda Nunes</p>
                    </Link>
                    <Link href='/leyendas/royce-gracie' className={`${styles.leyendas__card} ${styles.leyendas__card__gracie}`}>
                        <p className={styles.leyendas__card__title}>Royce Gracie</p>
                    </Link>
                    <Link href='/leyendas/randy-couture' className={`${styles.leyendas__card} ${styles.leyendas__card__couture}`}>
                        <p className={styles.leyendas__card__title}>Randy Couture</p>
                    </Link>
                    <Link href='/leyendas/fedor-emilianenko' className={`${styles.leyendas__card} ${styles.leyendas__card__emilianenko}`}>
                        <p className={styles.leyendas__card__title}>Fedor Emelianenko</p>
                    </Link>
                    <Link href='/leyendas/chuck-liddell' className={`${styles.leyendas__card} ${styles.leyendas__card__liddell}`}>
                        <p className={styles.leyendas__card__title}>Chuck Liddell</p>
                    </Link>
                </article>
            </section>
        </main>
    )
} 