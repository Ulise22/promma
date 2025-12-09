import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import pantoja from '@/assets/peleadores__images/0-100/0-10/alexandre-pantoja/pantoja.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Alexandre Pantoja',
    description: 'Alex Pereira es el actual campeón de Peso Semipesado de MMA y es el número #5 libra por libra de la UFC, luego de que recientemente derrotará por nocaut a su rival JIŘÍ PROCHÁZKA en el segundo asalto, ganando así el título que había quedado vacante en la división.',
    openGraph: {
        title: 'Alexandre Pantoja',
        description: 'Alex Pereira es el actual campeón de Peso Semipesado de MMA y es el número #5 libra por libra de la UFC, luego de que recientemente derrotará por nocaut a su rival JIŘÍ PROCHÁZKA en el segundo asalto, ganando así el título que había quedado vacante en la división.',
        url: 'https://fullmma.org/peleadores/alexandre-pantoja'
    }
}

export default function Pantoja () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={pantoja} w={30} l={6} d={0} nombre='Alexandre Pantoja' apodo='THE CANNIBAL' categoria='Peso Mosca'  time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Pantoja ufc</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja es un peleador de mma brasileño y el actual campeón de Peso Mosca en la <Link href='/articulos/ufc'>UFC</Link>, cosa que logró luego de ganarle al peleador mexicano <b>Brandom Moreno</b>, por decisión dividida en el UFC 290, evento que se organizó en las vegas.</p>
                    <p className={styles.peleador__article__text}>Pantoja hizo su debut en la UFC el 28 de enero de 2017, donde luchó y derrotó al estadounidense Eric Shelton. Desde entonces, peleó en 13 combates, ganando 10 de estos y perdiendo tan sólo 3. Además supo destacar en julio de 2023 al ganarle al campeón de Peso Mosca hasta ese momento, <b>Brandom Moreno</b>, a quien ya había derrotado en mayo de 2018 por decisión unánime. </p>
                    <h2 className={styles.peleador__article__title}>Alexandre Pantoja record</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja tiene un record de 30-6-0, siendo 8 de sus 27 victorias por nocaut, 12 por sumisión y 10 por decisión. Mientras que de sus derrotas 5 fueron por decisión y sólo 1 por la vía del nocaut.</p>
                    <h2 className={styles.peleador__article__title}>Pantoja mma</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja es un peleador profesional de mma desde 2007, habiendo tenido un largo historial de peleas en su país de origen hasta que en mayo de 2016 la UFC lo anunció como uno de los 16 concursantes del TUF (The Ultimate Fighter: Tournament of Champions), competición en la que participaría como parte del equipo de Henry Cejudo.</p>
                    <p className={styles.peleador__article__text}>Desde sus inicios en las mma, Pantoja mantiene un estilo de pelea típico de los peleadores de Brasil, el Jiu Jitsu Brasileño.</p>
                    <h2 className={styles.peleador__article__title}>Brandon Moreno vs Alexandre Pantoja</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja y Brandom Moreno, se han enfrentado un total de 3 veces, una por TUF y 2 por UFC, y quién sabe si no terminarán haciéndolo una cuarta. Los 3 combates terminaron con una victoria por decisión a favor del brasileño, la primera por sumisión, la segunda por decisión unánime y la tercera por decisión dividida, quien en su última victoria además le sirvió para coronarse campeón de Peso Mosca. Actualmente puede encontrarse por Youtube sus 2 primeros combates.</p>
                    <iframe className={styles.peleador__article__video}  loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/KNV_A9_9dLg?si=XTU5wXa4PA0qLjoV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Alexandre Pantoja Historia</h2>
                    <p className={styles.peleador__article__text}>Alexandre Pantoja Passidomo nació en Rio de Janeiro, Brasil, el 16 de abril de 1990. Pantoja ha contado en una entrevista postpelea que durante su niñez, su padre abandonó a su familia y tuvo él junto a sus hermanos que ser criados por su madre.</p>
                    <p className={styles.peleador__article__text}>Desde julio de 2007 que Pantoja pelea de manera profesional en mma, habiendo hecho gran parte de su temprana carrera en promotoras locales de Brasil, siendo su debut contra su compatriota <b>Antonio Carlos</b>, a quien derrotó con sumisión en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Su siguiente pelea acabaría en una victoria por KO en el segundo asalto contra el luchador <b>Peterson Malfort</b>. Recién en su tercer pelea profesional recibiría su primera derrota, cayendo contra <b>William Vianna</b> por decisión dividida luego de 3 asaltos. </p>
                    <p className={styles.peleador__article__text}>El 9 de diciembre de 2014, ganaría el Campeonato de Peso Mosca de RFA, luego de someter al estadounidense <b>Matt Manzanares</b> en el segundo asalto. Su pelea posterior a esta, sería por el Campeonato Inaugural de Peso Mosca de AXS TV, que ganaría al someter en el segundo asalto al americano <b>Damacio Page</b>. Acumulando para este punto, un récord de 16-2 que le abriría las puertas de la UFC para debutar el 28 de enero de 2017, enfrentando a <b>Eric Shelton</b>, al que vencería por decisión dividida.</p>
                    <p className={styles.peleador__article__text}>Desde su llegada a la compañía, tednría un papel muy destacado en esta, perdiendo sólo 3 combates y ganando 11. Siendo su buena dinánimica de victorias, la que le permitiría ir a pelear por el título contra un rival conocido para el brasileño, como lo es el mexicano <b>Brandom Moreno</b>, a quien ya había enfrentado en 2 oportunidades, ganando ambas peleas, siendo la primera de estas cuando ambos compitieron en <b>The Ultimate Fighter</b>, llevándose la victoria por decisión unánime, y la segunda en mayo de 2018, cuando en el evento <b>UFC Fight Night: Maia vs. Usman</b> organizado en Chile, el brasileño se volvió a llevar la victoria por decisión.</p>
                    <p className={styles.peleador__article__text}>En su tercera pelea, siendo esta por el cinturón, luego de 5 asaltos, Pantoja fue capaz de llevarse la pelea nuevamente por decisión dividida, convirtiéndose en el nuevo campeón de la división de Peso Mosca de UFC. Esa noche, además, ambos peleadores ganaron el premio a la pelea de la noche.</p>
                    <iframe className={styles.peleador__article__video}  loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/gYbvounjwEA?si=hfv_21DEcHcuhWPs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de convertirse en campeón, volvería al octagono a defender su título el 16 de diciembre de 2023, en lo que sería una revancha contra el estadounidense <b>Brandon Royval</b>, a quien luego de 5 asaltos, terminaría por vencer por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Su segunda defensa del título tendría lugar nada más y nada menos que en su casa, en Brasil, donde encabezando el <Link href='/covertura-ufc/ufc301'>UFC 301</Link>, organizado el 4 de mayo de 2024, enfrentaría al australiano <b>Steve Erceg</b>, a quien vencería por decisión unánime.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}