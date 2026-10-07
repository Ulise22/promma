
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/movsar-evloev/movsar_evloev.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Movsar Evloev',
    description: '',
    openGraph: {
        images: '',
        title: 'Movsar Evloev',
        description: '',
        url: 'https://fullmma.org/peleadores/movsar-evloev'
    }
}

export default function MovsarEvloev () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={20} l={0} d={0} categoria='Peso Pluma' nombre='Movsar Evloev' apodo={null} time='2026-10-06' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Movsar Evloev?</h2>
                    <p className={styles.peleador__article__text}>Movsar Evloev es un peleador ruso invicto de la UFC que compite en la división de peso pluma, donde desde su llegada a la UFC no ha hecho más que ganar hasta convertirse en un serio contendiente al título. </p>
                    <p className={styles.peleador__article__text}>Es un luchador bastante criticado y cuestionado debido a su estilo de pelea, donde va mucho a lo seguro, priorizando controlar a su contrincante sin hacer mucho daño, pero sumando puntos que hacen que gane sus peleas a los ojos de los jueces, al punto en que al menos hasta ahora, en 7 años en la UFC no ha conseguido ninguna finalización. Aún así es efectivo y eso explica las nulas derrotas en su récord, llegando al punto de retar al histórico campeón de la categoría, <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link></p>
                    <h2 className={styles.peleador__article__title}>Movsar Evloev Récord</h2>
                    <p className={styles.peleador__article__text}>Movsar Evloev posee un récord profesional en MMA de 20-0. Con 3 de sus victorias siendo por la vía del nocaut, 4 siendo por la vía de la sumisión y 13 siendo por decisión de los jueces. Además no ha perdido ninguna de sus peleas, siendo un luchador invicto. </p>
                    <h2 className={styles.peleador__article__title}>Movsar Evloev Historia</h2>
                    <p className={styles.peleador__article__text}>Movsar Magomedovich Evloev nació el 11 de febrero de 1994 en Ordzhonikidzevskaya, hoy Sunzha, en Ingusetia, una república del Cáucaso ruso similar a Daguestán y Chechenia. Seguramente influenciado por el entorno, habiendo nacido en una región con gran tradición de lucha, comenzó a entrenar desde niño artes marciales. </p>
                    <p className={styles.peleador__article__text}>Se dedicó a la lucha grecorromana, hasta obtener el rango de Maestro de Deportes. Estudio programación informática y derecho hasta que finalmente haría su debut profesional en las MMA en peso gallo el 25 de noviembre de 2014, con apenas 20 años, luchado en Beijing, China, ante el rival local <b>Jianwei He</b>, a quien lograría someter en el segundo asalto. </p>
                    <p className={styles.peleador__article__text}>En 2015 tendría 2 peleas, ante el luchador chino <b>Zhenghong Lu</b>, a quien vencería por decisión unánime, y ante su compatriota ruso <b>Andrey Syrovatkin</b>, a quien sometería en el primer asalto en su debut en peso pluma. </p>
                    <p className={styles.peleador__article__text}>En 2016 sería aún más activo, peleando en 3 oportunidades, enfrentando primero en mayo a su compatriota <b>Djulustan Akimov</b>, a quien sometería en segundo asalto; luego apenas 20 días después, se enfrentaría al ucraniano <b>Aleksander Krupenkin</b>, a quien noquearía en el primer asalto; y finalmente en junio de ese año, 1 semana después de su último combate, se enfrentaría al estadounidense <b>lee Morrison</b>, a quien vencería por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Todas estas victorias en M-1 Global, la promotora de MMA más importante de Rusia en aquel momento, se ganó su oportunidad de competir por el título interino de la división de peso gallo, enfrentando a su compatriota <b>Alexey Nevrozov</b> el 22 de abril de 2017, logrando una espectacular victoria por KO con una patada a la cabeza en el segundo asalto. Exactamente 2 meses después, volvería a pelear para enfrentarse al campeón <b>Pavel Vitruk</b>, a quien derrotaría por decisión unánime luego de 5 asaltos, unificando el cinturón. </p>
                    <YouTubeEmbed videoid='WC-EgPIjNZU' />
                    <p className={styles.peleador__article__text}>Defendería por primera vez su cinturón el 22 de febrero de 2018, enfrentando kazajo <b>Sergey Morozov</b>, a quien sometería en el tercer asalto del combate. Tiempo después, el 21 de julio de ese mismo año, defendería ante el brasileño <b>Rafael Dias</b>, a quien dejaría KO en el quinto asalto, despidiéndose de esta manera de la promotora M-1. </p>
                    <h2 className={styles.peleador__article__title}>Movsar Evloev UFC</h2>
                    <p className={styles.peleador__article__text}>Con un récord invicto de 10-0, habiendo sido campeón de la entonces compañía más importante de su país, y viniendo de 2 finalizaciones en su carrera, Evloev se ganaría un contrato con la compañía de artes marciales mixtas más grande del mundo, la UFC, haciendo su debut el día 20 de abril de 2019, en su retorno a peso pluma, enfrentando al coreano <b>Seung Woo Choi</b>, en un evento organizado en Rusia, donde obtendría una victoria por decisión unánime. El 26 de abril de ese mismo año volvería a pelear para enfrentar al peruano <b>Enrique Barzola</b>, a quien derrotaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En 2020 tendría una sola pelea, con fecha para el 26 de julio ante el inglés <b>Mike Grundy</b>, a quien luego de 3 asaltos vencería por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En 2021 tendría 2 combates: con el primero siendo ante el estadounidense <b>Nik Lentz</b>, a quien derrotaría por decisión dividida, en un combate hecho en peso pactado. Y la segunda sería ante el canadiense <b>Hakeem Dawodu</b>, a quien derrotaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En 2022 tendría un sólo combate ante el histórico peleador americano <b>Dan Ige</b>, a quien derrotaría por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>El 6 de mayo tendría la que probablemente es su pelea más entretenida, ante el brasileño <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, quien aceptó el combate en corto aviso. Aquella batalla se extendería hasta los 3 asaltos, con nuestro protagonista saliendo victorioso por decisión unánime, y ganando el primer bono de su carrera a la pelea de la noche. </p>
                    <p className={styles.peleador__article__text}>Iniciaría el 2024 peleando el 20 de enero ante el inglés <b>Arnold Allen</b>, a quien vencería por decisión unánime. Terminaría peleando otra vez el 7 de diciembre de ese mismo año ante el excampeón de peso gallo estadounidense <b>Aljamain Sterling</b>, a quien vencería por decisión unánime, acumulando 9 victorias consecutivas en la UFC, y llamando a pelear por el título al entonces campeón <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>.</p>
                    <YouTubeEmbed videoid='HHfwEbFM5m4' />
                    <p className={styles.peleador__article__text}>Por razones que desconocemos no peleó en todo el 2025, volviéndo recién el 26 de marzo de 2026 a pelear, teniendo que ganarse su lugar como contendiente al cinturón nuevamente. De esta forma encabezaría su primer evento, enfrentando al inglés <b>Lerone Murphy</b> en Londrés, donde obtendría una victoria por decisión mayoritaria, que extendería su invicto a 20-0, acumulando una racha de 10 victorias consecutivas y esta vez sí, ganando una oportunidad de pelear por el cinturón de la división de peso pluma. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}