import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pereira from '@/assets/peleadores__images/alex-pereira/pereira.png'
import styles from '../../../components/peleador.module.css'

export default function AlexPereira () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pereira} w={9} l={2} d={0} nombre='Alex Pereira' apodo='POATAN' categoria='Peso Semipesado' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira UFC</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Adensanya vs Pereira</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pereira MMA</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Récord</h2>
                    <p>En MMA, Alex Pereira tiene un record de 9-2 que le valió para ser campeón de 2 divisiones diferentes. 7 de sus 9 victotias por fueron la vía del nocaut, y las otras 2 fueron por decisión. Mientras que sus 2 derrotas fueron 1 por nocaut y la otra por sumisión.</p>
                    <p>Mientras que su record en <b>Kickboxing</b> es de 33-7. Siendo 21 de sus 33 victorias por nocauts y las otras 12 por decisión. Mientras que de sus 7 derrotas, 2 fueron por nocauts y las otras 5 por decisión.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>UFC 4 Alex Pereira</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Historia</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alex Pereira Última Pelea</h2>
                </article>
            </section>
        </main>
    )
}