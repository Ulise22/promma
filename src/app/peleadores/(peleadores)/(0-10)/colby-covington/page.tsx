import PeleadoresHero from '../../../components/PeleadoresHero'
import colby from '@/assets/peleadores__images/colby-covington/colby_covington.png'
import styles from '../../../components/peleador.module.css'

export default function Covington () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={colby} w={17} l={4} d={0} nombre='Colby Covington' apodo='CHAOS' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Colby Covington Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}