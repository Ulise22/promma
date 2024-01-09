import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import cannetti from '@/assets/peleadores__images/0-10/guido-cannetti/guido_cannetti.png'
import styles from '@/app/peleadores/components/peleador.module.css'

export default function Staropoli () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={cannetti} w={10} l={7} d={0} nombre='Guido Canneti' apodo='EL NINJA ARGENTINO' categoria='Peso Gallo' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Guido Cannetti UFC</h2>
                    <p className={styles.peleador__article__text}></p>
                </article>
            </section>
        </main>
    )
}