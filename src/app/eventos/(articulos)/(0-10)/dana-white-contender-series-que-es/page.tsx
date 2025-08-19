import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/articulos/0-10/dwcs_que_es.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import Image from 'next/image'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Dana White Conteneder Series Que Es',
    description: "Descubre qué es y cómo funciona el Dana White Contender Series, el programa de televisión de la UFC donde los peleadores que más destaquen se ganan un contrato en la compañía de MMA más grande del mundo.",
    openGraph: {
        images: '',
        title: 'Dana White Conteneder Series Que Es',
        description: "Descubre qué es y cómo funciona el Dana White Contender Series, el programa de televisión de la UFC donde los peleadores que más destaquen se ganan un contrato en la compañía de MMA más grande del mundo.",
        url: 'https://fullmma.org/eventos/dana-white-contender-series-que-es'
    }
}

export default function QueEsDWCS () {
    return(
        <main>
            <ArticleHero title="Que es el Dana White Contender Series" subtitle='¿Qué es y Cómo Funciona el Dana White Contender Series? El programa de televisión donde los peleadores compiten por un contrato con la UFC' image={hero} date='2025-08-19' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Dana White Contender Series es un programa de televisión deportivo donde se ven varias peleas de MMA, producido por UFC, presenta a luchadores prometedores que competirán en combates en vivo en busca de un contrato con la UFC. Las peleas cuentan con el mismo Dana White, presidente de la compañía, expectando los combates junto a su equipo, quienes si se sienten impresionados con el desempeño de los peleadores, les brindarán un contrato con la UFC como recompenza. </p>
                    <p>Cada episodio del DWCS (Dana White Contender Series) presenta una serie de combates en vivo que serán observados por Dana White. En ellos se pueden observar una amplia gama de talento emergente, que buscan usar esta plataforma que es el DWCS como trampolín para sus carreras, obteniendo como premio firmar un contrato con la UFC si logran impresionar a Dana White y a los ejecutivos de la empresa. </p>
                    <p>Los criterios para que un peleador que se presente al programa sea seleccionado pueden variar, basándose generalmente en el rendimiento del luchador dentro del octágono aquella noche, en el historial en MMA, y en el potencial que le vean para convertirse en una estrella del deporte. </p>
                    <p>Hasta su octava temporada, estrenada el pasado 2024, Dana White y la UFC contrataron gracias a este programa casi 300 peleadores, siendo finalmente un total de 287, a lo largo de 8 temporadas que normalmente contaban con 10 episodios/eventos por temporada. </p>
                    <YouTubeEmbed videoid='KziQ6Oz2Pjs' />
                    <p>La cantidad de peleadores que hoy destacan en la compañía que se ganaron su contrato en este programa es inmensa, que van desde el mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link>, el argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, el chileno <b>Ignacio Bahamondes</b>, hasta los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, cuyas 4 figuras más reconocidas, <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, <b>Jean Silva</b> y <b>Mauricio Ruffy</b>, consiguieron sus contratos en la UFC por esta vía. </p>
                    <h2>Campeones de UFC que salieron del Dana White Contender Series</h2>
                    <p>El legado que ha dejado este programa para el deporte y para la UFC, pese a ser un show relativamente reciente, ya es significativo y continúa creciendo día a día. Contando en la actualidad con 3 campeones que iniciaron su carrera en la compañía de artes marciales mixtas más grande del mundo allí, siendo estos: <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, <b>Jamahal Hill</b> y más recientemente <b>Jack Della Madallena</b>. </p>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}