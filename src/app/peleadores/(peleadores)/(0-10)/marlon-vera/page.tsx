import PeleadoresHero from '../../../components/PeleadoresHero'
import vera from '@/assets/peleadores__images/0-10/chito-vera/chito_vera.png'
import styles from '../../../components/peleador.module.css'

export default function Chito () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={vera} w={28} l={8} d={1} nombre='Marlon Vera' apodo='CHITO' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Chito Vera UFC</h2>
                </article>
            </section>
        </main>
    )
}