import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/joshua-van/joshua_van.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Joshua Van',
    description: '',
    openGraph: {
        images: '',
        title: 'Joshua Van',
        description: '',
        url: 'https://fullmma.org/peleadores/joshua-van'
    }
}

export default function JoshuaVan () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={16} l={2} d={0} categoria='Peso Mosca' nombre='Joshua Van' apodo={null} time='2026-02-10' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Joshua Van MMA</h2>
                    <p className={styles.peleador__article__text}>Joshua Van es un peleador de Myanmar bastante joven de la división de peso mosca en diciembre de 2025, donde supo ser campeón luego de la victoria que consiguió ante el histórico <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link> por TKO, luego de que este último se lesionara accidentadamente su brazo, incapaz de seguir peleando. </p>
                    <p className={styles.peleador__article__text}>A pesar de pelear en una de las divisiones menos mediáticas de la compañía, supo destacar en la UFC como uno de los peleadores más prometedores (aunque ya es una realidad), al que hay que prestar atención, ganándose de a poco el corazón del público con su constante actividad dentro del octágono y con su estilo de pelea lindo de ver, priorizando el striking ante todo. </p>
                    <h2 className={styles.peleador__article__title}>Joshua Van Récord</h2>
                    <p className={styles.peleador__article__text}>Joshua Van posee un récord profesional en MMA de 16-2, con 8 de sus victorias proviniendo por la vía del nocaut, con 2 siendo por sumisión y con 6 siendo por decisión. Mientras que de sus 2 derrotas, 1 fue por la vía del nocaut y sólo 1 por la vía de la sumisión. </p>
                    <h2 className={styles.peleador__article__title}>Joshua Van Historia</h2>
                    <p className={styles.peleador__article__text}>Joshua Van Bawi Thawn nació el 10 de octubre de 2011 en Hakha, en el Estado de Chin, en Myanmar (o Birmania). Creció en un entorno poco amigable, marcado por los conflictos políticos y militares que atravesaba su país natal. Formando parte de una familia de 5 hermanos, a los 10 años junto a toda su familia se mudaron a Malasia, buscando una mayor seguridad y mejores oportunidades de las que tenían en Myanmar.</p>
                    <YouTubeEmbed videoid='gfCqmoyj_CA' />
                    <p className={styles.peleador__article__text}>Aunque un par de años después, en 2013, se volverían a mudar, esta vez a los Estados Unidos, en busca de mejores oportunidades, instalándose en Houston, Texas, donde reside actualmente. Su infancia en el país americano fue complicada, siendo un joven pequeño, que no hablaba muy bien inglés y de origen asiático, fue un blanco fácil de bullyng, que lo llevó a involucrarse en peleas callejeras o escolares en más de una ocasión (aunque en su caso era claramente para defenderse). </p>
                    <p className={styles.peleador__article__text}>Como suele ser habitual en los jovenes asiáticos que emigran a los Estados Unidos, creció admirando a Bruce Lee, quien representaba un ejemplo para el joven Van. Además, debido a su tía, terminó adoptando la figura de <b>Manny Pacquiao</b> como un modelo a seguir, dado que lo veían como el ejemplo de un hombre que lucha por su familia y su país. Estas influencias, sumado a la necesidad de aprender a defenderse y canalizar su agresividad de forma positiva, lo llevaron a entrenar artes marciales cuando tenía alrededor de 17 años. </p>
                    <p className={styles.peleador__article__text}>A diferencia de otros peleadores muy exitosos de la UFC, que comenzaron a entrenar artes marciales desde niños, Joshua Van se convertiría en el ejemplo de alguien que comenzando a entrenar casi que siendo un adulto, alcanzaría el éxito en la elite del deporte, de manera meteórica. </p>
                    <p className={styles.peleador__article__text}>Apenas un par de años después, en octubre de 2021, teniendo 20 años, Joshua Van haría su debut como peleador profesional de MMA, en la promotora <b>Fury FC</b>, donde haría gran parte de su carrera inicial, enfrentando al estadounidense <b>Tony Esquivel</b>, a quien sería capaz de noquear en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>Apenas un par de meses después, en noviembre de ese año, enfrentaría a <b>Chase Eastham</b>, a quien noquearía en el segundo asalto. Al mes siguiente volvería a pelear, y pagaría el precio de combatir tan seguido, siendo sometido en el segundo asalto por <b>Devon Jackson</b>. </p>
                    <p className={styles.peleador__article__text}>Lejos de afectarle aquella primer derrota, Joshua Van tendría un 2022 sobresaliente que mostraría lo poco que le afectó. Iniciando el 11 de febrero dejando KO a <b>Francisco Obando</b> en el primer asalto; el 24 de abril volvería a vencer por nocaut en el primer asalto, esta vez ante <b>Angelo Trujillo</b>; el 15 de mayo sometería a <b>Mario Sauzo</b> en el segundo asalto; en agosto noquearía en el segundo asalto a <b>Paris Moran</b>; y finalmente, para cerrar el año de la mejor manera posible, el 18 de diciembre sometería a <b>Cleveland McLean</b> en el segundo asalto, proclamándose campeón de la división en Fury FC, y posteriormente, firmando con la UFC.</p>
                    <YouTubeEmbed videoid='BZ_UjU4mbYA' />
                    <h2 className={styles.peleador__article__title}>Joshua Van UFC</h2>
                    <p className={styles.peleador__article__text}>Como mencioné antes, esa última victoria le permitiría ser campeón de la única compañía en la que había competido hasta aquel momento, Fury FC, y sería también su último combate allí, dado que con un récord de 7-1, un cinturón encima, y con apenas 21 años, se mostraba ya como un prodigio y un luchador muy prometedor, por lo que fue contactado por la compañía de artes marciales más grande del mundo, la UFC. </p>
                    <p className={styles.peleador__article__text}>Allí haría su debut el 24 de junio de 2023, en la que por cierto sería la primer cartelera encabezada por <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> (donde enfrentaría a <b>Josh Emmet</b>), enfrentando al luchador de Kazajistán <b>Zhalgas Zhumagulov</b>, en un combate muy cerrado que terminaría ganando nuestro protagonista por decisión dividida. En noviembre de ese mismo año volvería a pelear, esta vez enfrentando al luchador peruano <b>Kevin Borjas</b>, a quien esta vez lograría vencer por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Un par de meses después, el 13 de enero de 2024, volvería a subirse al octágono para enfrentar al brasileño <b>Felipe Bunes</b>, contra quien conseguiría su primer finalización en la compañía, noqueándolo en el segundo asalto del combate. El 13 de julio de ese mismo año volvería a pelear ante el veterano <b>Charles Johnson</b>, contra quien ante todo pronóstico caería derrotado, recibiendo un brutal KO en el tercer asalto, siendo esta su primer derrota en la UFC. </p>
                    <p className={styles.peleador__article__text}>Pese a todo volvería a recuperarse rápido de aquella derrota, tomando 2 combates más ese año, primero el 14 de septiembre ante el mexicano <b>Edgar Chairez</b>, a quien vencería por decisión unánime. Y luego el 7 de diciembre en el <b>UFC 310</b> ante el estadounidense <b>Cody Durden</b>, a quien vencería por decisión unánime, en una actuación bastante destacada, con uno de los jueces dando un 10-8 en uno de los asaltos. </p>
                    <p className={styles.peleador__article__text}>Sin embargo, el 2025 se convertiría en el año más importante de su carrera, manteniendo la actividad y el ritmo de pelea al que nos tiene acostumbrados, combatiría en 4 oportunidades en este año, comenzando el 8 de marzo en el <b>UFC 313</b> ante el japonés <b>Rei Tsuruya</b>, a quien vencería por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Seguida de aquella victoria ante el asiático, le acompañarían 2 de sus actuaciones más destacadas en la UFC: compitiendo primer el 7 de marzo en el <b>UFC 316</b>, para enfrentar al brasileño <b>Bruno Gustavo da Silva</b>, a quien noquearía de un derechazo en el tercer asalto del combate; y luego, apenas unos días después, el 28 de junio aceptaría una pelea en corto aviso, para enfrentar al #1 de la división, <b>Brandon Royval</b>, a quien enfrentaría en el <b>UFC 317</b>, dándonos la que fue una de las mejores peleas del año (sino la mejor), ganando el combate por decisión unánime, y el primer bono de su carrera a La Pelea de la Noche, además de la oportunidad de pelear por el título de las 125lbs, dado que el campeón de la división <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link> también peleó esa noche, ganando su respectiva pelea por sumisión, y haciendo un face-off ante nuestro protagonista Joshua Van luego del combate, dando pie a un futuro enfrentamiento.</p>
                    <YouTubeEmbed videoid='8YpTs31bfNU' />
                    <p className={styles.peleador__article__text}>Habiendo tenido un ascenso meteórico en la división, escalando hasta el puesto #1 de los rankings luego de su victoria ante <b>Brandon Royval</b>, Van se ganaría a pulso una oportunidad titular, programándose una pelea por el título el 6 de diciembre de ese mismo 2025, en el <Link href='/eventos/ufc323'>UFC 323</Link>, en el que sería el último evento numerado del año, y su cuarta pelea de todo el 2025. Aquella noche pasaría algo fatídico para el campeón <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, y fortuito para nuestro protagonista, dado que apenas a los 26 segundos del combate, el brasileño caería de forma aparotosa al suelo, saliéndose el codo de lugar, sufriendo una lesión que le impediría seguir peleando y que por suerte Joshua Van pudo ver a tiempo, para no pegarle causándole más daño del necesario. De esta forma casi accidental, Joshua Van se consagraría campeón de peso mosca por TKO, y se convertiría en el campeón de la división, rompiendo un récord como el campeón más joven de las 125lbs, y el segundo más joven en general, detrás de <Link href='/peleadores/jon-jones'>Jon Jones</Link>. </p>
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