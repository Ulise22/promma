import PeleadoresHero from '../../components/PeleadoresHero'
import omalley from '../../../../assets/peleadores__images/sean-omalley/omalley.png'
import styles from '../../components/peleador.module.css'

export default function Omalley () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={omalley} w={17} l={1} d={0} nombre={`Sean O'Malley`} apodo='SUGAR' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Record</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean O&apos;malley Última Pelea</h2>
                </article>
                
            </section>
        </main>
    )
}