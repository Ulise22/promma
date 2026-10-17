import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/buckley-vs-malott.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Joaquin Buckley vs Mike Malott!',
    description: '',
    openGraph: {
        images: '',
        title: 'UFC Fight Night: ¡Joaquin Buckley vs Mike Malott!',
        description: '',
        url: 'https://fullmma.org/eventos/ufc-fight-night-buckley-vs-malott',
    }
}

export default function BuckelyMalott () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Joaquin Buckley vs Mike Malott!' subtitle='¡Erin Blanchfield vs Jasmine Jasudavicius! ¡Kyle Nelson vs Christian Perez!' image={hero} date='2026-10-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en Edmonton, Canadá, con un montón de luchadores canadiense presentes en esta noche, empezando por el #13 de la división de peso wélter, <b>Mike Malott</b>, quien viene con una increíble racha de 4 victorias consecutivas y se enfrentará al #10 de la división, el estadounidense <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> en el evento estelar. </p>
                    <p>Además, en la pelea coestelar del evento estará la canadiense <b>Jasmine Jasudavicius</b>, recibiendo en casa a la #4 estadounidense de la división de peso mosca femenino <b>Erin Blanchfield</b> en un gran combate para la división. Finalmente tendremos presencia latina esta noche, cuando el mexicano <b>Christian Perez</b> se enfrente al canadiense <b>Kyle Nelson</b> en un combate en peso ligero. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Suyong You Somete a Cody Chovancek en el Tercer Asalto</h2>
                    <p>Aplastante victoria del surcoreano <b>Suyong You</b>, quien a lo largo de los 3 asaltos que duró el combate fue capaz de imponerse ante el luchador local <b>Cody Chovancek</b>, derribando una y otra vez a su rival, manteniéndolo a ras de lona y finalmente conectando una sumisión en el tercer asalto. </p>
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