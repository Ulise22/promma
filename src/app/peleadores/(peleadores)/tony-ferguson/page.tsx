import PeleadoresHero from '../../components/PeleadoresHero'
import ferguson from '../../../../assets/peleadores__images/tony-ferguson/ferguson.png'
import styles from '../../components/peleador.module.css'

export default function Ferguson () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ferguson} w={26} l={9} d={0} nombre='Tony Ferguson' categoria='Peso Ligero' apodo='EL CUCUY' />
            <section>
                <h1>Tony Ferguson</h1>
            </section>
        </main>
    )
} 