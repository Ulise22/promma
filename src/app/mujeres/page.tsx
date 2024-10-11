import Link from 'next/link'
import styles from './mujeres.module.css'

export default function Mujeres () {
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Mujeres MMA</h1>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Mujeres UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/mujeres/alexa-grasso' className={`${styles.peleadores__card} ${styles.peleadores__card_grasso}`}>
                        <h3 className={styles.peleadores__card__name}>Alexa Grasso</h3>
                    </Link>
                    <Link href='/mujeres/ailin-perez' className={`${styles.peleadores__card} ${styles.peleadores__card_ailin}`}>
                        <h3 className={styles.peleadores__card__name}>Ailín Pérez</h3>
                    </Link>
                    <Link href='/mujeres/mackenzie-dern' className={`${styles.peleadores__card} ${styles.peleadores__card_dern}`}>
                        <h3 className={styles.peleadores__card__name}>Mackenzie Dern</h3>
                    </Link>
                    <Link href='/mujeres/mayra-bueno-silva' className={`${styles.peleadores__card} ${styles.peleadores__card_mayra}`}>
                        <h3 className={styles.peleadores__card__name}>Mayra Bueno Silva</h3>
                    </Link>
                    <Link href='/mujeres/yan-xiaonan' className={`${styles.peleadores__card} ${styles.peleadores__card_xiaonan}`}>
                        <h3 className={styles.peleadores__card__name}>Yan Xiaonan</h3>
                    </Link>
                    <Link href='/mujeres/kayla-harrison' className={`${styles.peleadores__card} ${styles.peleadores__card_harrison}`}>
                        <h3 className={styles.peleadores__card__name}>Kayla Harrison</h3>
                    </Link>
                    <Link href='/mujeres/holly-holm' className={`${styles.peleadores__card} ${styles.peleadores__card_holly}`}>
                        <h3 className={styles.peleadores__card__name}>Holly Holm</h3>
                    </Link>
                    <Link href='/mujeres/rose-namajumas' className={`${styles.peleadores__card} ${styles.peleadores__card_namajumas}`}>
                        <h3 className={styles.peleadores__card__name}>Rose Namajumas</h3>
                    </Link>
                    <Link href='/mujeres/raquel-pennington' className={`${styles.peleadores__card} ${styles.peleadores__card_pennington}`}>
                        <h3 className={styles.peleadores__card__name}>Raquel Pennington</h3>
                    </Link>
                </article>
                <h2 className={styles.peleadores__subtitle}>Campeonas de UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/mujeres/zhang-weili' className={`${styles.peleadores__card} ${styles.peleadores__card_weili}`}>
                        <h3 className={styles.peleadores__card__name}>Zhang Weili</h3>
                    </Link>
                    <Link href='/mujeres/valentina-shevchenko' className={`${styles.peleadores__card} ${styles.peleadores__card_shevchenko}`}>
                        <h3 className={styles.peleadores__card__name}>Valentina Shevchenko</h3>
                    </Link>
                    <Link href='/mujeres/julianna-pena' className={`${styles.peleadores__card} ${styles.peleadores__card_julianna}`}>
                        <h3 className={styles.peleadores__card__name}>Julianna Peña</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}