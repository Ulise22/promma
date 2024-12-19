import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import fighter from '@/assets/peleadores__images/40-60/caio-borralho/caio_borralho.png'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Caio Borralho',
    description: 'Caio Borralho es uno de los mayores representantes del club Fightin Nerds, siendo, junto a otros, la cara visible de uno de los grupos de peleadores más reconocidos de la compañía. Sus planteamientos de pelea, haciendo hincapie en la inteligencia a la hora de la toma de decisiones, para ser un luchador que no se precipita y es capaz de pensar en el momento en que el resto entraría en pánico, es lo que lo ha llevado a ser uno de los peleadores más reconocidos de su equipo, convirtiéndose en uno de los principales contendientes de la división de peso medio.',
    openGraph: {
        title: 'Caio Borralho',
        description: 'Caio Borralho es uno de los mayores representantes del club Fightin Nerds, siendo, junto a otros, la cara visible de uno de los grupos de peleadores más reconocidos de la compañía. Sus planteamientos de pelea, haciendo hincapie en la inteligencia a la hora de la toma de decisiones, para ser un luchador que no se precipita y es capaz de pensar en el momento en que el resto entraría en pánico, es lo que lo ha llevado a ser uno de los peleadores más reconocidos de su equipo, convirtiéndose en uno de los principales contendientes de la división de peso medio.',
        url: 'https://fullmma.org/peleadores/caio-borralho'
    }
}

