import PeleadoresHero from '../../components/PeleadoresHero'
import omalley from '../../../../assets/peleadores__images/sean-omalley/omalley.png'
import styles from '../../components/peleador.module.css'

export default function Omalley () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={omalley} w={17} l={1} d={0} nombre={`Sean O'Malley`} apodo='SUGAR' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <h2>Sean O&apos;malley</h2>
            </section>
        </main>
    )
}