import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/0-100/30-40/joe_rogan_bestMA.jpeg'
import EndArticle from '@/app/components/EndArticle'

export const metadata: Metadata = {
    title: 'Mejor Arte Marcial Para Pelea Callejera Según Joe Rogan',
    description: 'El principal comentarista de la UFC hace su análisis sobre cuál es el arte marcial más eficaz en una pelea callejera.',
    openGraph: {
        title: 'Mejor Arte Marcial Para Pelea Callejera Según Joe Rogan',
        description: 'El principal comentarista de la UFC hace su análisis sobre cuál es el arte marcial más eficaz en una pelea callejera.',
        url: 'https://fullmma.org/articulos/mejor-arte-marcial-para-pelea-callejera-joe-rogan'
    }
}

export default function SharaMagomedovOjo () {
    return(
        <main>
            <ArticleHero title='La Mejor Arte Marcial Para Una Pelea Callejera Según Joe Rogan' subtitle='El comentarista de la UFC Joe Rogan confirma cuál es para él la mejor arte marcial para peleas callejeras. ' image={hero} date='2025-01-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Un tema de conversación recurrente en el mundo de las artes marciales, suele ser sobre cuál es el mejor arte marcial para una pelea callejera, en caso de que llegaras a necesitar defenderte. Por eso hoy decidí destacar las palabras del histórico comentarista de la UFC, y protagonista del podcast más escuchado del mundo, Joe Rogan, quien en una conversación con Lex Fridman habló sobre cuáles son para él las artes marciales más efectivas en una pelea callejera y en situación de defensa personal.  </p>
                    <p>Para poca sorpresa de quienes escuchen seguido a Rogan, mencionó al Jiu-Jitsu y al Judo, argumentando que las artes marciales que requieren de grappling son las más efectivas en una situación real: <b>“Grappling, porque creo que la mayoría de situaciones de defensa personal terminan en grappling. Aunque definitivamente estás mejor posicionado si sabes algo de striking, porque no debe haber nada más aterrador que intentar derribar a alguien que sepa defender derribos, que puedan pelear y que por eso tengan defensa contra derribos”. </b></p>
                    <p>Además, defendió estas artes marciales de varios de sus detractores, incluidos los instructores de Krav Maga, diciendo: <b>“En general, las personas que dicen que el jiu-jitsu u otra arte marcial son más un deporte, y que por tanto no entienden realmente la violencia… en general la gente que dice eso apesta”.</b></p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/kEIvicUmegs?si=iXIGqzKEg4zpyyh2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p><b>“Esas personas que te dicen ‘te voy a morder’, ¿me vas a morder? Ok, ¿Qué tal si yo te muerdo también, que piensas de eso? ¿Qué tal si te golpe en la puta cara, crees que me vas a morder igual cuando ni siquiera puedes ver? ¡Apenas sabes que estás vivo y te estoy por ahorcar hasta dejarte inconsciente!”.</b></p>
                    <p><b>“Si alguien es realmente bueno en jiu-jitsu, buena suerte apuñalándolo con tus llaves. No tienes ninguna chance”.</b></p>
                    <p>Básicamente la idea que defiende Joe Rogan, es que estás muchísimo más preparado, por lejos, sabiendo pelear contra personas que también saben pelear, que con personas que no tienen idea de cómo hacerlo. Que, aunque saber defensa personal y técnicas para defenderte ante personas que no saben nada sobre pelear, no tienes ninguna oportunidad ante alguien que sí sabe pelear, y que sí sabe lo que está haciendo. </p>
                    <p>Desde la lógica tiene mucho sentido lo que dice, puesto que si entrenas constantemente con cinturones negros de jiu-jitsu, y con campeones de muay thai, estás protegido contra más del 99% de la población. </p>
                    <p>En síntesis, como la mayoría de las peleas terminan en posiciones donde los luchadores están muy cerca el uno del otro, en posiciones de grappling, lo mejor que puedes hacer para defenderte en estas situaciones es estar preparado para situaciones de grappling, aprendiendo artes marciales como jiu-jitsu o judo, que son las que mencionó Joe Rogan. Además, tus posibilidades de salir bien parado de cualquier situación que involucre violencia aumentan si sabes artes marciales y si peleas y entrenas regularmente con personas que también saben artes marciales, y no simplemente con personas que no están preparadas para casi ningún tipo de situación que implique violencia. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}