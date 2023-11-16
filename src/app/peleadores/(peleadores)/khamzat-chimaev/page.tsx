import PeleadoresHero from '../../components/PeleadoresHero'
import khamzat from '@/assets/peleadores__images/khamzat-chimaev/khamzat.png'
import styles from '../../components/peleador.module.css'

export default function Khamzat () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={khamzat} w={13} l={0} d={0} nombre='Khamzat Chimaev' apodo='BORZ' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC Chimaev</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Ranking</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Estatura</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Khabib</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Khamzat Chimaev Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}