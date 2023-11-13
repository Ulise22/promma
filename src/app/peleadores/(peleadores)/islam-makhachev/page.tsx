import makhachev from '../../../../assets/peleadores__images/islam-makhachev/makhachev.png'
import PeleadoresHero from '../../components/PeleadoresHero'
import styles from '../../components/peleador.module.css'

export default function Makhachev () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={makhachev} w={25} l={1} d={0} nombre='Islam Makhachev' apodo={null} categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <h1>Islam Makhachev</h1>
            </section>
        </main>
    )
}