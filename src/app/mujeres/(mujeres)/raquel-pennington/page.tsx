import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import raquel from '@/assets/peleadores__images/mujeres/raquel-pennington/raquel.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'

export default function Raquel () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={raquel} w={15} l={9} d={0} nombre='Raquel Pennington' apodo='ROCKY' categoria='Peso Gallo Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Raquel Pennington UFC</h2>
                </article>
            </section>
        </main>
    )
}