import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/deridder-allen.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Vancouever: ¡Reiner De Ridder vs Brendan Allen!',
    description: 'Noche de UFC en Canadá encabezada por Reiner De Ridder y Brendan Allen. Además de la pelea de Chito Vera contra Aiemann Zahabi',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fderidder-allen.2d15fcdb.webp&w=828&q=65',
        title: 'UFC Vancouever: ¡Reiner De Ridder vs Brendan Allen!',
        description: 'Noche de UFC en Canadá encabezada por Reiner De Ridder y Brendan Allen. Además de la pelea de Chito Vera contra Aiemann Zahabi',
        url: 'https://fullmma.org/eventos/fight-night-deridder-allen'
    }
}

export default function DeridderAllen () {
    return(
        <main>
            <ArticleHero title='UFC Vancouever: ¡Reinier De Ridder vs Brendan Allen!' subtitle='¡Kevin Holland vs Mike Mallot! ¡Marlon Vera vs Aiemann Zahabi!' image={hero} date='2025-10-18' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Tremendo evento de UFC tenemos esta noche en Canadá, donde estarán peleando en la cartelera estelar el #4 de la división de peso medio y excampeón de ONE Championship <b>Reiner De Ridder</b> contra el #9 de la división <b>Brendan Allen</b>. En la pelea coestelar tendremos la cuarta pelea del año de <b>Kevin Holland</b>, quien se enfrentará ante el canadiense <b>Mike Mallot</b> en peso wélter. </p>
                    <p>Además tendremos un peleador latinoaméricano en la cartelera estelar, cuando el ecuatoriano y #7 de la división de peso gallo <Link href='/peleadores/marlon-vera'>Chito Vera</Link> se estará enfrentando a <b>Aiemann Zahabi</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Melissa Croden Noquea a Tainara Lisboa en el Tercer Asalto</h2>
                    <p>Victoria canadiense en la primer primer pelea de esta cartelera, luego de la que luchadora local <b>Melissa Croden</b> logró una gran victoria en el tercer asalto del combate, luego de noquear a su rival, castigándola desde el suelo, hasta que el árbitro las separó para otorgarle la victoria por TKO. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
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