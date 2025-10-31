import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/joaquin-buckley/joaquin_buckley.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Joaquin Buckley',
    description: '',
    openGraph: {
        title: 'Joaquin Buckley',
        description: '',
        url: 'https://fullmma.org/peleadores/joaquin-buckley'
    }
}

export default function JoaquinBuckley () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={21} l={7} d={0} categoria='Peso Wélter' nombre='Joaquin Buckley' apodo='NEW MANSA' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Joaquin Buckley MMA</h2>
                    <p className={styles.peleador__article__text}>Joaquin Buckley es un peleador estadounidense de MMA que compite en la división de peso wélter de la UFC desde el 8 de agosto de 2020, cuando haría su debut ante <b>Kevin Holland</b> en el <b>UFC Fight Night: Lewis vs. Oleinik</b>. </p>
                    <p className={styles.peleador__article__text}>Inició su paso por la UFC compitiendo en la división de peso medio, sin embargo, luego de unas cuantas peleas en las que acumuló un récord de 5-4, notó que le estaba costando competir y dar el nivel en una categoría de peso tan pesada para él, por lo que optó por bajar a la división de peso wélter, en donde vimos su mejor versión hasta el momento. Como peleador es bastante sólido, y ha gando cierta notoriedad con los highlights que ha sido capaz de lograr, con victorias por nocaut que impulsaron el reconcimiento recibido por este peleador. </p>
                    <h2 className={styles.peleador__article__title}>Joaquin Buckley Récord</h2>
                    <p className={styles.peleador__article__text}>Joaquin Buckley posee un récord profesional de MMA de 21-7. Con 15 de sus victorias siendo por la vía del nocaut, y sólo 6 siendo por la vía de la decisión. Mientras que de sus 6 derrotas, 4 fueron por la vía del nocaut, y 3 por la vía de la decisión. </p>
                    <h2 className={styles.peleador__article__title}>Joaquin Buckley Historia</h2>
                    <p className={styles.peleador__article__text}>Joaquín Yuconri Buckley nació el día 27 de abril de 1994 en la ciudad de San Luis, ubicada en el Estado de los Estados Unidos, Misuri. Creció con un padre ausente, viviendo junto a su madre en la casa de su abuela durante la mayor parte de su juventud. Por si fuera poco el no contar con la presencia de su padre, su madre falleció cuando Buckley estaba en sexto grado, debido a problemas del corazón. Crecería practicando lucha en la escuela e interesándose por las artes marciales desde muy joven, de las que terminaría haciendo una profesión. </p>
                    <p className={styles.peleador__article__text}>De esta manera haría su debut profesional en las MMA a los 20 años, debutando el día 13 de septiembre de 2014 ante su compatriota <b>Wesley Sullivan</b> en la promotora <b>Shamrock FC</b>, consiguiendo una victoria por TKO en el primer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Sería en esta misma promotora donde Joaquin tendría sus primeros 5 combates profesionales, obteniendo una victoria en cada uno de ellos entre 2014 y 2015, con 4 de estas siendo por la vía del nocaut y sólo 1 siendo por decisión. </p>
                    <p className={styles.peleador__article__text}>Abandonaría la compañía para pelear en la segunda mayor promotora de MMA del mundo, <b>Bellator</b>, en donde debutaría el día 24 de junio de 2016, obteniendo una victoria por KO en el segundo asalto ante <b>Chris Heatherly</b>. El 10 de noviembre de ese mismo año tendría su segunda pelea ante el israelí <b>Jackie Gosh</b>, contra quien recibiría su primer derrota profesional, cayendo por TKO en el segundo asalto, en una pelea organizada en el país de su contrincante. </p>
                    <p className={styles.peleador__article__text}>De igual manera sería capaz de ganar sus siguientes 2 combates en el año 2017, con la primera de estas victorias siendo el 31 de marzo ante <b>Justin Patterson</b>, por decisión unánime, y con la segunda siendo el 20 de octubre ante el brasileño <b>Vinicius de Jesus</b> por decisión dividida. Aunque terminaría por perder su último enfrentamiento en la compañía, cayendo derrotado por decisión unánime ante <b>Logan Storley</b>, el 13 de abril de 2018. </p>
                    <p className={styles.peleador__article__text}>Su salida de Bellator se terminaría por convertir en una oportunidad, dado que firmaría con la promotora <b>LFA</b>, de quienes cuyas peleas pueden verse en el <b>UFC Fight Pass</b>. Haciendo su debut en peso medio, para enfrentar primeramente al su compatriota <b>Chris Harris</b>, el día 13 de septiembre de 2019, obteniendo una victoria por TKO en el primer asalto. Su segunda y última pelea en esta promotora, sería el 31 de julio de 2020, enfrentando en una revancha al peleador que le ocasionó su primer derrota, el israelí <b>Jackie Gosh</b>, a quien esta vez lograría vencer por TKO en el segundo asalto, vengando aquella primer derrota suffrida en 2016. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ownPT_fAjKY?si=y3IsNztXYp8FtObd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Joaquin Buckley UFC</h2>
                    <p className={styles.peleador__article__text}>De esta manera, luego de hilar 2 impresionantes victorias por nocaut en LFA, Joaquin Buckley firmaría por la compañía de artes marciales mixtas más grande del mundo. Haciendo su debut oficial en la UFC el día 8 de agosto de 2020, enfrentando para eso al siempre activo y peligroso luchador, <b>Kevin Holland</b>, con quien tendría una pelea que se extendería hasta los 3 asaltos, cayendo derrotado finalmente por TKO en el último asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Pese a la primer derrota en su debut, Joaquin conseguiría el que sin dudas es el momento más destacado, al menos hasta ahora, de su carrera, cuando enfrentando al luchador estadounidense <b>Impa Kasanganay</b>, el día 11 de octubre de 2020, le proporcionaría un KO con una patada trasera giratoria, luego de que su rival le estuviera sugetando la otra pierna. El KO es ya de por sí hermoso, pero se vuelve aún más impresionante si vemos como su rival queda parado unos segundos hasta caer finalmente KO producto del golpe. Obviamente, por este nocaut, nuestro protagonista ganaría el primer bono de su carrera, a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Tx51v4QU7no?si=xsJhmDxAPLGu0KCv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 21 de noviembre de ese mismo año, tendría la cuarta pelea del 2020, enfrentando para ello al estadounidense <b>Jordan Wright</b> en el UFC 255, consiguiendo otra impresionante victoria por KO en el segundo asalto, que le haría merecedor de otro bono por desempeño. </p>
                    <p className={styles.peleador__article__text}>Perdería su siguiente combate en enero de 2021, ante el italiano <b>Alessio Di Chirico</b>, que le conectaría una patada en la cabeza que lo dejaría KO. Pero terminaría por hilar una racha de 3 victorias consecutivas, después de su derrota, con 2 de ellas siendo por nocaut, valiéndole para ganar los bonos por desempeño, y con 1 siendo por decisión. </p>
                    <p className={styles.peleador__article__text}>Tendría una pelea el 3 de septiembre de 2022 ante el daguestaní <b>Nassourdine Imavov</b>, contra quien caería derrotado por decisión luego de finalizados los 3 asaltos. Para colmo, volvería a pelear el 10 de diciembre de ese mismo año, unos pocos meses después, enfrentando al estadounidense <b>Chris Curtis</b>, contra quien caería derrotado por KO en el segundo asalto. </p>
                    <h3>Joaquin Buckley en Peso Wélter de UFC</h3>
                    <p className={styles.peleador__article__text}>Ya habiendo sufrido suficientes derrotas en peso mediano, en donde luego de 9 combates había acumulado un récord de 5-4, nuestro protagonista tomaría la decisión de volver a competir en peso wélter, que nos traería a una versión mejorada de Buckley, al menos en cuanto a resultados. </p>
                    <p className={styles.peleador__article__text}>El 20 de mayo de 2023 volvería a subirse al octágono para competir en esta división, enfrentando para ello al portugués <b>André Fialho</b>, a quien lograría vencer por TKO en el segundo asalto luego de conectar una buena patada a la cabeza. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/fBuAggY_YZA?si=gVaG94AbdiG26qE0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 7 de octubre de ese mismo año enfrentaría a Alex Morono, consiguiendo una victoria por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>El 2024 se convertiría en un año muy activo para nuestro protagonista, quien tendría un total de 4 combates a lo largo del año. Siendo el primero de estos el enfrentamiento ante el brasileño <b>Vicente Luque</b>, a quien sería capaz de vencer por TKO en el segundo asalto el día 30 de marzo. </p>
                    <p className={styles.peleador__article__text}>Posterior a esto, le seguiría su combate en el <Link href='/covertura-ufc/fight-night-lewis-nascimento'>UFC on ESPN: Lewis vs. Nascimento</Link>, con fecha para el 11 de mayo, donde se enfrentaría al luchador de Uzbekistán <b>Nursulton Ruziboev</b>, a quien sería capaz de vencer por decisión unánime. A esta victoria le seguiría su pelea en el <Link href='/covertura-ufc/ufc307'>UFC 307</Link>, enfrentando al veterano <b>Stephen Thompson</b>, el día 9 de octubre, cuando conseguiría una gran victoria por KO en el tercer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>Finalmente, la última pelea del año y la que quizás sea la más importante de su carrera, lo tiene protagonizando su primera cartelera, enfrentando al multimples veces retador del título, y excampeón interino de peso wélter, <Link href='/peleadores/colby-covington'>Colby Covington</Link>, con quien encabezaría la última cartelera del año en el <b>UFC on ESPN: Covington vs. Buckley</b>, el 14 de diciembre de 2024. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}