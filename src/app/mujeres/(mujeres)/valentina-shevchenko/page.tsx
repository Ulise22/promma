import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'

export default function Valentina () {
    return(
        <main>
            <h1>Valentina Shevchenko</h1>
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko Récord</h2>
                    <p className={styles.peleador__article__text}>Valentina Shevchenko tiene un récord de 23-4-1. Siendo 8 de sus 23 victorias por nocaut, 7 por sumisión, y 8 por decisión. Mientras que de sus 4 derrotas 1 fue por nocaut, 2 por decisión y 1 una por sumisión. Y su único empate, fue en la pelea contra <Link href='/campeones/alexa-grasso'>Alexa Grasso</Link> en la revancha por el título el 16 de septiembre de 2023.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko ¿por qué es peruana?</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Valentina Shevchenko Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}