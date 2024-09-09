import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
/* Images */
import hero from '@/assets/articulos/heros/50-60/butterbean-hero.jpeg'

export const metadata: Metadata = {
    title: 'Eric Butterbean Biografía',
    description: 'Eric Esch, más conocido por su apodo "Butterbean", es uno de los personajes más carismáticos y únicos en la historia del deporte de combate. Pasando de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas. Con su apariencia inconfundible y su impresionante capacidad para noquear a sus oponentes, Butterbean se ganó tanto el respeto como el cariño del público. Aunque muchos lo subestimaron por su figura corpulenta, su poder de golpeo y su resistencia mental lo llevaron a competir contra algunos de los nombres más grandes en ambos deportes. Esta biografía explora la vida de un hombre que, contra todo pronóstico, se convirtió en una leyenda en los cuadriláteros y las jaulas.',
    openGraph: {
        title: 'Eric Butterbean Biografía',
        description: 'Eric Esch, más conocido por su apodo "Butterbean", es uno de los personajes más carismáticos y únicos en la historia del deporte de combate. Pasando de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas. Con su apariencia inconfundible y su impresionante capacidad para noquear a sus oponentes, Butterbean se ganó tanto el respeto como el cariño del público. Aunque muchos lo subestimaron por su figura corpulenta, su poder de golpeo y su resistencia mental lo llevaron a competir contra algunos de los nombres más grandes en ambos deportes. Esta biografía explora la vida de un hombre que, contra todo pronóstico, se convirtió en una leyenda en los cuadriláteros y las jaulas.',
        url: 'https://fullmma.org/articulos/biografia-de-eric-butterbean'
    }
}

