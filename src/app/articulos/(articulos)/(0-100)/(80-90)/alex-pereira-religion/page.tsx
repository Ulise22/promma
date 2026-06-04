import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/80-90/alex_pereira-religion.webp'
import iglesia from './alex_pereira-iglesia.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Alex Pereira Religión',
    description: '"Descubre la religión de Alex Pereira: su conversión al Islam en 2015, el video de la Shahada, su actual espiritualidad chamánica indígena Pataxó y por qué evita hablar de fe. Todo sobre Poatan UFC.',
    openGraph: {
        images: '',
        title: 'Alex Pereira Religión',
        description: '"Descubre la religión de Alex Pereira: su conversión al Islam en 2015, el video de la Shahada, su actual espiritualidad chamánica indígena Pataxó y por qué evita hablar de fe. Todo sobre Poatan UFC.',
        url: 'https://fullmma.org/articulos/alex-pereira-religion'
    }
}

export default function AlexPereiraReligion () {
    return(
        <main>
            <ArticleHero title='¿De Qué Religión es Alex Pereira?' subtitle='La religión de Alex Pereira: su viaje espiritual - Cristianismo, Islam, Chamanismo y sus raíces indígenas.' image={hero} date='2026-06-04' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p><Link href='/peleadores/alex-pereira'>Alex Pereira</Link> parece haberse convertido al Islam en 2015. Abandonó esta religión tiempo después para abrazar sus raíces indígenas, relacionadas con su <Link href='/articulos/alex-pereira-tribu'>herencia Potaxó</Link>. Aunque ha rechazado hablar públicamente su fé, afirmando que respeta todas las creencias y que no está aquí para hablar de religión. </p>
                    <p>El Poatan es de los peleadores más dominantes en la historia moderna de la UFC, ganándose merecidamente el estatús de estrella, y agrandando su legado con cada pelea que tiene. A diferencia de otros peleadores, parece ser, o al menos da la imagen de una persona con una fuerte conexión espiritual, sin embargo parece imposible contestar cuál es la religión de Alex Pereira. Por eso hoy vamos a explorar todo el viaje espiritual que siguió el campeón brasileño, y cuál es la religión que sigue en la actualidad. </p>
                    <h2>La conversión de Alex Pereira al Islam en 2015</h2>
                    <p>En el año 2015, Alex Pereira estaba pasando por un momento complicado en su vida personal, sufriendo problemas de alcoholismo y una falta de propósito que no le permitía encontrar la paz interior que él tanto buscaba. </p>
                    <p>Es por esto, probablemente influenciado por uno de los coach que tenía en ese momento, que decidió convertirse al Islam, habiendo incluso un vídeo donde recita la <b>Shahada</b> (la declaración de la fe islámica). La noticia fue confirmada por el directo de la Federación de Asociaciones Musulmanas de Brasil (FAMBRAS), quien además acompañó al brasileño en el proceso. </p>
                    <YouTubeEmbed videoid='poRkdoh79t0' />
                    <h2>¿Alex Pereira sigue siendo musulmán?</h2>
                    <p>Aunque no existe una declaración pública que lo confirme, parece que Alex ha abandonado el Islam hace algún tiempo, o como mínimo, nunca siguió de forma estrícta dicha religión. </p>
                    <p>El propio peleador ha evitado hablar abiertamente del tema, y esto salió a relucir en la previa de su primer pelea con el daguestaní <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link>, quien es musulmán y crítico a Alex Pereira por retarlo a una apuesta, practica prohibida por el islam. Aunque evitó hablar de la religión directamente, el brasileño tuvo su contestación en una rueda de prensa: </p>
                    <p><b>&quot;No estoy aquí para hablar de religión, respeto todas las religiones. Pero él vino y habló sobre como no podía tomar la apuesta, pese a que no era una apuesta para poner dinero en mis bolsillos, sino que era por una buena causa, para donar el dinero a la caridad. </b>&quot;</p>
                    <YouTubeEmbed videoid='t0EmfGmSkyY' />
                    <h2>La conexión de Alex Pereira con sus raíces indígenas: Chamanismo y espíritus ancestrales</h2>
                    <p>Alex Pereira tiene fuertes lazos indígenas en Brasil, específicamente con la tribu Potaxó. De hecho, su <Link href='/articulos/que-significa-poatan'>apodo &quot;Poatan&quot;</Link>, que sígnifica &quot;Manos de Piedra&quot;, refleja esta herencia.  </p>
                    <p>El campeón ha visitado en numerosas ocasiones a su tribu, llegando a llevar hasta su cinturón de UFC, como forma de visibilizar más sus raíces con las que ha conectado. Además, ha participado en ceremonias y rituales, lo que también le ha generado polémica con otros peleadores. </p>
                    <p>Fue el checo <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> el que se refirió al Poatan y sus rituales chamánicos, afirmando que todos saben que hace rituales antes de sus peleas y que está rodeado por un espíritu raro que lo rodea, cosa que todos los que están cerca pueden percibir. Dichas declaraciones fueron algo extrañas teniendo en cuenta el ateísmo de Prochazka, pero recibieron repuesta del brasileño que simplemente afirmo que &quot;todos tienen su espíritu. Yo encontré el mío&quot;. </p>
                    <p>Esta lado más chamánico es evidente para quienes lo vieron fuera del octágono, el brasileño es una persona muy conectada con su espiritualidad y con sus raíces indigenas, yendo pintado a muchas de los pesajes ceremoniales. Estas actitudes contratan mucho con la ortodoxia islámica, que prohíbe la idolatría y la invocación de espíritus, lo que afirma la idea de que ya no sigue esta religión (o que nunca la siguió realmente). </p>
                    <YouTubeEmbed videoid='cIUiQFCrnoE' />
                    <h2>Alex Pereira y el Cristianismo</h2>
                    <p>Aunque quizás sea la faceta espiritual de la que menos se habla de Pereira, lo cierto es que muy probablemente, debido al lugar y país donde nació y creció, con un fuerte componente cristiano, haya sido críado en un entorno cristiano, que aún a día de hoy, con sus idas y vueltas debe formar parte importante en su vida. </p>
                    <p>En varias ocasiones se lo ha visto visitando iglesias, e incluso el mismo ha subido imagenes en iglesias católicas a sus redes sociales, lo que denota que aún sin ser un devoto, seguramente todavía tenga algo de fe cristiana. </p>
                    <Image src={iglesia} alt='Alex Pereira y el Cristianismo' className={styles.article__image} />
                    <h2>Conclusión: Un campeón con un camino espiritual propio</h2>
                    <p>Es imposible describir la religión de Alex Pereira con una sola palabra, debido a que decidió seguir su propio camino, priorizando una espiritualidad ecléctica, que le permite tener un fuerte respeto universal por todas las religiones, y una conexión con sus raíces indígenas muy fuerte. </p>
                    <p>Además, el ser un peleador reservado por naturaleza, Alex ha separado muy bien su vida personal de su carrera profesional como luchador de la UFC, por lo que aunque esto genere especulaciones, mantiene su vida privada en secreto. Haciendo que la religión en la que de verdad cree quede como algo personal suyo. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}