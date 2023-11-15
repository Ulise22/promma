import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import julianna from '@/assets/peleadores__images/juliana-pena/julianna.png'
import styles from '../../../components/peleador.module.css'

export default function JuliannaPena () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={julianna} w={12} l={5} d={0} nombre='Julianna Peña' apodo='THE VENEZUELAN VIXEN' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña vs Amanda Nunes</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña MMA</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Récord</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Biografía</h2>
                </article>
            </section>
        </main>
    )
}