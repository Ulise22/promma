import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/40-60/petr-yan/petr_yan.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Petr Yan',
    description: 'Petr Yan es un peleador de UFC ruso que compite en la división de peso gallo, donde supo ser campeón cuando derrotó al histórico peleador José Aldo, a quien venció por TKO en el quinto asalto del UFC 251, en julio de 2020.',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpetr_yan.c0d624f1.png&w=640&q=75',
        title: 'Petr Yan',
        description: 'Petr Yan es un peleador de UFC ruso que compite en la división de peso gallo, donde supo ser campeón cuando derrotó al histórico peleador José Aldo, a quien venció por TKO en el quinto asalto del UFC 251, en julio de 2020.',
        url: 'https://fullmma.org/peleadores/petr-yan'
    }
}

export default function PetrYan () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={19} l={5} d={0} categoria='Peso Gallo' nombre='Petr Yan' apodo={null} time='2025-12-04' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Petr Yan MMA</h2>
                    <p className={styles.peleador__article__text}>Petr Yan es un peleador de UFC ruso que compite en la división de peso gallo, donde supo ser campeón cuando derrotó al histórico peleador <Link href='/leyendas/jose-aldo'>José Aldo</Link>, a quien venció por TKO en el quinto asalto del UFC 251, en julio de 2020. </p>
                    <p className={styles.peleador__article__text}>A lo largo de su carrera ha destacado al mostrar ser un luchador muy completo con un boxeo sobresaliente, que fue lo que lo llevó a ser campeón mundial de la UFC en su división. Ganándose el respeto de sus pares y peleando por el cinturón en hasta 5 oportunidades. </p>
                    <h2 className={styles.peleador__article__title}>Petr Yan Récord</h2>
                    <p className={styles.peleador__article__text}>Petr Yan posee un récord profesional de MMA de 19-5 con 7 de sus victorias viniendo por la vía del nocaut, sólo 1 siendo por la vía de la sumisión y 11 siendo por decisión. Mientras que de sus derrotas 4 fueron por la vía de la decisión y 1 siendo por descalificación. </p>
                    <h2 className={styles.peleador__article__title}>Petr Yan Historia</h2>
                    <p className={styles.peleador__article__text}>Petr Evgenyavich Yan nació el 11 de febrero de 1993 en la ciudad de Dudinka, Rusia. Hijo de una madre rusa y de un padre de nacionalidad georgiano-chino, comenzó a entrenar Taekwondo siendo un niño, viéndose envuelto muy seguido en peleas callejeras y en su escuela, que llevaban a su familia a mudarse constantemente en busca de evitar más conflictos. </p>
                    <p className={styles.peleador__article__text}>Comenzó a entrenar boxeo inspirado por su hermano mayor que venía entrenando desde hacía tiempo, aunque este en un principio no estaba muy de acuerdo con la idea, terminó por ayudar a nuestro protagonista a mejorar en el deporte. </p>
                    <p className={styles.peleador__article__text}>Luego de terminar la universidad, graduándose en la Universidad Federal Siberiana con una maestría en Cultura Física y Deporte, comenzaría su carrera en las MMA, haciendo su debut el 20 de diciembre de 2013 ante el luchador de Uzbekistán <b>Murad Bakiev</b>, a quien sería capaz de derrotar por KO en el tercer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Comenzaría a competir en la promotora rusa <b>ACB</b>, donde lograría ser campeón el 24 de octubre de 2015, luego de ganar a su compatriota <b>Murad Kalamov</b> por decisión unánime, en la que sería su quinta pelea profesional, acumulando un récord invicto de 5-0. Lamentablemente en su siguiente pelea perdería la posibilidad de ganar el Campeonato Inaugural de la división de peso gallo, cayendo derrotado ante <b>Magomed Magomedov</b> por decisión dividida. </p>
                    <p className={styles.peleador__article__text}>Sin embargo, luego de derrotar al inglés <b>Ed Arthur</b> por decisión unánime en julio de 2016, se le ofrecería la posibilidad de volver a disputar el cinturón de la compañía, en una revancha ante Magomed, el 15 de abril de 2017, consiguiendo esta vez derrotar a su rival por decisión unánime, convirtiéndose en campeón de Peso Gallo de ACB. Defendería dicho cinturón el 23 de septiembre de ese mismo año ante el brasileño <b>Matheus Mattos</b>, consiguiendo derrotarlo y retener el cinturón al lograr un TKO en el tercer asalto, en la que sería su última pelea en la compañía. </p>
                    <h2 className={styles.peleador__article__title}>Petr Yan UFC</h2>
                    <p className={styles.peleador__article__text}>Luego de un récord acumulado de 8-1, y de lograr ser campeón de la compañía rusa ACB, la UFC no dudaría en contratar a nuestro protagonista, firmando un contrato en enero de 2018, para hacer su debut pocos meses después, el 23 de junio, enfrentando al japonés <b>Teruto Ishihara</b>, a quien sería capaz de derrotar por KO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Luego de dicha victoria, volvería a pelear el 15 de septiembre de ese mismo año ante el surcoreano <b>Jin Soo Son</b>, en un evento organizado en Moscú, Rusia, logrando derrotarlo por decisión unánime, en la que sería elegida como Pelea de la Noche, ganando el primer bono de su carrera. El 29 de diciembre se enfrentaría al brasileño <b>Douglas Silva de Andrade</b>, logrando una victoria por TKO al finalizar el segundo asalto por parada de la esquina. </p>
                    <p className={styles.peleador__article__text}>En 2019 continuaría con su racha de victorias, hilando 3 victorias consecutivas, con la primera siendo el 23 de febrero ante el estadounidense <b>John Dodson</b>, a quien vencería por decisión unánime; la segunda vendría el 8 de junio de 2019, consiguiendo vencer a <b>Jimmie Rivera</b> por decisión unánime; y la última sería ante un estadounidense nuevamente, <b>Urijah Faber</b>, el 14 de diciembre, consiguiendo esta vez vencer por KO al conectar una patada en la cabeza de su rival, por la cual se ganaría el bono a la Actuación de la Noche.</p>
                    <p className={styles.peleador__article__text}>Luego de acumular 9 victorias consecutivas a lo largo de su carrera, y 6 en la UFC, se le presentaría la oportunidad de su vida de disputar el título de peso gallo de la UFC, ante el histórico campeón de peso pluma <Link href='/leyendas/jose-aldo'>José Aldo</Link>, a quien el 12 de julio de 2020 en el <b>UFC 251</b>, logrando derrotarlo por TKO en el quinto asalto de la pelea, convirtiéndose en el nuevo Campeón del Título Vacante de Peso Gallo de la UFC. </p>
                    <p className={styles.peleador__article__text}>Lamentablemente, el 6 de marzo de 2021, perdería el cinturón de la peor forma posible, enfrentando al estadounidense <b>Aljamain Sterling</b> en el <b>UFC 259</b>, le daría un rodillazo ilegal en el cuarto asalto que impediría al americano seguir peleando, haciendo que de esta forma nuestro protagonista caiga derrotado por descalificación, y por ende que pierda el cinturón de la UFC. </p>
                    <p className={styles.peleador__article__text}>En lugar de programarse una revancha, como el nuevo campeón <b>Aljamain Sterling</b> no podía defender su cinturón, se puso en juego un cinturón interino el 30 de octubre de ese mismo año en el <b>UFC 267</b>, entre nuestro protagonista Petr Yan y el estadounidense <b>Cory Sandhagen</b>, en una pelea que se extendería durante los 5 asaltos, terminando en una victoria para el ruso por decisión unánime, en la que sería elegida como La Pelea de la Noche. </p>
                    <p className={styles.peleador__article__text}>Una vez siendo campeón interino se volvería a enfrentar a <b>Aljamain Sterling</b> en una revancha por el cinturón indiscutido de la división. La pelea se daría el 9 de abril de 2022 en el <b>UFC 273</b>, donde lamentablemente volvería a caer derrotado luego de 5 asaltos por decisición dividida. Para colmo, esto sería el comienzo de uno de los momentos más duros de la carrera de Yan, dado que unos meses después, en octubre de ese mismo año volvería a perder otra vez por decisión dividida, al caer derrotado a quien sería campeón en el futuro <Link href='/peleadores/sean-omalley'>Sean O&apos;malley</Link>, aunque terminaría ganando el bono a La Pelea de la Noche. Y por si con eso el ruso no tenía suficiente, el 11 de marzo de 2023 obtendría su tercer derrota consecutiva, luego de que en una pelea que se haría a 5 asaltos (siendo el evento estelar de aquella noche), caería derrotado por decisión unánime ante el futuro campeón georgiano <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, en la derrota más contundente de toda su carrera. </p>
                    <p className={styles.peleador__article__text}>Estas 3 derrotas consecutivas dejaban a nuestro protagonista en una posición bastante complicado, siendo un luchador que no estaba acostumbrado a perder, el acumular estos 3 malos resultados, con el último siendo el más contundente de todos. Aún así, nuestro protagonista demostró ser un ejemplo de sobreponerse en la adversidad y dar vuelta rachas negativas, hilando luego de estas 3 derrotas consecutivas, 3 victorias consecutivas. </p>
                    <p className={styles.peleador__article__text}>La primera de estas victorias vendría el 9 de marzo de 2024 ante el chino <b>Song Yadong</b>, a quien conseguiría vencer por decisión unánime. La siguiente victoria vendría el 23 de noviembre de 2024, en un evento protagonizado por él mismo y por el excampeón de peso mosca brasileño <b>Deiveson Figueiredo</b>, que venía enrachado con 3 victorias consecutivas, logrando derrotarlo por decisión unánime luego de 5 asaltos de dominio total. Finalmente, la tercer victoria vendría el 25 de julio de 2025 al derrotar al estadounidense <b>Marcus McGhee</b>, nuevamente por decisión unánime de forma contundente. </p>
                    <p className={styles.peleador__article__text}>Estas 3 victorias le darían la oportunidad de pelear por el título de la división nuevamente, enfrentando al nuevo campeón en una revancha <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, el día 6 de diciembre en el <b>UFC 323</b>. </p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}