import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc322.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 322: ¡Jack Della Maddalena vs Islam Makhachev! ¡Valentina Shevchenko vs Zhang Weili!',
    description: "",
    openGraph: {
        images: '',
        title: 'UFC 322: ¡Jack Della Maddalena vs Islam Makhachev! ¡Valentina Shevchenko vs Zhang Weili!',
        description: "",
        url: 'https://fullmma.org/eventos/ufc322'
    }
}

export default function UFC320 () {
    return(
        <main>
            <ArticleHero title="UFC 322: ¡Jack Della Maddalena vs Islam Makhachev! ¡Valentina Shevchenko vs Zhang Weili!" subtitle='¡Sean Brady vs Michael Morales! ¡Leon Edwards vs Carlos Prates! ¡Beneil Dariush vs Benoit Saint Denis!' image={hero} date='2025-11-15' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Esta noche tendremos la que a mi opinión personal es la mejor cartelera de la UFC en el año, con el <b>UFC 322</b> que estará siendo encabezado por el actual campeón de peso wélter <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>, quien estará defendiendo su cinturón ante el excampeón de peso ligero <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien dejó vacante su cinturón para buscar ser doble campeón de la compañía. Por si fuera poco, la pelea coestelar es igual de emocionante, ya que la actual campeona de peso mosca femenino <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link> estará defendiendo su cinturón ante la última campeona de peso paja <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>, quien al igual que Makhachev, dejó vacante su título para buscar ganar otro esta noche. </p>
                    <p>Y por si con eso no alcanzaba para ver la cartelera completa, además va a estar peleando el ecuatoriano <b>Michael Morales</b>, enfretando al #2 de la división de peso wélter <b>Sean Brady</b>. El excampeón de peso wélter <Link href='/peleadores/leon-edwards'>Leon Edwards</Link> también estará presente, enfrentando al luchador brasileño pertenciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>. Finalmente la cartelera estelar abrirá con una pelea espectacular, cuando el veterano luchador estadounidense de peso ligero <b>Beneil Dariush</b>, se enfrentará al francés <b>Benoit Saint Denis</b>, donde el francés tendrá la oportunidad de entrar al top 10 de la división en caso de llevarse una victoria. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Matheus Camilo Derrota a Viacheslav Borshchev por Decisión Unánime</h2>
                    <p>En un sólido desempeño por parte del brasileño <b>Matheus Camilo</b>, logra hacerse con la victoria luego de conectar buenos golpes a lo largo del combate, pero especialmente luego de ser capaz de derribar en reiteradas ocasiones a su rival que practicamente no tenía defensa ante el de Brasil. De esta manera Camilo se lleva la victoria en esta primera pelea de la cartelera. </p>
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