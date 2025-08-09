import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/dolidze_hernandez.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Vegas 109: ¡Roman Dolidze vs Anthony Hernandez!',
    description: 'Pelea entre Roman Dolidze y Anthony Hernandez en Peso Medio en el evento estelar del UFC Vegas 109 en el UFC APEX este 9 de agosto de 2025.',
    openGraph: {
        images: 'https://sdmntprwestus.oaiusercontent.com/files/00000000-ab78-6230-832a-5de52e58646d/raw?se=2025-08-09T21%3A40%3A28Z&sp=r&sv=2024-08-04&sr=b&scid=1543198d-d55d-5a49-a518-fd89dd417f72&skoid=f28c0102-4d9d-4950-baf0-4a8e5f6cf9d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-09T15%3A46%3A42Z&ske=2025-08-10T15%3A46%3A42Z&sks=b&skv=2024-08-04&sig=t%2BaASBloE3HxT5PcaHskpZmMe7iemWAiTUAfc/ipi6c%3D',
        title: 'UFC Vegas 109: ¡Roman Dolidze vs Anthony Hernandez!',
        description: 'Pelea entre Roman Dolidze y Anthony Hernandez en Peso Medio en el evento estelar del UFC Vegas 109 en el UFC APEX este 9 de agosto de 2025.',
        url: 'https://fullmma.org/eventos/fight-night-dolidze-hernandez'
    }
}

export default function DolidzeHernandez () {
    return(
        <main>
            <ArticleHero title='UFC Vegas 109: ¡Roman Dolidze vs Anthony Hernandez!' subtitle='¡Josely Edwards Noquea a Priscila Cachoeira en el Primer Asalto!' image={hero} date='2025-08-09' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</p>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Noche de UFC nuevamente en el UFC APEX, donde tendremos tremendo combate de peso medio como evento estelar, en lo que es la antesala al <b>UFC 319</b>, donde el cinturón de esta misma división estará en juego al enfrentar al campeón <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> contra el retador <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link>. Hoy sin embargo veremos al #9 de las 185lbs, el georgiano <b>Roman Dolidze</b>, enfrentar al estadounidense y #10 de la división, <b>Anthony Hernandez</b> en el evento estelar. </p>
                    <p>Pero además esta cartelera estará acompañada de combates más que interesantes, contando con la presencia del ex retador de peso mosca, <b>Steve Erceg</b>, enfrentarse en la división de peso gallo al luchador jamaiquino <b>Ode&apos; Osbourne</b>. Además que de por supuesto contaremos con presencia latina, con la panameña <b>Joselyne Edwards</b>, quien actualmente está #14 en la división de peso gallo femenina, defendiendo su lugar en los rankings al enfrentar a la brasileña <b>Priscila Cachoeira</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Eric Mcconico Gana a Cody Brundage por Decisión Dividida</h2>
                    <p>Termina la primer pelea de esta cartelera de UFC con una victoria para el peleador estadounidense <b>Eric Mcconico</b>, quien en un combate bastante cerrado fue capaz de derrotar a su compatriota <b>Cody Brundage</b> por decisión dividida de los jueces, en una pelea que de a ratos tuvo momentos de intercambio de golpes, pero que gran parte se darrolló en el clinch y en la lucha. </p>
                    <h2>Gabriella Fernandes Derrota a Julija Stoliarenko por Decisión Unánime</h2>
                    <p>La brasileña <b>Gabriella Fernandes</b> se hace con la victoria por medio de la decisión unánime, luego de dominar completamente a la lituana Stoliarenko, gracias a su sobresaliente striking, y a su excelente defensa de derribos, que le permitieron mantener el combate de pie, que es donde se sentía más cómoda. </p>
                    <h2>Uros Medic deja KO a Gilbert Urbina en el primer asalto</h2>
                    <p>El luchador de Serbia <b>Uros Medic</b> nos da una tremenda performance, al lograr la victoria por KO en el primer asalto, luego de conectar un recto con izquierda que tumbaría inmediatamente a su oponente en apenas poco más de un minuto de combate, para quedarse con la victoria y ser el primer nocaut y finalización de la noche. Todo esto a pesar de estar cerca de ser noqueado él mismo ni bien comenzó la pelea, dado que había recibido un knockdown que finalmente no prosperó. </p>
                    <h2>Joselyne Edwards Noquea a Priscila Cachoeira En el Primer Asalto</h2>
                    <p>La panameña <b>Joselyne Edwards</b> logra una increíble victoria por la vía del nocaut en el primer asalto, luego de que un gancho conectado con la mano derecha conectara en la quijada de la brasileña <b>Priscila Cachoeira</b> que la tumbaría. Obteniendo de esta forma una espectacular victoria por la vía del nocaut, que hasta el momento es digna de bono a la actuación de la noche. </p>
                    <h2>Tremenda Victoria por KO de Elijah Smith a Toshiomi Kazama en el Primer Asalto</h2>
                    <p>Espectacular victoria por la vía del KO para el luchador estadounidense <b>Elijah Smith</b> al japonés <b>Toshiomi Kazama</b>, que fue completamente superior a su rival, que pese a ser derribado ni bien comenzó el combate, aprovechó esta situación para castigar con ground&pound a su rival desde donde pudo, generándole mucho daño a lo largo del asalto, para finalmente hacerse la victoria al leventar al japonés desde el suelo, y arrojarlo al piso para que del golpe Kazama quedé oficialmente noqueado. </p>
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