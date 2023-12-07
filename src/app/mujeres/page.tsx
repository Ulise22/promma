import Link from 'next/link'
import styles from './mujeres.module.css'

export default function Mujeres () {
    return(
        <main>
            <section className={styles.peleadores__hero}>
                <h1 className={styles.peleadores__hero__title}>Mujeres de MMA</h1>
            </section>
            <section className={styles.peleadores}>
                <h2 className={styles.peleadores__subtitle}>Mujeres MMA</h2>
                <article className={styles.peleadores__container}>
                    <Link href='/peleadores/alexa-grasso' className={`${styles.peleadores__card} ${styles.peleadores__card_grasso}`}>
                        <h3 className={styles.peleadores__card__name}>Alexa Grasso</h3>
                    </Link>
                    <Link href='/peleadores/zhang-weili' className={`${styles.peleadores__card} ${styles.peleadores__card_weili}`}>
                        <h3 className={styles.peleadores__card__name}>Zhang Weili</h3>
                    </Link>
                    <Link href='/mujeres/julianna-pena' className={`${styles.peleadores__card} ${styles.peleadores__card_julianna}`}>
                        <h3 className={styles.peleadores__card__name}>Julianna Peña</h3>
                    </Link>
                </article>
            </section>
        </main>
    )
}