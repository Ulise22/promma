import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/oliveira-vs-gamrot.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Río: ¡Charles Oliveira vs Mateusz Gamrot!',
    description: 'Noche de UFC en Río de Janeiro, Brasil, donde estará Charles Oliveira peleando contra el polaco Mateusz Gamrot',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foliveira-vs-gamrot.e12050a3.webp&w=828&q=65',
        title: 'UFC Río: ¡Charles Oliveira vs Mateusz Gamrot!',
        description: 'Noche de UFC en Río de Janeiro, Brasil, donde estará Charles Oliveira peleando contra el polaco Mateusz Gamrot',
        url: 'https://fullmma.org/eventos/fight-night-oliveira-gamrot'
    }
}

export default function OliveiraGamrot () {
    return(
        <main>
            <ArticleHero title='UFC Río: ¡Charles Oliveira vs Mateusz Gamrot!' subtitle='¡Deiveson Figueiredo vs Montel Jackson! ¡Vicente Luque vs Joel Álvarez!' image={hero} date='2025-10-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Esta noche nos depara un evento de UFC espectacular en el Farmasi Arena, ubicada en Río de Janeiro, Brasil. Que tendrá una pelea estelar inmejorable, encabezada por <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, quien busca levantar cabeza luego de su última derrota por KO ante <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> en una pelea por el título de Peso Ligero, enfrentando al polaco <b>Mateusz Gamrot</b>, quien ocupa el puesto #8 en los rankings y quien tuvo la valentía de tomar la pelea a último momento para reemplazar a <b>Rafael Fiziev</b>, quien originalmente iba a encabezar esta cartelera. </p>
                    <p>Además, tendremos el combate entre el #6 de la división de peso gallo y excampeón de peso mosca <b>Deiveson Figueiredo</b>, quien enfrentará al estadounidense <b>Montel Jackson</b>. Y finalmente quienes serán los candidatos a la pelea de la noche son el brasileño <b>Vicente Luque</b>, que le dará la bienvenida a la división de peso wélter al español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, quien tendrá su primer combate en 170lbs en la UFC. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Luan Lacerda Somete a Saimon Oliveira en el Segundo Asalto</h2>
                    <p>Tremenda manera de comenzar esta noche de UFC, con el brasileño <b>Luan Lacerda</b> logrando una increíble victoria sobre su compatriota, contra quien se encontró en el segundo asalto en desventaja, estando por debajo de su rival en el suelo recibiendo golpes, pero fue acá donde encontró su camino a la victoria, siendo capaz de conectar un armbar desde esa posición para obligar a su rival a tapear, y llevarse la primer victoria de la noche por sumisión en el segundo asalto. </p>
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