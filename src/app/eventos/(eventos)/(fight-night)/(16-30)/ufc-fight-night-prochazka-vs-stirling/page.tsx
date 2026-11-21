import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/prochazka-vs-stirling.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Qatar: ¡Jiri Prochazka vs Navajo Stirling! ¡Kevin Vallejos vs Aljamain Sterling!',
    description: 'Noche de UFC en Qatar, con Jiri Prochazka enfrentando a Navajo Stirling en la pelea estelar, y Kevin Vallejos enfrentando a Aljamain Sterling en la coestelar.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprochazka-vs-stirling.1f0f1d2a.webp&w=828&q=65',
        title: 'UFC Qatar: ¡Jiri Prochazka vs Navajo Stirling! ¡Kevin Vallejos vs Aljamain Sterling!',
        description: 'Noche de UFC en Qatar, con Jiri Prochazka enfrentando a Navajo Stirling en la pelea estelar, y Kevin Vallejos enfrentando a Aljamain Sterling en la coestelar.',
        url: 'https://fullmma.org/eventos/ufc-fight-night-prochazka-vs-stirling',
    }
}

export default function ProchazkaStirling () {
    return(
        <main>
            <ArticleHero title='UFC Qatar: ¡Jiri Prochazka vs Navajo Stirling! ¡Kevin Vallejos vs Aljamain Sterling!' subtitle='¡Dan Hooker vs Brian Ortega! ¡Santiago Luna Derrota a Aleksandre Topuria por Decisión Dividida!' image={hero} date='2026-11-21' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular noche de UFC en Doha Qatar, en uno de los mejores eventos del año que nos traerá como pelea estelar el enfrentamiento entre el excampeón de peso semipesado <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>, enfrentando al joven neozelandés <b>Navajo Stirling</b>. Teniendo también un combate espectacular en la coestelar, que puede definir futuro de la división de peso pluma, y hacer historia para el MMA argentino, cuando el marplatense <Link href='/peleadores/kevin-vallejos'>Kevin Vallejos</Link> busqué escalar en la división, enfrentando al #4 de peso pluma y excampeón de peso gallo <b>Aljamain Sterling</b>, en una pelea que puede ser eliminatoria por el título. </p>
                    <p>Además de que estaremos lleno de combates espectaculares de principio a fin, destacando la pelea entre veteranos, cuando el neozelandés <Link href='/peleadores/dan-hooker'>Dan Hooker</Link> reciba en peso ligero al histórico <b>Brian Ortega</b>, que hace su salto de división definitivo, abandonando las 145lbs. Finalmente un combate especialmente interesante para los fans latinoaméricanos, será el que tengan el español <Link href='/peleadores/aleksandre-topuria'>Aleksandre Topuria</Link> contra el mexicano <b>Santiago Luna</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>John Mitchell Noquea a Shoaib Yousaf en el Primer Asalto</h2>
                    <p>Debut de ensueño para el irlandés <b>John Mitchell</b>, quien en su primer pelea en la UFC ya consiguió una victoria espectacular por la vía del nocaut en el primer asalto, luego de conectar un rodillazo en la cabeza de su rival inglés <b>Shoaib Yousaf</b>, para abrir la cartelera de la mejor manera. </p>
                    <h2>Diyar Nurgozhay Noquea a Alik Lorenz en el Segundo Asalto</h2>
                    <p>Brutal manera de finalizar por parte del kazajo <b>Diyar Nurgozhay</b>, quien luego de dominar completamente el primer asalto, inició el segundo con todo, conectando una patada a la cabeza, que solamente con rozar tumbó a su rival al suelo, necesitando de apenas unos pocos golpes para que el árbitro parara la pelea y lo diero como ganador por TKO en el segundo asalto. </p>
                    <h2>Dom Mar Fan Derrota a Nikolas Motta por Decisión Unánime</h2>
                    <p>Peleón el que acabamos de presenciar, con el australiano <b>Dom Mar Fan</b> siendo claramente superior durante el primer asalto, conectando una avalancha de golpes, con un dominio que provocó que su rival no le conectará ni un golpe durante el asalto. A pesar de que el brasileño <b>Nikolas Motta</b> fue capaza de igualar el combate en el segundo asalto, conectando golpes que podrían haber noqueado a su rival, finalmente terminó siendo avasallado por el de Australia, que acabó ganando cómodamente por decisión unánime este tercer combate de la velada. </p>
                    <h2>Tahir Abdullayev Derrota a Jake Matthews por Decisión Unánime</h2>
                    <p>Buena victoria para el luchador de Azerbaiyán <b>Tahir Abdullayev</b>, quien gracias a sus derribos, su lucha, y su control en el suelo, fue capaz de puntuar su camino hacia una victoria por decisión unánime de los jueces. </p>
                    <h2>Amir Albazi Somete a Alessandro Costa en el Tercer Asalto</h2>
                    <p>Espectacular victoria del irakí <b>Amir Albazi</b>, quien pese a ser superior en el primer asalto, sufrió un montón durante el segundo, estando a punto de ser noqueado y recibiendo una gran cantidad de golpes cortesía de su rival brasileño <b>Alessandro Costa</b>. Aún así, en el tercer y último asalto, fue capaz de tomar la espalda de su contrincante, para conectar un mataleón que obligaría al de Brasil a tapear, ganando de esta manera el combate por sumisión en el tercer asalto. </p>
                    <h2>Tallison Teixeira Derrota a Shamil Gaziev por Decisión Unánime</h2>
                    <p>Buena victoria para el brasileño <b>Tallison Teixeira</b>, donde aunque no hubo excesiva acción, el de Brasil fue capaz de puntuar y lastimar más a su rival, especialmente con la gran cantidada de patadas al cuerpo que arrojó, que marcaban la distancia, dañabana y alejaban a su rival, evitando que este lo lastime en gran manera. De esta forma, Teixeira se lleva la victoria por decisión unánime.</p>
                    <h2>Santiago Luna Derrota a Aleksandre Topuria por Decisión Dividida</h2>
                    <p>Tremenda pelea para cerrar esta cartelera preliminar, donde el joven mexicano de 22 años <b>Santiago Luna</b> da la sorpresa al derrotar a hispano-georgiano <Link href='/peleadores/aleksandre-topuria'>Aleksandre Topuria</Link>, en un combate cerrado, con un primer asalto donde pese a que el mexicano conectó más golpes significantes, daba la sensación de que los golpes de Topuria hacían muchísimo más daño, al punto de conseguir un knockdown en este asalto. Luego, el segundo asalto fue claramente para el mexicano, quien conectó más golpes y demostró tener una mandibula de acero al permanecer de pie ante los brutales golpes de Alek, y finalmente en el tercer asalto, uno de los más parejos, fue Luna quien consiguió conectar más golpes, logrando convencer a 2 de los 3 jueces que la victoria era suya, obteniendo de esta forma la victoria por decisión dividida.</p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
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