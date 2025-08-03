import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/15-30/taira_vs_park.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Vegas 108: ¡Tatsura Taira vs Hyunsung Park!',
    description: 'Pelea entre Tatsura Taira y Hyunsung Peleando en el UFC Fight Night en Las Vegas en el UFC APEX este 2 de agosto de 2025. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftaira_vs_park.a7b3dbd9.webp&w=828&q=65',
        title: 'UFC Vegas 108: ¡Tatsura Taira vs Hyunsung Park!',
        description: 'Pelea entre Tatsura Taira y Hyunsung Peleando en el UFC Fight Night en Las Vegas en el UFC APEX este 2 de agosto de 2025. ',
        url: 'https://fullmma.org/covertura-ufc/fight-night-taira-park'
    }
}

export default function TairaVsPark () {
    return(
        <main>
            <ArticleHero title='UFC Vegas 108: ¡Tatsura Taira vs Hyunsung!' subtitle='¡Esteban Ribovics vs Elves Brener! ¡Kevin Vallejos Derrota a Danny Silva en la Pelea de la Noche!' image={hero} date='2025-08-02' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de MMA en el UFC APEX que estará protagonizado por el #6 de la división de peso pluma, el japonés <b>Tatsura Taira</b>, quien se estará enfrentando al coreano <b>Hyunsung Park</b> que está invicto con un récord de 10-0 y que viene de 3 victorias consecutivas en la UFC, con todas siendo por finalización. </p>
                    <p>Además, es una noche especial para el público latinoamericano, dado que primero tendremos abriendo el evento a la peleadora venezolana <b>Piera Rodríguez</b>, que se estará enfrentando la brasileña <b>Ketlan Souza</b>. Y luego en la cartelera estelar tendremos doble presencia argentina, con la joven promesa de 23 años, <b>Kevin Vallejos</b>, que estará abriendo cartelera estelar al enfrentar al estadounidense <b>Danny Silva</b>; y finalmente tendremos la pelea en peso ligero del luchador salteño <b>Esteban Ribovics</b>, que se enfrentará al brasileño <b>Elves Brener</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Piera Rodríguez Derrota a Ketlen Souza por Decisión Dividida</h2>
                    <p>La luchadora venezolana <b>Piera Rodríguez</b> logra hacerse con la victoria luego de una gran pelea ante la brasileña Ketlen Souza. Con Piera siendo capaz de derribar a su rival en varias ocasiones, capitalizando cada uno de esos derribos con ground and pound que le sirvieron para ir puntuando. Siendo esta una de las principales armas de la venezolana, ha sido capaz de derribar a las 6 rivales que enfrentó hasta el momento en la UFC, y en esta ocasión ha sido capaz de castigar mucho a su rival con los derribos y con los golpes al ras de lona. De esta forma, aunque por decisión dividida, Piera Rodríguez se lleva una merecida victoria. </p>
                    <h2>Rafael Estevam Derrota a Felipe Bunes por Decisión Unánime</h2>
                    <p>El brasileño <b>Rafael Estevam</b> derrota a su compatriota por decisión unánime después de una pelea en la que se mostró muy dominante, terminando esta desde la espalda de su rival castigando a golpes a Bunes, a quien dió la sensación de que estuvo cerca de finalizar en más de una ocasión. De igual forma, pese a la victoria, Rafael Estevam pidió disculpas a su rival, debido a que falló el peso antes de la pelea, llegando a este combate con una ventaja de 4 libras por sobre su rival, detalle que aunque no le quita su victoria, le termina dejando una pequeña mancha a tener en cuenta. </p>
                    <h2>Austin Bashi Somete en el Primer Asalto a John Yannis</h2>
                    <p>Espectacular pelea por parte del estadounidense <b>Austin Bashi</b>, quien dominó de principio a fin a su compatriota John Yannis, mostrándose mejor en el striking, y buscando un derribo rápidamente que fue capaz de concretar. Logró capitalizar de manera sobresaliente este derribo, al primero castigar desde el suelo a golpes a su rival, dejándolo muy lastimado, y al posteriormente ganarle la espalda una vez que su rival se pudo poner de pie, para colocarle un mataleón que obligaría a Yannis a tapear, otorgándole la victoria por sumisión en el primer asalto a Austin Bashi que logra la primer finalización de la noche. </p>
                    <h2>Andrey Pulyaev Derrota por TKO a Nick Klein en el Segundo Asalto</h2>
                    <p>El luchador ruso se hace con la victoria ante el americano Nick Klein, quien había comenzado bien la pelea, dominando bastante a <b>Andrey Pulyaev</b>, pero que sin embargo padeció y cayó derrotado por el peleador de Rusia luego de recibir una combinación de golpes letales en el segundo asalto, que terminarían por darle la victoria al luchador visitante por TKO, concretando la segunda finalización de la noche, y el primer nocaut de este UFC en las Vegas. </p>
                    <h2>Rodolfo Vieira Derrota a Tresean Gore por Decisión Unánime</h2>
                    <p>El brasileño logra hacerse con la victoria por decisión unánime luego de dominar claramente al estadounidense <b>Tresean Gore</b>, quien por estar bastante preocupado por los derribos que le pudiera intentar hacer su rival, terminó recibiendo castigo tanto por arriba como por abajo, por parte de un <b>Rodolfo Vieira</b> al que se lo vió muy sólido y con un striking que le alcanzó para sumar puntos y terminar llevándose la victoria luego de los 3 asaltos. </p>
                    <h2>Rinya Nakamura Noquea a Nathan Fletcher en el Primer Asalto</h2>
                    <p>Espectacular victoria del japonés <b>Rinya Nakamura</b>, que termina la pelea en el primer asalto con un nocaut espectacular, al conectar una patada al higado de su rival, que se conectó practicamente con el dedo gordo del pie, y que tumbó a su rival en el piso, a quien solamente tuvo que darle un par de golpes en el piso para que el árbitro detuviera la pelea dando como ganador al luchador asiático, en una actuación digna de destacar, finalizando de la mejor manera esta cartelera preliminar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Kevin Vallejos Derrota a Danny Silva En un Peleón!!</h2>
                    <p>Tremenda pelea la que acabamos de presenciar, donde tanto el argentino <b>Kevin Vallejos</b>, como el luchador de origen mexicano <b>Danny Silva</b>, dieron todo de sí para brindarnos un espectáculo que terminó coronando como ganador al peleador de Mar del Plata, quien con un striking sobresaliente y algún que otro derribo, fue superior a su rival y se ganó su victoria meritoriamente. </p>
                    <h2>Nel Magny Derrota a Elizeu Dos Santos por TKO en el Segundo Asalto</h2>
                    <p>El veterano peleador estadounidense de casi 38 años, <b>Neil Magny</b>, demuestra que la edad es sólo un número para él, derrotando por TKO de manera asombrosa a su rival en el segundo asalto, luego de conectar un par de rodillas a la cabeza de su rival en el clinch, que lo derribaron, necesitando Magny de unos cuantos golpes en el suelo para que el árbitro terminara la pelea en el segundo asalto para darle la victoria por TKO al luchador estadounidense. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}