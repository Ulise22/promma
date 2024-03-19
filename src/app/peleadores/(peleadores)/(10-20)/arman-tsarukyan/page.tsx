import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import tsarukyan from '@/assets/peleadores__images/20-30/arman-tsarukyan/arman-tsarukyan.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import AsideChamps from '@/app/components/asides/AsideChamps'

export default function Tsarukyan () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={tsarukyan} w={21} l={3} d={0} nombre='Arman Tsarukyan' apodo='AHALKALAKETS' categoria='Peso Ligero' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan UFC</h2>
                    <p className={styles.peleador__article__text}></p>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan Récord</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan posee un récord de 21-3. Siendo 9 de sus 21 victorias por la vía del nocaut, 5 por la vía de la sumisión y 7 por decisión de los jueces. Mientras que de sus 3 derrotas, 2 han sido por decisión y sólo 1 por nocaut al inicio de su carrera en 2015.</p>
                    <h2 className={styles.peleador__article__title}>Arman Tsarukyan Historia</h2>
                    <p className={styles.peleador__article__text}>Arman Tsarukyan nació el 11 de octubre de 1996 en Ajalkalaki, un pequeño pueblo de Georgia cercano a la frontera con Armenia. Es el hermano del medio de 3, teniendo un hermano mayor llamado Artur y una hermana menor llamada Isabella, y es el hijo de un empresario inmobiliario llamado Nairi Tsarukyan, con quienes a la edad de 3 años se mudó a Rusia en busca de mejorar su calidad de vida.</p>
                    <p>Arman desde muy joven estuvo interesado en los deportes, llegando a interesarse en el hockey sobre hielo, deporte que practicó durante 10 años, y en el freestyle wrestling donde llegó a destacar. Aunque una vez entrando a la adultez, se vió obligado a abandonar estos deportes para colaborar con su padre en trabajos de construcción. </p>
                    <p>Haría su debut como profesional en las MMA el 25 de septiembre de 2015, con tan sólo 20 años, en una promotora local de Rusia llamada <b>MFP</b>, en la que competiría gran parte de sus primeros años como peleador. Aquel debut fue contra el ruso <b>Shamil Olokhanov</b>, a quien sería capaz de noquear en el primer asalto.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}