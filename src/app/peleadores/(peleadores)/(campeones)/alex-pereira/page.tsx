import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pereira from '@/assets/peleadores__images/alex-pereira/pereira.png'
import styles from '../../../components/peleador.module.css'

export default function AlexPereira () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pereira} w={9} l={2} d={0} nombre='Alex Pereira' apodo='POATAN' categoria='Peso Semipesado' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Adensanya vs Pereira</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira MMA</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC 4 Alex Pereira</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}