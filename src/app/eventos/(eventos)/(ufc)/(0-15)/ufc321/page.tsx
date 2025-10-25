import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc321.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 321: ¡Tom Aspinall vs Ciryl Gane!',
    description: "",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc321.74476cd3.webp&w=828&q=65',
        title: 'UFC 321: ¡Tom Aspinall vs Ciryl Gane!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc321'
    }
}

export default function UFC321 () {
    return(
        <main>
            <ArticleHero title="UFC 321: ¡Tom Aspinall vs Ciryl Gane! ¡Virna Jandiroba vs Mackenzie Dern!" subtitle='¡Umar Nurmagomedov vs Mario Bautista! ¡Alexander Volkov vs Jailton Almeida!' image={hero} date='2025-10-25' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Tremendo el evento de MMA que tenemos esta noche, donde en el <b>UFC 321</b> tendremos como evento estelar la pelea por el título de Peso Pesado de la UFC, en la que el actual campeón <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> estará defendiendo por primera vez su cinturón indiscutido ante el #1 de la división, el francés <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>. Por si fuera poco, en el evento coestelar se estará disputando el título vacante de peso paja femenino, donde la #1 de la división <b>Virna Jandiroba</b> se enfrentará a la #5 de la división <Link href='/mujeres/mackenzie-dern'>Mackenzie Dern</Link></p>
                    <p>Además, volverá a pelear el daguestaní, primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link>, enfrentando al #8 de la división de peso gallo <b>Mario Bautista</b>. El otro combate de peso pesado al que hay que prestarle atención, es el del #2, el ruso <b>Alexander Volkov</b>, y el brasileño #5 <b>Jailton Almeida</b>, en busqueda de una oportunidad de pelear por el título de la división con el ganador del combate estelar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Mizuki Derrota a Jaqueline Amorim en un Peleón</h2>
                    <p>Espectacular pelea para abrir la cartelera la que acabamos de presenciar, con la japonesa <b>Mizuki</b>, siendo quien finalmente se lleva la victoria. Luego de un primer asalto bastante cerrado, en el que la vencedora fue de menos a más, en el segundo y tercer round de la pelea fue Mizuki quien se impuso claramente ante su rival brasileña <b>Jaqueline Amorim</b>, mostrando una superioridad en el striking notable, y castigando en el ground and pound para finalmente llevarse la victoria por decisión unánime. </p>
                    <h2>Mitch Raposo Derrota a Azat Maksum por Decisión Unánime</h2>
                    <p>Gran victoria por parte de Mitch Raposo que fue capaz de llevarse la victoria por decisión unánime, en un combate que fue bastante equilibrado por parte de ambos luchadores, con Maksum conectando varios derribos en los que Raposo era capaz de ponerse de pie rapidamente. Finalmente un elemento importante para la victoria del estadounidense, fue la deducción de un punto a su rival kazajo <b>Azat Maksum</b>, quien para ponerse de pie se sujeto de la reja, lo cual esta prohibido. </p>
                    <h2>Hamdy Abdelwahab Derrota a Chris Barnett Por Decisión Unánime</h2>
                    <p>Gran victoria para el luchador egipcio <b>Hamdy Abdelwahab</b>, quien destruyó completamente a su rival español <b>Chris Barnett</b>, golpeando desde todos lados, con un diferencial de golpes que debe superar los 100, y todo esto a pesar de que se le descontó un punto en el primer asalto, por darle un codazo ilegal atrás de la cabeza su rival. </p>
                    <h2>Nathaniel Wood Derrota a Jose Miguel Delgado por Decisión Unánime</h2>
                    <p>Victoria para el luchador inglés <b>Nathaniel Wood</b>, quien finalmente luego de 3 asaltos se impuso por sobre su rival mexicano <b>José Miguel Delgado</b>, por decisión unánime, pese a partir como el menos favorito en las apuestas, logrando hacer la diferencia especialmente en los últimos 2 asaltos. </p>
                    <h2>Valter Walker Somete a Louie Sutherland en el Primer Asalto</h2>
                    <p>Espectacular lo conseguido por el brasileño <b>Valter Walker</b>, quien consigue la primer finalización de la noche, al conectar su ya tan característico knee hook, que llegó luego de conectar de manera excelente un derribo, para proceder a someterlo, consiguiendo su cuarta sumisión por esta vía en la UFC. </p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2></h2>
                    <p></p> */}
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