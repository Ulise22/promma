import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/40-50/box_vs_mma_danger.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Boxeo vs MMA: ¿Cuál Es Más Peligroso?',
    description: 'Para empezar hay que decir que tanto el boxeo como las mma son peligrosos de practicar y que ambas disciplinas vienen atadas a riesgos para los atletas que viven de esto profesionalmente. Además, está claro que más allá de deportes como el rugby o el fútbol americano, que son altamente lesivos, los deportes de combates son los que llevan a sus practicantes a recibir más daño, por obvias razones...',
    openGraph: {
        title: 'Boxeo vs MMA: ¿Cuál Es Más Peligroso?',
        description: 'Para empezar hay que decir que tanto el boxeo como las mma son peligrosos de practicar y que ambas disciplinas vienen atadas a riesgos para los atletas que viven de esto profesionalmente. Además, está claro que más allá de deportes como el rugby o el fútbol americano, que son altamente lesivos, los deportes de combates son los que llevan a sus practicantes a recibir más daño, por obvias razones...',
        url: 'https://fullmma.org/articulos/boxeo-vs-mma-peligroso'
    }
}

export default function BoxeoVSMMAPeligroso () {
    return(
        <main>
            <ArticleHero title='Boxeo vs MMA: ¿Cuál Es Más Peligroso?' subtitle='¿Cuál de estos 2 deportes es más peligroso para la salud de quienes lo practican? La respuesta que dan algunos especialistas sorprenderá a más de uno...' image={hero} date='2024-07-21' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>¿Qué es más peligroso el boxeo o las mma?</h2>
                    <p>Para empezar hay que decir que tanto el boxeo como las mma son peligrosos de practicar y que ambas disciplinas vienen atadas a riesgos para los atletas que viven de esto profesionalmente. Además, está claro que más allá de deportes como el rugby o el fútbol americano, que son altamente lesivos, los deportes de combates son los que llevan a sus practicantes a recibir más daño, por obvias razones.</p>
                    <p>Uno a simple vista puede creer que las MMA son más peligrosas que el boxeo, quizás porque tenemos en la cabeza la lesión que sufrió <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> en la pierna en su pelea contra <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, donde sufrió una fractura en mitad del combate, algo que nunca pasaría en una pelea de boxeo, o lesiones como la que sufrió <Link href='/articulos/michael-bisping-ojo'>Michael Bisping en el ojo</Link>, donde una patada en la cabeza le quitó la visión permanentemente. Todas lesiones fuertísimas que impactan a cualquiera, y que muy probablemente, de seguirse las reglas, no ocurrirían en el boxeo.</p>
                    <YouTubeEmbed videoid='K2U3Ib2nKPA' />
                    <p>O quizás es por la diferencia de equipamiento, ya que las manos de los boxeadores están mejor cubiertas que la de los peleadores de MMA, lo que a priori frena el impacto de los golpes evitando que se genere un gran daño tanto en la mano de los peleadores como en la cabeza de quien recibe los golpes, porque con guantes más grandes se aligera el impacto, pero ¿y si en realidad fuera al revés?</p>
                    <p>Resulta que un estudio publicado en el año 2016 en la revista <b>Clinical Journal of SPORT MEDICINE</b> (<a href='https://journals.lww.com/cjsportsmed/abstract/2016/07000/combative_sports_injuries__an_edmonton.12.aspx' target='_Blank'>ver estudio</a>), concluyó que aunque era más frecuente ver lesiones en luchadores de MMA, las lesiones que sufrían los boxeadores tendían a ser muchísimo más graves, puesto que los boxeadores eran más propensos a sufrir conmociones cerebrales y traumatismo craneoencefálico.</p>
                    <p>Esto puede deberse a que en una pelea de boxeo, por la naturaleza del deporte, el daño recibido se centra mucho en el cuerpo y especialmente en la cabeza, donde tantos golpes concentrados en esta zona, a la larga producen un daño mayor al cerebro. Mientras que en las MMA, aunque también se reciben golpes, estos se intercalan con golpes al cuerpo, a las piernas y con lucha en el suelo, además que durante menos tiempo, es decir, durante menos tiempo de combate, se distribuye en más zonas del cuerpo el daño recibido, beneficiando al peleador ya que no se centran todos los ataques en una zona tan específica y sensible como el cerebro.</p>
                    <p>Además, aunque parece que los guantes de boxeo son más seguros, es justamente el hecho de que estos dejen tan protegida la mano lo que permite a los boxeadores golpearse aún más fuerte. Porque los huesos de las manos ni de cerca son tan fuertes ni tan duros como los huesos de la cara o de la cabeza, por lo que de no tener este tipo de guantes, lo más probable es que los golpes recibidos serían mucho más suaves.</p>
                    <p>Esto es sólo teniendo en cuenta el daño que se puede sufrir durante una pelea, pero a esto habría que sumarle el daño sufrido durante los entrenamientos, por ejemplo cuando se hace sparring. Dado que de nuevo, por la naturaleza del deporte, los boxeadores son mayormente vícitimas de sufrir golpes a la cabeza que pueden terminar dañandoles el cerebro. De hecho, en las MMA existen peleadores que han llegado lejos a sus carreras y que ni siquiera hacen sparring, como es el caso de <Link href='/peleadores/max-holloway'>Max Holloway</Link>, quien es el actual campeón del BMF en la <Link href='/articulos/ufc'>UFC</Link> y quien supo ser campeón de la división de peso pluma. Max afirma que aunque cree que en el principio de su carrera fue muy importante hacer sparring antes de sus peleas, a esta altura, con el nivel que ya ha ganado, sólo le serviría para provocarse un daño innecesario.</p>
                    <YouTubeEmbed videoid='yF8ZecTVM_E' />
                    <p>En conclusión, aunque está demostrado que son más frecuentes las lesiones sufridas por los luchadores de MMA, las lesiones que sufren los boxeadores, al estar concentrado todo el daño que reciben en la cabeza y por tanto afectan al cerebro, tienden a ser más graves.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}