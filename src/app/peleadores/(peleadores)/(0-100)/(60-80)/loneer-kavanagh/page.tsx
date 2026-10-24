
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/60-80/loneer-kavanagh/loneer_kavanagh.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Loneer Kavanagh',
    description: '',
    openGraph: {
        images: '',
        title: 'Loneer Kavanagh',
        description: '',
        url: 'https://fullmma.org/peleadores/loneer-kavanagh'
    }
}

export default function LoneerKavanagh () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={11} l={2} d={0} categoria='Peso Mosca' nombre='Loneer Kavanagh' apodo={null} time='2026-10-24' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Loneer Kavanagh?</h2>
                    <p className={styles.peleador__article__text}>Lone&apos;er Kavanagh es un luchador inglés de MMA que compite en la división de peso mosca de la UFC. Habiendo nacido en el 99, es de los luchadores más prometedores de la división, estando ya entre los 10 mejores del mundo y habiendo vencido a leyendas de la talla de <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>. </p>
                    <p className={styles.peleador__article__text}>Es de origen inglés con raíces irlandesas, siendo cinturón negro en kickboxing, disciplina que definió su estilo y en la que fue campeón mundial 5 veces en K-1. A pesar de ser principalmente un striker, también es competente en el suelo, siendo cinturón púrpura en jiu-jitsu brasileño. </p>
                    <h2 className={styles.peleador__article__title}>Loneer Kavanagh Récord</h2>
                    <p className={styles.peleador__article__text}>Loneer Kavanagh posee un récord profesional de MMA de 11-2. Con 5 de sus victorias proviniendo por la vía del nocaut, 1 siendo por sumisión y 5 siendo por decisión de los jueces. Mientras que de sus 2 derrotas, 1 fue por la vía del nocaut y 1 por la vía de la sumisión. </p>
                    <h2 className={styles.peleador__article__title}>Loneer Kavanagh Historia</h2>
                    <p className={styles.peleador__article__text}>Lone&apos;er Kavanagh nació el 9 de junio de 1999 en Londres, Inglaterra. Siendo hijo de un padre irlandés y de una madre china (de donde proviene su nombre, Lone&apos;er, que significa &quot;Hijo de Dragón&quot; o &quot;Pequeño Dragón&quot;). </p>
                    <p className={styles.peleador__article__text}>Ya desde muy pequeño sufrió un golpe muy duro, cuando a los 6 años, mientras él estaba en clase de gimnasia, fue llamado por su madre para decirle que su padre había sufrido un ataque al corazón, del cual terminó falleciendo en el hospital. Debido a esto, el pequeño Loneer creció sin figura paterna, con su madre teniendo que ser de padre y madre al mismo tiempo, siendo además por su cultura, una señora estricta y asustadora que le inculcó disciplina desde niño. </p>
                    <p className={styles.peleador__article__text}>Las artes marciales formaron parte clave de su desarrollo desde muy pequeño, de hecho, fue en este ambiente donde sus padres se conocieron, por lo que ambos eran practicantes que inculcaron a su hijo el amor por estas. De hecho, aunque a Kavanagh le daba miedo empezar, siempre iba al gimnasio a jugar mientras sus padres entrenaban, siendo anotado por su madre a taekwondo (y posteriormente a kickboxing) cuando tenía 8 años. </p>
                    <p className={styles.peleador__article__text}>Desde entonces entrenaría diferentes tipos de artes marciales, ganando el oro en un torneo internacional en Corea a los 10 años, y compitió a los 14 años en K-1 contra adultos, llegando a ser campeón mundial hasta en 5 ocasiones. Además, las MMA, el kickboxing, las artes marciales en general le permitieron tener las figuras masculinas de referencia que le faltaron en casa. </p>
                    <p className={styles.peleador__article__text}>Haría su debut profesional en MMA el día 2 de marzo de 2019 ante el luchador neerlandés <b>Glody Matusiwa</b>, a quien vencería por nocaut en el segundo asalto. Compitiendo a fines de ese mismo año el 14 de diciembre ante su compatriota <b>Danny Missin</b>, a quien sería capaz de someter en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Luego de esto, tendría un periodo de más de 2 años de inactividad en los que se le programaría una pelea y esta por una u otra razón se cancelarían. Debido a esto recién volvería a pelear el 18 de marzo de 2022 enfrentando al galés <b>Ryan Morgan</b>, consiguiendo una victoria por nocaut en el tercer asalto. Unos meses después, volvería a competir el 22 de julio de 2022 ante el español <b>Ander Sanchez</b>, a quien vencería por decisión unánime. </p>
                    <YouTubeEmbed videoid='LAVfSz7fmWs' />
                    <p className={styles.peleador__article__text}>El 17 de marzo de 2023 volvería a competir para enfrentarse al luchador italiano <b>Davide Scarano</b>, obteniendo una gran victoria ante su rival al noquearlo en el tercer asalto. </p>
                    <p className={styles.peleador__article__text}>El 30 de marzo de 2024 se enfrentaría al alemán <b>Shawn Marcos da Silva</b>, contra quien luego de 3 asaltos de pelea, se llevaría la victoria por decisión unánime. </p>
                    <h3 className={styles.peleador__article__title}>Loneer Kavanagh Dana White Contender Series</h3>
                    <p className={styles.peleador__article__text}>Con un récord profesional invicto de 6-0, con 4 de sus victorias siendo por finalización, a nuestro protagonista se le presentaría la oportunidad de su vida, al competir en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, donde en caso de impresionar al jefe de la UFC <b>Dana White</b>, se ganaría un contrato con la compañía. Para eso debería enfrentar al luchador vietnamita <b>An Tuan Ho</b> el 13 de agosto de 2024, contra quien conseguiría una impresionante victoria por KO en el primer asalto de la pelea, ganándose un contrato con la UFC. </p>
                    <h2 className={styles.peleador__article__title}>Loneer Kavanagh UFC</h2>
                    <p className={styles.peleador__article__text}>De esta forma, haría su debut en la compañía de artes marciales mixtas más grande del mundo, el día 23 de noviembre de ese mismo 2024, en Macao China, representando al país por parte materna, enfrentando al luchador peruano <b>José Ochoa</b>, consiguiendo una victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En 2025 tendría otros 2 combates en la compañía, con el primero siendo el 22 de marzo de ante el brasileño <b>Felipe dos Santos</b>, en Londrés, venciendo por decisión unánime y extendiendo su récord a 9-0. Y el último sería en Shanghái, China, en el <Link href='/eventos/fight-night-walker-mingyang'>UFC Fight Night: Walker vs Mingyang</Link>, enfrentando al estadounidense <b>Charles Johnson</b>, contra quien sorprendentemente perdería de forma dolorosa por KO en el segundo asalto, cayendo ante un rival que a priori era inferior, y perdiendo su invicto aquella noche. </p>
                    <p className={styles.peleador__article__text}>Pese a esto, sería capaz de recuperarse rápidamente, aceptando de corto aviso reemplazar al kazajo <b>Asu Almabayev</b>, para enfrentar al mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link> en el <Link href='/eventos/fight-night-moreno-kavanagh'>UFC México: Moreno vs Kavanagh</Link>, el día 28 de febrero de 2026, encabezando en la pelea estelar por primera vez en su carrera. Aquella noche sería capaz de dominar completamente al histórico campeón mexicano, otorgándonos un espectáculo y una pelea para el recuerdo, ganando por esta actuación el primer bono de $100.000 por desempeño de su carrera. </p>
                    <YouTubeEmbed videoid='TZys_WdWGko' />
                    <p className={styles.peleador__article__text}>Lamentablemente, no sería capaz de hilar una racha de victorias a partir de aquella ante Moreno, ya que en su siguiente combate ante el estadounidense <b>Brandon Royval</b>, con fecha para el 11 de julio de 2026 en el <Link href='/eventos/ufc329'>UFC 329</Link>, caería derrotado en lo que sería otro espectáculo de combate, por sumisión en el último asalto de la pelea. A pesar de esta derrota, ganaría otro bono de la UFC, esta vez a la Pelea de la Noche. </p>
                    <YouTubeEmbed videoid='mxBjN5rK8Gs' />
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}