export default function KimboSlice () {
    return(
        <main>
            <ArticleHero title='¿Quién fue Eric Butterbean y por qué era tan famoso?' subtitle='La historia de vida de Eric Butterbean, quien paso de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas.' image={hero} date='2024-09-08' author={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Eric Esch, más conocido por su apodo &quot;Butterbean&quot;, es uno de los personajes más carismáticos y únicos en la historia del deporte de combate. Pasando de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas. Con su apariencia inconfundible y su impresionante capacidad para noquear a sus oponentes, Butterbean se ganó tanto el respeto como el cariño del público. Aunque muchos lo subestimaron por su figura corpulenta, su poder de golpeo y su resistencia mental lo llevaron a competir contra algunos de los nombres más grandes en ambos deportes. Esta biografía explora la vida de un hombre que, contra todo pronóstico, se convirtió en una leyenda en los cuadriláteros y las jaulas.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/vHgSiK8f_84?si=WIyrESCHVDUPWhKi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Eric David Scott Esch, mejor conocido por su apodo <b>Butterbean</b>, nació el 3 de agosto de 1996 en la ciudad de Atlanta, Georgia, en Estados Unidos. Tuvo una infancia complicada, con su familia mudándose de Estado constantemente, con lo complicado que ello es para un niño. Sufrió la pérdida de su madre cuando tenía apenas 8 años, y a menudo sufría bullyng en la escuela por su sobrepeso, aunque esto último por suerte no era tan frecuente, y Eric supo llevarlo bien. Eric nunca había tenido mucho contacto con el deporte en general, salvo por su etapa en la secundaria, cuando practicó fútbol americano.</p>
                    <p>Siendo ya un adulto, comenzó a trabajar en una empresa de casa prefabricadas. Fue allí donde unos compañeros de trabajo lo desafiaron a participar en el <b>Toughman Contest</b>, una competición de boxeo donde practicamente cualquiera se puede inscribir, y que era muy popular en el terreno local. Uno de los requisitos para participar en dicho torneo, era no pesar más de 181 kilos, Eric pesaba 190, por lo que tuvo que comenzar una dieta estricta para poder participar, basada mayormente en pollo y frijoles de mantequilla. Fue de esta dieta de donde sacó su apodo, dado que la odiaba y sus amigos en tono jocoso le apodaron Butterbean (frijoles de mantequilla).</p>
                    <p>Eric perdería su primer pelea en esta competición, pero lejos de desanimarlo, lo incentivó a prepararse mejor para competir, y es aquí cuando comienza su carrera deportiva. Se convertiría en el 5 veces <b>World Toughman Heavyweight Champion</b>, acumulando un récord de 56-5, siendo 36 de sus victorias por nocaut. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/PHB6hDDzXh8?si=MBz2AIi-mf6ibnlr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>El ascenso en el mundo del boxeo por parte de Butterbean fue meteórico, haciendo su debut profesional el día 15 de octubre de 1994, ante <b>Tim Daniels</b> por decisión, ya consiguió ser televisado en su segundo combate profesional, algo que normalmente a otros peleadores les cuesta decenas de peleas conseguir. El propio Eric era consciente de esto, por eso en una entrevista en el 2008 dijo: <b>&quot;Todo despegó bastante rápido, en mi segunda pelea profesional ya estaba en televisión nacional. No suele suceder así, normalmente necesitas 15 o 20 peleas antes de estar en TV, a menos que seas muy afortunado. Ni siquiera (Mike) Tyson estuvo en TV en su segunda pelea, probablemente tuvo 5 o 6 antes de que suceda. [...] Probablemente tenga más peleas televisadas que cualquier campeón mundial por ahí.&quot;</b></p>
                    <p>Eric sería un peleador muy activo en el boxeo, ganando la mayoría de sus combates, obteniendo varios nocauts. Entre sus victorias, destacaría la que tuvo ante <b>Pat Jackson</b> en octubre de 1995, dado que Butterbean, accidentalmente le propinaría un golpe al árbitro que lo dejaría KO, esto llevó a su rival a no querer seguir con la pelea, lo que terminó por otorgarle a Eric la victoria. </p>
                    <p>En abril de 1997, Butterbean sería galardonado con el <b>IBA World Super Heavyweight Championship pre-fight</b>, luego de conseguir una victoria por TKO en el segundo asalto de su pelea con <b>Ed White</b>. Eric retendría el título al defenderlo en 5 oportunidades de forma exitosa, siendo más tarde premiado con el <b>WAA World Heavyweight Championship</b>. </p>
                    <p>El 27 de julio de 2002, Butterbean tendría la primer y única pelea de su carrera que duraría 10 rounds, ante el estadounidense y excampeón mundial de boxeo, <b>Larry Holmes</b>, quien con sus entonces 52 años, sería capaz de derrotar a nuestro protagonista por decisión unánime. Luego de esta derrota, aunque continuaría peleando activamente en el boxeo, Butterbean decidiría comenzar a pelear en Kickboxing.</p>
                    <p>Para pelear en este deporte, firmaría con la promotora <b>K-1</b>, en donde debutaría el 29 de junio de 2003, ante el japonés <b>Yusuke Fujimoto</b>, a quien lograría dejar KO con un gancho de izquierda en el primer asalto. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/OOvFiWy8Lzw?si=uLut1LK7oDwCh-_y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Sin embargo, nuestro protagonista perdería sus 3 siguientes combates, siendo la primera de estas derrotas por KO ante el sudafricano <b>Mike Bernardo</b>, y las siguientes por decisión, ante el japonés <b>Hiromi Amada</b> y ante el brasileño <b>Montanha Silva</b>, este último con quien protagonizó una de las peleas más bizarras, siendo un freak genético al tener la altura de un gigante. Finalmente Butterbean terminaría su aventura en el kickboxing con 7 peleas profesionales y un récord de 3-4. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/tdEPccmofBc?si=-syhRWFg9iAxvsPI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Eric Butterbean Carrera en MMA</h2>
                    <p>Aunque más conocido por su carrera y trayectoria en el mundo del boxeo, Eric siempre fue un peleador todo terreno, habiendo competido en Lucha Libre profesional, kickboxing y MMA. Siendo su primer pelea profesional en el mundo de las artes marciales mixtas, justamente en la misma promotora que le abrió las puertas al mundo del kickboxing, <b>K-1</b>. Teniendo su debut el día 31 de diciembre de 2003, ante el japonés <b>Genki Sudo</b>, un exluchador de <Link href='/articulos/ufc'>UFC</Link> quien tenía en ese entonces un récord de 8-3-1. Su rival, aprovechando la poca experiencia del estadounidense en el suele, buscaría un derribo y finalmente derrotaría a Eric por sumisión en el segundo asalto de la pelea. </p>
                    <p>Su segunda pelea que tendría lugar 2 años después, en febrero de 2005, terminaría en un empate, pero sería a partir de este momento en que se volvería más activo en las MMA, teniendo una pelea más en diciembre de ese año, donde conseguiría su primer victoria por sumisión, ante <b>Walley Keenboom</b>. </p>
                    <p>En 2006 tendría 8 peleas profesionales en MMA (además de las 3 que tendría en boxeo), siendo sus 5 primeras victorias (2 por nocaut y 3 por sumisión), lo que le abriría las puertas para participar en la que entonces era la compañía más grande de MMA en el mundo <b>Pride FC (ver <Link href='/articulos/que-paso-con-pride-fc'>¿Qué pasó con Pride?</Link>)</b>, donde debutaría el 26 de agosto ante el japonés <b>Ikuhisa Minowa</b>, ante quien cayó derrotado por sumisión en el primer asalto de la pelea. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/AqxlqczGyTE?si=z8pCyzgKpYXxKdTj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>De igual manera, conseguiría ganar su siguiente combate en la compañía ante <b>Sean O&apos;Haire</b>, logrando dejar KO a su rival a los 29 segundos de la pelea. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/yedvAH6AyRs?si=BHPQ2NBgXBVDOvjc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Su último combate del año sería ante <b>Rob Broughton</b> y lo perdería por TKO, por sumisión de golpes. Pero esto llevarí a Eric a dejar de pelear, dado que el 2007 sería otro año muy activo, peleando hasta 7 veces durante este lapso de tiempo, ganando 5 peleas y perdiendo 2. De sus victorias destacaría la que tuvo ante el brasileño <b>Zuluzinho</b> en lo que fue su última pelea para <b>PRIDE FC</b>, logrando someter a este en el segundo asalto el día 8 de abril.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/AtaCXg3-az0?si=-c5APkTTSG03sFgL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En 2008 sólo tendría una pelea, que perdería por TKO en el primer asalto ante <b>Pat Smith</b>, un kickboxer estadounidense que destacó por participar de las primeras 2 ediciones de <b>UFC</b>.</p>
                    <p>En 2009 hilaría 3 victorias consecutivas, siendo una de estas por TKO ante <b>Jefferson Hook</b> y 2 por sumisión ante <b>Tom Howard</b> y ante <b>Chris Cruit</b>. </p>
                    <p>En el 2010 tendría otros 3 combates, pero sería destacable el que tuvo contra el polaco <Link href='/articulos/mariusz-pudzianowski'>Mariusz Pudzianowski</Link>, un personaje curioso del mundo de las MMA, dado que luego de haber sido 5 veces el hombre más del mundo, decidió dedicarse al mundo de las artes marciales mixtas. Butterbean terminaría por perder esta pelea por TKO en poco más de un minuto de combate.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/fkJhMN_kcGU?si=U6tkuaKxGrMDPI_s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>En el año 2011, ya con 45 años, Butterbean tendría las últimas 3 peleas de su carrera. Siendo la primera de estas ante <b>Dean Storey</b> en el promotora <b>Elite-1 MMA</b>, donde conseguiría su primer y único título de MMA, luego de noquear en 20 segundos a su rival. Sin embargo perdería su siguiente pelea ante <b>Eric Barrak</b> por sumisión en el tercer asalto, y luego perdería por TKO en el primer asalto ante <b>Sandy Browman</b>, siendo esta su última pelea profesional.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/h0LRbpBGhxg?si=S2a9O3XDTiVnxbNO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Eric Butterbean se terminaría por retirar de las artes marciales mixtas dejando detrás un récord de 17-10-1. Siendo 8 de sus victorias por la vía del nocaut y 9 por la vía de la sumisión, bastante impresionante para una persona que viene del mundo del boxeo. De sus 10 derrotas, 7 se explican por el nocaut y 3 por sumisión. </p>
                    <h2>Eric Butterbean Pierde Peso</h2>
                    <p>Luego de retirarse de las MMA, Butterbean tuvo 2 peleas más en boxeo en el 2012 y 2013 que acabaría perdiendo, por decisión unánime y por TKO. Una vez fuera del mundo del deporte y del combate, Eric comenzó a sufrir en su salud las consecuencias que este tipo de deportes y que su propio peso traen consigo, teniendo complicaciones para caminar y necesitando a menudo de muletas y de una silla de ruedas para moverse. </p>
                    <p>Sin embargo en el 2022, Eric comenzó a trabajar con el ex wrestler <b>Diamond Dallas Page</b>, quien lo ayudó a mejorar su salud. Consiguiendo como resultado de su programa, perder alrededor de 300 libras (o más de 100 kilos), en lo que fue una transformación tremenda que además le permitió estar calificado para realizarse una operación en la cadera. Este mismo año, desde el canal de youtube <b>DDP Yoga</b>, subieron un video donde muestran los logros que consiguió el estadounidense y cómo fue su recuperación. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/uzYQufrnKWw?si=cAWBheM2HYEtrFYu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p>Luego de superar exitosamente su operación, Butterbean no escondió su deseo de volver a pelear una vez más en boxeo, habiendo recibido incluso ofertas para pelear con <b>Jake Paul</b> y con <b>Mike Tyson</b>. Aunque por el momento no existe nada oficial respecto a un posible regreso al boxeo por parte de nuestro protagonista, que dejó detrás de sí un legado que va más allá de sus victorias en el cuadrilátero o la jaula.</p>
                    <p>Su carrera, aunque marcada por logros deportivos impresionantes, es también un testimonio de perseverancia y fuerza de voluntad, logrando transformar su físico al perder peso y adoptar un estilo de vida más saludable. El legado de Butterbean es uno de lucha, superación y dedicación, tanto en el deporte como en su vida personal. Su historia es una inspiración no solo para los amantes del combate, sino para cualquiera que busque un ejemplo de cómo enfrentar las adversidades y salir victorioso, sin importar las circunstancias.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}