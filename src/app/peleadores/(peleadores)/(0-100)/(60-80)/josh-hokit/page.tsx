
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/60-80/josh-hokit/josh_hokit.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Josh Hokit',
    description: '',
    openGraph: {
        images: '',
        title: 'Josh Hokit',
        description: '',
        url: 'https://fullmma.org/peleadores/josh-hokit'
    }
}

export default function JoshHokit () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={10} l={0} d={0} categoria='Peso Pesado' nombre='Josh Hokit' apodo='The Incredible Hok' time='2026-10-09' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Josh Hokit?</h2>
                    <p className={styles.peleador__article__text}>Josh Hokit es un peleador de MMA estadounidense que compite en la división de peso pesado de la UFC. Destacando enormemente y de forma meteórica, hasta llegar a competir por el título de la UFC ante <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link> en su quinto combate en la compañía. </p>
                    <p className={styles.peleador__article__text}>Josh Hokit es un peleador extraño para la mayoría de aficionados de las MMA, especialmente fuera de camara y en ruedas de prensa, donde se muestra más como un personaje de WWE que el luchador promedio de UFC. Sin embargo, todo su personaje y todo lo hablado frente a cámaras ha sabido respaldarlo con actuaciones sobresalientes dentro del octágono, al punto en que probablemente sea el peleador más entretendio de ver actualmente en la división de peso pesado. </p>
                    <h2 className={styles.peleador__article__title}>Josh Hokit Récord</h2>
                    <p className={styles.peleador__article__text}>Josh Hokit posee un récord profesional en MMA de 10-0. Con 6 de sus victorias siendo por la vía del nocaut, 3 siendo por la vía de la sumisión y apenas 1 siendo por decisión de los jueces. </p>
                    <h2 className={styles.peleador__article__title}>Josh Hokit Historia</h2>
                    <p className={styles.peleador__article__text}>Josh Seth Hokit nació el 12 de noviembre de 1997 en Bakersfield, California, Estados Unidos. Creció en un pequeño pueblo llamado Wasco hasta que entró a la secundaria, cuando su familia se mudó a Clovis, debido a que él junto a su hermano mayor comenzarían a entrenar en uno de los mejores programas de wrestling del país. </p>
                    <p className={styles.peleador__article__text}>Tanto Hokit como su hermano Isaiah, entrenaron desde muy pequeños en la lucha libre, por influencia de su padre, quien era un empresario fanático del deporte. </p>
                    <p className={styles.peleador__article__text}>Al mismo tiempo que practicaba wrestling se dedicó al fútbol americano, llegando incluso a competir en la NFL, llegando a firmar para los <b>Arizona Cardinals</b> hasta 2022, cuando fue cortado. </p>
                    <p className={styles.peleador__article__text}>Luego de que fuera cortado de la NFL, Hokit se sintió devastado, sin dirección en su vida y no sabía qué hacer. Fue en ese momento cuando su hermano mayor <b>Isaiah</b>, que estaba entrenando MMA en el gimnasio <b>Jackson-Wink</b>, lo animó a probar el deporte. Por lo que nuestro protagonista empezaría a entrenar artes marciales mixtas alrededor de 2022-2023, y con apenas unos meses de entrenamiento y ninguna experiencia amateur, firmó con Bellator y debutó profesionalmente. </p>
                    <p className={styles.peleador__article__text}>Su debut sería nada más ni nada menos que en el <b>BELLATOR 300</b>, el día 7 de octubre de 2023, enfrentando a <b>Spencer Smith</b>, a quien lograría someter en el tecer asalto. Cerca de un año después volvería a pelear para la compañía enfrentando a <b>Sean Rose</b>, a quien sometería en el primer asalto. </p>
                    <YouTubeEmbed videoid='Hdp0EYIJqGs' />
                    <p className={styles.peleador__article__text}>En 2025 tendría nada menos que 5 peleas. Acabando su contrato con Bellator y firmando con <b>LFA</b>, enfrentando primero a <b>John Lopez</b> el día 10 de enero, obteniendo una victoria por la vía del nocaut en el primer asalto. El 6 de marzo se enfrentaría a <b>Ezekiel Latu</b>, logrando una victoria por sumisión en menos de un minuto. Y finalmente se enfrentaría a <b>Eric Lunsford</b> el día 9 de mayo, consiguiendo una nueva victoria por la vía del nocaut en el primer asalto de la pelea. </p>
                    <h3 className={styles.peleador__article__title}>Josh Hokit Dana White Contender Series</h3>
                    <p className={styles.peleador__article__text}>Con un récord de 5-0, con todas sus victorias siendo por finalización, y habiendo peleado 3 veces en el año, Josh Hokit se ganaría la oportunidad de su vida, al participar y competir en el <Link href='/eventos/dana-white-contender-series-que-es'>Dana White Contender Series</Link>, el día 19 de agosto de ese mismo año, enfrentando al brasileño <b>Guilherme Uriel</b> por la posibilidad de ganar un contrato con la UFC, consiguiendo una impresionante victoria por nocaut en el segundo asalto, firmando de esta forma por la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.peleador__article__title}>Josh Hokit UFC</h2>
                    <p className={styles.peleador__article__text}>Josh Hokit haría su debut en la UFC ese mimso 2025, el día 8 de noviembre enfrentando a su compatriota <b>Max Gimenis</b>, a quien noquearía en el primer asalto, en menos de un minuto, ganando además el bono a la Actuación de la noche, el primero de su carrera. </p>
                    <p className={styles.peleador__article__text}>Luego pelearía en el primer evento del año 2026, el día 24 enero en el <Link href='/eventos/ufc324'>UFC 324</Link>, enfrentando a <b>Denzel Freeman</b>, a quien noquearía en el primer asalto, ganando nuevamente el bono a la actuación de la noche. </p>
                    <p className={styles.peleador__article__text}>El 11 de abril de ese mismo año se subiría al octágono nuevamente, esta vez en el <b>UFC 327</b> para enfrentar a un top 5 de la división, como lo es <b>Curtis Blaydes</b>, pelea en la que se haría conocido por estar en la conferencia de prensa previa al evento, donde daría a conocer su personaje más histriónico, que supo respaldar de sobremanera, ganando por decisión unánime y protagonizando una de las mejores peleas que se recuerdan en la historia reciente de los pesos pesados, que le ganó no sólo el bono a la Pelea de la Noche, sino que también el de Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='-QANVeelqyc' />
                    <p className={styles.peleador__article__text}>En aquella misma noche en que ganó a <b>Curtis Blaydes</b>, se metió de último momento en la que quizás sea la cartelera más importante en la historia de la UFC y de las artes marciales mixtas, como lo fue el <Link href='/eventos/ufc-casa-blanca'>UFC Freedom 250</Link>, organizado en la Casa Blanca de los Estados Unidos, por motivo de los 250 años de independencia del país americano. Para ello se enfrentaría al luchador con más nocauts en la historia de la UFC, el histórico <b>Derrick Lewis</b>, el día 14 de junio, en otra rueda de prensa llamativa y polémica, donde incluso se metió con peleadores como <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> e incluso algunos están alejados de su división como <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>. El punto es que aquel 14 de junio tendría otra destacada actuación dentro del octágono, noqueando en el segundo asalto a Lewis. </p>
                    <p className={styles.peleador__article__text}>Habiendo acumulado una racha de 4 victorias consecutivas en la UFC, estando invicto en su carrera con un récord de 10-0, con 9 de sus victorias siendo por finalización, y estando dentro del top 5 de la división, Hokit se ganaría el derecho a pelear por el título de la división, enfrentando al campeón interino <Link href='/peleadores/ciryl-gane'>Ciryl Gane</Link>, luego de que el campeón <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link> dejará vacante el cinturón por una lesión en el ojo que arrastraba hace más de un año. </p>
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}