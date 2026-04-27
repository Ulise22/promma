
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/michael-morales/michael_morales.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Michael Morales',
    description: 'Michael Morales es un luchador ecuatoriano de MMA que compite en la división de peso wélter de la UFC, probablemente siendo el mejor latinoamericano de la UFC en la actualidad. ',
    openGraph: {
        images: '',
        title: 'Michael Morales',
        description: 'Michael Morales es un luchador ecuatoriano de MMA que compite en la división de peso wélter de la UFC, probablemente siendo el mejor latinoamericano de la UFC en la actualidad. ',
        url: 'https://fullmma.org/peleadores/michael-morales'
    }
}

export default function MichaelMorales () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={19} l={0} d={0} categoria='Peso Wélter' nombre='Michael Morales' apodo={null} time='2026-04-23' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Michael Morales?</h2>
                    <p className={styles.peleador__article__text}>Michael Morales es un luchador de MMA ecuatoriano que actualmente compite en la división de peso wélter de la UFC, siendo de los mejores de toda la división con récord invicto de 19-0. </p>
                    <p className={styles.peleador__article__text}>Estando en la élite de una de las divisiones más complicadas de toda la compañía, estando dentro del top5, habiendo finalizado a la mayoría de sus rivales, con un récord lleno de nocauts, Michael Morales apunta a ser uno de los mejores peleadores latinos que hayamos visto, y de seguir así, probablemente el mejor ecuatoriano de la historia, estando a muy poco de pelear por el cinturón de la UFC. </p>
                    <h2 className={styles.peleador__article__title}>Michael Morales Récord</h2>
                    <p className={styles.peleador__article__text}>Michael Morales posee un récord profesional en MMA de 19-0. 14 de esas 19 victorias provienen de la vía del nocaut, con sólo 1 siendo por sumisión y 4 siendo por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Michael Morales Historia</h2>
                    <p className={styles.peleador__article__text}>Michael Jhonatan Morales Hurtado nació el 24 de junio de 1999 en Pasaje, una ciudad ubicada en la provincia El Oro, en Ecuador. Su madre es <b>Lupita Morales</b>, una judoca y peleadora ecuatoriana que tendría una gran influencia en nuestro protagonista, quien lo motivó a seguir su ejemplo, siendo ella misma la imagen de disciplina, fuerza mental, y amor por la competencia que acompaña hasta día de hoy a Michael. </p>
                    <p className={styles.peleador__article__text}>De esta manera, entrenado por su propia madre, practicaría judo desde los 5 años de edad, a los 10 comenzaría a entrenar lucha y a los 14 haría la transición a las artes marciales mixtas, introducido por su padre quien lo llevó a la academia de Victor Vallejo en Machala. </p>
                    <p className={styles.peleador__article__text}>Al igual que la mayoría de peleadores sudamericanos, al no venir de un hogar con abundancia económica, su carrera temprana estuvo marcada por el sacrificio, el esfuerzo y el trabajo duro, teniendo que compajinar los entrenamientos y sus primeros combates con un trabajo que tenía en una fábrica de botes navales. </p>
                    <YouTubeEmbed videoid='X-jNumhNyq4' />
                    <p className={styles.peleador__article__text}>De esta forma, debutaría en las MMA profesionalmente el 19 de agosto de 2017, a los 18 años, peleando en una promotora local ante su compatriota <b>Álvaro Vacacela Guerrero</b>, noqueando en el segundo asalto del combate. </p>
                    <p className={styles.peleador__article__text}>Volvería a pelear al año siguiente, el 24 de marzo de 2018, en una revancha ante el mismo rival, <b>Álvaro Vacacela Guerrero</b>, volviendo a conseguir una victoria, esta vez en el primer asalto y por parada médica. El 8 de diciembre de ese mismo año bajaría hasta la división de peso ligero para enfrentar al venezolano <b>Leonardo Blasco</b>, a quien vencería por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>El 17 de julio de 2019 se enfrentaría al peruano <b>Óscar Ravello</b>, en su regreso a peso wélter, consiguiendo una nueva victoria por TKO en el segundo asalto, luego de una parada de la esquina rival. Volvería a bajar para tener una última pelea en peso ligero, esta vez el 6 de septiembre ante su compatriota <b>Mathias Salazar</b>, a quien noquearía en el primer asalto. Apenas un par de meses después volvería a subirse al octágono para enfrentar a <b>Erick Zambrano</b> el 8 de noviembre, obteniendo una nueva victoria por nocaut en el primer asalto. Finalmente, tendría un combate más en 2019, siendo este en el último mes del año, donde se enfrentaría al venezolano <b>Gregoris Cisneros</b>, contra quien conseguiría la primer sumisión de su carrera, ganando por esta vía en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Seguiría con esta racha de actividad en sus peleas, teniendo 3 combates en el 2020 (pese a la pandemia). Con el primer siendo el 12 de febrero ante <b>Mario Navarrete</b>, a quien noquearía en el segundo asalto. Luego, el 1 de agosto se enfrentaría al colombiano <b>Daniel Luigy Bestidas</b>, a quien vencería por TKO, una vez más, por parada médica. Y por último se enfrentaría a <b>Ricardo Centeno</b>, el 3 de octubre, consiguiendo dejarlo KO en el primer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>El 30 de abril de 2021 tendría su última fuera de la UFC, enfrentando al mexicano <b>Miguel Arizmendi</b>, en Tijuana, México, consiguiendo una nueva victoria por nocaut en el segundo asalto. </p>
                    <h3>Michael Morales en el Dana Whites Contender Series</h3>
                    <p className={styles.peleador__article__text}>Luego de haber acumulado un récord profesional invicto de 11-0, con 10 de sus victorias siendo por finalización, a Michael Morales se le presentaría la oportunidad de su vida, cuando sería invitado a competir en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, donde en caso de ganar, obtendría un contrato con la UFC. Para eso pelearía el 21 de septiembre de 2021 ante el kazajo <b>Nikolay Veretennikov</b>, logrando vencerlo por decisión unánime, y de esa forma, firmando contrato con la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.peleador__article__title}>Michael Morales UFC</h2>
                    <p className={styles.peleador__article__text}>Michael Morales debutaría en la UFC el 22 de enero de 2022 ante el estadounidense <b>Trevin Giles</b>, en el <b>UFC 270</b>, debutando con exito al noquear a su rival en el primer asalto de la pelea. Unos meses después, el 30 de julio, lo volvería a hacer, esta vez enfrentando al estadounidense <b>Adam Fugitt</b>, a quien noquearía en el tercer asalto del combate. </p>
                    <p className={styles.peleador__article__text}>En 2023 tendría otros 2 combates, con el primero siendo el 1 de julio ante el americano <b>Max Griffin</b>, a quien derrotaría por decisión unánime. Mientras que el segundo combate tendría fecha para el 18 de noviembre ante el australiano <b>Jake Matthews</b>, logrando derrotarlo por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En 2024 tendría solo 1 combate, pero sería el que lo posicionaría entre los más destacados de los jovenes en peso wélter, enfretando al &quot;gatekeeper&quot; de la división <b>Neil Magny</b>, logrando noquearlo en el primer asalto del combate, y consiguiendo además, el primer bono de su carrera a la Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='rcwixdOlXK4' />
                    <p className={styles.peleador__article__text}>Pero sería en el 2025 cuando veríamos lo mejor de Michael, demostrando que es un luchador legitimo y que apunta a cosas grandes. Comenzando el año para él encabezando la primer cartelera de su carrera, enfrentando para ello al histórico contendiente del título, el brasileño <b>Gilbert Burns</b>, el 17 de mayo, logrando una espectacular victoria por la vía del nocaut en el primer asalto, que además le permitiría ganar el segundo bono de su carrera. </p>
                    <p className={styles.peleador__article__text}>Finalmente el combate que lo terminaría de poner entre la élite de la división, sería el que tendría el 15 de noviembre en el <Link href='/eventos/ufc322'>UFC 322</Link>, organizado en el <b>Madison Square Garden</b>, en Nueva York, donde enfrentaría al entonces #2 de la división, el estadounidense <b>Sean Brady</b>, logrando noquearlo en el primer asalto del combate, ganando un nuevo bono a la Actuación de la Noche, y posicionándose como uno de los principales candidatos a pelear por el título ante el actual campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>. </p>
                    <YouTubeEmbed videoid='ar_a7UsKflo' />
                    <p className={styles.peleador__article__text}></p>
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