import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/0-15/ulberg-vs-reyes.webp'
import desktopAd from '@/app/eventos/components/assets/desktop.gif'
import mobileAd from '@/app/eventos/components/assets/mobileAd.gif'
import secondAd from '@/app/eventos/components/assets/Media10417__es300х250.gif'
import Image from 'next/image'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Perth: ¡Carlos Ulberg vs Dominick Reyes!',
    description: 'Noche de UFC en Perth, Australia, donde estarán enfrentándose Carlos Ulberg contra Dominick Reyes en peso semipesado. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fulberg-vs-reyes.d78ddb8f.webp&w=828&q=65',
        title: 'UFC Perth: ¡Carlos Ulberg vs Dominick Reyes!',
        description: 'Noche de UFC en Perth, Australia, donde estarán enfrentándose Carlos Ulberg contra Dominick Reyes en peso semipesado.  ',
        url: 'https://fullmma.org/eventos/fight-night-ulberg-reyes'
    }
}

export default function UlbergReyes () {
    return(
        <main>
            <ArticleHero title='UFC Perth: ¡Carlos Ulberg vs Dominick Reyes!' subtitle='¡Jimmy Crute vs Ivan Erslan!' image={hero} date='2025-09-13' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <span className={styles.article__warning}>‼️Las apuestas están prohibidas para menores de edad. Si crees que tienes un problema con el juego, busca ayuda profesional. Jugar debe ser una actividad de entretenimiento, no una forma de ganar dinero.</span>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image className={styles.desktopAd} src={desktopAd} alt='' />
                        <Image className={styles.mobileAd} src={mobileAd} alt='' />
                    </Link>
                    <p>Espectacular evento de UFC esta noche en Perth, Australia que nos trae como evento estelar la pelea entre el #3 de peso semipesado, el neozelandés <b>Carlos Ulberg</b>, quien viene de una racha imparable de 8 victorias consecutivas en la UFC, y el histórico peleador estadounidense <b>Dominick Reyes</b>, quien luego de hacer un parate a su carrera de 2 años, volvió mejor que nunca, acumulando una racha de 3 victorias consectuivas, ocupando el puesto #7 en los rankings de la división. </p>
                    <p>Además, tendremos en la pelea coestelar el enfrentamiento entre el local <b>Jimmy Crute</b>, y el croata <b>Ivan Erslan</b>, también en peso semipesado. También tendremos presencia latina en la noche de hoy, cuando en la cartelera preliminar estará peleando el peruano <b>Rolando Bedoya</b> ante el australiano <b>Jamie Mullarkey</b>, en peso ligero, además de un montón de peleadores australianos que buscarán brillar frente a su gente. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Alexia Thainara Derrota a Loma Lookboonmee por Decisión Unánime</h2>
                    <p>Tremenda esta primer pelea de la noche, donde la brasileña <b>Alexia Thainara</b> destacó con una actuación completamente dominante, conectando muchos más golpes que su rival tailandesa, siendo además capaz de conectar varios derribos para castigar con ground and pound durante todo el combate, manteniendo el control de su rival contra la reja y castigando aún en el clinch, ganando de estar forma todos los asaltos de manera clarísima. De esta forma, Alexia se mete en los rankings del peso paja femenino. </p>
                    <h2>Brandon Pericic Noquea a Elisha Ellison en el Primer Asalto</h2>
                    <p>El luchador australiano <b>Brando Pericic</b> se lleva la victoria de forma contundente, con un nocaut en el primer asalto, en lo que fue una avalancha de golpes que tuvo que ser frenada por el árbitro para evitar que siguiera haciendo daño a su rival. De esta manera, Brando Pericic se convierte en el primer australiano en llevarse la victoria esta noche, y en el primer en conseguir un nocaut. </p>
                    <h2>Michelle Montague Derrota a Luana Carolina Por Decisión Unánime</h2>
                    <p>Muy buen desempeño por parte de la peleadora oriunda de Nueva Zelanda <b>Michelle Montague</b>, quien supo ser muy dominante a lo largo del combate, manteniendo a su rival a ras de lona, conectando golpes desde el suelo e intenta diferentes sumisiones que dejaron a su rival brasileña sin poder hacer mucho. De esta forma, Montague se hace con la victoria y extiende su invicto a 7-0. </p>
                    <h2>Colby Thicknesse Derrota a Josias Musasa</h2>
                    <p>El australiano <b>Colby Thicknesse</b>, quien contaba con su compañero de entrenamiento en su esquina, el campeón de peso pluma <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, se llevó la victoria en una pelea espectacular, que tuvo tantos cambios que podría haber ganado cualquiera de los 2 peleadores. Al comienzo del combate se notó que Colby iba a sufrir en el striking, sin embargo al conseguir un derribo logró llevar la pelea a donde se sentía más cómodo, castigando con ground and pound y estando cerca de someter a su rival. En mi opinión el primer y tercer asalto fueron los que dieron la victoria a Thicknesse, quien cuando pudo llevar a su rival al suelo es cuando mostró su mejor cara. </p>
                    <h2>Jamie Mullarkey Derrota al Peruano Rolando Bedoya</h2>
                    <p>El australiano <b>Jamie Mullarkey</b> se hace con la victoria ante el peruano <b>Rolando Bedoya</b>, luego de dominar los 2 primeros asaltos, y aunque el luchador de Perú fue capaz de ir dando vuelta la pelea de a poco, mostrando su mejor cara en el último asalto del combate, esto no fue suficiente para derrotar al luchador local que hizo suficiente en los primeros 2 asaltos para quedarse con la victoria. </p>
                    <h2>Cam Rowson Noquea a Andre Petroski en el Primer Asalto</h2>
                    <p>El australiano <b>Cam Rowson</b> debuta en la UFC con un nocaut en el primer asalto ante el estadounidense <b>Andre Petroski</b>, luego de conectar un gancho de izquierda que tumbó a su rival, para proceder a castigarlo desde el suelo hasta que el árbitro los separó para darle la victoria por TKO al luchador local. </p>
                    <h2>Navajo Stirling Derrota a Rodolfo Bellato y Mantiene el Invicto</h2>
                    <p>El luchador de Nueva Zelanda <b>Navajo Stirling</b> logra hacerse con la victoria en un tremendo combate ante el brasileño <b>Rodolfo Bellato</b>, luego de tener especialmente un primer asalto en el que fue completamente dominante, golpeando desde todos los ángulos posibles a su rival, conectando muchísimos más golpes que su rival, y aunque en el segundo y tercer asalto la pelea se fue igualando, lo cierto es que Bellato no hizo lo suficiente para sacarle la victoria a Navajo Stirling, quien por decisión unánime mantiene su invicto y se lleva la victoria en esta última pelea preliminar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Tom Nolan Somete a Charlie Campbell en el Primer Asalto</h2>
                    <p>Espectacular manera de comenzar la cartelera estelar de esta noche, con una nueva victoria por parte de un luchador australiano, esta vez de <b>Tom Nolan</b>, quien comenzó sufriendo bastante su pelea contra <b>Charlie Campbell</b>, pero que en el momento en que fue capaz de derribar al estadounidense, tuvo la rapidez necesaria para conectar un mataleón que terminaría sometiendo a su rival en el primer asalto. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}