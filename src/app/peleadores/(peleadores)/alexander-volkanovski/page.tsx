import PeleadoresHero from '../../components/PeleadoresHero'
import volkanovski from '../../../../assets/peleadores__images/alexander-volkanovski/volkanovski.png'
import styles from '../../components/peleador.module.css'

export default function Volkanovski () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={volkanovski} w={26} l={3} d={0} nombre='Alexander Volkanovski' apodo='THE GREAT' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Volkanovski UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski record</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Ilia Topuria</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Última Pelea</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexander Volkanovski Próxima Pelea</h2>
                </article>
            </section>
        </main>
    )
}