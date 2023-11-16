import PeleadoresHero from '../../components/PeleadoresHero'
import gaethje from '@/assets/peleadores__images/justin-gaethje/gaethje.png'
import styles from '../../components/peleador.module.css'

export default function Gaethje () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={gaethje} w={26} l={4} d={0} nombre='Justin Gaethje' apodo='THE HIGHLIGHT' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Gaethje UFC</h2>
                </article>
            </section>
        </main>
    )
}