import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/waldo-cortes-acosta/waldo_cortes_acosta.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Waldo Cortes Acosta',
    description: '',
    openGraph: {
        images: '',
        title: 'Waldo Cortes Acosta',
        description: '',
        url: 'https://fullmma.org/peleadores/waldo-cortes-acosta'
    }
}

export default function WaldoCortesAcosta () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={17} l={2} d={0} categoria='Peso Pesado' nombre='Waldo Cortes Acosta' apodo={null} time='2026-02-16' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Waldo Cortes Acosta MMA</h2>
                    <p className={styles.peleador__article__text}>Waldo Cortés Acosta es un peleador dominicano de peso pesado en la UFC. Ha tenido un ascenso meteórico en la compañía, siendo de los peleadores latinos más destacados, y convirtiéndose en el luchador más activo de toda la división, compitiendo varias veces por año, ganando la mayoría de sus combates por nocaut, llegando a las 10 victorias en la UFC en unos pocos años.</p>
                    <h2 className={styles.peleador__article__title}>Waldo Cortes Acosta Récord</h2>
                    <p className={styles.peleador__article__text}>Waldo Cortés Acosta posee un récord profesional en las MMA de 17-2. Con 9 de sus victorias siendo por la vía del nocaut, con sólo 1 siendo por sumisión y con 7 victorias siendo por la vía de la decisión. Mientras que sus 2 derrotas fueron por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Waldo Cortes Acosta Historia</h2>
                    <p className={styles.peleador__article__text}>Waldo Cortés-Acosta nació el 3 de octubre de 1991 en la ciudad de Fundación, ubicada en la provincia de Barahona, República Dominicana. Al igual que la mayoría de las personas nacidas en aquella zona, Waldo creció con el sueño de ser beisbolista profesional, pasando gran parte de su infancia practicando este deporte, el cual es icónico en su país. </p>
                    <p className={styles.peleador__article__text}>Emigraría a los Estados Unidos, persiguiendo su sueño de ser beisbolista, al firmar un contrato como pitcher en una liga menor profesional en el año 2010. Pasó un tiempo compitiendo en ligas menores hasta que una lesión en el condo truncó sus aspiraciones a llegar a las grandes ligas, dejándolo en una situación complicada, dado que pese a vivir en los Estados Unidos, no dominaba muy bien el inglés, y debía buscar un nuevo camino. </p>
                    <p className={styles.peleador__article__text}>Aunque inicialmente había considerado el fútbol americano, finalmente decidió inclinarse por practicar deportes de combate, inicando en el boxeo y posteriormente en las MMA, todo esto cuando ya tenía 24 años, lo que suele ser algo tarde para la mayoría de peleadores profesionales, más teniendo en cuenta que Waldo tuvo que aprender todo desde 0, ya que no tenía experiencia ni en grappling, wrestling ni en striking. De igual forma, contó con la ventaja de entrenar junto a una leyenda como lo es <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> en el <b>Tristar Gym</b>, lo que aceleró su aprendizaje y progreso. </p>
                    <p className={styles.peleador__article__text}>De esta forma Waldo Cortés-Acosta debutaría profesionalmente el 19 de mayo de 2018, ante el estadounidense <b>Odell Pantin</b>, a quien derrotaría por KO en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>Por alguna razón que no pude confirmar, se tomaría 3 años hasta aceptar su segunda pelea, pero a partir de aquí comenzaría a luchar de forma muy activa, comenzando el 31 de julio de 2021, cuando sometería con una kimura en el primer asalto al brasileño <b>Edison Lopes</b>. En agosto de ese mismo año, menos de un mes después, derrotaría por decisión unánime al estadounidense <b>Jordan Powell</b>. El 12 de noviembre tendría un combate en <b>BELLATOR</b> ante el americano <b>Mo DeReese</b>, a quien vencería por decisión unánime.</p>
                    <YouTubeEmbed videoid='FJzCPhyeeac' />
                    <p className={styles.peleador__article__text}>El 11 de febrero de 2022 pelearía en <b>LFA</b> ante <b>Derrick Weaver</b>, a quien vencería por TKO en el segundo asalto. Consiguiendo de esta manera la oportunidad de luchar por el título de la promotora el 15 de abril de ese año, ante <b>Thomas Petersen</b>, a quien vencería por TKO al final del tercer asalto del combate, ganando el primer campeonato de su carrera. </p>
                    <p className={styles.peleador__article__text}>Aquella última victoria no sólo le había ganado un título profesional en MMA, extendiendo su récord invicto a 6-0, sino que también le ganó una oportunidad de competir en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, donde enfrentaría al brasileño <b>Danilo Suzart</b> por la chance de ganar un contrato con la UFC. El combate se daría el 2 de agosto de ese mismo 2022, donde nuestro protagonista sería capaz de impresionar a Dana White al noquear a su rival en el segundo asalto, ganándose un contrato con la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.peleador__article__title}>Waldo Cortes Acosta UFC</h2>
                    <p className={styles.peleador__article__text}>Habiendo ganado su contrato, decidiría debutar apenas unos meses después, subiéndose al octágono de UFC el 29 de octubre ante el estadounidense <b>Jared Vanderaa</b>, a quien sería capaz de derrotar por decisión unánime. Menos de un mes después, el 19 de noviembre, aceptaría pelear en corto aviso ante <b>Chase Sherman</b>, volviendo a conseguir la victoria por decisión unánime y extendiendo su invicto a 9-0.</p>
                    <p className={styles.peleador__article__text}>Lamentablemente para él, iniciaría el 2023 enfrentando al luchador de Brasil <b>Marcos Rogério de Lima</b> el 29 de abril, sufriendo la primer derrota de su carrera por decisión unánime. Teniendo apenas una pelea más ese año, ante el polaco <b>Lukasz Brzeski</b>, contra quien volvería a la victoria, dejando KO a su rival en el primer asalto. </p>
                    <YouTubeEmbed videoid='ZKe4U98smDQ' />
                    <p className={styles.peleador__article__text}>El año siguiente lo iniciaría enfrentando al histórico excampeón de la UFC <b>Andrei Arlovski</b>, con quien se vería las caras en el primer evento del año el 13 de enero de 2024, logrando una importante victoria por decisión unánime. El 11 de mayo de ese mismo año se enfrentaría al prospecto cubano <b>Robelis Despaigne</b>, a quien de igual forma sería capaz de vencer por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>El 2025 lo convertiría en uno de los años más destacados de su carrera, manteniendo un ritmo de pelea altísimo en la compañía de MMA más grande del mundo. Iniciando el 15 de marzo, enfrentando al estadounidense <b>Ryan Spann</b>, obteniendo una gran victoria por nocaut en el segundo asalto. Siguiendo con una victoria ante el el luchador de Moldavia <b>Serghei Spivac</b>, a quien vencería por decisión unánime el 7 de junio. </p>
                    <p className={styles.peleador__article__text}>Lamentablemente volvería a sufrir una derrota un par de meses después, otra vez por decisión unánime, ante el ruso <b>Serguéi Pavlovich</b>, el 23 de agosto en el <Link href='/eventos/fight-night-walker-mingyang'>UFC Shangai: Walker vs Zhang</Link>. </p>
                    <p className={styles.peleador__article__text}>Aquella derrota no lo frenaría de seguir compitiendo ese mismo año, haciendo la locura de pelear 2 veces en el mes de noviembre. Con su primer pelea siendo el 1 de noviembre ante el croata <b>Ante Delija</b>, logrando dejarlo KO en el primer asalto de la pelea, ganando además el primer bono de su carrera a la Actuación de la Noche. Apenas unos días después, el 22 de noviembre se enfrentaría al daguestaní <b>Shamil Gaziev</b>, a quien de igual forma lograría vencer por KO en el primer asalto, ganando otra vez el bono a la Actuación de la Noche, y finalizando el año luego de combatir en 5 ocasiones a lo largo del 2025, ganando 4 de esas peleas.</p>
                    <YouTubeEmbed videoid='edOuYqh9U2Q' />
                    <p className={styles.peleador__article__text}>Waldo quería competir nuevamente ya en diciembre, pero la UFC lo guardo un mes más, para ser parte de la primer cartelera del año 2026, y de la primera cartelera de la era Paramount, compitiendo en el <Link href='/eventos/ufc324'>UFC 325</Link> con fecha del 24 de enero de 2026, para enfrentar al histórico peleador de peso pesado <b>Derrick Lewis</b>, a quien sería capaz de darle una paliza, noqueándolo en el segundo asalto y acumulando una racha de 3 victorias por nocaut consecutivas. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}