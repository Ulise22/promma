import PeleadoresHero from '../../components/PeleadoresHero'
import oliveira from '@/assets/peleadores__images/charles-oliveira/oliveira.png'
import styles from '../../components/peleador.module.css'

export default function Oliveira () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={oliveira} w={34} l={9} d={0} nombre='Charles Oliveira' apodo='DO BRONXS' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Oliveira Jiu Jitsu</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira vs Islam Makhachev</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Miopía</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Biografía</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Charles Oliveira Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}