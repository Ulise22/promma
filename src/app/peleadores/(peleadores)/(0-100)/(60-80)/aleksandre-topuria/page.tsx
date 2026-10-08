
import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/0-100/60-80/aleksandre-topuria/aleksandre_topuria.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Aleksandre Topuria',
    description: '',
    openGraph: {
        images: '',
        title: 'Aleksandre Topuria',
        description: '',
        url: 'https://fullmma.org/peleadores/aleksandre-topuria'
    }
}

export default function AleksandreTopuria () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={7} l={1} d={0} categoria='Peso Gallo' nombre='Aleksandre Topuria' apodo='El Conquistador' time='2026-10-08' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>¿Quién es Aleksandre Topuria?</h2>
                    <p className={styles.peleador__article__text}>Aleksandre Topuria es un peleador de MMA hispano-georgiano que compite en la división de peso gallo de la UFC, siendo en estos momentos uno de los mayores prospectos de la división, con un boxeo sólido con el que domina constantemente a sus rivales. </p>
                    <p className={styles.peleador__article__text}>Por ahora es más conocido por ser el hermano mayor de <Link href="/peleadores/ilia-topuria">Ilia Topuria</Link>, excampeón de peso pluma y peso ligero, siendo una pieza clave en el desarrollo de la carrera de su hermano. Pero desde su llegada a la UFC ha demostrado ser un peleador muy prometedor, que está en la compañía por mérito propio y que apunta a hacerse un nombre más allá de su reputación familiar. </p>
                    <h2 className={styles.peleador__article__title}>Aleksandre Topuria Récord</h2>
                    <p className={styles.peleador__article__text}>Aleksandre Topuria posee un récord profesional en MMA de 7-1. Con 3 de sus victorias siendo por la vía del nocaut, 2 siendo por la vía de la sumisión y 2 siendo por decisión de los jueces. Mientras que su hasta ahora única derrota fue por la vía del nocaut. </p>
                    <h2 className={styles.peleador__article__title}>Aleksandre Topuria Historia</h2>
                    <p className={styles.peleador__article__text}>Aleksandre Topuria Bendeliani, nació el 28 de enero de 1996 en Halle, Alemania. Sus padres son georgianos que debido a los conflictos étnicos en Abjasia en los años 90, emigraron y encontraron refugio en Alemania, donde nacieron tanto Aleksandre como su hermano menor Ilia. </p>
                    <p className={styles.peleador__article__text}>Cuando Aleksandre cumplió 8 años, la familia Topuria se mudó de vuelta a Georgia, donde vivieron unos años duros, debido a la inestabilidad del país y el inicio de la guerra con Rusia en 2008. Finalmente, el 2012, cuando nuestro protagonista tenía 12 años, emigraron a Alicante, España, en busqueda de un futuro mejor, encontrando un hogar en el país que adoptarían como propio. </p>
                    <p className={styles.peleador__article__text}>Su padre lo anotó en un gimnasio cuando tenía apenas 5 años, entrenando Judo y principalmente lucha Grecorromana. Una vez en España, su madre fue clave, dado que reconoció las <b>orejas de coliflor</b> (típicas de los luchadores) de un español que vió por allí, y al consultarle dónde entrenaba, los llevó al <b>Climent Club</b>, el gimnasio de los hermanos argentinos <b>Jorge y Agustín Climent</b>, quienes comenzaron a entrenar tanto a Aleksandre como a su hermano Ilia, iniciándolos también en las MMA. </p>
                    <p className={styles.peleador__article__text}>Finalmente Aleksandre debutaría profesionalmente en las MMA el día 4 de abril de 2015, enfrentando al ecuatoriano <b>Andres Braulio Lazaro Chiguano</b>, a quien lograría someter en el primer asalto con un armbar. </p>
                    <p className={styles.peleador__article__text}>Aquel 2015 tendría otros 2 combates, con el siguiente siendo el 9 de mayo, poco más de un mes después, enfrentando al español <b>Alejandro Rumim</b>, a quien lograría someter en el primer asalto nuevamente. La siguiente pelea sería apenas 20 días después, enfrentando al bulgaro <b>Ivo Ivanov</b>, contra quien lamentablemente caería derrotado por nocaut en el tercer asalto. </p>
                    <p className={styles.peleador__article__text}>Aquella derrota fue muy dura para él, pero le sirvió para notar que tenía cosas que mejorar, especialmente en el striking, con lo que su idea inicial era tomarse un año para trabajar y mejorar en este aspecto, pero ese año se extendió más de lo planificado, y terminó dedicando gran parte de su tiempo y de lo que podría haber sido su carrera, a trabajar y ser parte crucial en la carrera de su hermano menor <Link href="/peleadores/ilia-topuria">Ilia Topuria</Link>, formando un equipo que llevaría al más joven de los Topuria a ser una de las principales estrellas de la UFC y un doble campeón invicto. </p>
                    <p className={styles.peleador__article__text}>Recién luego de 6 años volvería a subirse al octágono, tenía 19 años cuando perdió por primera vez, y en todo ese tiempo de incatividad nunca dejó de entrenar. Ahora, con 25 años no era el mismo peleador que antes, era muchísimo mejor, y así se notó. Su primera pelea desde aquel parón fue el día 8 de diciembre de 2021 ante el brasileño <b>Lucas Tenorio</b>, a quien lograría noquear en el primer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Pelearía nuevamente el 12 de marzo de 2022 para enfrentar a su compatriota español <b>Alberto Ibañez</b>, a quien tambiéne lograría noquear en el primer asalto, en menos de 2 minutos de combate. </p>
                    <YouTubeEmbed videoid='cJ7cIcEs-KY' />
                    <p className={styles.peleador__article__text}>Volvería al octágono el 20 de mayo de 2023, para enfrentar al luchador francés <b>Johan Segas</b>, a quien lograría noquear en el primer asalto nuevamente, siendo esta su finalización más veloz, al conseguirla en 1:27. </p>
                    <h2 className={styles.peleador__article__title}>Aleksandre Topuria UFC</h2>
                    <p className={styles.peleador__article__text}>Luego de aquella impresionante victoria por nocaut, ya con un récord de 5-1, siendo todas sus victorias por finalización, y con su hermano asentado como campeón de la UFC, Aleksandre Topuria se ganaría un contrato con la compañía de artes marciales mixtas más grande del planeta. </p>
                    <p className={styles.peleador__article__text}>Haría su debut el día 9 de febrero de 2025 en el <b>UFC 312</b>, haciendo de visitante en Sidney, ante el australiano <b>Colby Thicknesse</b>, a quien lograría dominar derrotándolo por decisión unánime. </p>
                    <YouTubeEmbed videoid='9Rd2bYuFWLE' />
                    <p className={styles.peleador__article__text}>El 22 de noviembre de ese mismo año volvería a pelear, esta vez en Qatar en el <b>UFC Fight Night: <Link href='/peleadores/arman-tsarukyan'>Tsarukyan</Link> vs Hooker</b>, enfrentando a un durísimo rival como lo es el kazajo <b>Bekzat Almakhan</b>, a quien en un peleón lograría derrotar nuevamente por decisión unánime. </p>
                    <p className={styles.peleador__article__text}></p>
                    <p className={styles.peleador__article__text}></p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}