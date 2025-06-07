import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/terrance_mckinney.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Terrance Mckinney',
    description: "Conoce la fabulosa de Terrance McKinney, el joven que fue capaz de sobrevivir a una experiencia cercana a la muerte, para convertirse en peleador de la UFC.",
    openGraph: {
        title: 'Terrance Mckinney',
        description: "Conoce la fabulosa de Terrance McKinney, el joven que fue capaz de sobrevivir a una experiencia cercana a la muerte, para convertirse en peleador de la UFC.",
        url: 'https://fullmma.org/noticias/terrance-mckinney'
    }
}

export default function ViniciusOliveira () {
    return(
        <main>
            <ArticleHero title='Conoce a Terrance McKinney: El luchador estadounidense que estuvo cerca de morir y que terminó noqueando a un peleador en 7 segundos en su debut en UFC' subtitle="Una de las historias más inspiradoras de las MMA, sobre cómo Terrance McKinney fue capaz de sobrevivir a una experiencia traumática, para convertirse en el peleador de UFC que fue capaz de noquear a su rival en 7 segundos. " image={hero} date='2025-01-30' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El próximo sábado 1 de febrero, el estadounidense Terrance McKinney volverá a subirse al octágono. Este peleador es protagonista de una de las historias más inspiradoras de las MMA, pasando de una situación que lo dejó al bordeo de la muerte en un incidente donde había sustancias involucradas, a hacer su debut en UFC y noquear a su rival en tan sólo 7 segundos. </p>
                    <p>Terrance Kitarius McKinney nació el 15 de septiembre de 1994 en la ciudad de Spokane, Washington, Estados Unidos. En la secundaria, comenzó a entrenar lucha, donde rápidamente destacó, comentando que en aquel momento era lo único que le importaba, ser bueno en lucha, prestando menos atención por eso a las chicas, a salir con sus amigos, y cualquier cosa que lo alejará del wrestling. </p>
                    <h2>Experiencia Cercana a la Muerte</h2>
                    <p>Una de las anécdotas de su vida, que sin dudas lo marcaron a partir de ese momento en adelante, es la experiencia cercana que tuvo con la muerte. Esto sucedió cuando Terrance era un universitario de alrededor de 20 años en una fiesta, donde afirma haber consumido entre 3 y 4 sustancias prohibidas, fue abandonado por sus amigos que llamaron a la policía, debido al grave estado en que se encontraba. </p>
                    <YouTubeEmbed videoid='O0T9rrjD6H8' />
                    <p>Para cuando llegaron los oficiales, fue encontrado en una condición bastante grave.</p>
                    <p><b>“Cuando arribamos a la escena, Terrance estaba el patio trasero, transpirando profusamente. Los oficiales sabían que podía tratarse de una situación de delirio exaltado”</b>, dijo una de las policías que lo encontró aquella noche. </p>
                    <p>Aparentemente estaba delirando en aquel momento, por lo que los oficiales tuvieron que entre todos luchar para llevarlo a una guardia para que fuera revisado por un médico lo más rápido posible. El corazón de Terrance dejó de latir en 2 o 3 ocasiones, teniendo que ser reanimado en repetidas ocasiones.</p>
                    <p>Afortunadamente pudo reponerse de aquella situación. McKinney afirma que no quería dejar que este evento definiera quien era, por lo que decidió darle un giro de 360 grados a su vida, decidiendo ser un peleador de profesional de MMA, cosa que lograría y de manera destacada. </p>
                    <h2>Terrance McKinney en la UFC</h2>
                    <p>Terrance McKinney tuvo el mejor debut que cualquier peleador podría soñar. Con una espectacular victoria el día 12 de junio de 2021, por KO en el UFC 263, ante Matt Frevola, en tan sólo 7 segundos de combate, luego de chocar puños e inmediatamente conectar un 1-2, que tumbaría de inmediato a su rival, asegurando la victoria posteriormente con ground & pound. De esta forma quedó a sólo 2 segundos de romper el récord de <Link href='/articulos/jorge-masvidal-historia'>Jorge Masvidal</Link>, que fue el autor del <Link href='/articulos/ko-mas-rapido-ufc'>KO más rápido de la historia</Link> en su pelea contra Ben Askren. </p>
                    <YouTubeEmbed videoid='Rpeay4ip53Y' />
                    <p>Lamentablemente, de ahí en adelante su carrera en la compañía fue bastante irregular, obteniendo 5 victorias y 4 derrotas. La última pelea de Terrance fue ante el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, a quien enfrento el 11 de mayo de 2024 en el <Link href='/covertura-ufc/fight-night-lewis-nascimento'>UFC on ESPN: Lewis vs. Nascimento</Link>. En esta pelea, a la que llegaba luego de 2 victorias consecutivas, lamentablemente para nuestro protagonista caería por KO a los 37 segundos del primer asalto debido a una patada en la cabeza que fue capaz de conectar el argentino. </p>
                    <p>A pesar de esto, con 30 años, Terrance McKinney sigue siendo un peleador muy joven para lo que son los deportes de combates, y no debería de extrañar a nadie que pueda ser capaz de darle la vuelta a su carrera acumulando varias victorias consecutivas. De hecho, hace un par de días, el peleador anunció que acababa de nacer su hija, razón por la que ahora mismo quiere tomarse su carrera lo más en serio posible. En su cuenta de X, publicó: <b>“Hace 5 años no sabía qué hacer con mi vida, pero sabía que me gustaba pelear. Hace 4 años comencé a concentrarme y entre en una racha de 4 KOs consecutivos que me llevaron a la UFC. Hace 2 años nació mi hijo. Y este año nació mi hija. Ahora me estoy tomando esto en serio porque tengo que hacerlo”.</b></p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">5 years ago I didn’t know what to do with my life but I knew I liked to fight. 4 years ago I started focusing &amp; went on a 4 fight KO streak that got me in the ufc with a record. 2 years ago I had my son. This year I had my daughter. Now I’m taking this serious cause I have to 🙏🏾</p>&mdash; Terrance McKinney (@twrecks155) <a href="https://twitter.com/twrecks155/status/1883581661901963549?ref_src=twsrc%5Etfw">January 26, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}