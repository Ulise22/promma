import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import grasso from '@/assets/peleadores__images/alexa-grasso/grasso.png'
import alexa_grasso from '@/assets/peleadores__images/alexa-grasso/alexa-grasso.jpg'
import alexa from '@/assets/peleadores__images/alexa-grasso/alexa__grasso.jpg'
import alexaGrasso from '@/assets/peleadores__images/alexa-grasso/alexa_grasso.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Grasso () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={grasso} w={16} l={3} d={1} nombre='Alexa Grasso' apodo={null} categoria='Peso Mosca Femenino' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexa UFC</h2>
                    <p className={styles.peleador__article__text}>Alexa Grasso es una peleadora mexicana de mma y es la actual número #1 libra por libra femenino de UFC y es la actual campeona de Peso Mosca Femenino de la UFC desde que derrotó a la histórica <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenvo</Link> en marzo de 2023 con una sumisión en el cuarto asalto en el UFC 285 de Las Vegas.</p>
                    <p className={styles.peleador__article__text}>Sin embargo su llegada a la UFC comenzó de forma un tanto irregular. Alexa venía de competir en diversas promotoras mexicanas y en la compañía <b>Invicta FC</b> de Estados Unidos, además de participar en el reality organizado por UFC de <b>The Ultimate Fighter</b>, todo su recorrido profesional en las MMA la había llevado a acumular un récord de 9-0. Sin embargo el 4 de febrero de 2017 cuando debutó en UFC contra la estadounidense Felice Herrig, perdió su invicto por decisión unánime. Contando aquella pelea, Alexa cosechó 3 derrotas de forma intermitente en UFC.</p>
                    <Image className={styles.peleador__article__image} src={alexa} alt='' />
                    <p className={styles.peleador__article__text}>Luego de esta racha irregular, Alexa tenía programada una pelea contra Claudia Gadelha, sin embargo el día en que se hizo el pesaje, Grasso no cumplió con el peso pactado. Esto llevó a que se suspendiera la pelea. Alexa Grasso se disculpó y decidió mudarse de división, al Peso Mosca.</p>
                    <p className={styles.peleador__article__text}>Su debut en peso mosca lo hizo contra la surcoreana Ji Yeon Kim, a quien derrotó por decisión unánime, y, desde entonces, no ha perdido un sólo combate.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexa Grasso vs Valentina Shevchenko</h2>
                    <p className={styles.peleador__article__text}>Alexa Grasso y Valentina Shevchenko 2 veces, la primera el 4 de marzo de 2023 en Las Vegas por UFC 285. Valentina Shevchenko venía de una racha de 9 victorias seguidas, siendo la vigente campeona y con 7 defensas exitosas de su título de Peso Mosca, mientras que Alexa Grasso venía de ganar por decisión unánime a la brasileña Viviane Araújo. Su primer combate terminó con una victoria para la mexicana por sumisión en el cuarto asalto, victoria que la convirtió en la primer mexicana campeona de la UFC.</p>
                    <Image className={styles.peleador__article__image} src={alexaGrasso} alt='' />
                    <p className={styles.peleador__article__text}>La revancha de esta pelea se organizó unos meses después, el 16 de septiembre de 2023, el Día de la Independencia en México. El combate transcurrió durante los 5 asaltos y terminó en empate según el criterio de los jueces. Empate que le valió a Alexa para reterner el título.</p>
                    <p className={styles.peleador__article__text}>Dicho empate entre estas 2 peleadoras dio mucho que hablar y generó algo de polémica ya que hay opiniones divididas sobre quién fue la verdadera ganadora de dicha pelea. Esto llevó a <b>Dana White</b>, a hablar de una tercera pelea entre estas 2 luchadoras: “Tenemos que tener una revancha, habrá una revancha. Es lo correcto, esa pelea tiene que pasar” dijo en la conferencia de prensa posterior a la pelea.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexa Grasso Biografía</h2>
                    <p className={styles.peleador__article__text}>Karen Alexa Grasso Montes, nació el 9 de agosto ded 1993 en la ciudad mexicana de Guadalajara, en el Estado de Jalisco. Hizo su debut profesional como luchadora de MMA en diciembre de 2012 con una vitoria por KO a los 15 segundos del primer asalto contra la mexicana Sandra de Rincón. Compitió en promotoras locales de México hasta que en septiembre de 2014 hace su debut en la compañía Invicta Fighting Championships (una comapañía de MMA exclusivamente ed mujeres), debut que terminó con una victoria para la mexicana por decisión unánime. Allí pelearía y ganaría un total de 4 combates.</p>
                    <p className={styles.peleador__article__text}>Después de su trayectoria en Invicta, tendría una participación en el TUF, donde ganaría por decisión unánime contra la estadounidense Heather Jo Clark. Su exitosa carrera la llevó a ganarse un contrato con la UFC donde debutaría el 4 de febrero de 2017.</p>
                    <Image className={styles.peleador__article__image} src={alexa_grasso} alt='' />
                    <p className={styles.peleador__article__text}>Después de más de 6 años peleando en UFC, Alexa Grasso es hoy en día la número #1 libra por libra femenino de la UFC y continúa compitiendo por esta compañía donde ya lleva una defensa del título exitosa.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexa Grasso Récord</h2>
                    <p className={styles.peleador__article__text}>Alexa Grasso tiene un record de 16-3-1. Siendo 4 de sus victorias por nocaut, 2 por sumisión y 10 por decisión. Mientras que sus 3 derrotas se componen de 1 por sumisión y de 2 por decisión. Su único empate fue diciembre de 2023 contra <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>.</p>
                </article>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Alexa Grasso Última Pelea</h2>
                    <p className={styles.peleador__article__text}>La última pelea de la mexicana fue bastante especial, puesto que se celebró el Día de la Independencia de México, en Las Vegas, lugar que en estas fechas suele estar reservado para el <b>Canelo Álvarez</b>, sin embargo este retrasó su pelea y esto dió lugar a que Alexa Grasso pudiera representar a su país y de la mejor manera, puesto que pese a empatar contra Shevchenko por decisión de los jueces, pudo retener el título de Campeona de Peso Mosca Femenino.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/cqUHq7zyiQE?si=bLzrwFJWHkRQJ2Bv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </article>
            </section>
        </main>
    )
}