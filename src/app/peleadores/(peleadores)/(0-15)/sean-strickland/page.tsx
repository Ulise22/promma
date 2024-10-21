import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import strickland from '@/assets/peleadores__images/20-30/sean-strickland/strickland.png'
import sparring from '@/assets/peleadores__images/20-30/sean-strickland/strickland_sparring2.jpg'
import pelea from '@/assets/peleadores__images/20-30/sean-strickland/strickland_peleando.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sean Strickland',
    description: 'Sean Strickland es un peleador estadounidense de MMA que compite en la división de peso mediano de la UFC desde mediados de marzo de 2014, cuando haría su debut ante Bubba McDaniel. Pondría su nombre en los libros de historia de la compañía cuando en septiembre de 2023 consiguió ser campeón de la División de Peso Mediano de la UFC, al derrotar por decisión unánime al histórico campeón Israel Adesanya.',
    openGraph: {
        title: 'Sean Strickland',
        description: 'Sean Strickland es un peleador estadounidense de MMA que compite en la división de peso mediano de la UFC desde mediados de marzo de 2014, cuando haría su debut ante Bubba McDaniel. Pondría su nombre en los libros de historia de la compañía cuando en septiembre de 2023 consiguió ser campeón de la División de Peso Mediano de la UFC, al derrotar por decisión unánime al histórico campeón Israel Adesanya.',
        url: 'https://fullmma.org/peleadores/sean-strickland'
    }
}

