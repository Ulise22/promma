import styles from '@/app/peleadores/components/peleador.module.css'

export default function AilinPerez () {
    return(
        <main>
            <h1>Ailín Pérez</h1>
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ailín Pérez Record</h2>
                </article>
            </section>
        </main>
    )
}