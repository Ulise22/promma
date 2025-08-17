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
            <ArticleHero title="UFC 319: ¡Dricus Du Plessis vs Khamzat Chimaev! ¡Lerone Murphy Deja KO al Debutante de UFC Aaron Pico!" subtitle='¡Loopy Godínez Derrota a Jéssica Andrade por Decisión Unánime en un Peleón! ¡Carlos Prates Noquea a Geoff Neal en el Primer Asalto con un Codazo Giratorio!' image={hero} date='2025-08-16' author={null} updatedDate='2025-08-17' />
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
                    <h2>Loopy Godínez Derrota a Jéssica Andrade por Decisión Unánime</h2>
                    <p>En un tremendo combate, de los mejores de la noche, la mexicana <b>Loopy Godínez</b> salió victoriosa ante la veterana brasileña <b>Jéssica Andrade</b>, a quien dominó desde el strking, consiguiendo concretar un par de derribos también, especialmente durante los primeros 2 asaltos, en los que supo manejar la distancia para conectar varios golpes y no recibir tantos ella. Y aunque en el tercer asalto, más desesperada Andrade por buscar la finalización, lo terminó ganando la brasileña, la mexicana se supo defender y contestar con más golpes, logrando con lo hecho en el primer y segundo asalto llevarse la victoria por decisión unánime. </p>
                    <h2>Michal Oleksiejczuk Noquea en el Primer Asalto a Gerald Meerschaert</h2>
                    <p>Tremenda victoria para el polaco, quien siendo inteligente y sabiendo esperar su momento, conecto los mejores golpes que tumbaron a Gerald en más de una ocasión, pero sabiendo del peligro que representa el estadounidense en el piso, siendo el luchador con más sumisiones en la historia de la sumisión, no fue hasta que lo vió muy lastimado que decidió arrojarse al suelo con él para rematarlo y terminar llevándose la victoria por TKO en el primer asalto. </p>
                    <h2>Baisangur Susurkaev Somete a Eric Nolan en el Segundo Asalto</h2>
                    <p>El checheno no decepciona para nada, al mostrarse confiado desde el primer segundo de la pelea, sonriendo y riendo cada vez que su rival le conectaba un golpe, pasó el primer asalto sin ningún dominio claro, hasta que llegó el segundo asalto de la pelea, cuando <b>Baisangur Susurkaev</b> decidió tomarse en serio el combate, buscando el derribo y castigando a ras de lona al estadounidense <b>Eric Nolan</b>, a quien golpeó hasta el cansancio desde la espalda de este, para finalmente encontrar el espacio y buscar un mataleón que logró conectar exitosamente, obligando a Nolan a tapear, y consiguiendo Susurkaev la victoria por sumisión en el segundo asalto en esta última pelea de las preliminares del UFC 319.</p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <Link className={styles.article__ads} target='_Blank' rel='sponsored' href='https://refpa58144.com/L?tag=d_4624339m_1599c_&site=4624339&ad=1599'>
                        <Image src={secondAd} alt='' />
                    </Link>
                    <h2>Tim Elliot Somete a Kai Asakura en el segundo asalto</h2>
                    <p>Tremenda pelea del estadounidense, que en su regreso al octágono después de una larga pausa, nos trae esta performance digna de destacar. En en un combate en el que comenzó muy bien el japonés <b>Kai Asakura</b>, con un striking de elite, conectando y moviéndose constantemente para evitar ser golpeado y derribado, terminó muy diferente cuando inició el segundo asalto, cuando el americano <b>Tim Elliot</b>, fue capaz de llevar al suelo a su rival, y desde allí conectar una guillotina profunda que obligó a Asakura a tapear, otorgándole a Elliot la victoria por sumisión en el segundo asalto de esta primer pelea estelar de la noche. </p>
                    <h2>Michael Venom Page Derrota por Decisión Unánime a Jared Cannonier</h2>
                    <p>El luchador nacido en Inglaterra <b>Michael Page</b> logra una increíble victoria ante el estadounidense <b>Jared Cannonier</b> que lo coloca en el top 10 de la división de peso medio. En un combate lucido para el inglés, donde se lo vió confiado y seguro de sí mismo como nos tiene habituados, fue capaz de llevar al suelo a su rival en 2 ocasiones, luego de darle unos golpes en la cara que lo derribaron, manteniendo un alto nivel de dominio en los primeros 2 asaltos. Sin embargo en el tercer asalto cambió un poco la historia, con Cannonier siendo capaz de derribar a su rival y de castigarlo en el suelo a golpes, aunque esto no fue suficiente para llevarse la victoria, ya que, por decisión unánime los jueces declararon a Michael Page como ganador.</p>
                    <h2>Carlos Prates Deja KO a Geoff Neal en el Primer Asalto</h2>
                    <p>Tremendo desempeño de <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, que en representanción de su equipo, los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> consiguió una victoria por KO, luego de dar un codazo giratorio que impactó en el parietal de <b>Geoff Neal</b>, dejándolo KO justo cuando estaba por terminar el primer asalto. De esta manera, Carlos Prates se queda con la victoria, con el bono de los $50k por su desempeño, y aparentemente también se ganó el derecho a pelear en el <b>UFC Brasil</b>, que tendrá lugar en octubre y que luego de pedirlo, Dana White le confirmó que le daría una pelea para esa cartelera luego de lo conseguido hoy. </p>
                    <h2>Lerone Murphy Noquea a Aaron Pico</h2>
                    <p>EL luchador inglés <b>Lerone Murphy</b> se lleva la victoria en una de las mejores performances de la noche, al conseguir, al igual que Carlos Prates en la pelea anterior, una victoria proveniente de un codazo giratorio en el primer asalto. Dándole la bienvenida de la peor forma posible a <b>Aaron Pico</b> en la UFC, y logrando defender su invicto y conseguir el bono de los $50k por su desempeño en esta cartelera. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}