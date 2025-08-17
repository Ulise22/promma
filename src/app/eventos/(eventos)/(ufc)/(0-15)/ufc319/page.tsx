import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc319.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 319: ¡Dricus Du Plessis vs Khamzat Chimaev!',
    description: "UFC 319 con Dricus Du Plessis defendiendo el cinturón de peso medio ante Khamzat Chimaev.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc319.494c5fc3.webp&w=828&q=65',
        title: 'UFC 319: ¡Dricus Du Plessis vs Khamzat Chimaev!',
        description: "UFC 319 con Dricus Du Plessis defendiendo el cinturón de peso medio ante Khamzat Chimaev.",
        url: 'https://fullmma.org/eventos/ufc319'
    }
}

export default function UFC319 () {
    return(
        <main>
            <ArticleHero title="UFC 319: ¡Dricus Du Plessis vs Khamzat Chimaev!" subtitle='¡Lerone Murphy vs Aaron Pico! ¡Carlos Prates vs Geoff Neal!' image={hero} date='2025-08-16' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</p>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Esta noche tenemos la que promote ser la mejor cartelera de UFC todo el año con el <b>UFC 319: Du Plessis vs Chimaev</b>, que tendrá lugar en Chicago y que estará protagonizada por el campeón de peso medio de la compañía <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, que afrontará su tercera defensa del título ante uno de los rivales más dificiles que podría enfrentar, <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>, quien permanece invicto con un récord de 14-0, y que con sus contundentes victorias ha demostrado ser un peleador al que hay que temer, prometiendo convertirse en una estrella absoluta en caso de ganar hoy el cinturón de las 185lbs. </p>
                    <p>Además, en el evento coestelar peleará el también invicto <b>Lerone Murphy</b>, quien dará la bienvenida a la UFC en peso pluma al expeleador de BELLATOR <b>Aaron Pico</b>, quien pese a ser un debutante en la compañía y tener un par de derrotas en su haber, parte como favortio en las apuestas. Aunque la acción no sólo queda ahí, dado que tenemos un montón de combatazos, incluída la pelea del brasileño pertenciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, quien enfrentará a <b>Geoff Neal</b>. Además, contaremos con el debut del checheno de 24 años <b>Baisangur Susurkaev</b>, quien hace tan sólo 4 días estaba peleando en el <b>Dana White&apos;s Contender Series</b>, y quien cuya actuación gustó tanto a Dana White, que no sólo le dió un contrato en la compañía, sino que ya lo puso a competir en una cartelera. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Joseph Morales Somete a Alibi Idiris en el Segundo Asalto</h2>
                    <p>Tremenda manera de comenzar este UFC 319, y de terminar esta final de <b>The Ultimate Fighter</b>, con el estadounidense <b>Joseph Morales</b> dominando completamente a su rival de Kazajistán, <b>Alibi Idiris</b>, que aunque llegaba a este combate invicto y como amplio favorito en las apuestas, conoció la derrota por primera vez en su carrera, ante un Joseph Morales que luego de un primer paso fallido en la UFC, logra volver y de qué manera, con un dominio total que culminó en el segundo asalto con una sumisión para derrotar a su rival. </p>
                    <h2>Karine Silva Derrota a Dione Barbosa</h2>
                    <p>La brasileña <b>Karine Silva</b> se lleva la victoria en un tremendo combate, que le permite conservar su puesto en el ranking de peso mosca femenino. A pesar de que <b>Dione Barbosa</b> había comenzado muy bien la pelea, dominando y ganando el primer asalto de la pelea, haciendo uso de su Judo y Muay Thai como principales fortalezas, lo cierto es que se fue apagando a medida que avanzó el combate, y su compatriota comenzó a hacer ajustes que le permitieron ir robando puntos para finalmente llevarse la victoria por decisión unánime en este primer combate femenino de la noche. </p>
                    <h2>Drakkar Klose Derrota a Edson Barboza por Decisión Unánime</h2>
                    <p>El estadounidense <b>Drakkar Klose</b> se hace con la victoria en una pelea muy cerrada ante el brasileño <b>Edson Barboza</b>. Si bien tanto el primer como el tercer asalto fueron muy competidos, lo cierto es que el luchador americano dominó claramente el segundo asalto, conectando golpes a la cabeza que daban la sensación de que en cualquier momento podían noquear a su rival, además de que pese a recibir más golpes en el cuerpo y más patadas a las piernas, Klose fue claramente superior cuando de golpes a la cabeza se trataba. Por esto no es de extrañar que quien finalmente se llevara la victoria 29-28 en esta última pelea de los primeros preliminares por decisión unánime sea Drakkar Klose. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Alexander Hernandez Noquea a Chase Hooper en el Primer Asalto</h2>
                    <p>Tremenda sorpresa da el estadounidense <b>Alexander Hernandez</b>, que pese a estar abajo en las apuestas, y dar la sensación de estar perdiendo el asalto, necesitó de un golpe bien dado y de unos necesarios golpes extras para quedarse con la victoria por nocaut, a falto de 2 segundos para que terminara el asalto, logrando de esta forma el primer nocaut de la noche. </p>
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