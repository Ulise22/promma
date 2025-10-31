import topuria from '@/assets/peleadores__images/0-100/10-20/ilia-topuria/topuria.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import PeleadoresHero from "@/app/peleadores/components/PeleadoresHero";
import Link from "next/link";
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Ilia Topuria',
    description: 'Ilia Topuria es un luchador de nacionalidad georgiana y española de UFC que compite en la categoría de Peso Pluma, e hizo historia al convertirse en el primer peleador del país hispano en convertirse en campeón de la UFC, haciéndolo además contra un histórico de la división, Alexander Volkanovski por KO, que junto a José Aldo, seguramente sea el mejor de la historia en la división de Peso Pluma.',
    openGraph: {
        title: 'Ilia Topuria',
        description: 'Ilia Topuria es un luchador de nacionalidad georgiana y española de UFC que compite en la categoría de Peso Pluma, e hizo historia al convertirse en el primer peleador del país hispano en convertirse en campeón de la UFC, haciéndolo además contra un histórico de la división, Alexander Volkanovski por KO, que junto a José Aldo, seguramente sea el mejor de la historia en la división de Peso Pluma.',
        url: 'https://fullmma.org/peleadores/ilia-topuria'
    }
}

export default function Illia () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={topuria} w={17} l={0} d={0} nombre='Ilia Topuria' categoria='Peso pluma (featherweight)' apodo='El Matador' time='2025-10-29' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Ilia Topuria ufc</h2>
                    <p className={styles.peleador__article__text}>Ilia Topuria es un luchador de nacionalidad georgiana y española que compite en la división de peso pluma de la <Link href='/articulos/ufc'>UFC</Link> desde octubre de 2020, cuando haría su debut ante el marroquí <b>Youssef Zalal</b> en el <b>UFC Fight Night: Moraes vs. Sandhagen</b> organizado en Abu Dhabi. </p>
                    <p className={styles.peleador__article__text}>Su estilo de pelea ha ido evolucianando con el paso del tiempo, siendo un luchador que originalmente hacía un uso mayor de su lucha y de su suelo para sacar adelante sus peleas, poco a poco fue puliendo un estilo de boxeo que lo posiciona como uno de los mejores strikers que hay en la UFC en estos momentos. Con un poder de KO que muy pocos luchadores tienen, y con un estilo de pelea muy atractivo para los espectadores. </p>
                    <p className={styles.peleador__article__text}>Destacaría en la compañía especialmente el día 17 de febrero de 2024, cuando en el evento estelar de <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, sería capaz de noquear en el segundo asalto a uno de los mejores peleadores de la historia de la división, como lo es <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, convirtiéndose de esta manera en el nuevo campeón de la división de peso pluma de la UFC. </p>
                    <h2 className={styles.peleador__article__title}>Ilia Topuria Récord</h2>
                    <p className={styles.peleador__article__text}>Ilia Topuria es campeón invicto de la UFC con un récord de 17-0. Siendo 7 de sus victorias por nocaut, 8 por sumisión y tan sólo 2 por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Ilia Topuria Historia</h2>
                    <p className={styles.peleador__article__text}>Ilia Topuria en la ciudad alemana de Halle, ubicada en el distrito de Gütersloh, aunque al ser hijos de padres georgianos heredó su nacionalidad y no recibió la nacionalidad alemana. A los 7 años se mudó al país de origen de sus padres, Georgia, donde comenzó a practicar lucha grecorromana en la escuela. A los 15 años, Ilia junto a su hermano Aleksandre, se fue a vivir al país que hoy en día trata como propio, España, concretamente a la ciudad de Alicante, donde comenzó a entrenar en el gimnasio <b>Climent Club</b>, que es manejado por 2 hermanos que también son inmigrantes, en este caso, provenientes de Argentina.</p>
                    <p className={styles.peleador__article__text}>Una vez radicado allí compite y gana el torneo amateur <b>Arnold Fighters</b>, organizado por el histórico culturista y estrella de hollywood, <b>Arnold Schwarzanegger</b>. Además gana el subcampeonato de Europa de Jiu-Jitsu Brasileño en la categoría Junior, deporte y arte marcial del cual es cinturón negro bajo la tutela de sus maestros <b>Agustín y Jorge Climent</b>.</p>
                    <p className={styles.peleador__article__text}>Ya en su temprana adultez decidió dejar un poco los estudios de lado y lanzarse de lleno en su carrera como artista marcial mixto, teniendo que compaginar su carrera con varios trabajos que realizaba para subsistir, reconociendo que llegó a tener hasta 4 trabajos al mismo tiempo, como cajero de una tienda y como seguridad privada. </p>
                    <p className={styles.peleador__article__text}>Hizó su debut como profesional el 4 de abril de 2015 en una promotora llamada <b>West Coast Warriors</b>, contra el venezolano <b>Francisco Javier Aspirilla</b>, a quien derrotó por sumisión en el primer asalto. Luego de esto tendría otros 2 combates contra los españoles <b>Kalil Martín y Daniel Vásquez</b>, a quienes derrotó por sumisió con un mataleón en el primer asalto. Posterior a esto, tendría varias peleas en diversas compañías, en donde ganaría todos sus combates por sumisión, a excepción de su último combate antes de arribar a UFC, contra el sudafricano <b>Steven Goncalves</b>, a quien conseguiría dar su primer KO, en el primer asalto.</p>
                    <p className={styles.peleador__article__text}>El 11 de octubre de 2020 hizo su debut en la UFC, peleando como reemplazo de <b>Seung Woo Choi</b> contra <b>Youssef Zalal</b>. Y pese al corto aviso que tuvo para pelear, logró ganar la pelea por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Rápidamente después de su primera pelea, logró destacarse al ganar 2 combates por KO en el primer asalto contra <b>Damon Jackson</b> y <b>Ryan Hall</b>, y al ganar otra vez por KO en el segundo asalto contra <b>Jai Herbert</b>. Estás destacadas actuaciones lo llevaron a pelear en diciembre de 2022 contra <b>Bryce Mitchell</b>, a quien derrotó en el segundo asalto gracias a una esplendida sumisión, acabando así con la racha de 6 victorias consecutivas que había cosechado el peleador americano.</p>
                    <iframe className={styles.peleador__article__video} loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/N8zmkHN75ls?si=8pkpW_hpOz7xVNLP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de enfrentar a Mitchell, se enfrentaría al estadounidense <b>Josh Emmett</b>, que en ese momento estaba clasificado 5° en la división. En aquella pelea dominaría de principio a fin a emmett, demostrando un impresionante nivel de boxeo, pese a tener sus raíces como peleador muy arraigadas a la lucha, llevándose la pelea por decisión unánime luego de pasados los 5 asaltos.</p>
                    <p className={styles.peleador__article__text}>Al vencer a Emmett, Topuria se sentía listo para pelear por el título, por lo que no dudo en llamar al entonces campeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>, que en una previa donde Ilia se dedicó a hablar hasta por los codos, afirmando que podría noquear al campeón de la división. Terminó respaldando sus palabras con hechos en el <Link href='/covertura-ufc/ufc298'>UFC 298</Link>, al propinarle un KO en el segundo asalto a Volkanovski, el 17 de febrero de 2024, consagrándose así, como nuevo campeón de Peso Pluma de UFC.</p>
                    <iframe className={styles.peleador__article__video} loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/EQL0U5F6JKA?si=BBA7WaSRpKbjwKCh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Si ya de por sí lo conseguido al obtener el título de la división ante el peleador que parecía invencible era algo impresionante, aún más lo sería lo conseguido en su primer defensa del título, cuando enfrentaría al reciente ganador del <b>BMF</b>, excampeón de la división y contendiente #1 de los peso pluma <Link href='/peleadores/max-holloway'>Max Holloway</Link>, a quien enfrentaría el 26 de octubre de 2024 en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link> organizado en Abu Dhabi. Aquella noche, Ilia sería capaz de noquear en el tercer asalto al luchador que jamás había sido noqueado hasta ese momento, tal y como había prometido en la previa del combate, ganándose por ello el bono a la Actuación de la Noche. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}