import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import edwards from '@/assets/peleadores__images/leon-edwards/edwards.png'
import pelea from '@/assets/peleadores__images/leon-edwards/edwards_pelea.jpg'
import careo from '@/assets/peleadores__images/leon-edwards/edwards_careo.jpg'
import sparring from '@/assets/peleadores__images/leon-edwards/edwards_sparring.jpg'
import sparring2 from '@/assets/peleadores__images/leon-edwards/edwards_sparring2.jpg'
import card from '@/assets/peleadores__images/leon-edwards/edwards_card.jpg'
import styles from '../../../components/peleador.module.css'
import Image from 'next/image'

export default function LeonEdwards () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={edwards} w={21} l={3} d={0} nombre='Leon Edwarsd' apodo='ROCKY' categoria='Peso Welter' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Edwards UFC</h2>
                    <p className={styles.peleador__article__text}>Actual campeón de UFC 278 y UFC 286, habiendo ganado en ambas ocasiones contra Kamaru Usman. Lleva peleando profesionalmente en la UFC 9 años. Actualmente está en el equipo UTC Birmingham, con solo dos derrotas oficiales de la UFC.</p>
                    <p className={styles.peleador__article__text}>El 8 de noviembre de 2014, Edwards, hizo su debut contra Claudio Silva en UFC Fight Night: Shogun vs. Saint Preux. Donde fue vencido por decisión dividida (29-28, 29-28, 28-29). El 20 de agosto de 2022 ganó el título mundial de peso welter, UFC 278, donde ganó por KO con una patada. El 18 de marzo de 2023 defendió el título contra el mismo contrincante, Kamaru Usman, donde ganó por decisión mayoritaria.</p>
                    <p className={styles.peleador__article__text}>El 21 de enero de 2020 se confirma que Leon Edwards renueva su contrato, su próximo combate se hubiese dado el 21 de marzo contra el ex campeón de aquel entonces (Tyron Woodley), pero a causa del COVID-19 forzaron al luchador para que retirarse. Luego de algunos retrasos en la pelea, se terminó cancelando. Edwards no volvió a luchar hasta el 13 de marzo de 2021. Esto generó que la UFC removiera a Edwards de los rankings por inactividad.</p>
                    <Image className={styles.peleador__article__image} src={pelea} alt='El peleador de MMA Leon Edwards conectando un golpe en el rostro de su rival en medio de un combate de UFC' />
                    <p className={styles.peleador__article__text}>Actualmente, en palabras de Leon Edwards: “Siento que voy a salir, convertirme en doble campeón, el primero del Reino Unido en hacerlo, ese es definitivamente uno de mis objetivos. Eso está en las tarjetas, seguro.” Buscando volverse campeón en dos divisiones, peso welter y peso medio.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards Récord</h2>
                    <p className={styles.peleador__article__text}>Un total de 16 peleas oficiales de UFC: 2 derrotas por decisión unánime y decisión dividida. 13 victorias: 3 por nocaut, 1 sumisión y 8 por decisión unánime y decisión dividida. 1 pelea que terminó sin decisión por un piquete a los ojos de parte Edwards a Muhammad.</p>
                    <p className={styles.peleador__article__text}>25 combates totales, 21 victorias: 7 por nocaut, 3 por sumisión y 11 por decisión unánime y decisión dividida. 3 derrotas: 2 decisión unánime y decisión dividida, 1 por descalificación.Obteniendo una última pelea que fue cancelada por piquete de ojos.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards vs Colby Covington</h2>
                    <p className={styles.peleador__article__text}>Este 17 de diciembre de 2023, ambos encabezarán la cartelera de UFC 296 donde se pondrá en juego el título de peso welter. Covington lleva más de un año sin pelear en la UFC, su última pelea se remonta a marzo de 2022, en la que ganó contra Jorge Masvidal por decisión unánime. Mientras que, por el otro lado, el actual campeón de peso welter, lleva desde marzo de 2023 sin pelear en la UFC. Manteniendo su título intacto.</p>
                    <Image className={styles.peleador__article__image} src={card} alt='Leon Edwards con los brazos en altos después de dar el peso previo a su pelea de UFC' />
                    <p className={styles.peleador__article__text}>En palabras de Covington: “Mis habilidades de sumisión, mis habilidades de finalización, voy a apagar las luces de este tipo. No va a llegar a los 25 minutos el 16 de diciembre en el T-Mobile Arena, Las Vegas, Nevada.” “Mi predicción es una dominación completa, solo desde el segundo hasta el tiempo que dure. No va a tener un rayo de esperanza en esta pelea. Quiero salir y realmente dar un ejemplo de que no va a querer pelear conmigo en una revancha. Probablemente querrá retirarse o ir a luchar contra otra persona donde sepa que tiene una oportunidad contra ellos.” Afirma el contrincante sin temor a enfrentarse al campeón. </p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards Historia</h2>
                    <p className={styles.peleador__article__text}>Nacimiento: Kingston, Jamaica (25 de agosto de 1991, 32 años)</p>
                    <Image className={styles.peleador__article__image} src={sparring}  alt='Leon Edwards haciendo sparring de Kickboxing con un compañero en su gimansio'/>
                    <p className={styles.peleador__article__text}>A temprana edad se mudó a Birmingham, Inglaterra. En los años de formación que tuvo en su nuevo hogar, lo apodaron “Rocky” a causa de la violencia en las calles de su barrio, Edwards no sería menos que otros muchachos de su edad. En palabras de Leon Edwards: “Por eso mi apodo es Rocky. Lo conseguí peleando en la calle.”</p>
                    <p className={styles.peleador__article__text}>A los 14 años, su padre muere en un club nocturno tras meterse en “actividades cuestionables” como Edwards describe. Esto generó que el muchacho terminara implicado en actividades criminales como tráfico de drogas y peleas callejeras. A los 17 años (2008) fue capaz de salir de eso gracias a su madre, decidió llevarlo a un club de MMA. A los 19 años comienza su carrera, haciendo su debut contra Carl Booth, saliendo victorioso en el segundo asalto (2010).</p>
                    <p className={styles.peleador__article__text}>Años más tarde comenzaría oficialmente en peso welter de la UFC, con un debut contra Claudio Silva donde perdió por decisión unánime (28-29, 28-29, 27-29)</p>
                    <Image className={styles.peleador__article__image} src={sparring2}  alt='Leon Edwards haciendo un sparring con un compañero'/>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Leon Edwards vs Kamaru Usman</h2>
                    <p className={styles.peleador__article__text}>Tres enfrentamientos, dos aciertos de parte de Edwards y un acierto de parte de Usman. </p>
                    <Image className={styles.peleador__article__image} src={careo} alt='Leon Edwards y Kamaru Usman en el careo previo a su pelea por el título de UFC' />
                    <p className={styles.peleador__article__text}>En el año 2015 enfrento a Kamaru en UFC on Fox 17, donde perdió por decisión unánime (29-28, 30-27, 29-28), aunque esto no desanimó a Edwards para continuar, logrando un invicto de 9 peleas sin perder antes de tener su revancha. En el año 2022 pelearon por el título mundial de peso welter, UFC 278.</p>
                    <p className={styles.peleador__article__text}>Usman venía de cinco victorias del cinturón, 16 victorias seguidas y 9 años invicto sin que nadie que le ganase o le quitase el título del mejor en peso welter. Mientras que, por otro lado, Edwards venía de conseguir exitosos resultados en sus últimas peleas, sin perder ninguna, quedando descalificado en una ocasión.</p>
                    <p className={styles.peleador__article__text}>El día tan esperado había llegado (20 de agosto de 2022), donde Leon daría su revancha y Kamaru defendería su título por sexta ocasión. Sin embargo, los resultados no fueron los que uno esperaría para el invicto campeón de aquel entonces. En el quinto round, a tan solo 1 minuto de terminar, Edwards consigue conectar una patada a la cabeza de su adversario, noqueando a Usman de un golpe que le dio la victoria.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/egNhnzfX6VU?si=x7u6LsAEVtydT6Iu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En palabras del campeón: “Sabía que lo más probable es que tendremos una revancha en el futuro. Ya sea a continuación o más adelante, vamos a tener una revancha. Ha sido un campeón durante mucho tiempo, han estado diciendo que es el mejor libra por libra durante toda la semana, él lo creía. Como dije en el octágono, el cinturón no pertenece a nadie.” </p>
                    <p className={styles.peleador__article__text}>Tiempo más tarde, Edwards defendió su título contra Usman nuevamente. El 18 de marzo de 2023, por decisión mayoritaria (48-46, 48-46, 47-47), Leon Edwards mantuvo su título como el mejor de peso welter.</p>
                </article>
            </section>
        </main>
    )
}