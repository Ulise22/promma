import PeleadoresHero from '../../../components/PeleadoresHero'
import duPlessis from '@/assets/peleadores__images/0-10/dricus-du-plessis/du-plessis.png'
import styles from '../../../components/peleador.module.css'

export default function DuPlessis () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={duPlessis} w={20} l={2} d={0} nombre='Dricus Du Plessis' apodo='STILLKNOCKS' categoria='Peso Medio' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Dricus Du Plessis UFC</h2>
                </article>
            </section>
        </main>
    )
}