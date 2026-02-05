import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/kevin-vallejos/kevin_vallejos.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Kevin Vallejos',
    description: '',
    openGraph: {
        images: '',
        title: 'Kevin Vallejos',
        description: '',
        url: 'https://fullmma.org/peleadores/kevin-vallejos'
    }
}

export default function KevinVallejos () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={17} l={1} d={0} categoria='Peso Pluma' nombre='Kevin Vallejos' apodo={null} time='2026-01-22' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Kevin Vallejos MMA</h2>
                    <p className={styles.peleador__article__text}>Kevin Vallejos es un peleador argentino de MMA que compite en la división de peso pluma de la UFC, desde que se ganara su contrato en septiembre de 2024, al participar del <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link> y lograr un victoria por nocaut que impresionaría a Dana White. </p>
                    <p>Es un peleador que viene teniendo un ascenso meteórico, siendo aún muy joven pero peleando seguido y dando espectáculo en cada combate, siendo protagonista de peleones y obteniendo varias finalizaciones en sus peleas, a menudo siendo comparado con <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, por la división en la que compite y por su estilo de pelea tan similar, al menos en el striking. </p>
                    <h2 className={styles.peleador__article__title}>Kevin Vallejos Récord</h2>
                    <p className={styles.peleador__article__text}>Kevin Vallejos posee un récord profesional en MMA de 17-1. Con 12 de sus victorias proviniendo por la vía del nocaut, con 2 siendo por sumisión y 3 por decisión. Mientras que su hasta ahora única derrota vino por en una decisión.</p>
                    <h2 className={styles.peleador__article__title}>Kevin Vallejos Historia</h2>
                    <p className={styles.peleador__article__text}>Kevin &quot;El Chino&quot; Vallejos nació el 8 de diciembre de 2001 en Mar del Plata, Argentina. Tuvo una infancia bastante tranquila y normal para lo que es la vida en Argentina, creciendo en una familia humilde y con ambos padres presentes en su vida. El Chino era un estudiante de secundaria cuando a los 16 años le dió por comenzar a entrenar artes marciales como hobby, agarrándole el gusto y dedicándose cada vez más en serio al deporte. </p>
                    <p className={styles.peleador__article__text}>Cada vez sintió un mayor gusto por el deporte y por la pelea en sí, sintiéndose atraído especialmente por el striking (con el boxeo siendo su base). De esta manera, lo que empezó como una curiosidad adolescente, se terminaría convirtiendo en una carrera poco a poco, comenzando a tener peleas amateur, donde pronto destacaría como un joven talentoso, al acumular un récord invicto de 14-0, hasta que daría el salto profesional. </p>
                    <p className={styles.peleador__article__text}>Debutaría profesionalmente el 4 de septiembre de 2021 con tan sólo 19 años en una promotora argentina llamada <b>Supreme Warrior</b>, enfrentando a su compatriota <b>Rocco Cenna</b>, a quien derrotaría por TKO en el segundo asalto. Un par de meses después de su debut volvería a pelear derrotando a su rival <b>Matias Ponce</b> por nocaut en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Luego de aquellas 2 primeras victorias, en 2022 firmaría con la promotora <b>Samurai Fight House</b>, en donde se asentaría como un peleador profesional, teniendo ese mismo año un total de 7 combates: Primero pelearía en febrero ante <b>Lucas Milletich</b>, a quien noquearía en el primer asalto; su segundo combate sería en marzo ante <b>Jesus Ru</b>, con quien tendría su primer victoria por decisión; en mayo conseguiría la primer sumisión de su carrera al derrotar <b>Gabriel Vargas</b> en el primer asalto; En junio vencería por TKO en el primer asalto a <b>Mauricio Flores</b>; En octubre tendría la oportunidad de pelear por el título de <b>SFH</b> en peso gallo (donde tendría su primer y única pelea) y volvería a ganar por TKO en el primer asalto, esta vez ante <b>Pablo Etelechea</b>, consagrándose como campeón de la compañía; el 19 de noviembre volvería a su división tradicional, para pelear por el cinturón interino de peso pluma en SFH, donde volvería a quedarse cocn la victoria al noquear en el segundo asalto a <b>Emmanuel Vallejos</b>; finalmente, el 16 de diciembre enfrentaría al uruguayo <b>Nestor Machado</b>, derrotándolo por decisión unánime para unificar el cinturón y dinalmente convertirse en campeón indiscutido de peso pluma, y en doble campeón de la compañía. </p>
                    <YouTubeEmbed videoid='1VQQdix7KE4' />
                    <p className={styles.peleador__article__text}>El 2023 sería otro año muy activo para él, defendiendo primero su cinturón el 11 de marzo ante su compatriota <b>Aldo Espíndola</b>, a quien noquearía en el primer asalto. El 13 de mayo, volvería a defender su cinturón ante el uruguayo <b>Eduardo Garagorri</b>, a quien noquearía en el segundo asalto. </p>
                    <h3>Kevin Vallejos vs Jean Silva en el Dana White Contender Series</h3>
                    <p className={styles.peleador__article__text}>De esta forma, ya había alcanzado un récord profesional de 11-0, y llevaba 2 defensas y 2 cinturones en su haber, por lo que la UFC estaría atenta a esto y le ofrecería la oportunidad de su vida de participar del <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, donde en caso de ganar e impresionar a Dana White se ganaría un contrato con la compañía más importante de MMA del mundo. Se le programaría una pelea para el 5 de diciembre de 2023, donde debería enfrentar al brasileño <Link href='/peleadores/jean-silva'>Jean Silva</Link>, quien forma parte del equipo de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>. Aquella noche ambos luchadores nos darían un peleón espectacular, pero lamentablemente para nuestro protagonista, sería el de Brasil quien se quedaría con la victoria por decisión unánime, siendo él quien finalmente firmaría un contrato con la UFC. </p>
                    <h3>Kevin Vallejos en el Dana White Contender Series 2024</h3>
                    <p className={styles.peleador__article__text}>A Kevin le había faltado poco para llegar a la UFC, pero de igual forma esa primer derrota profesional no lo desanimó, y por el contrario lo llevó a entrenar más duro que nunca y a seguir compitiendo en busca de mejorar como peleador, aceptando defender nuevamente su cinturón un par de meses después, el 22 de diciembre ante un luchador llamado <b>Maximiliano Pérez</b>, a quien sometería en el tercer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>Al año siguiente tendría una última defensa de su cinturón, noqueando a <b>Gonzalo Contreras</b> en el segundo asalto de su combate con fecha para el 2 de marzo de 2024. De esta manera, apenas un año después, Dana White le volvería a dar la chance a Vallejos de participar en el DWCS, esta vez enfrentando al estadounidense <b>Cam Teague</b>, contra quien esta vez sí, sería capaz de ganar y noqueando en el primer asalto para ganarse un contrato con la compañía de MMA más grande del planeta. </p>
                    <h2 className={styles.peleador__article__title}>Kevin Vallejos UFC</h2>
                    <p className={styles.peleador__article__text}>En 2025, una vez con contrato en la compañía, tendría uno de los ascensos más destacados del año para la UFC. Haciendo primero su debut el 15 de marzo ante el coreano <b>Seung Woo Choi</b>, a quien noquearía en el primer asalto, en una actuación muy destacada de su parte. </p>
                    <YouTubeEmbed videoid='EAVmlVj1nZ4' />
                    <p className={styles.peleador__article__text}>Volvería a subirse al octágono el 2 de agosto de ese mismo año en el <Link href='/eventos/fight-night-taira-park'>UFC Fight Night: Taira vs Park</Link>, donde compartiría cartelera con su compatriota <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, en una noche bien argentina dado que ambos luchadores serían capaces de hacerse con la victoria en auténticos peleones, con El Chino consiguiendo la suya por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Finalmente en la última cartelera del año, y por tanto en la última cartelera de la Era ESPN de la UFC, en el <Link href='/eventos/fight-night-royval-kape'>UFC Fight Night: Royval vs Kape</Link>, El Chino pelearía en el evento coestelar ante el georgiano <b>Giga Chikadze</b>, quien estaba ranqueado en el top 15 de la división, por lo que este combate significaba la oportunidad de entrar en los rankings para el argentino. En este combate Kevin no decepcionó para nada, regalándonos un KO espectacular por puño giratorio que dejaría tumbado a su rival en el suelo en el segundo asalto, ganando no sólo el bono a la Actuación de la Noche, sino que también un lugar en la élite de Peso Pluma. </p>
                    <YouTubeEmbed videoid='gHzjKIF6hzg' />
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}