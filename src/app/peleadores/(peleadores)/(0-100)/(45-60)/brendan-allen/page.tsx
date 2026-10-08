
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/brendan-allen/brendan_allen.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Brendan Allen',
    description: '',
    openGraph: {
        images: '',
        title: 'Brendan Allen',
        description: '',
        url: 'https://fullmma.org/peleadores/brendan-allen'
    }
}

export default function BrendanAllen () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={27} l={7} d={0} categoria='Peso Medio' nombre='Brendan Allen' apodo='All In' time='2026-10-08' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Brendan Allen?</h2>
                    <p className={styles.peleador__article__text}>Brendan Allen es un peleador de MMA nacido en Estados Unidos, que compite en la división de peso medio de la UFC, siendo a pesar de su juventud, uno de los que más peleas ha tenido dentro del top, siendo muy activo y uno de los luchadores más peligrosos que tienen las 185lbs. </p>
                    <p className={styles.peleador__article__text}>Es un luchador muy entretenido de ver, con el jiu-jitsu brasileño siendo su arma principal, llegando a someter en la misma UFC a rivales de la talla de <b>Paul Craig</b> y <b>Kevin Holland</b>, ganando peleas en las que no era favorito hasta llegar al top 5 de la división. </p>
                    <h2 className={styles.peleador__article__title}>Brendan Allen Récord</h2>
                    <p className={styles.peleador__article__text}>Brendan Allen posee un récord profesional en MMA de 27-7. Con 6 de sus victorias siendo por la vía del nocaut, 14 siendo por la vía de la sumisión y 7 siendo por decisión de los jueces. Mientras que de sus 7 derrotas, 2 fueron por la vía del nocaut, sólo 1 por sumisión y 4 por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Brendan Allen Historia</h2>
                    <p className={styles.peleador__article__text}>Brendan Cody Allen nació el 28 de septiembre de 1995 en la ciudad de Beafourt, en Carolina del Sur, Estados Unidos. Sus padres son originarios de Lousiana, donde se terminaron asentando. Su padre trabajaba en la construcción, siendo el segundo al mando de una empresa, había sido soldado de infantería y boxeaba de joven, cosas que aprendió de su abuelo, el cual esun veterano de la Segunda Guerra Mundial, siendo una gran influencia para Allen. </p>
                    <p className={styles.peleador__article__text}>Jugaba al futbol americano desde niño, y ya desde entonces era fanático de la UFC, viendo las peleas los fines de semana e idolotrando a las primeras estrellas del deporte como <Link href="/leyendas/randy-couture">Randy Couture</Link> y <Link href="/leyendas/chuck-liddell">Chuck Liddell</Link>. </p>
                    <p className={styles.peleador__article__text}>Comenzaría a entrenar jiu-jitsu brasileño a los 13 años, luego de ver una clase a la que fue con su padre, invitado por el amigo de su hermano mayor. Allí se enamoró del deporte y le pidió a su padre que lo dejara participar y le comprara un gi (kimono), a lo cual este accedió con la condición de que se lo tomara en serio, teniendo que prometer que iría al menos 3 veces por semana durante el resto del año. No sólo cumpliría, sino que a partir de este momento nunca dejaría de entrenar. </p>
                    <p className={styles.peleador__article__text}>Aunque fue a la universidad, graduándose con una licenciatura en Justicia Criminal, y trabajó un tiempo con su padre en el negocio familiar de la construcción y las bienes raíces. Brendan Allen tenía claro que quería ser peleador, entrenando y haciendo sparring ya desde adolescente con un joven <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, practicando wrestling y compitiendo de forma amateur. </p>
                    <p className={styles.peleador__article__text}>Finalmente debutaría profesionalmente en las MMA el día 22 de agosto de 2015, con 19 años, enfrentando a su compatriota <b>Zebulon Stroud</b> en peso wélter, obteniendo una victoria por TKO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Volvería a pelear en en enero de 2016, esta vez subiendo de división a peso medio, donde competiría desde entonces, enfrentando a <b>Kory Moegenburg</b>, a quien lograría noquear en el primer asalto nuevamente. El 25 de marzo de ese mismo año sufriría su primera derrota al ser sometido por <b>Trevin Giles</b> en el segundo asalto. Pero cerraría el año con 4 victorias al hilo: sometiendo a <b>Charlie Rader</b> en el primer asalto, en mayo; sometiendo a <b>Clovis Hancock</b> en el segundo asalto, en julio; sometiendo a <b>Matt Jones</b> en el primer asalto, en septimebre; y finalmente, sometiendo a <b>Sidney Wheeler</b> en el segundo asalto, en diciembre, para ser campeón de peso mediano de FV. </p>
                    <p className={styles.peleador__article__text}>Como puede apreciarse, desde el comienzo de su carrera, Allen ha sido un peleador sumamente activo, peleando con regularidad, lo cual sería algo que se matendría a lo largo de su carrera. </p>
                    <p className={styles.peleador__article__text}>En 2017 firmaría con la promotora <b>LFA</b>, teniendo su primer combate el 10 de febrero ante <b>Jon Kirk</b>, noqueándolo en el primer asalto. El 23 de junio volvería a subirse al octágono, esta vez para pelear por título vacante de la división ante el hoy peleador de la UFC <b>Eryk Anders</b>, cayendo derrotado por decisión unánime. Aunque se recuperaría rápido de aquella derrota apenas unos meses después, obteniendo una victoria por sumisión ante <b>Chris Harris</b> en agosto de ese año. </p>
                    <p className={styles.peleador__article__text}>Iniciaría el 2018 peleando por el cinturón nuevamente el 26 de enero, esta vez contra un luchador que se volvería importante para la UFC, como lo es el estadounidense de origen mexicano <b>Anthony Hernandez</b>, contra quien lamentablemente para él caería derrotado por decisión unánime. Sin embargo, sería capaz de recuperarse de esa derrota al primero noquear a <b>Larry Crowe</b> en el primer asalto, y luego al ganar el cinturón vacante, después de someter en el tercer asalto a <b>Tim Hiley</b>. </p>
                    <p className={styles.peleador__article__text}>El 22 de febrero de 2019 defendería su cinturón al vencer a <b>Moses Murrietta</b> por decisión unánime. </p>
                    <h3 className={styles.peleador__article__title}>Brendan Allen Dana White&apos;s Contender Series</h3>
                    <p className={styles.peleador__article__text}>Ya con un récord de 11-3, 10 finalizaciones, y un cinturón en su haber, a Brendan Allen se le presentería la oportunidad de su vida al competir en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana Whites Contender Series</Link>, donde en caso de ganar de forma contundente y convencer a <b>Dana White</b>, se ganaría un contrato con la UFC. En aquella ocasión, peleó el 16 de julio de 2019 ante el canadiense <b>Aaron Jeffery</b>, a quien lograría someter en el primer asalto en apenas 3 minutos y medio. De esta forma, ganaría el contrato para pelear en la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.peleador__article__title}>Brendan Allen UFC</h2>
                    <p className={styles.peleador__article__text}>Debutaría en la UFC el día 18 de octubre de 2019 ante el también siempre activo <b>Kevin Holland</b>, sometiéndolo en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>En 2020, pese a la pandemia, tendría 3 combates: con el primero siendo ante el inglés <b>Tom Breese</b> el 29 de febrero, noqueándolo en el primer asalto del combate; el segundo llegaría el 27 de junio ante <b>Kyle Daukaus</b>, a quien vencería por decisión unánime; y el último sería el 14 de noviembre ante el futuro campeón <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, contra quien caería duramente derrotado, sufriendo el primer nocaut de su carrera en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>En 2021 volvería a tener 3 combates: el primero sería el 24 de abril ante <b>Karl Roberson</b>, a quien vencería por sumisión en el primer asalto; el segundo ante <b>Punahele Soriano</b>, el 24 de junio, venciendo por decisión unánime; y el último sería el 4 de diciembre ante <b>Chris Curtis</b>, contra quien lamentablemente volvería a caer derrotado por nocaut, otra vez en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>El 2022 sería un año bastante mejor para nuestro protagonista, peleando otra vez en 3 oportunidades: con su primer combate siendo su debut en peso semipesado en febrero, ante el estadounidense <b>Sam Alvey</b>, a quien sometería en el primer asalto; volvería a peso medio para su siguiente pelea, enfrentando al australiano <b>Jacob Malkoun</b>, a quien derrotaría por decisión unánime; y por último enfrentaría al polaco <b>Krzysztof Jotko</b>, a quien sometería en el primer asalto, ganando además el primer bono de su carrera a la Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='H2vBIoRvCTs' />
                    <p className={styles.peleador__article__text}>El 2023 sería aún mejor para él, otra vez con 3 combates: iniciando el año el 25 de febrero, protagonizando su primer cartelera estelar para enfrentar al brasileño <b>André Muniz</b>, sometiendo en el tercer asalto y ganando nuevamente el bono a la Actuación de la Noche; el 24 de junio se enfrentaría a otro brasileño como lo es <b>Bruno Silva</b>, contra quien obtendría otra victoria por sumisión, esta vez en el primer asalto; y por último, volvería a estelarizar una cartelera al enfrentar al histórico luchador escocés <b>Paul Craig</b>, quien pese a ser un experto en BJJ, fue sometido por nuestro protagonista en el tercer asalto, ganando el tercer bono de su carrera por desempeño. </p>
                    <YouTubeEmbed videoid='aMn5GUIOhkU' />
                    <p className={styles.peleador__article__text}>El 6 de abril de 2024 protagonizaría otra vez una cartelera estelar, esta vez una revancha ante <b>Chris Curtis</b>, de quien se lograría vengar luego de derrotarlo por decisión dividida, alcanzando su séptima victoria consecutiva. </p>
                    <p className={styles.peleador__article__text}>Lamentablemente su racha de positiva de victorias se vería cortada, al enfrentar el 28 de septiembre de 2024 en París, Francia, al francés <b>Nassourdine Imavov</b>, contra quien caería derrotado por decisión unánime. Por si fuera poco, unos meses después, el 22 de febrero de 2025, enfrentando en una revancha a <b>Anthony Hernandez</b>, volvió a caer derrotado por decisión unánime, siendo incapaz de vengar su derrota. </p>
                    <p className={styles.peleador__article__text}>Aunque sufrió 2 derrotas al hilo, Allen sería capaz de reponerse y de gran manera, subiéndose nuevamente al octágono el 19 de julio de ese mismo año en su nata Luisiana, en el <Link href='/eventos/ufc318'>UFC 318</Link>, para enfrentar al excontendiente al título italiano <b>Marvin Vettori</b>, a quien derrotaría por decisión unánime, ganando además un bono por desempeño. </p>
                    <YouTubeEmbed videoid='YfUVfpEv1Dg' />
                    <p className={styles.peleador__article__text}>El 18 de octubre de ese 2025 pelearía otra vez, siendo nuevamente la cara del evento, al estelarizar el <Link href='/eventos/fight-night-deridder-allen'>UFC Fight Night: de Ridder vs Allen</Link>, donde enfrentaría al holandés <b>Reiner de Ridder</b>, venciéndolo luego de darle una paliza por TKO al finalizar el cuarto asalto, debido a que le peleador europeo tiró la toalla, viéndose incapaz de continuar el combate. </p>
                    <p className={styles.peleador__article__text}>Al 2026 lo tomaría con más calma que de costumbre, habiendo entrado al top 5 luego de su última victoria, esperaría recién 8 meses desde su último combate para volver a pelear, enfrentando al estadounidense <b>Edmen Shahbazyan</b> el día 6 de junio, a quien derrotaría por decisión unánime, en un peleón donde ganaría el bono a la Pelea de la Noche. </p>
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}