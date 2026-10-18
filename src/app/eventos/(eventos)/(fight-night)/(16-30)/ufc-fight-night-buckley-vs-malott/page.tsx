import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/buckley-vs-malott.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Joaquin Buckley vs Mike Malott!',
    description: 'Noche de UFC en Canadá, con canadiense Mike Malott enfrentando al #8 de la división de peso wélter, el estadounidense Joaquin Buckley. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuckley-vs-malott.4c1a7a24.webp&w=828&q=65',
        title: 'UFC Fight Night: ¡Joaquin Buckley vs Mike Malott!',
        description: 'Noche de UFC en Canadá, con canadiense Mike Malott enfrentando al #8 de la división de peso wélter, el estadounidense Joaquin Buckley. ',
        url: 'https://fullmma.org/eventos/ufc-fight-night-buckley-vs-malott',
    }
}

export default function BuckelyMalott () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Joaquin Buckley vs Mike Malott!' subtitle='¡Erin Blanchfield vs Jasmine Jasudavicius! ¡Cristian Perez Noquea a Kyle Nelson en el Primer Asalto!' image={hero} date='2026-10-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Noche de UFC en Edmonton, Canadá, con un montón de luchadores canadiense presentes en esta noche, empezando por el #13 de la división de peso wélter, <b>Mike Malott</b>, quien viene con una increíble racha de 4 victorias consecutivas y se enfrentará al #10 de la división, el estadounidense <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> en el evento estelar. </p>
                    <p>Además, en la pelea coestelar del evento estará la canadiense <b>Jasmine Jasudavicius</b>, recibiendo en casa a la #4 estadounidense de la división de peso mosca femenino <b>Erin Blanchfield</b> en un gran combate para la división. Finalmente tendremos presencia latina esta noche, cuando el mexicano <b>Christian Perez</b> se enfrente al canadiense <b>Kyle Nelson</b> en un combate en peso ligero. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Suyong You Somete a Cody Chovancek en el Tercer Asalto</h2>
                    <p>Aplastante victoria del surcoreano <b>Suyong You</b>, quien a lo largo de los 3 asaltos que duró el combate fue capaz de imponerse ante el luchador local <b>Cody Chovancek</b>, derribando una y otra vez a su rival, manteniéndolo a ras de lona y finalmente conectando una sumisión en el tercer asalto. </p>
                    <h2>Chelsea Chandler Somete a Melissa Croden en el Primer Asalto</h2>
                    <p>Brutal victoria por sumisión de la estadounidense <b>Chelsea Chandler</b>, quien luego de sufrir un derribo, fue capaz de darle la vuelta a la posición para conectar un kimura a su rival canadiense <b>Melissa Croden</b>, que la obligaría a tapear, ganando un combate donde partía como la underdog, por sumisión en el primer asalto. </p>
                    <h2>Steven Koslow Somete a Chad Anheliger en el Tercer Asalto</h2>
                    <p>Espectacular victoria del luchador estadounidense <b>Steven Koslow</b>, en un combate donde dominó completamente a su rival, castigándolo muy bien con golpes a la cabeza, tanto cuando la pelea estaba de pie, como cuando se llevó a cabo en el suelo. Finalmente, la llave a la victoria la encontró en el tercer asalto, cuando tomó la espalda de <b>Chad Anheliger</b>, y fue capaz de conectar un mataleón para someter a su rival. </p>
                    <h2>Katlyn Cerminara Noqua a Mackenzie Stiller en el primer asalto</h2>
                    <p>Gran victoria por parte de la estadounidense <b>Katlyn Cerminara</b>, quien luego de una rafaga de golpes al final del primer asalto, fue capaz de lastimar a su rival hasta que esta cayó al suelo, necesitando de apenas unos golpes extras para que el árbitro frenara la pelea y la diera como ganadora por TKO en el primer asalto del combate. </p>
                    <h2>Joel Faglier Noquea a Javad Mahjoub en el Segundo Asalto</h2>
                    <p>Sorprendente victoria del estadounidense <b>Joel Faglier</b>, teniendo en cuenta lo que vimos durante el combate, con el canadiense <b>Javad Mahjoub</b> siendo el luchador más dominante al inicio del combate, tomando la iniciativa y lanzando una avalancha de golpes a su rival durante el primer asalto que estuvieron muy cerca de acabarlo y dejarlo KO. Sin embargo, Joel fue capaz de resistir la embestida, y para el segundo asalto Javad ya estaba demasiado cansado, aprovechando esto para conectar unos golpes letales que acabarían noqueando al canadiense. De esta forma, Joel Faglier gana el combate por nocaut en el segundo asalto. </p>
                    <h2>Nick Galanti Somete a Julien Leblanc en el Primer Asalto</h2>
                    <p>Muy buena victoria por parte de <b>Nick Galanti</b>, quien muy rápido conectó un derribo para lanzar a su rival al suelo, para posteriormente tomarle la espalda y finalmente conectar una llave por encima del mentón de su rival, para terminar sometiéndolo en el primer asalto. </p>
                    <h2>Tanner Boser Noquea a Jhonata Diniz en el Tercer Asalto</h2>
                    <p>Gran victoria del canadiense <b>Tanner Boser</b>, que dominó de comienzo a fin a su rival brasileño, castigándolo por abajo como por arriba, ejerciendo un dominio ante el cual <b>Jhonata Diniz</b> no pudo contrarrestar. Finalmente el combate terminó en el último asalto, cuando Boser a base de golpear en el suelo a su rival, terminó llevándose la victoria por TKO. De esta forma, <b>Tanner Boser</b> es el primer canadiense en ganar esta noche, justo cuando acaba la cartelera preliminar. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Mandel Nallo Noquea a Nate Landwehr en el Segundo Asalto</h2>
                    <p>Tremenda victoria del canadiense <b>Mandel Nallo</b>, en un combate que no tuvo rival, siendo claramente dominante de principio a fin, causándole un daño a su rival que va a perdurar un tiempo, finalizándolo en el segundo asalto por la vía del nocaut. De esta forma, Nallo se convierte en el segundo luchador canadiense en llevarse una victoria el día de hoy. </p>
                    <h2>Timmy Cumba Somete a Louis Jourdain en el Segundo Asalto</h2>
                    <p>Espectacular victoria por parte del estadounidense <b>Timmy Cuamba</b>, quien fue mejor que su rival tanto en el primer como en el segundo asalto, castigando a su rival con el striking, y lanzando un derribo cuando menos lo espero, para tomarle la espalda y terminar sometiéndolo con una excelente mateleón en el segundo asalto. </p>
                    <h2>Marc-Andre Barriault Noquea a Kyle Daukaus en el Primer Asalto</h2>
                    <p>El canadiense <b>Marc-Andre Barriault</b>, quien pese a no partir como favorito en las casas de apuestas, fue capaz de primero, defender un intento de derribo por parte de su rival, y posteriormente fue capaz de conectar una combinación de golpes que tumbarían a su rival en el suelo, dejándolo en posición fatal mientras Barriault lo castigaba a golpes, a la espera de que el árbitro finalizara la pelea. De esta forma el canadiense Marc-Andre Barriault se lleva la victoria por la vía del nocaut en el primer asalto. </p>
                    <h2>Cristian Perez Noquea a Kyle Nelson en el Primer Asalto</h2>
                    <p>Brutal victoria del mexicano <b>Cristian Perez</b>, que inició el combate muy agresivo, intentando un derribo ni bien empezado el asalto, y que terminó atacando a su rival con una combinación de golpes letal que acabaron por dejar tumbado a su rival. De esta forma, otro underdog se lleva la victoria, con Cristian Perez ganando por TKO en el primer asalto. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}