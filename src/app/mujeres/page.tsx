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
                    <Link href='/mujeres/julianna-pena' className={`${styles.peleadores__card} ${styles.peleadores__card_julianna}`}>
                        <p className={styles.peleadores__card__name}>Julianna Peña</p>
                    </Link>
                    <Link href='/mujeres/valentina-shevchenko' className={`${styles.peleadores__card} ${styles.peleadores__card_shevchenko}`}>
                        <p className={styles.peleadores__card__name}>Valentina Shevchenko</p>
                    </Link>
                    <Link href='/mujeres/ailin-perez' className={`${styles.peleadores__card} ${styles.peleadores__card_ailin}`}>
                        <p className={styles.peleadores__card__name}>Ailín Pérez</p>
                    </Link>
                    <Link href='/mujeres/mackenzie-dern' className={`${styles.peleadores__card} ${styles.peleadores__card_dern}`}>
                        <p className={styles.peleadores__card__name}>Mackenzie Dern</p>
                    </Link>
                    <Link href='/mujeres/mayra-bueno-silva' className={`${styles.peleadores__card} ${styles.peleadores__card_mayra}`}>
                        <p className={styles.peleadores__card__name}>Mayra Bueno Silva</p>
                    </Link>
                    <Link href='/mujeres/yan-xiaonan' className={`${styles.peleadores__card} ${styles.peleadores__card_xiaonan}`}>
                        <p className={styles.peleadores__card__name}>Yan Xiaonan</p>
                    </Link>
                    <Link href='/mujeres/kayla-harrison' className={`${styles.peleadores__card} ${styles.peleadores__card_harrison}`}>
                        <p className={styles.peleadores__card__name}>Kayla Harrison</p>
                    </Link>
                    <Link href='/mujeres/holly-holm' className={`${styles.peleadores__card} ${styles.peleadores__card_holly}`}>
                        <p className={styles.peleadores__card__name}>Holly Holm</p>
                    </Link>
                    <Link href='/mujeres/rose-namajumas' className={`${styles.peleadores__card} ${styles.peleadores__card_namajumas}`}>
                        <p className={styles.peleadores__card__name}>Rose Namajumas</p>
                    </Link>
                </article>
                <h2 className={styles.peleadores__subtitle}>Campeonas de UFC</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/mujeres/zhang-weili' className={`${styles.peleadores__card} ${styles.peleadores__card_weili}`}>
                        <p className={styles.peleadores__card__name}>Zhang Weili</p>
                    </Link>
                    <Link href='/mujeres/alexa-grasso' className={`${styles.peleadores__card} ${styles.peleadores__card_grasso}`}>
                        <p className={styles.peleadores__card__name}>Alexa Grasso</p>
                    </Link>
                    <Link href='/mujeres/raquel-pennington' className={`${styles.peleadores__card} ${styles.peleadores__card_pennington}`}>
                        <p className={styles.peleadores__card__name}>Raquel Pennington</p>
                    </Link>
                </article>
            </section>
        </main>
    )
}