export default function CaioBorralho () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={fighter} w={17} l={1} d={0} categoria='Peso Medio' nombre='Caio Borralho' apodo={null} />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Caio Borralho MMA</h2>
                    <p className={styles.peleador__article__text}>Caio Borralho es un peleador de MMA brasileño que compite en la división de peso mediano de la UFC desde abril de 2022, cuando haría su debut ante el turco <b>Gadzhi Omargadzhiev</b>. </p>
                    <p className={styles.peleador__article__text}>Es uno de los mayores representantes del club <Link href='/articulos/fighting-nerds'>Fightin Nerds</Link>, siendo, junto a otros, la cara visible de uno de los grupos de peleadores más reconocidos de la compañía. Sus planteamientos de pelea, haciendo hincapie en la inteligencia a la hora de la toma de decisiones, para ser un luchador que no se precipita y es capaz de pensar en el momento en que el resto entraría en pánico, es lo que lo ha llevado a ser uno de los peleadores más reconocidos de su equipo, convirtiéndose en uno de los principales contendientes de la división de peso medio. </p>
                    <h2 className={styles.peleador__article__title}>Caio Borralho Récord</h2>
                    <p className={styles.peleador__article__text}>Caio Borralho posee un récord de profesional de MMA de 17-1 (1). Siendo 5 de sus victorias por la vía del nocaut, 4 por la vía de la sumisión y 8 por decisión. Mientras por el momento su única derrota provinó de una decisión. Además, posee una pelea sin resultado ante el luchador brasileño <b>Raylander Marques</b>. </p>
                    <h2 className={styles.peleador__article__title}>Caio Borralho Historia</h2>
                    <p className={styles.peleador__article__text}>Caio Vinícius Silva Borralho nació en la ciudad de São Luís, Maranhão, en Brasil, un 16 de enero de 1993. Siendo un niño de tan sólo 6 años comenzó a entrnear Judo, inspirado por su madre, quien quería que Caio gastará energía y se volviera más respetuoso. En esta disciplina destacaría rápido, ganando campeonatos y torneos regionales y nacionales. </p>
                    <p className={styles.peleador__article__text}>Con su abuelo siendo profesor de matemáticas, Caio siguió su ejemplo, al comenzar a dictar clases particulares con tan sólo 15 años. Además, al cumplir 18 años ingresaría a la Universidade Federal do Maranhão (UFMA) para estudiar Química Industrial. A esa misma edad comenzaría a entrenar Jiu Jitsu, y posteriormente MMA junto a su entrenador <b>Pablo Sucupira</b>, con quien tiempo después acabaría fundando el hoy en día tan reconocido <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>. </p>
                    <p className={styles.peleador__article__text}>Acabaría por abandonar sus estudios universitarios para perseguir su sueño de convertirse en un peleador profesional, materializando esto a los 21 años, cuando haría su debut profesional en MMA el día 13 de diciembre de 2014, enfrentando a su compatriota <b>Cleiton Rafael</b> en la categoría de peso wélter, consiguiendo una impresionante victoria por KO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Perdería su segunda pelea, ante <b>João Carvalho</b>, quien luego de 3 asaltos sería capaz de vencerlo por decisión unánime el 18 de julio de 2015. Sin embargo, esta sería su primer y última derrota en mucho tiempo, dado que desde entonces acumularía una racha de victorias impresionante. </p>
                    <p className={styles.peleador__article__text}>Ganaría sus 2 siguientes combates con fecha para septiembre de 2016 y 2017, siendo el primero una victoria por sumisión ante <b>Edson Junior</b> por sumisión en el tercer asalto de la pelea, y siendo la segunda victoria por TKO a los 20 segundos del primer asalto ante <b>Luiz Carlos Alvez</b>. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/nPLK6MF5OAI?si=yVE4W20nQ5B-TOqA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Tendría una pelea el 16 de junio de 2018 ante <b>Raylander Marques</b> que acabaría sin resultado, debido a que fue interrumpida al final del primer asalto. Pero esta pelea contaría con la particularidad de ser la última en peso wélter de nuestro protagonista, puesto que decidiría subir a peso mediano, haciendo su debut en esta categoría de peso ante <b>Douglas Nascimento</b> el 8 de septiembre de ese mismo año, obteniendo una victoria por TKO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>En el 2019 tendría un total de 3 combates, con el primero de ellos siendo el 22 de junio ante <b>Luiz Carlos Alvez</b>, a quien vencería por sumisión en el primer asalto; el segundo combate tendría fecha para el 23 de agosto, ante su compatriota <b>Otávio Sagás</b>, a quien de igual forma vencería por sumisión en el primer asalto, en esta ocasión con una guillotina; finalmente, la última pelea del año sería ante <b>Ykaro Queiroz</b> el 6 de diciembre, venciendo por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>A esta altura, Borralho llevaba 2 victorias en la compañía <b>Future FC</b>, por lo que lo programarían para pelear por el cinturón vacante de la división ante su compatriota <b>Widemar Santos</b>, el día 16 de octubre de 2020. Aquella noche lograría ganar a su rival por decisión unánime, convirtiéndose en el nuevo campeón de peso mediano de FFC, obteniendo su primer campeonato de MMA. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/8irUjahi7FA?si=kDhS68SBaI4srMxq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Caio Borralho UFC</h2>
                    <p className={styles.peleador__article__text}>Ya con un récord de 8-1 (1), la oportunidad de competir en la compañía de artes marciales mixtas más grande del mundo, se le daría teniendo que pasar primero por el reality de televisión de jovenes talentos de las MMA, <b>Dana White&apos;s Contender Series</b>, que lo enfrentaría al canadiense <b>Aaron Jeffery</b> el día 28 de septiembre de 2021, y que, en caso de ganar de forma contundente, le garantizaba un contrato con la compañía. Aquella noche sin embargo, pese a que Caio Borralho sería capaz de vencer a su rival por decisión unánime, esta actuación no convencería del todo a Dana White para firmarle un contrato con la compañía. </p>
                    <p className={styles.peleador__article__text}>Debido a esto, él junto a su equipo negoció la posibilidad de participar nuevamente en el programa, acordando finalmente volver a pelear el 19 de octubre de 2021, menos de un mes después de su última pelea, ante el estadounidense <b>Jesse Murray</b>, en un combate pactado en peso pesado, debido a las claras dificultades que tendría para nuestro protagonista cortar de peso otra vez. En esta ocasión el brasileño no dejaría abierta la puerta a ningún tipo de dudas, finalizando a su rival vía TKO en el primer asalto de la pelea, para esta vez garantizarse entrar a la UFC. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/dKw5POIXlsI?si=N3YIvuN1v0L3CjiE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>De esta forma haría su debut al año siguiente, el día 16 de abril de 2022 ante el turco <b>Gadzhi Omargadzhiev</b>, en un combate donde se daría una situación particular, dado que para el tercer asalto, Borralho arrojaría un rodillazo ilegal que impediría a su rival seguir peleando, debido a esto se le descontaría un punto, que de igual forma no afectaría el resultado de la pelea, puesto que el brasileño acabaría ganando la pelea por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Ese mismo año tendría otros 2 combates, con uno siendo el 9 de julio ante el ruso <b>Armen Petrosyan</b>, consiguiendo una victoria por decisión unánime. Y por último pelearía el 22 de octubre de 2022 ante el luchador de Tayikistán <b>Makhmud Muradov</b>, obteniendo una victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En el 2023 tendría otros 2 combates, con el primero siendo el 29 de abril ante el polaco <b>Michał Oleksiejczuk</b>, a quien sometió en el segundo asalto, ganando el primer bono de su carrera a la Actuación de la Noche. A esta pelea le seguiría su combate ante el luchador daguestaní nacionalizado alemán, <b>Abusupiyan Magomedov</b>, venciendo por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>Para el 4 de mayo de 2024 se le presentaría una de las peleas más importantes de su carrera, teniendo la posibilidad de abril la cartelera del <Link href='/covertura-ufc/ufc301'>UFC 301</Link>, organizada en su país natal Brasil, ante el escocés <b>Paul Craig</b>, en una pelea que de ganar, lo posicionaría en los rankings de la división. Caio Borralho aprovecharía de sobremanera esta oportunidad, dejando KO a su rival en el segundo asalto de la pelea, ganando por esto el bono a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/6w7PBewENZs?si=YjrXjtX7MRLMnTVN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de esto, se le daría la oportunidad de protagonizar su primera cartelera, enfrentando en el evento estelar al veterano estadounidense <b>Jared Cannonier</b>, a quien de ganarle, lo pondría en el top5 de la división. Nuevamente el brasileño no decepcionaría, obteniendo una victoria por decisión unánime, en la que sería elegida como La Pelea de la Noche, ganando por tercera vez en su carrera, el bono de $50k. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}