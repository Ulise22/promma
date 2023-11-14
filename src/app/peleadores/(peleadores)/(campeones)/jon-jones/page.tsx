import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import jones from '@/assets/peleadores__images/jon-jones/jon_jones.png'
import styles from '../../../components/peleador.module.css'

export default function JonJones () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={jones} w={27} l={1} d={0} nombre='Jon Jones' apodo='BONES' categoria='PESO PESADO' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jon Jones UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jon Jones Artes Marciales</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jon Jones historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jon Jones Record</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Jon Jones Próxima Pelea</h2>
                </article>
            </section>
        </main>
    )
}