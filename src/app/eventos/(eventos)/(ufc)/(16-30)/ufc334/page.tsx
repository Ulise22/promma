import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/16-30/ufc334.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!',
    description: "UFC 334 en el Madison Square Garden en Nueva York con Ciryl Gane defendiendo su título ante Josh Hokit y Kayla Harrison defendiendo su cinturón ante Amanda Nunes.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc334.9302751b.webp&w=828&q=65',
        title: 'UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!',
        description: "UFC 334 en el Madison Square Garden en Nueva York con Ciryl Gane defendiendo su título ante Josh Hokit y Kayla Harrison defendiendo su cinturón ante Amanda Nunes.",
        url: 'https://fullmma.org/eventos/ufc334'
    }
}

export default function UFC334 () {
    return(
        <main>
            <ArticleHero title="UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!" subtitle='¡Caio Borralho vs Yousiri Belgaroui! ¡Uros Medic y Kevin Holland Empatan Por Decisión Mayoritaria!' image={hero} date='2026-11-14' author={null} updatedDate='2026-11-15' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de MMA tenemos esta noche en Nueva York, en el mítico Madison Square Garden, que estará recibiendo el UFC 334. Con una pelea espectacular para el evento estelar, por fin teniendo un combate por el título de pesos pesados, con el recientemente nombrado campeón <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> defendiendo su título ante el luchador invicto <Link href='/peleadores/josh-hokit'>Josh Hokit</Link>. Y con una pelea coestelar igual de espectacular, enfrentando a 2 de las mejores peleadoras de la historia, con la campeona <Link href='/mujeres/kayla-harrison'>Kayla Harrison</Link> defendiendo su cinturón de peso gallo ante la GOAT del deporte, <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link></p>
                    <p>Además, vuelve a subirse al octágono el primer integrante de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, para enfrentar al neerlandés <b>Yousri Belgaroui</b>, jugándose su lugar en los rankings. También habrá peleón cuando el serbio, y #11 de los rankings de peso wélter, <b>Uros Medic</b>, busque su quinta victoria consecutiva contra el siempre peligroso y activo <b>Kevin Holland</b>. Finalmente en la pelea estelar de las preliminares, se nos retira un histórico y leyenda como lo es <b>Stephen Thompson</b>, que hoy colgará los guantes luego de enfrentar a su compatriota <b>Charles Radtke</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Evan Elder Derrota a Samuel Sanches Por Decisión Unánime</h2>
                    <p>Espectacular pelea para iniciar esta gran cartelera, con el estadounidense <b>Evan Elder</b> siendo el que sale victorioso ante el brasileño <b>Samuel Sanches</b>, que tuvo un primer asalto con dominio estadounidense total, a punto de noquear a su rival en todo momento, y, aunque perdió un segundo asalto donde se notaba que los golpes de su rival hacían más daño que los suyos, fue capaz de compensar esto con unos derribos que fueron claves en el tercer asalto, aprovechando su ventaja posicional para castigar desde el suelo a golpes a su oponente. De esta manera el estadounidense Evan Elder se lleva la victoria por decisión unánime y alcanza su cuarta victoria consecutiva en peso ligero. </p>
                    <h2>Juan Diaz Derrota a Alatengheili por Decisión Unánime</h2>
                    <p>Paliza total del luchador peruano <b>Juan Diaz</b> ante el chino <b>Alatengheili</b>, a quien golpeó y dominó desde todos los lados posibles, consiguiendo una meritoria victoria por decisión unánime en este segundo combate en la UFC, consiguiendo su victoria 17 en su carrera. </p>
                    <h2>Bia Mesquita Somete a Macy Chiasson en el Primer Asalto</h2>
                    <p>Primera finalización de la noche, con la brasileña <b>Bia Mesquita</b> siendo completamente protagonista, dominando a golpes a su rival, eventualmente logrando llevarla al suelo, y cuando parecía que estaba por noquearla en base a ground & pound, le tomó la espalda y conectó un mataleón que obligaría a su rival a tapear. De esta manera, la brasileña Bia Mesquita se lleva la victoria por sumisión en el primer asalto. </p>
                    <h2>Melquizael Costa Derrota a Jared Gordon por Decisión Unánime</h2>
                    <p>Gran victoria para el brasileño <b>Melquizael Costa</b>, quien luego de entrar al ranking de peso pluma, decidió subir de división y debuta con victoria en peso ligero, luego de dominar completamente al estadounidense <b>Jared Gordon</b>, durante el primer y tercer asalto, cuando fue capaz de lastimar a su oponente con esas patadas al cuerpo y cabeza, con un striking impredecible de muchos golpes que acabó por darle la victoria por decisión unánime. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Cesar Almeida Noquea a Donte Johnson en el Primer Asalto</h2>
                    <p>Brutal nocaut en el primer asalto del brasileño <b>Cesar Almeida</b>, quien en un combate que inició algo cerrado, fue capaz de marcar la diferencia con el poder de sus manos, que con un par de golpes impactó duramente sobre la cabeza del estadounidense <b>Donte Johnson</b>, consiguiendo finalmente luego de un poco de esfuerzo, finalizarlo cuando el árbitro vió que Johnson ya estaba demasiado lastimado como para recuperarse de la paliza. De esta forma, Cesar Almeida se lleva la victoria por TKO en el primer asalto. </p>
                    <h2>Terrance McKinney Noquea a Jim Miller en el Primer Asalto</h2>
                    <p>Tremenda victoria por parte del estadounidense <b>Terrance McKinney</b>, quien enfrentando al veterano <Link href='/articulos/jim-miller-historia'>Jim Miller</Link>, le conectó un golpe que lo tumbaría al suelo, para rematarlo finalmente y ganar el combate por la vía del nocaut en el primer asalto, ante el peleador con más peleas en la historia de la UFC. </p>
                    <h2>Chris Duncan Derrota a Drew Dober Por Decisión Unánime</h2>
                    <p>Gran victoria del escocés <b>Chris Duncan</b> ante un gran rival como lo es el veterano de 38 años <b>Drew Dober</b>, a quien en un combate muy competitivo, que debido a la agresividad y la brutalidad de los golpes que conectaban ambos, podría haber acabado en cualquier momento y a favor de cualquiera de los 2. Sin embargo, quien supo imponerse por encima de su rival fue el luchador europeo, quien se llevó la victoria por decisión unánime. </p>
                    <h2>Stephen Thompson Noquea a Charles Dadtke y Se Retira de las MMA</h2>
                    <p>Espectacular pelea para cerrar su carrera por parte del histórico luchador estadounidense <b>Stephen &quot;Wonderboy&quot; Thompson</b>, quien en una gran pelea, donde supo imponer su estilo, defendiendo todos los intento de derribo de su rival, y manteniendo la distancia con sus típicas patadas de karateca. Finalmente, acabó la pelea fiel a su estilo, con una patada giratoria espectacular, que pese a que estaba bloqueada por la mano de su rival, fue con tanta potencia que lo hizo tambalear hasta caer al suelo, venciendo por nocaut en el tercer asalto del combate, y retirándose como la leyenda que es. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Luis Gurule Derrota a Bilal Hasan por Decisión Dividida</h2>
                    <p>Tremenda sorpresa la que nos llevamos el día de hoy en este combate, que tenía las apuestas más dispares de toda la cartelera, con el joven luchador de Indonesia <b>Bilal Hasan</b> siendo el claro favorito. Sin embargo, el estadounidense <b>Luis Gurule</b> sería protagonista de la gran sorpresa de la noche, dado que pese a perder el primer asalto, fue capaz de sobrevivir y llevar la pelea a la decisión de los jueces, derribando en más de una ocasión a su oponente, y castigándolo desde el suelo, siendo capaz de puntuar de esta manera para robarse el segundo y tercer asalto, al menos para 2 de los 3 jueces, que dieron como ganador a <b>Luis Gurule</b> por decisión dividida. </p>
                    <h2>Uros Medic y Kevin Holland Empatan Por Decisión Mayoritaria</h2>
                    <p>Buena pelea la que acabamos de presenciar, entre el serbio #11 de peso wélter <b>Uros Medic</b> y el estadounidense <b>Kevin Holland</b>, que fue bastante competitivo y algo cerrado, pero donde sin embargo se vió ligeramente mejor al serbio, especialmente en el tercer asalto, donde conectó muchos golpes contundentes que de haber sido proseguidos por más golpes de igual contundencia, podrían haber acabado el combate de forma prematura. El punto más importante de la pelea que definió el resultado, fue la sanción que sufrió Medic en el segundo asalto, cuando luego de conectar una patada en las zonas bajas de su rival por segunda vez consecutiva, se le descontaría un punto luego de que Kevin Holland se tomara los 5 minutos completos que le permiten para recuperarse del golpe. Por esto el resultado se vió influenciado y terminó en empate para ambos luchadores. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}