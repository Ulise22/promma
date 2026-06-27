import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/fiziev-torres.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Baku: ¡Rafael Fiziev vs Manuel Torres!',
    description: '',
    openGraph: {
        images: '',
        title: 'UFC Baku: ¡Rafael Fiziev vs Manuel Torres!',
        description: '',
        url: 'https://fullmma.org/eventos/fight-night-fiziev-torres'
    }
}

export default function FizievTorres () {
    return(
        <main>
            <ArticleHero title='UFC Baku: ¡Rafael Fiziev vs Manuel Torres!' subtitle='¡Shara Magomegov vs Michel Pereira!' image={hero} date='2026-06-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en horario especial en este evento organizado en Baku, Azerbaiyán, que tendrá como protagonista al peleador local <b>Rafael Fiziev</b>, enfrentando al mexicano <b>Manuel Torres</b> en una pelea que puede perfilar el futuro de la división de peso ligero. </p>
                    <p>Por si fuera poco, en la cartelera coestelar estará peleando nuevamente el pirata <Link href='/peleadores/shara-magomedov'>Shara Bullet Magomedov</Link>, enfrentando la brasileño <b>Michel Pereira</b> en la que promete ser la pelea de la noche. Y finalmente, los fans de latinoamerica podremos ver al colombiano <b>Javier Reyes</b> en su segundo combate en la UFC enfrentar al australiano <b>Kaan Ofli</b> en un combate en peso pluma, luego de lo que fue su debut por nocaut. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Tahir Abdullayev Noquea a Jefferson Nascimento en el Primer Asalto</h2>
                    <p>Victoria del luchador local de Azerbaiyán <b>Tahir Abdullayev</b>, quien pese a sufrir los 2 primeros asaltos, siendo derrotado claramente, fue capaz de reponerse en el tercer y último asalto, conectando de manera más efectiva, consiguiendo un derribo para castigar a su rival a golpes, y con la pelea finalmente siendo parada de forma cuestionable por parte del árbitro cuando su rival brasileño <b>Jefferson Nascimento</b> estaba siendo recibiendo golpes. De esta forma el local gana la primer pelea de la noche en su debut por TKO en el tercer asalto. </p>
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