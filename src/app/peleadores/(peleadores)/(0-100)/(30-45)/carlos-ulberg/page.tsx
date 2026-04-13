import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/carlos-ulberg/carlos_ulberg.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Carlos Ulberg',
    description: 'Carlos Ulberg es un luchador neozelandes que compite en la división de peso semipesado de la UFC, que viene noqueando a la gran mayoría de sus rivales, lo que lo otorgó una oportunidad de pelear por el título de UFC. ',
    openGraph: {
        images: '',
        title: 'Carlos Ulberg',
        description: 'Carlos Ulberg es un luchador neozelandes que compite en la división de peso semipesado de la UFC, que viene noqueando a la gran mayoría de sus rivales, lo que lo otorgó una oportunidad de pelear por el título de UFC. ',
        url: 'https://fullmma.org/peleadores/carlos-ulberg'
    }
}

export default function CarlosUlberg () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={15} l={1} d={0} categoria='Peso Semipesado' nombre='Carlos Ulberg' apodo='Black Jag' time='2026-04-09' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Carlos Ulberg?</h2>
                    <p className={styles.peleador__article__text}>Carlos Ulberg es un luchador neozelandes que compite en la división de peso semipesado de la UFC. Se ha convertido en uno de los mejores peleadores de su división, finalizando a la mayoría de sus rivales y llegando a alcanzar una racha de 9 victorias consecutivas, una de las más altas en la historia de la división. </p>
                    <p className={styles.peleador__article__text}>Su altísima racha de victorias le permitió competir por el cinturón vacante de la división el 11 de abril de 2026, en el <b>UFC 327</b> ante el excampeón <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link>. Como dato curioso, su apodo &quot;Black Jag&quot;, le fue dado en su pasado cuando hacía shows de stripping en eventos para mujeres en Australia y Nueva Zelanda.</p>
                    <h2 className={styles.peleador__article__title}>Carlos Ulberg Récord</h2>
                    <p className={styles.peleador__article__text}>Carlos Ulberg posee un récord profesional en MMA de 15-1. Con 10 de sus victorias proveniendo por la vía del nocaut, con sólo 1 siendo por la vía de la sumisión y con 4 siendo por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Carlos Ulberg Historia</h2>
                    <p className={styles.peleador__article__text}>Carlos Sao Murry Ulberg nació el 17 de noviembre de 1990 Auckland, Nueva Zelanda, siendo de origen samoana por parte de su padre y maorí por parte de su madre. </p>
                    <YouTubeEmbed videoid='_OsxzsvVvkQ' />
                    <p className={styles.peleador__article__text}>Vivió una infancia muy complicada, llena de adversidades que fueron moldeando su persona y su resiliencia. Desde los 4 años fue criado por familias de acogida, pasando por varios hogares hasta los 15 años. Pasó periodos viviendo con su padre (a los 5 años), quien era boxeador y que le enseñó a cocinar, a leer y deletrear, pero usaba drills de boxeo o flexiones como &quot;castigo&quot; cada vez que se equivocaba. </p>
                    <p className={styles.peleador__article__text}>También pasó tiempo viviendo con algunas de sus tías samoanas, quienes eran bastante estrictas pero que le enseñaron valores como el respeto y la disciplina. El mismo Ulberg mencionó como el haber vivido en diferentes hogares, con diferentes familias constantemente, le ayudó a tener perspectiva sobre diferentes vidas. </p>
                    <p className={styles.peleador__article__text}>Además, sufrió bullyng en la escuela, que lo llevó a tener peleas callejeras frecuentes, exponiéndolo a ambientes de drogas, alcohol y violencia. Ulberg sufrió bastante este periodo de su vida, pero pudo ir sobrellevándolo jugando al rugby, que fue su primer amor deportivo, jugando desde niño y llegando a ser de nivel semi-profesional con el equipo Counties-Manukau. </p>
                    <p className={styles.peleador__article__text}>Hubo varias inspiraciones para que Carlos comenzará a entrenar artes marciales, la primera fue la de su padre, quien fue un boxeador y que encendió esa chispa inicial. La familia Ulberg era conocida en Samoa por ser luchadores, por lo que Carlos no se quería quedar atrás, comenzando a entrenar boxeo, que era el deporte que su familia llevaba en la sangre. Además, siendo victimia de bullyng y viéndose envuelto en varias peleas callejeras, el saber defender era una motivación extra. Sin embargo, el punto de quiebre fue cuando durante un partido de Rugby, se metió en una pelea en pleno juego televisado, siendo baneado por 6 semanas, esto lejos de deprimirlo, lo motivó a dedicarse de lleno a su entrenamiento en boxeo y kickboxing. </p>
                    <p className={styles.peleador__article__text}>Llegado a la edad adulta, comenzó a trabajar como stripper en clubes y fiesta para mujeres, donde ganó buen dinero y pudo darse la vida viviendo de fiesta en fiesta. Además trabajó como modelo part-time, rechazando hasta 2 veces ser el protagonista de <b>The Bachelor New Zeland</b> (reality show de citas en Nueva Zelanda). Sin embargo, en el momento en que vió que era bueno para las peleas, dejó de lado todas las fiestas, el modales y el stripptease para dedicarse al 100% a su carrera. </p>
                    <p className={styles.peleador__article__text}>Comenzó su carrera profesional como kickboxer, donde ganó el prestigioso <b>King in the Ring</b>, en peso pesado y en cruiserrweight y alcanzado un récord profesional de 19-2. Entrenando en el mismo gimnasio que <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, por lo que ver como él y otros peleadores su gimnasio podían hacer la transición a las MMA y ser exitosos en la UFC, lo motivó a él mismo hacer su transición. </p>
                    <p className={styles.peleador__article__text}>Haría su debut en las MMA el 26 de agosto de 2011, enfrentando a su compatriota <b>Kaota Puna</b>, noqueando a su rival en el segundo asalto. Su segunda pelea sería ante <b>Whata Leka Skipwith</b>, noqueando en el primer asalto el 13 de abril de 2013. Tendría 2 combates más con años de distancia entre ellos, con uno siendo el 25 de agosto de 2016, ante el luchador de tayikistán <b>Umed Rakhmatulloyev</b>, en China, noqueando en el primer asalto de la pelea. Finalmente, volvería a pelear el 8 de diciembre de 2018 ante el galés <b>John Martin Fraser</b>, en su debut en peso pesado, logrando una victoria por decisión unánime. </p>
                    <h2 className={styles.peleador__article__title}>Carlos Ulberg Dana Whites Contener Series</h2>
                    <p className={styles.peleador__article__text}>Luego de acumular un récord profesional de 4-0 en MMA, con 3 victorias siendo por nocaut. Además de haber acumulado un récord de 19-2 en kickboxing, con un par de títulos incluidos, Ulberg se ganaría la oportunidad de su vida, al participar del <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, donde de ganar, obtendría un contrato con la UFC. Aquella noche le tocaría enfrentar al brasileño <b>Bruno Oliveira</b>, el día 4 de noviembre de 2020, logrando una espectacular victoria por KO en el primer asalto. </p>
                    <h2 className={styles.peleador__article__title}>Carlos Ulberg UFC</h2>
                    <p className={styles.peleador__article__text}>El debut de Carlos Ulberg en la UFC tendría un sabor agridulce, sin ser lo esperado puesto que recibiría su primer derrota profesional ante el nigeriano <b>Kennedy Nzechukwu</b>, quien en el <b>UFC 259</b> el 6 de marzo de 2021 dejaría KO a nuestro protagonista en el segundo asalto. Sin embargo, aquella noche Ulberg también ganaría el bono a La Pelea de la Noche, obteniendo su primer bono en su primer pelea en la UFC. </p>
                    <YouTubeEmbed videoid='oAIrx9NCLHg' />
                    <p className={styles.peleador__article__text}>Sin embargo, a partir de este momento iniciaría una de las rachas más largas de victorias en la historia de la división de peso semipesado. Comenzando en el año 2022, cuando el neozelandés tendría 3 combates totales en el año, siendo el primero el 12 de febrero en el <b>UFC 271</b> ante el estadounidense <b>Fabio Cherant</b>, logrando una victoria por decisión unánime; la segunda pelea sería el 25 de junio ante el camerunés <b>Tafon Nchukwi</b>, obteniendo una gran victoria por TKO en el primer asalto; su última pelea del año sería el 12 de noviembre ante el rumano <b>Nicolae Negumereanu</b>, logrando derrotar por KO a su rival en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>El 2023 lo iniciaría enfrentando al ucraniano <b>Ihor Potieria</b> el día 13 de mayo, consiguiendo derrotarlo por nocaut en el primer asalto, logrando gracias a esto ganar el segundo bono de su carrera, esta vez por la Actuación de la Noche. El 10 de septiembre volvería a subirse al octágono en el <b>UFC 293</b> para enfrentar al surcoreano <b>Jung Da-un</b>, ante quien conseguiría su primer victoria por sumisión en el tercer asalto. </p>
                    <YouTubeEmbed videoid='OIi00xClU7Y' />
                    <p className={styles.peleador__article__text}>El 11 de mayo de 2024 se subiría al octágono para enfrentar al estadounidense <b>Alonzo Menifield</b>, a quien sería capaz de noquear en tan sólo 12 segundos del combate, que le valdría para ganar el bono a la Actuación de la Noche nuevamente. El 23 de noviembre de ese mismo año pelearía en China ante el suizo <b>Volkan Oezdemir</b>, consiguiendo una victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Iniciaría el 2025 el 22 de marzo enfrentando a un histórico de la división, excampeón de UFC, el polaco <b>Jan Blachowickz</b>, a quien vencería por decisión unánime en la que sería una de las victorias más meritorias de su carrera. Finalmente terminaría el año el 28 de septiembre encabezando el primer evento de su carrera en el <Link href='/eventos/fight-night-ulberg-reyes'>UFC Fight Night: Ulberg vs Reyes</Link>, donde justamente se enfrentaría al histórico <b>Dominick Reyes</b>, consiguiendo una victoria por KO en el primer asalto, que le valdría para ganar otro Bono a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}