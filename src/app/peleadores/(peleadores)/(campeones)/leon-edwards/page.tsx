import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import edwards from '@/assets/peleadores__images/leon-edwards/edwards.png'
import styles from '../../../components/peleador.module.css'

export default function LeonEdwards () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={edwards} w={21} l={3} d={0} nombre='Leon Edwarsd' apodo='ROCKY' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Edwards UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards vs Colby Covington</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards vs Kamary Usman</h2>
                </article>
            </section>
        </main>
    )
}