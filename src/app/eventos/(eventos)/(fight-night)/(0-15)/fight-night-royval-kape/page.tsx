import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/royval-kape.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Vegas 112: ¡Brandon Royval vs Manel Kape! ¡Kevin Vallejos vs Giga Chikadze!',
    description: 'Último evento de UFC en 2025 con Brandon Royval vs Manel Kape como evento estelar',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froyval-kape.c8dc986c.webp&w=828&q=65',
        title: 'UFC Vegas 112: ¡Brandon Royval vs Manel Kape! ¡Kevin Vallejos vs Giga Chikadze!',
        description: 'Último evento de UFC en 2025 con Brandon Royval vs Manel Kape como evento estelar',
        url: 'https://fullmma.org/eventos/fight-night-royval-kape'
    }
}

export default function RoyvalKape () {
    return(
        <main>
            <ArticleHero title='UFC Vegas 112: ¡Brandon Royval vs Manel Kape! ¡Kevin Vallejos vs Giga Chikadze!' subtitle='¡Cesar Almeida vs Cezary Oleksiejczuk! ¡King Green vs Lance Gibson Jr.!' image={hero} date='2025-12-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Último evento de UFC del año, y fin de la era ESPN en la UFC, con la última transmisión a través de esta cadena, previo a su paso a Paramount el próximo 2026. Para eso tenemos como evento estelar en el UFC APEX la pelea de peso mosca entre el #2 <b>Brandon Royval</b>, quien estará enfrentando al portugués <b>Manel Kape</b>, ranqueado #6 en la división. </p>
                    <p>Además tendremos una pelea muy especial para el público latino, dado que el argentino <b>Kevin Vallejos</b>, estará peleando en el combate coestelar ante el #15 de la división de peso pluma <b>Giga Chikadze</b>, en una oportunidad única para él para entrar a los rankings de la UFC, y comenzar el 2026 siendo el tercer argentino en estar ranqueado en la historia de la compañía de MMA más grande del mundo, luego de <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link> y <Link href='/mujeres/ailin-perez'>Ailín Pérez</Link>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Guilherme Pat Derrota a Allen Frye Jr. por Decisión Unánime</h2>
                    <p>Espectacular victoria del brasileño <b>Guilherme Pat</b> en este duelo de invictos, para extender su récord en peso pesado a 7-0, luego de ganar los 3 asaltos del combate al conectar siempre más y mejores golpes a lo largo del combate. </p>
                    <h2>Luana Santos Domina y Derrota a Melissa Croden</h2>
                    <p>La brasileña <b>Luana Santos</b> que se encuentra ranqueada #15 en la división de peso gallo femenino, logra una increíble victoria ante la canadiense <b>Melissa Croden</b>, llevándose los 3 asaltos, con un completo dominio especialmente en el tercer, cuando fue capaz de derribar a su rival y ponerla en una posición donde no podía moverse ni escapar, castigándola con golpes durante 3 minutos hasta que finalizó el asalto, llevándose la victoria por decisión unánime. </p>
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