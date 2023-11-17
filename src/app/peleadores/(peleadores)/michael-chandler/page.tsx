import PeleadoresHero from '../../components/PeleadoresHero'
import chandler from '@/assets/peleadores__images/michael-chandler/chandler.png'
import styles from '../../components/peleador.module.css'

export default function Chandler () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={chandler} w={23} l={8} d={0} nombre='Michael Chandler' apodo='IRON' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Chandler UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Michael Chandler Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}