import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/lopes-vs-silva.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Noche: ¡Diego Lopes vs Jean Silva!',
    description: 'UFC Noche con Diego Lopes enfrentando la brasileño Jean Silva, pertenciente a los Fighting Nerds en la pelea estelar. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flopes-vs-silva.5d2f30a3.webp&w=828&q=65',
        title: 'UFC Noche: ¡Diego Lopes vs Jean Silva!',
        description: 'UFC Noche con Diego Lopes enfrentando la brasileño Jean Silva, pertenciente a los Fighting Nerds en la pelea estelar. ',
        url: 'https://fullmma.org/eventos/fight-night-lopes-silva'
    }
}

export default function ImavovBorralho () {
    return(
        <main>
            <ArticleHero title='UFC Noche: ¡Diego Lopes vs Jean Silva!' subtitle='¡David Martínez vs Rob Font!' image={hero} date='2025-09-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Tremendo evento de UFC tenemos el día de hoy en honor a la Independencia de México, donde el luchador de doble nacionalidad brasileña/mexicana <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, quien estará enfrentando a su compatriota de Brasil <b>Jean Silva</b>, quien actualmente es el único luchador invicto en la UFC de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>. </p>
                    <p>Además, en la pelea coestelar estarán peleando el #9 de la división de peso gallo de la compañía <b>Rob Font</b>, quien defenderá su puesto en los rankings ante el prospecto mexicano <b>David Martínez</b>, quien en su segunda pelea en la UFC ya tendrá una prueba de fuego. Sin mencionar la enorme cantidad de peleadores mexicano y latinos que estarán presentes peleando el día de hoy. </p>
                    <p></p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Daniil Donchenko Noquea a Rodrigo Sezinando en el Primer Asalto en al Final de The Ultimate Fighter</h2>
                    <p>Tremenda manera de comenzar esta cartelera del Noche UFC, que nos trajó la final del TUF en peso wélter, donde el ucraniano <b>Daniil Donchenko</b> fue capaz de imponerse por sobre su rival <b>Rodrigo Sezinando</b>, conectando un montón de codazos a la cara de su rival que le generaron cortes en el rostro, convirtiendo esto en una pelea sangrienta. Finalmente fue una mano derecha la que consiguió el knockdown, que llegó seguido de una avalancha de golpes que el árbitro los separará y diera como ganador por TKO al luchador ucraniano. </p>
                    <h2>Montse Rendon Derrota a Alice Pereira Por Decisión Dividida</h2>
                    <p>Excelente pelea por parte de la luchadora mexicana <b>Montse Rendon</b>, quien al enfrentarse a una peleadora 17 años menos, que además estaba invicta como <b>Alice Pereira</b>, fue capaz de ir puntuando, de conectar golpes al cuerpo y a la cabeza. En un combate donde fue siempre la peleadora mexicana la que tomó la iniciativa, caminando siempre hacia adelante, mientras su rival brasileña se movía alrededor del octágono, en busqueda de la oportunidad para contragolpear. Finalmente Montse Rendon se llevaría la pelea por decisión dividida, de forma justa, a mi criterio.</p>
                    <h2>Alden Coria Noquea a Alessandro Costa en el Tercer Asalto</h2>
                    <p>Gran victoria para Alden Coria, quien enfrentando a su compatriota, fue capaz de aprovechar una lesión que sufrió Alessandro Costa en el pie en el segundo asalto, que le dificultó mantenerse de pie, conectándole un uppercut seguido de una combinación larga de golpes, para que el árbitro los terminé separando, declarando a <b>Alden Coria</b> como ganador del combate por TKO en el tercer asalto. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2></h2>
                    <p> </p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}