export default function Strickland () {
    return(
        <main> 
            <PeleadoresHero peleadoresImage={strickland} w={29} l={6} d={0} nombre='Sean Strickland' categoria='Peso Medio' apodo={null} />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Sean Strickland UFC</h2>
                    <p className={styles.peleador__article__text}>Sean Strickland es un peleador estadounidense de MMA que compite en la división de peso mediano de la <Link href='/articulos/ufc'>UFC</Link> desde mediados de marzo de 2014, cuando haría su debut ante <b>Bubba McDaniel</b>. Pondría su nombre en los libros de historia de la compañía cuando en septiembre de 2023 consiguió ser campeón de la División de Peso Mediano de la UFC, al derrotar por decisión unánime al histórico campeón <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/jRic2v-HfLs?si=FBIpFjm7RF0v3gro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2 className={styles.peleador__article__title}>Sean Strickland record</h2>
                    <p className={styles.peleador__article__text}>Actualmente, Sean Strickland ostenta un record de 29-6. Ganando 11 de sus combates por la vía del nocaut, 4 por sumisión y 14 por decisión. Mientras que de sus 6 derrotas, 2 fueron por la vía del nocaut y las otras 4 fueron por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Sean Strickland Historia</h2>
                    <p className={styles.peleador__article__text}>Sean Strickland nació el 27 de febrero de 1991, en Estados Unidos, en New Bern, Carolina del Norte. Sean en varias ocasiones habló de que tuvo una infancia difícil y un tanto traumatica. Debido a que creció en una familia pobre, con un padre alcoholico, violento, del cual él y su madre recibieron abusos, siendo críado en lo que en Estados Unidos se conoce como &quot;White Trash&quot;, o &quot;basura blanca&quot;.</p>
                    <p className={styles.peleador__article__text}>Este entornó familiar en el que creció le ocasionó problemas en la escuela de niño, ya que actuaba como un bully hacia aquellos que su padre le enseñó a odiar. Pero afortunadamente cuando el joven Sean tenía 14 años, fue anotado por su madre a clases de artes marciales mixtas, donde pudo canalizar sus emociones, y donde pudo relacionarse con personas de diferentes culturas que le enseñaron, en sus propias palabras, que lo que su papá le inculcó &quot;era pura mierda&quot;.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/xHiwI04xlSY?si=iDlN7ZYV8EKZVI4o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Siguiendo este camino, se convertiría rápidamente en luchador profesional, haciendo de este deporte una forma de vida con tan solo 16 años. Lo que es curioso, porque a diferencia de muchos otros peleadores de los que hablamos en este espacio, Sean Strickland es de los pocos que no tuvo otro trabajo por fuera de las MMA en su vida.</p>
                    <p className={styles.peleador__article__text}>Haría su debut profesional en la promotora <b>KOTC</b>, en donde pelearía por primera vez el día 22 de marzo de 2008, enfrentando al estadounidense <b>Tyler Potett</b>, a quien sería capaz de derrotar por sumisión en el segundo asalto de la pelea. En esta misma compañía volvería a pelear 12 meses después, el 14 de marzo de 2009, para enfrentar a su compatriota <b>Brandon Ellsworth</b>, a quien sería capaz de derrotar por TKO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>En esta compañía tendría otros 4 combates, de los cuales ganaría 4 por nocaut y 1 por sumisión. De esta manera, habiendo acumulado un récord perfecto de 7-0, tendría la oportunidad de pelear por el cinturón de la compañía, el día 17 de diciembre de 2011, enfrentando para esto al peleador americano <b>Brandon Hunt</b>, a quien en el primer asalto lograría noquear, consiguiendo con tan sólo 20 años, convertirse en el campeón de peso medio de <b>King Of The Cage</b>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/ytI6eIWJIdg?si=kDIvsV6FKTYTkQ2k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Defendería el cinturón el 26 de abril del año siguiente en una revancha ante el mismo rival, que acabaría de la misma manera con Sean Stricland noqueando en el primer asalto a su oponente. Ese mismo año defendería ante <b>Josh Bryant</b>, a quien lograría derrotar por decisión dividida. </p>
                    <p className={styles.peleador__article__text}>En el año 2013 tendría 3 combates en la compañía, siendo el primer de ellos la defensa de su cinturón ante <b>Bill Albrecht</b>, a quien lograría dejar KO de un puñetazo en el primer asalto. La segunda sería enfrentando al japones <b>Yusuke Sakashita</b>, a quien vencería luego de 5 asaltos por decisión dividida. Y la última pelea del año, y última pelea en la compañía, sería defendiendo su cinturón ante el estadounidense <b>Matt Lagler</b>, a quien derrotaría por TKO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>Manteniéndose invicto, con 5 defensas exitosas de su título y un récord de 13-0, a Sean Strickland se le presentaría la oportunidad de competir en la compañía de artes marciales mixtas más grande del mundo, haciendo su debut efectivo en la UFC el 15 de marzo de 2014 en el UFC 171, enfrentando para ello a <b>Bubba McDaniel</b>, a quien lograría someter en el primer asalto de la pelea. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/w4ExeYa9OUI?si=yQ_ZduaHNyclqJsV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente pelea que tendría lugar el 31 de mayo de ese mismo año, sería capaz de derrotar por decisión dividida al inglés <b>Luke Barnatt</b>. Luego, en el evento de UFC que tuvo lugar en Brasil, organizado en febrero de 2015, tendría su debut en la división de peso wélter, donde se vería cara a cara con el histórico peleador argentino <Link href='/peleadores/santiago-ponzinibbio'>Santiago Ponzinibbio</Link>, quien le quitaría el invicto y le haría sufrir la primer derrota de su carrera a nuestro protagonista, luego de que superados los 3 asaltos, se llevara la victoria por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Pese a aquella derrota, sería capaz de hilar 3 victorias consecutivas, al derrotar en julio de 2015 al brasileño <b>Igor Araújo</b> por decisión unánime; al vencer por KO en el tercer asalto de la pelea al dominicano <b>Alex García</b> en febrero de 2016; y al derrotar al inglés <b>Tom Breese</b> por decisión dividida junio de 2016, en lo que sería el <b>UFC 199</b>. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/-ZGWMG1fqGE?si=p7oWJfEbZPQKhPK4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente pelea volvería a perder sin embargo, al enfrentarse a quien en el futuro se convertiría en un histórico campeón de peso wélter, <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, quien lo dominaría durante los 3 asaltos que duró la pelea, llevándose la victoria por decisión unánime. Luego de eso volvería a la victoria, al derrotar por decisión unánime al estadounidense <b>Court McGee</b>, en una serie de acontecimientos curiosos, cuando originalmente se había decretado un empate, que fue corregido al notar que se habían calculado mal las puntuaciones. </p>
                    <p className={styles.peleador__article__text}>Finalmente en el año 2018 tendría sus últimas 2 peleas en la división de peso wélter, perdiendo la primera ante el brasileño <b>Elizeu Zaleski dos Santos</b> por TKO en el primer asalto, al recibir una patada giratoria que lo derribaría al suelo donde sería golpeado hasta ser separado por el árbitro. Y la segunda pelea ante el francés <b>Nordine Taleb</b>, con quien sería capaz de volver a la victoria al noquearlo en el segundo asalto del combate. </p>
                    <p className={styles.peleador__article__text}>Strickland se tomaría el año 2019 sin pelear, debido a que sufrió un accidente de moto del que tuvo que recuperarse, y que le dejó secuelas que lo llevaron incluso a cambiar su estilo de pelea. Finalmente volvería a pelear el 31 de octubre de 2020, esta vez regresando a la división de peso medio, donde enfrentaría primeramente al galés <b>Jack Marshman</b>, a quien luego de 3 asaltos derrotaría por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/_99w7g5GcGs?si=WJTTQtNcJXS6VKBK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente combate, que tendría lugar tan sólo 2 semanas después, el 14 de noviembre de 2020, enfrentaría al luchador americano <b>Brendan Allen</b>, a quien sorprendemente sería capaz de noquear en el segundo asalto. Ganando de esta manera no sólo el combate, sino el primer bono de su carrera a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/_oaryG5uoKM?si=T2dAklU_P76rxpcc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En el año 2021 tendría otros 2 combates en la división de peso medio, enfrentando primero el 1 de mayo al luchador polaco <b>Krzysztof Jotko</b>, a quien luego de 3 asaltos sería capaz de derrotar por decisión unánime.</p>
                    <p className={styles.peleador__article__text}>Seguido de esto, comenzaría una etapa curiosa en la carrera de Strickland, donde sería usado por la UFC para encabezar eventos en el UFC Apex, en Las Vegas. Siendo el primero de estos eventos el organizado el 31 de julio de 2021, cuando enfrentaría al jamaiquino <b>Uriah Hall</b>, a quien luego de 5 asaltos sería capaz de derrotar por decisión unánime.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/2G3XoRi0Sfo?si=Zab1G_cTTFsyH1io" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Para el 6 de febrero de 2022, se lo programaría para encabezar el evento de UFC Fight Night ante el luchador sueco <b>Jack Hermansson</b>, quien en ese entonces estaba ranqueado #6 en la división, y a quien luego de 5 asaltos sería capaz de derrotar por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/hntOLexrB9o?si=lnUNNSruypUJZ8ra" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Luego de acumular una racha de 6 victorias consecutivas en la UFC, con un récord de 25-3, y estando ranqueado #4 en la división, Strickland aceptaría pelear en julio de 2022 contra un luchador brasileño que sólo llevaba 2 peleas en la compañía, y que hasta el momento no había ocupado ningún lugar en los rankings, pero que pocos sabíamos, se convertiría en una estrella de manera exponencial, y no es nadie menos que <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, quien en el primer asalto de la pelea noquearía a nuestro protagonista. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/SqQ8VRUKx2g?si=SBDmJyQ7o11Z0wMY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Para peor, esta derrota lo haría retroceder varios puestos en los rankings, pasando de ocupar el puesto #4 a ocupar el #7. Mas encima perdería su siguiente pelea en diciembre de ese mismo año ante el veterano <b>Jared Cannonier</b>, en una pelea a 5 asaltos que se llevó su rival en una controvertida decisión dividida. </p>
                    <p className={styles.peleador__article__text}>El 2023 sin embargo, sería el año de su redención, y el más importante de su carrera profesional. teniendo que luchar primero en enero contra un peleador que estaba bastante más atrás que él en los rankings como lo es <b>Nassourdine Imavov</b>, con quien protagonizaría un UFC Fight Night, que ganaría Strickland por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/zTHz8F7ORQo?si=REGPaVo3eA0UtjzI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Seguido de eso, pelearía ante un luchador que no estaba ni ranqueado, como lo es el daguestaní, nacionalizado alemán, <b>Abusupiyan Magomedov</b>, con quien encabezaría otro Fight Night el 1 de julio. Consiguiendo esa noche noquear a su rival en el segundo asalto, ganando el segundo bono de su carrera a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/j2e_dDPSgZ4?si=soh3v_XSd271dyli" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>La oportunidad de su vida, y el highlight de su carrera, al menos hasta ese momento, llegaría cuando necesitados de un rival que enfrente al histórico campeón <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link> en septiembre de ese año para encabezar el UFC 294 organizado en la ciudad australiana de Sidney, terminarían por acudir a Sean, quien fue el único que aceptó sin mucho tiempo de preparación. Como curiosidad, desde aquella derrota que tuvo Sean Strickland ante <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, ambos peleadores terminaron por volverse amigos, llegando a entrenar juntos en varias ocasiones antes de sus peleas, dato que no es menor teniendo en cuenta que el brasileño había sido el único en derrotar a Adesanya en la división de peso medio, por lo que algún consejo útil le habrá dado al estadounidense.</p>
                    <p className={styles.peleador__article__text}>El punto es que aquella noche, nuestro protagonista sería capaz de hacer historia, al primero conectar un knockdown en el primer asalto estando a punto de noquear al campeón, y luego dominando de principio a fin a un luchador que todos presuponían mejor que él. Strickland acabaría por llevarse la victoria por decisión unánime, convirtiéndose en campeón de Peso Mediano de la UFC, y ganando el bono a la Actuación de la Noche por el espectáculo que montó ante su rival. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/m3jNtOxIyDA?si=pEtg7QMGAeh0xZkI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su primer defensa estaría programada para el 20 de enero de 2024 en el <Link href='/covertura-ufc/ufc297'>UFC 297</Link> ante el sudafricano <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link>, contra quien lamentablemente para él caería derrotado por decisión dividida, en lo que fue una pelea muy cerrada, y que le ganó el primer bono de su carrera a la Pelea de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/RCw6lEJVsss?si=jcFRqWPcqYau984v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Sean aceptaría encabezar la pelea coestelar del <Link href='/covertura-ufc/ufc302'>UFC 302</Link> ante el brasileño <b>Paulo Costa</b> el 1 de junio de 2024, en una pelea a 5 asaltos que dominaría de principio a fin y que se acabaría llevando por decisión. </p>
                    <p className={styles.peleador__article__text}>Luego de esto, alegando que su pelea ante Du Plessis la había ganado él en realidad, y debido a que esta fue lo suficientemente cerrada, es que pidió una revancha por el título, que pareciera tendrá lugar, pero sin ninguna confirmación oficial hasta el momento.</p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}