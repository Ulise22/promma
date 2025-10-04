import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc320.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2!',
    description: "UFC 320 donde el campoeón Magomed Ankalaev defiende el cinturón ante Alex El Poatan Pereira. Además estará Merab Dvalishvili defendiendo el cinturón de peso gallo ante Cory Sandhagen.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc320.9fd20ef5.webp&w=828&q=65',
        title: 'UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2!',
        description: "UFC 320 donde el campoeón Magomed Ankalaev defiende el cinturón ante Alex El Poatan Pereira. Además estará Merab Dvalishvili defendiendo el cinturón de peso gallo ante Cory Sandhagen.",
        url: 'https://fullmma.org/eventos/ufc320'
    }
}

export default function UFC320 () {
    return(
        <main>
            <ArticleHero title="UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2! ¡Merab Dvalishvili vs Cory Sandhagen!" subtitle='¡Jiri Prochazka vs Khalil Rountree! ¡Joshs Emmet vs Youssef Zalal!' image={hero} date='2025-10-04' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Increíble la noche de UFC que se nos viene hoy, con el <b>UFC 320</b> siendo sin dudas una de las mejores carteleras del año, encabezada por el nuevo campeón de peso semipesado <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> que buscará su primera defensa del cinturón en una revancha con <b>El Poatan</b> <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, quien buscará recuperar el cinturón que era suyo a principios de año. Aquella no sería la única pelea por el cinturón que habrá, dado que en la pelea coestelar estará <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> defendiendo nuevamente su cinturón en peso gallo, ante el #4 de la división <b>Cory Sandhagen</b>, que viene de una victoria por nocaut en su último combate. </p>
                    <p>Toda la cartelera estelear vale la pena verla completa de principio a fin, dado que también estará presente el &quot;Samurái&quot; <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, enfrentando al excontendiente al título <b>Khalil Rountree</b>, en un combate que dependiendo de como terminé la pelea estelar, puede definir al próximo contendiente al título. Además estará peleando el veterano <b>Josh Emmet</b> en peso pluma, ante el joven peleador de 29 años <b>Youssef Zalal</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Veronica Hardy Derrota a Brogan Walker Por Decisión</h2>
                    <p>Contundente victoria en esta primer pelea de la noche por parte de la venezolana <b>Veronica Hardy</b>, quien dominó de principio a fin el combate, conectando golpes que dejaron mareada a su rival, y estando cerca de finalizar con una sumisión al final del primer asalto. De esta forma, la única peleadora latinoaméricana de esta cartelera se lleva la victoria por decisión unánime, habiendo ganado los 3 asaltos del encuentro.</p>
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