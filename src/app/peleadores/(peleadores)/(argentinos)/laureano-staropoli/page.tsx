import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import staropoli from '@/assets/peleadores__images/laureano-staropoli/staropoli.png'
import styles from '../../../components/peleador.module.css'

export default function Staropoli () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={staropoli} w={13} l={5} d={0} nombre='Laureano staropoli' apodo='PEPI' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli ARES</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pepi Staropoli Campeón</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Laureano Staropoli Próxima pelea</h2>
                </article>
            </section>
        </main>
    )
}