import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ngannou from '@/assets/peleadores__images/0-100/10-20/francis-ngannou/ngannou.png'
import ngannoutyoson from '@/assets/peleadores__images/0-100/10-20/francis-ngannou/ngannou&tyson2.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Francis Ngannou',
    description: 'Francis Ngannou es un peleador camerunés, que pelea actualmente en la división de peso pesado de PFL, donde compite desde octubre de 2024, cuando haría su debut en la compañía en una pelea por el título ante el brasileño Renan Ferreira.',
    openGraph: {
        title: 'Francis Ngannou',
        description: 'Francis Ngannou es un peleador camerunés, que pelea actualmente en la división de peso pesado de PFL, donde compite desde octubre de 2024, cuando haría su debut en la compañía en una pelea por el título ante el brasileño Renan Ferreira.',
        url: 'https://fullmma.org/peleadores/francis-ngannou'
    }
}

export default function Ngannou () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ngannou} w={18} l={3} d={0} nombre='Francis Ngannou' categoria='Peso Pesado' apodo='THE PREDATOR' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou MMA</h2>
                    <p className={styles.peleador__article__text}>Francis Ngannou es un peleador camerunés, que pelea actualmente en la división de peso pesado de PFL, donde compite desde octubre de 2024, cuando haría su debut en la compañía en una pelea por el título ante el brasileño <b>Renan Ferreira</b>.</p>
                    <p className={styles.peleador__article__text}>Es un peleador de los más destacados que existen en los pesos pesados de las MMA, uno de los mejores del mundo, y quizás el número #1. Aunque sin una técnica tan depurada como tienen otros peleadores de su peso, con su increíble poder KO y una alta taza de finalizaciones, con sólo 1 de sus victorias llegando a la decisión, se ha convertido en uno de los hombres más temibles del planeta.</p>
                    <p className={styles.peleador__article__text}>Supo destacar en su momento como artista marcial mixto, al covertirse en campeón indiscutido de los pesos pesados de la UFC el 27 de marzo de 2021 en el UFC 260, al lograr una victoria por KO en el segundo asalto ante el entonces campeón <b>Stipe Miocic</b>. Además de haberse convertido en campeón de los pesos pesados de PFL el 19 de octubre de 2024, al lograr derrotar por KO al entonces campeón brasileño <b>Renan Ferreira</b>. </p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou Récord</h2>
                    <p className={styles.peleador__article__text}>Francis Ngannou posee un récord profesional en las artes marciales mixtas de 18-3. Siendo 13 de sus victorias por la vía del nocaut, 4 siendo por la vía de la sumisión y sólo 1 por decisión. Mientras que todas sus 3 derrotas fueron por decisión. </p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou Historia</h2>
                    <p className={styles.peleador__article__text}>Francis Zavir Ngannou, nació en Camerún el 5 de septiembre de 1986. Ngannou vivió en la pobreza durante muchos años, debido a esto, durante su niñez le fue dificil tener acceso a la educación y tuvo que comenzar a trabajar en las minas con tan solo 10 años. Pese a lo desafortunado de su situación, debido a su trabajo comenzó a desarrollar una fuerza envidiable que en el futuro le serviría para noquear rivales.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/jLqyRdwDzBQ?si=ET4uQLXxlTjVZ9lo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Desde bastante temprano, Francis sabía que quería ser un peleador, especialmente de boxeo, así es que, debido a su situación precaria, decidió vender su moto para comprar el equipamiento necesario para practicar boxeo y comenzar a entrenar. Una vez adulto, decide abandonar su país con el objetivo de ir a Francia en busca de una oportunidad como boxeador. Ngannou sufrió sus dificultades para llegar a donde quería, pero finalmente llega a Francia donde conoce a Fernan López, quien sería su entrenador y lo convencería de probar MMA.</p>
                    <p className={styles.peleador__article__text}>De esta manera, el día 30 de noviembre de 2013 en París, haría su debut profesional en las MMA ante el francés <b>Rachid Benzina</b>, a quien lograría someter en el primer asalto de la pelea, dando inicio de esta forma a su carrera profesional. </p>
                    <p className={styles.peleador__article__text}>Lamentablemente perdería en su segundo combate profesional, cayendo derrotado por decisión en diciembre de ese mismo año ante el francés <b>Zoumana Cisse</b>. Pero esta derrota sería la última en mucho tiempo, dado que desde entonces acumularía una racha de 10 victorias consecutivas, siendo la primera de estas la conseguida ante el belga <b>Bilal Tahtahi</b> en abril de 2014, consiguiendo el primer KO de su carrera en el primer asalto. Ese mismo año lograría 2 victorias ante el francés <b>Nicolas Specq</b> por sumisión en segundo asalto, y ante el suizo <b>Luc Ngeleka</b> por sumisión igualmente, esta vez en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>El 28 de mayo de 2015 tendría una pelea ante el brasileño <b>William Baldutti</b>, a quien sería capaz de derrotar por TKO en el segundo asalto, consiguiendo de esta manera un récord profesional de 5-1, y como consecuencia, la oportunidad de pelear en la compañía de artes marciales mixtas más grande del mundo. </p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou UFC</h2>
                    <p className={styles.peleador__article__text}>Haría su debut en la UFC el día 19 de diciembre de 2015, enfrentando al brasileño <b>Luis Henrique</b> en el <b>UFC on Fox: dos Anjos vs. Cerrone 2</b>, consiguiendo hacer un debut exitoso al dejar KO a su rival en el segundo asalto del encuentro. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/Aze-JvepC3E?si=Hkb9NqYaL1Q4HSTt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En el 2016 se mantendería activo en la compañía, teniendo un total de 3 combates, siendo el primero ante el estadounidense <b>Curtis Blaydes</b>, a quien enfrentaría el 10 de abril, consiguiendo una victoria por TKO, por parada médica al final del segundo asalto. La segunda pelea del año sería ante el serbio <b>Bojan Mihajlovic</b>, a quien vencería por TKO en el primer asalto del combate. Por último, para finalizar el año, pelearía el 9 de diciembre ante el estadounidense <b>Anthony Hamilton</b>, sometiéndolo en el primer asalto con un kimura, lo que le valdría el primer bono de su carrera a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>Apenas un mes después, el 28 de enero del 2017, volvería a subirse al octágono para enfrentar al luchador de Bielorrusia, <b>Andrei Arlovski</b>, a quien sería capaz de vencer por TKO en el primer asalto, ganando nuevamente un bono por su desempeño a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>El 2 de diciembre de ese mismo año, en el UFC 218, tendría un durísimo enfrentamiento, ante el histórico peleador <b>Alistair Overeem</b>, en lo que era la pelea coestelar, y una pelea eliminatoria por el título. Aquella noche Ngannou demostró tener lo puños de plomo al dejar KO a su rival en el primer asalto del combate, ganándose de esta manera, la chance de ir a por el título de la división. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/LM--cx6FtEg?si=Y14VGXsHlvSHGy9j" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Nuevamente, el 20 de enero de 2018, apenas un mes después de su última pelea, Francis volvería a pelear para enfrentarse al entonces campeón <b>Stipe Miocic</b>, encabezando el UFC 220. Pero lamentablemente para nuestro protagonista, perdería la oportunidad de campeonar, cayendo derrotado por decisión unánime al finalizar los 5 asaltos del combate. </p>
                    <p className={styles.peleador__article__text}>Para peor, perdería su siguiente combate con fecha para el 7 de julio de ese mismo año, cayendo derrotad por decisión unánime ante <b>Derrick Lewis</b>. Sin embargo, el 24 de noviembre de ese mismo año, sería capaz de recuperarse de su racha de 2 derrotas consecutivas, al derrotar en una revancha a <b>Curtis Blaydes</b> por TKO a los 45 segundos del combate, en una cartelera que estaban protagonizando ellos 2 en China, y ganando nuevamente un bono a la Actuación de la Noche por su performance. </p>
                    <p className={styles.peleador__article__text}>De esta forma, acumularía una racha de 3 victorias consecutivas más, siendo 2 de estas en el 2019, al primero vencer por TKO en el primer asalto al histórico excampeón de la división <b>Caín Velásquez</b> en febrero, que se retiraría luego de la pelea, y luego al derrotar de igual forma por nocaut en el primer asalto al brasileño <b>Junior Dos Anjos</b> el 29 de junio, ganando el bono a la Actuación de la Noche por su desempeño. Finalmente, tendría un sólo combate en el 2020, el día 9 de mayo, enfrentando para ello al luchador de Surinam, <b>Jairzinho Rozenstruik</b>, consiguiendo vencer a este por TKO a los 20 segundos de la pelea, ganando nuevamente el bono a la Actuación de la Noche. </p>
                    <p className={styles.peleador__article__text}>Esta extensa racha de victorias, que además venían acompañadas de una actuación contundente, fueron lo que dieron la posibilidad de nuevamente disputarle el título de la división al campeón <b>Stipe Miocic</b>, a quien enfrentaría el día 27 de marzo de 2021 en la cartelera estelar del UFC 260. Aquella noche, nuestro protagonista conseguiría la gloria al ser capaz de conectar una combinación de golpes que dejaría KO a su rival en el segundo asalto, ganando nuevamente el bono a la Actuación de la Noche, y convirtiéndose en el nuevo campeón de los pesos pesados de la UFC. </p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/4Go5p7NWaiE?si=_Mp0iA2lU6R76QlR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Paso bastante tiempo hasta que el camerunés defendiera su cinturón, probablemente influenciado por el hecho de que a esta altura, sólo le quedaba una pelea en su contrato, y el luchador africano esperaba renovar con la UFC con una mejora sustancial de la paga que estaba recibiendo. De igual manera, terminó por volver a pelear para defender su cinturón el 22 de enero de 2022, enfrentando para ello al joven francés <Link href='/&peleadores/ciryl-gane'>Ciryl Gane</Link>, en la pelea estelar del UFC 270. Aquella noche, nuestro protagonista sería capaz de defender de forma exitosa su cinturón, al derrotar por decisión unánime a su rival. </p>
                    <p className={styles.peleador__article__text}>Siendo esta la última pelea que le quedaba en el contrato a Francis, estuvo alrededor de un año negociando una posible extensión de su contrato con la UFC, y entre idas y vueltas, al final no se pudieron poner de acuerdo, conviritendo a nuestro protagonista en un agente libre y despojándolo de su cinturón. Francis Ngannou se convertiría de esta manera en el primer campeón reinante en abandonar la UFC, desde que <b>BJ Penn</b> hiciera lo mismo 2004. </p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou y Rápidos y Furiosos 9</h2>
                    <p className={styles.peleador__article__text}>En 2021 Francis Ngannou tuvo una breve incursión en Hollywood en las patallas grandes, al hacer un cameo en la franquicia de Rápidos y Furiosos. En dicho cameo se enfrentaría a uno de los personajes de la saga, para posteriormente ser lanzado con un paracaídas puesto, y moriría en una explosión.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/h1h9USVbA-o?si=OCEOV5nWZxGatzfu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou Boxeo</h2>
                    <p className={styles.peleador__article__text}>No son pocas las veces en que Francis ha declarado que su sueño era ser boxeador. Talento y pegada ha emostrado tener en su carrera como peleador de MMA. Es por eso que no es de extrañar que una de las condiciones que le haya puesto Ngannou a PFL para firmar un contrato, haya sido que lo dejen pelear en este deporte.</p>
                    <p className={styles.peleador__article__text}>El muy afortunado de Francis Ngannou cumplió su sueño, no sólo porque logró organizar un combate de boxeo, sino porque además fue entrenado por el mismisimo <b>Mike Tyson</b>.</p>
                    <Image className={styles.peleador__article__image} loading='lazy' src={ngannoutyoson} alt='' />
                    <p className={styles.peleador__article__text}>Ngannou cumplió su sueño de pelear en boxeo contra nada más y nada menos que el campeón lineal de peso pesado Tyson Fury, a quien enfrentó el 28 de octubre en Riad, Arabia Saudita.</p>
                    <h3>Francis Ngannou vs Tyson Fury</h3>
                    <p className={styles.peleador__article__text}>El 28 de octubre, Francis Ngannou se enfrentó como debutante ante el campeón Tyson Fury, en una pelea donde todos daban como favorito al campeón, y donde se esperaba algo más parecido a un combate de exhibición que a una pelea seria. Sin embargo, sorprendió a todos la seriedad con la que el camerunés se tomo la pelea, llegando incluso a llevar a Fury a la lona en un combate que se decidió por puntos, dando de forma dividida la victoria a Tyson Fury. Aunque de la exhibición que dió Ngannou, nadie se va a olvidar.</p>
                    <iframe className={styles.peleador__article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/ZivaNOBf0Io?si=SR-W1vZkaSVQzKT7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>Francis Ngannou vs Anthony Joshua</h3>
                    <p className={styles.peleador__article__text}>Luego de aquella meritoria pelea con Tyson Fury, eran varios los que se quedaron con ganas de ver que más podría el luchador de MMA africano, por lo que se lo programaría para pelear contra el excampeón de peso pesado en boxeo, <b>Anthony Joshua</b>, el 8 de marzo de 2024, en el <b>Kingdom Arena</b>, en Riad, Arabia Saudita, misma ubicación de su última pelea.</p>
                    <p className={styles.peleador__article__text}>Lamentablemente para él, en esta ocasión caería derrotado por KO en el segundo asalto, luego de sufrir un durísimo golpe que lo llevaría a la lona, terminando por el momento, con su aventura en el mundo del boxeo</p>
                    <h2 className={styles.peleador__article__title}>Francis Ngannou PFL</h2>
                    <p className={styles.peleador__article__text}>Después de marcharse de la UFC, y de una negociación con <b>ONE Championship</b> que no terminó llegando a buen puerto, Francis Ngannou aceptó unirse a <b>PFL</b>. Habría aceptado cobrar un contrato de 7 cifras, además de aceptar convertirse en el presidente de PFL África.</p>
                    <p className={styles.peleador__article__text}>De esta forma haría su debut en la nueva compañía el 19 de noviembre de 2024, luego de sus 2 combates de boxeo. Enfrentando para ello al entonces campeón de la división en la compañía, <b>Renan Ferreira</b>, a quien sería capaz de derrotar por KO en el primer asalto de la pelea, convirtiéndose en el nuevo campeón de Peso Pesado de PFL, en su debut en la compañía. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}