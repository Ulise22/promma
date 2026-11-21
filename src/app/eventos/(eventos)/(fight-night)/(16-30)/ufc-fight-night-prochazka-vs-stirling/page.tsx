import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/prochazka-vs-stirling.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Qatar: ¡Jiri Prochazka vs Navajo Stirling! ¡Kevin Vallejos vs Aljamain Sterling!',
    description: 'Noche de UFC en Qatar, con Jiri Prochazka enfrentando a Navajo Stirling en la pelea estelar, y Kevin Vallejos enfrentando a Aljamain Sterling en la coestelar.',
    openGraph: {
        images: '',
        title: 'UFC Qatar: ¡Jiri Prochazka vs Navajo Stirling! ¡Kevin Vallejos vs Aljamain Sterling!',
        description: 'Noche de UFC en Qatar, con Jiri Prochazka enfrentando a Navajo Stirling en la pelea estelar, y Kevin Vallejos enfrentando a Aljamain Sterling en la coestelar.',
        url: 'https://fullmma.org/eventos/ufc-fight-night-prochazka-vs-stirling',
    }
}

export default function ProchazkaStirling () {
    return(
        <main>
            <ArticleHero title='UFC Qatar: ¡Jiri Prochazka vs Navajo Stirling! ¡Kevin Vallejos vs Aljamain Sterling!' subtitle='¡Dan Hooker vs Brian Ortega! ¡Aleksandre Topuria vs Santiago Luna!' image={hero} date='2026-11-21' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular noche de UFC en Doha Qatar, en uno de los mejores eventos del año que nos traerá como pelea estelar el enfrentamiento entre el excampeón de peso semipesado <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, enfrentando al joven neozelandés <b>Navajo Stirling</b>. Teniendo también un combate espectacular en la coestelar, que puede definir futuro de la división de peso pluma, y hacer historia para el MMA argentino, cuando el marplatense <Link href='/peleadores/kevin-vallejos'>Kevin Vallejos</Link> busqué escalar en la división, enfrentando al #4 de peso pluma y excampeón de peso gallo <b>Aljamain Sterling</b>, en una pelea que puede ser eliminatoria por el título. </p>
                    <p>Además de que estaremos lleno de combates espectaculares de principio a fin, destacando la pelea entre veteranos, cuando el neozelandés <Link href='/peleadores/dan-hooker'>Dan Hooker</Link> reciba en peso ligero al histórico <b>Brian Ortega</b>, que hace su salto de división definitivo, abandonando las 145lbs. Finalmente un combate especialmente interesante para los fans latinoaméricanos, será el que tengan el español <Link href='/peleadores/aleksandre-topuria'>Aleksandre Topuria</Link> contra el mexicano <b>Santiago Luna</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>John Mitchell Noquea a Shoaib Yousaf en el Primer Asalto</h2>
                    <p>Debut de ensueño para el irlandés <b>John Mitchell</b>, quien en su primer pelea en la UFC ya consiguió una victoria espectacular por la vía del nocaut en el primer asalto, luego de conectar un rodillazo en la cabeza de su rival inglés <b>Shoaib Yousaf</b>, para abrir la cartelera de la mejor manera. </p>
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