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
            <ArticleHero title='UFC Vegas 108: ¡Tatsura Taira vs Hyunsung!' subtitle='¡Esteban Ribovics vs Elves Brener! ¡Kevin Vallejos vs Danny Silva!' image={hero} date='2025-08-02' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de MMA en el UFC APEX que estará protagonizado por el #6 de la división de peso pluma, el japonés <b>Tatsura Taira</b>, quien se estará enfrentando al coreano <b>Hyunsung Park</b> que está invicto con un récord de 10-0 y que viene de 3 victorias consecutivas en la UFC, con todas siendo por finalización. </p>
                    <p>Además, es una noche especial para el público latinoamericano, dado que primero tendremos abriendo el evento a la peleadora venezolana <b>Piera Rodríguez</b>, que se estará enfrentando la brasileña <b>Ketlan Souza</b>. Y luego en la cartelera estelar tendremos doble presencia argentina, con la joven promesa de 23 años, <b>Kevin Vallejos</b>, que estará abriendo cartelera estelar al enfrentar al estadounidense <b>Danny Silva</b>; y finalmente tendremos la pelea en peso ligero del luchador salteño <b>Esteban Ribovics</b>, que se enfrentará al brasileño <b>Elves Brener</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Piera Rodríguez Derrota a Ketlen Souza por Decisión Dividida</h2>
                    <p>La luchadora venezolana <b>Piera Rodríguez</b> logra hacerse con la victoria luego de una gran pelea ante la brasileña Ketlen Souza. Con Piera siendo capaz de derribar a su rival en varias ocasiones, capitalizando cada uno de esos derribos con ground and pound que le sirvieron para ir puntuando. Siendo esta una de las principales armas de la venezolana, ha sido capaz de derribar a las 6 rivales que enfrentó hasta el momento en la UFC, y en esta ocasión ha sido capaz de castigar mucho a su rival con los derribos y con los golpes al ras de lona. De esta forma, aunque por decisión dividida, Piera Rodríguez se lleva una merecida victoria. </p>
                    <h2>Rafael Estevam Derrota a Felipe Bunes por Decisión Unánime</h2>
                    <p>El brasileño <b>Rafael Estevam</b> derrota a su compatriota por decisión unánime después de una pelea en la que se mostró muy dominante, terminando esta desde la espalda de su rival castigando a golpes a Bunes, a quien dió la sensación de que estuvo cerca de finalizar en más de una ocasión. De igual forma, pese a la victoria, Rafael Estevam pidió disculpas a su rival, debido a que falló el peso antes de la pelea, llegando a este combate con una ventaja de 4 libras por sobre su rival, detalle que aunque no le quita su victoria, le termina dejando una pequeña mancha a tener en cuenta. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}