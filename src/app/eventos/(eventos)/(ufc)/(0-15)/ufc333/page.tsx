import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc333.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 333: ¡Alexander Volkanovski vs Movsar Evloev! ¡Petr Yan vs Merab Dvalishvili!',
    description: "Noche de UFC en Emiratos Árabes, con el campeón de peso pluma Alexander Volkanovski defendiendo su cinturón ante Movsar Evloev, y el campeón de peso gallo Petr Yan enfrentando a Merab Dvalishvili en una revancha.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc333.1e9faebb.webp&w=828&q=65',
        title: 'UFC 333: ¡Alexander Volkanovski vs Movsar Evloev! ¡Petr Yan vs Merab Dvalishvili!',
        description: "Noche de UFC en Emiratos Árabes, con el campeón de peso pluma Alexander Volkanovski defendiendo su cinturón ante Movsar Evloev, y el campeón de peso gallo Petr Yan enfrentando a Merab Dvalishvili en una revancha.",
        url: 'https://fullmma.org/eventos/ufc333'
    }
}

export default function UFC333 () {
    return(
        <main>
            <ArticleHero title="UFC 333: ¡Alexander Volkanovski Noquea a Movsar Evloev en el Segundo Asalto y Sigue Siendo Campeón de la UFC! ¡Petr Yan Derrota a Merab Dvalishvili en La Pelea de la Noche y Sigue Siendo Campeón!" subtitle='¡Alexander Volkov Derrota a Rizvan Kuniev por Decisión Unánime! ¡Lone&apos;er Kavanagh Noquea a Ramazan Temirov en el Primer Asalto!' image={hero} date='2026-10-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de UFC el que tenemos el día de hoy, siendo uno de los mejores del año con 2 peleas títulares. Siendo el evento estelar la pelea entre el GOAT de la división de peso pluma, el campeón australiano <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, quien va a estar defendiendo su cinturón ante el ruso <Link href='/peleadores/movsar-evloev'>Movsar Evloev</Link>. Y con la pelea coestelar siendo otro espectáculo, con el recientemente coronado campeón de peso gallo, el ruso <Link href='/peleadores/petr-yan'>Petr Yan</Link>, defendiendo en una revancha y cerrando la trilogía ante el georgiano excampeón <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>.</p>
                    <p>Por si fuera poco, en la misma cartelera estelar tendremos a la joven estrella inglesa <Link href='/peleadores/loneer-kavanagh'>Loneer Kavanagh</Link>, quien se enfrentará al #10 de la división de peso mosca, el luchador de Uzbekistán <b>Ramazan Temirov</b>. Finalmente tendremos un combate que puede definir el futuro de la división de peso pesado, con el veterano ruso <Link href='/peleadores/alexander-volkov'>Alexander Volkov</Link> enfrentando a su compatriota <b>Rizvan Kuniev</b>.</p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Iasmin Lucindo Derrota a Nicolle Caliari Por Decisión Unánime</h2>
                    <p>Gran primer combate para iniciar la cartelera, con la brasileña <b>Iasmin Lucindo</b> siendo quien se quedaría con la victoria, después de hacer un excelente primer asalto en el que golpeó a su rival haciendo mucho daño, y conectando un codazo giratorio que le haría un corte en el ojo a su oponente, lo que terminaría influenciando el resto de la pelea, ya que <b>Nicolle Caliari</b> tendría que pelear con un corte y un chorro de sangre corriendo por su rostro. El combate terminaría con Iasmin Lucindo ganando por decisión unánime de los jueces. </p>
                    <h2>Kody Steele Noquea a Noah Gugnon en el Primer Asalto</h2>
                    <p>Brutal victoria del estadounidense <b>Kody Steele</b>, quien en una pelea que aunque corta fue impresionante, fue capaz de conectar una combinación de golpes letal para dejar noqueado al luchador francés <b>Noah Gugnon</b> en el primer asalto. </p>
                    <h2>Daniel Santos Derrota a Bolaji Oki Por Decisión Unánime</h2>
                    <p>Grandísima pelea la que acabamos de presenciar, entre 2 luchadores que de alto nivel en peso pluma que se goleparon desde todos los ángulos posibles durante los 3 asaltos que duró el combate. Quien se terminaría llevando la victoria sería el brasileño <b>Daniel Santos</b>, quien con codazos giratorios, rodillazos al cuerpo y a la cabeza de su rival, y siendo incluso capaz de conectar un derribo, convencería a los jueces de que la victoria era suya, especialmente después de un segundo y tercer asalto muy buenos por su parte. </p>
                    <h2>Abubakar Vagaev Derrota a Jacob Malkoun por Decisión Unánime</h2>
                    <p>Buena pelea la que acabamos de presenciar, siendo la más cerrada hasta el momento, donde el australiano <b>Jacob Malkoun</b> se impondría en el primer asalto, mostrando una gran capacidad para defenderse de los derribos y lucha de su rival, además de una gran capacidad para castigar con el striking a su oponente. Sin embargo, el ruso <b>Abubakar Vagaev</b> fue de menos a más, dominando progresivamente al australiano, robándose los últimos asaltos con derribos y golpes que dañaban a Malkoun para finalmente ganar por decisión unánime. </p>
                    <h2>Colby Thicknesse Derrota a Asaf Chopurov por Decisión Dividida</h2>
                    <p>Espectacular manera de acabar estas primeras peleas preliminares, con un combate espectacular de principio a fin, siendo bastante cerrado. Con el primer asalto siendo claramente dominado por el peleador ruso <b>Asaf Chopurov</b>, quien con un estilo incómodo de golpear contra la reja, se llevó la ventaja con un dominio notable. Sin embargo, durante el segundo asalto el australiano <b>Colby Thicknesse</b> se recuperaría totalmente, sacando gran ventaja con los golpes significantes que dañaron en gran manera a su oponente. Finalmente, el último asalto fue el de la discordia y el más cerrado de los 3, pero se terminaría imponiendo el australiano que por decisión dividida de 2 de los 3 jueces, se llevaría la victoria, alcanzando su tercera victoria consecutiva desde aquella derrota ante <Link href='/peleadores/aleksandre-topuria'>Aleksandre Topuria</Link> en febrero de 2025. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Grant Dawson Derrota a Nurullo Aliev por Decisión Unánime</h2>
                    <p>Impresionante pelea la que acabamos de presenciar. Con un primer asalto que fue clave para definir el resto del combate, siendo el de Yayikistán <b>Nurullo Aliev</b> el mejor, estando a punto de noquear a Dawson: sin embargo, cuando lo tenía tirado en el suelo y sólo necesitaba rematar para llevarse una victoria por nocaut, golpeó a su rival atrás de la cabeza en 3 ocasiones, el árbitro se percató de esto, frenó la pelea y lo castigó con la quita de un punto. En estos momentos <b>Grant Dawson</b> tuvo tiempo suficiente para recuperarse y dar vuelta el combate, siendo muy superior en el segundo y tercer asalto, contando además con un punto de ventaja por sanción, se llevaría cómodamente la victoria por decisión unánime. </p>
                    <h2>Abus Magomedov Somete a Cam Rowston en el Primer Asalto</h2>
                    <p>Brutal victoria por parte del alemán <b>Abus Magomedov</b>, quien luego de ser derribado por el peleador australiano <b>Cam Rowston</b>, fue capaz de conectar en el momento una guillotina que estuvo bien cerrada, imposible de escapar por más que intentara, consiguiendo de esta manera la primer sumisión de la noche y ganar por sumisión en el primer asalto. </p>
                    <h2>Abdul Rakhman Rakhyaev Noquea a Nikita Krylov en el Primer Asalto</h2>
                    <p>Muy buena victoria por parte del luchador turco <b>Abdul Rakhman Rakhyaev</b>, quien aplastó al ruso <b>Nikita Krylov</b>, a quien cuando lo tenía conectado con una llave de bjj, transicionó para conectarle un rodillazo en la cabeza, rematándolo a golpes para que el árbitro los separé, y otorgándole de esta manera la victoria por TKO en el primer asalto. </p>
                    <h2>Dominick Reyes Noquea a Azamat Murzakanov en el Primer Asalto</h2>
                    <p>Impresionante victoria por la vía del nocaut de <b>Dominick Reyes</b>, quien fue capaz de conectar una patada a la cabeza del ruso <b>Azamat Murzakanov</b>, que lo dejó grogui, para proseguir con una combinación de golpes que lo tumbaría al suelo y que eventualmente llevaría al árbitro a parar el combate, consiguiendo una victoria por TKO en el primer asalto del combate. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Aaron Pico Noquea a Losene Keita en el Primer Asalto</h2>
                    <p>Tremenda manera de iniciar esta cartelera estelar, con el luchador estadounidense <b>Aaron Pico</b> obteniendo una gran victoria por la vía del nocaut ante el belga <b>Losene Keita</b>, a quien con un recto de derecha fue capaz de tirarlo al piso. De esta forma, el estadounidense mantiene su lugar en los rankings y consigue su segunda victoria consecutiva en la UFC. </p>
                    <h2>Alexander Volkov Derrota a Rizvan Kuniev por Decisión Unánime</h2>
                    <p>Gran pelea por parte del ruso <Link href='/peleadores/alexander-volkov'>Alexander Volkov</Link>, quien en un combate cerrado fue ligeramente mejor que su contricante, utilizando todas sus fortalezas, su gran striking, sus buenas patadas, su altura y alcance para mantener la distancia, siendo capaz de puntuar y cerrar el combate de gran manera, al derribar a su oponente, tomarle la espalda e intentar un mataleón que, aunque no prospero, lo tuvo en una posición dominante durante gran parte del tercer asalto. De esta forma, todo invitaría a pensar que lo que queda por delante para Volkov es una pelea por el título ante el ganador de <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> y <Link href='/peleadores/josh-hokit'>Josh Hokit</Link>. </p>
                    <h2>Lone&apos;er Kavanagh Noquea a Ramazan Temirov en el Primer Asalto</h2>
                    <p>Brutal manera de ganar este combate por parte del inglés <Link href='/peleadores/loneer-kavanagh'>Lone&apos;er Kavanagh</Link>, quien en un combate que inició con ambos estudiándose mutuamente, terminó con el uzbeko <b>Ramazan Temirov</b> buscando una combinación loca de golpes, que acabó con el inglés encontrando un upper de izquierda que lo dañaría gravemente, rematando con una combinación de golpes extras que finalmente llevaría al árbitro a parar el combate, consiguiendo una victoria por TKO en el primer asalto. </p>
                    <h2>¡Petr Yan Derrota a Merab Dvalishvili en La Pelea de la Noche y Sigue Siendo Campeón!</h2>
                    <p>Espectacular combate el que nos regalaron estas 2 leyendas de la división de peso gallo, siendo esta la pelea de la noche sin dudas y quizás la pelea del año. Iniciando con un <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> mostrando un alto nivel de intensidad en el combate, tal y como nos tiene acostumbrados, golpeando desde todos los ángulos a su oponente, y derribándolo en varias ocasiones, siguiendo este guión de pelea durante los primeros 2 asaltos, de forma que el campeón estaba abrumado y no encontraba respuesta. </p>
                    <p>Sin embargo, a partir del tercer asalto algo cambió, con un <Link href='/peleadores/petr-yan'>Petr Yan</Link> siendo capaz de defender los derribos de su rival con más frecuencia, y encontrando una combinación de golpes letales que claramente dañaban a un Merab que era incapaz de esconder el dolor. De esta forma, fue de menos a más, con su mejor cara mostrándola en el quinto asalto, cuando la pelea estaba igualada, conectando muchos más golpes que el georgiano y haciendo mucho daño. </p>
                    <p>Finalmente Petr Yan retiene el cinturón, ganando por decisión unánime. Y esta a la espera de su próximo rival, que pueden ser tanto el luchador chino <b>Song Yadong</b>, como el estadounidense <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, contra quien perdió en su primer encuentro, por lo que buscaría vengar su derrota. </p>
                    <h2>¡Alexander Volkanovski Noquea a Movsar Evloev en el Segundo Asalto y Sigue Siendo Campeón de la UFC!</h2>
                    <p>Impresionante combate el de hoy, donde se agiganta cada vez más la leyenda del campeón australiano <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, quien hoy se enfrentó a una de las mayores amenazas que tenía la división como lo es <Link href='/peleadores/movsar-evloev'>Movsar Evloev</Link>, que estaba #1 en los rankings, que tenía un récord invicto de 20-0, con 10 victorias consecutivas en la UFC, y hoy no sólo le ganó, sino que lo hizo ver fácil. </p>
                    <p>Habiendo un primer asalto donde el campeón mantenía la distancia, golpeaba con jabs al ruso y evitaba entrar en intercambios locos. Donde a pesar de que fue derribado en alguna ocasión, se levantó con una rápidez que impidió a su rival hacer algo con ese derribo. Llegando al final del segundo asalto, donde en una combinación de golpes Volkanovski fue capaz de conectar 2 ganchos durísimos a la cabeza de su rival, que sufrió el poder australiano, siendo derribado al suelo, y siendo castigado por Alex, quedando sin otra alternativa que ponerse en posición fetal a la espera de que el árbitro frene el combate. </p>
                    <p>De esta manera Volkanovski consigue su segunda defensa consecutiva desde que recuperó el cinturón al vencer al brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, y extiende su récord con 9 victorias por peleas del cinturón, todo esto con 38 años. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}