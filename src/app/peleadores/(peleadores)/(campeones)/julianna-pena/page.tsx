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
                    <p>Julianna Peña es una peleadora de Artes Marciales Mixtas venezolana y, pese a haber perdido su primera defensa al título contra la peleadora brasileña <b>Amanda Nunes</b>, Julianna es la actualmente rankeada número #1 en su división que quedó con un título vacante.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña vs Amanda Nunes</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña MMA</h2>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Récord</h2>
                    <p>Alexa grasso tiene un record de 11-5. Siendo 3 de sus 11 victorias por nocaut, 5 por sumisión y 3 por decisión. Mientras que sus 5 derrotas se componen de 1 por nocaut, 2 por sumisión y 2 por decisión.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Julianna Peña Biografía</h2>
                    <p>Julianna Nicole Peña nació el 19 de agosto de 1989 en la ciudad de Washington, Spokane, Estados Unidos. Es la menor de 4 hermanos. Se graduó en 2007 en el Mt Spokane High School. Ya en su adultez, con la idea de perder peso y canalizar su agresividad, comenzó a asistir a clases de cardio Kick Boxing, que la llevó a transicionar a las MMA, donde debutaría profesionalmente en mayo de 2009 con una victoria contra la estadounidense Raylene Harvey, después de ya haber ganado 2 combates amateur previamente.</p>
                    <p></p>
                </article>
            </section>
        </main>
    )
}