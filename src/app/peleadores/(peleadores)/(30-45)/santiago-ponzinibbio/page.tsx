import PeleadoresHero from '@/app/peleadores/components/PeleadoresHero'
import ponzinibbio from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio.png'
import santiagoArgentina from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio-argentina.jpg'
import pelea from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio-peleando.jpg'
import santiago_ponzinibbio from '@/assets/peleadores__images/argentinos/santiago-ponzinibbio/ponzinibbio.jpg'
import styles from '@/app/peleadores/components/peleador.module.css'
import Link from 'next/link'
import Image from 'next/image'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Santiago Ponzinibbio',
    description: 'Santiago Ponzinibbio es un luchador argentino que pelea en la división de peso wélter de la UFC desde noviembre de 2013, cuando se enfrentaría al estadounidense Ryan LaFlare. Es una de las presencias argentinas más destacadas de ufc, trás haber estado muy cerca del top5 de su categoría en el Peso Welter a fines de 2018, siendo el primer peleador de esta nacionalidad en estar ranqueado, y trás haber traído un evento de ufc a nuestro país en Buenos Aires en ese mismo año, el primero que se organizo en Argentina por esta compañía.',
    openGraph: {
        title: 'Santiago Ponzinibbio',
        description: 'Santiago Ponzinibbio es un luchador argentino que pelea en la división de peso wélter de la UFC desde noviembre de 2013, cuando se enfrentaría al estadounidense Ryan LaFlare. Es una de las presencias argentinas más destacadas de ufc, trás haber estado muy cerca del top5 de su categoría en el Peso Welter a fines de 2018, siendo el primer peleador de esta nacionalidad en estar ranqueado, y trás haber traído un evento de ufc a nuestro país en Buenos Aires en ese mismo año, el primero que se organizo en Argentina por esta compañía.',
        url: 'https://fullmma.org/peleadores/santiago-ponzinibbio'
    }
}

export default function Ponzinibbio () {
    return(
        <main>
            <PeleadoresHero peleadoresImage={ponzinibbio} w={29} l={8} d={0} categoria='Peso Welter' nombre='Santiago Ponzinibbio' apodo='ARGENTINE DAGGER' />
            <section className={styles.peleador__articles__container}>
                <article className={styles.peleador__article}>
                    <h2 className={styles.peleador__article__title}>Santiago Ponzinibbio UFC</h2>
                    <p className={styles.peleador__article__text}>Santiago Ponzinibbio es un luchador argentino que pelea en la división de peso wélter de la <Link href='/articulos/ufc'>UFC</Link> desde noviembre de 2013, cuando se enfrentaría al estadounidense <b>Ryan LaFlare</b>. Es una de las presencias argentinas más destacadas de ufc, trás haber estado muy cerca del top5 de su categoría en el Peso Welter a fines de 2018, siendo el primer peleador de esta nacionalidad en estar ranqueado, y trás haber traído un evento de ufc a nuestro país en Buenos Aires en ese mismo año, el primero que se organizo en Argentina por esta compañía.</p>
                    <h2 className={styles.peleador__article__title}>Ponzinibbio record</h2>
                    <p className={styles.peleador__article__text}>Actualmente Santiago Ponzinibbio mantiene un record profesional en la MMA de 29-8-0 (29 victorias, 7 derrotas y 0 empates). Siendo 16 de sus victorias por la vía del nocaut, 6 por sumisión y 7 por decisión. Y de sus 8 derrotas, 4 fueron por la vía del nocaut y 4 por decisión.</p>
                    <h2 className={styles.peleador__article__title}>Santiago Ponzinibbio Biografía</h2>
                    <p className={styles.peleador__article__text}>Santiago Ponzinibbio nació en La Plata, Bs As, Argentina, el 26 de septiembre de 1986. De pequeño siempre estuvo interesado en los deportes, pero fue el Kickboxing lo que llamó particularmente su atención, comenzando a entrenar este arte marcial cuando tenía 13 años. Desde joven estuvo interesado en las MMA, pero al no ser un deporte tan popular en su país, no había muchos gimnasios locales donde pudiera entrenar. Esto lo llevó a viajar e irse a vivir en Brasil, donde se dedicó a hacer &quot;changas&quot;, para vivir mientras entrenaba en diferentes gimnasios para finalmente poder pelear.</p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/t2pdtBmsECE?si=ArBOQ-aKhxJov-zo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Su sacrificio y apuesta dió frutos, dado que el 19 de julio de 2008 haría su debut profesional en una promotora regional, ante su compatriota <b>Gaston Micucci</b>, a quien lograría derrotar por TKO en el tercer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Demostraría tener un talento nato para el deporte, al ganar sus primeros 11 combates profesionales, en peleas organizadas tanto en Argentina como en Brasil, siendo 5 de estas victorias por la vía del nocaut, 4 por la vía de la sumisión y sólo 2 por decisión. </p>
                    <p className={styles.peleador__article__text}>Su primera derrota llegaría el 9 de julio de 2011 enfrentando al brasileño <b>Leonardo Mafra</b>, quien lo derrotaría por TKO en el primer asalto. Sin embargo, Santiago sería capaz de reponerse rápido y contundente de esta victoria, ganando sus 2 siguientes combates con fecha para el mismo día, el 17 de septiembre de 2011, enfrentando la misma noche al brasileño <b>Deivid Santos</b>, a quien derrotaría por TKO en el tercer asalto; y luego a <b>Lucas Nascimento</b>, a quien derrotaría por TKO en el primer asalto. </p>
                    <p className={styles.peleador__article__text}>En su siguiente pelea, ya con un récord de 13-1, pelearía en el <b>São José Super Fight 1</b>, para disputar el cinturón de la compañía ante <b>Sebastião Junior</b>, el día 1 de noviembre de ese mismo 2011, consiguiendo ganar el cinturón al noquear a su rival a los 2 minutos del primer asalto. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/TvBBRl_A19Y?si=-No-2YuIM7eAvuT4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Conseguiría ganar sus siguientes 3 combates en Brasil ante luchadores brasileños, siendo la primera de estas victorias la que tendría el 12 de diciembre de ese mismo año enfrentando a <b>Williams Dias</b>, a quien vencer por TKO al final del segundo asalto, luego de que su rival abandonara la pelea; la segunda llegaría el 2 de marzo de 2012, cuando lograría someter a <b>Diego Vieira</b> en el primer asalto; y finalmente, la tercera victoria llegaría ese mismo 2 de marzo, cuando en su revancha ante <b>Sebastião Junior</b>, lograría noquear en el primer asalto, horas después de su anterior combate. Además, en lo que sería su última pelea del año, enfrentaría a <b>Cleiton Duarte</b>, a quien sometería en el primer asalto, en lo que era su primer defensa del título conseguido en <b>	São José Super Fight</b>. </p>
                    <p className={styles.peleador__article__text}>Al año siguiente, en el 2013, se le presentaría la oportunidad de su vida, cuando podría participar como miembro del reality de televisión de la UFC <b>The Ultimage Fighter</b>, en su segunda edición en Brasil, formando parte del equipo de <b>Nogueira</b>. En aquel torneo lograría destacar al ganar su primer pelea de eliminación, al noquear a <b>Thiago Silva</b> en el primer asalto. Luego lograría una victoria ante <b>Marcio Santos</b> por TKO, y una victoria ante <b>Cleiton Duarte</b> por decisión unánime, que le permitiría llegar a las semifinales del torneo. En aquellas semis, lograría derrotar a <b>Leonardo Santos</b> por decisión unánime, aunque lamentablemente se lesionaría la mano durante esta pelea, impidiéndole competir en la final. De igual forma, la actuación de nuestro protagonista fue de lo más destacada, siendo aquella pelea con Santos la elegida como la Pelea de la Temporada, además de que su nocaut ante Marcio Santos sería elegido el Nocaut de la Temporada, lo que significó un bono de $50.000 para Ponzinibbio. Por último, y más importante, el argentino se ganaría un contrato con la UFC, que lo habilitaría a competir desde entonces. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/Px_R8K2LtGg?si=ap2W8pI5XHYN_GbX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>Haría su debut en la compañía el día 9 de noviembre de 2013, enfrentando para ello al estadounidense <b>Ryan LaFlare</b>, contra quien lamentablemente caería derrotado por decisión unánime. Sin embargo volvería a ganar en su siguiente combate, con fecha para el 13 de septiembre de 2014, logrando noquear en el primer asalto al brasileño <b>Wendell Oliveira</b>. En su siguiente combate el 22 de febrero de 2015, se enfrentaría a un joven <Link href='/peleadores/sean-strickland'>Sean Strickland</Link>, quien tiempo después se convertiría en campeón de peso mediano en la compañía, a quien lograría derrotar en una actuación dominante por decisión unánime. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/3mmurPR40js?si=oJQNKnQlMZ1M211B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente pelea con fecha para el 27 de junio de ese mismo año, se enfrentaría ante <b>Lorenz Larkin</b>, con quien lamentablemente caería noqueado en el segundo asalto, en una pelea que igual le valdría para ganar el bono a La Pelea de la Noche. Sin embargo, esta sería su última derrota en mucho tiempo, dado que a partir de este momento es cuando comenzaría su ascenso meteórico en la UFC. </p>
                    <p className={styles.peleador__article__text}>Comenzaría su racha de victorias el 10 de diciembre de ese mismo año, cuando enfrentaría al sueco <b>Andreas Stahl</b>, consiguiendo una victoria por TKO en el primer asalto de la pelea. El 16 de abril de 2016 volvería al octágono para enfrentar al estadounidense <b>Court McGee</b>, a quien derrotar por TKO en el primer asalto. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/_Pnw0h9YoNY?si=I8nKibBqm7VeafYp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 6 de agosto de ese mismo año se enfrentaría al peleador americano <b>Zak Cummings</b>, a quien lograría derrotar por decisión unánime. El 19 de febrero de 2017, se enfrentarí al luchador francés <b>Nordine Taleb</b>, contra quien conseguiría otra victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>El 16 de febrero de 2017, protagonizaría por primera vez en su carrera una cartelera de UFC, en un evento organizado en la ciudad de Glasgow, Escocia, que lo tendría peleando contra el islandés <b>Gunnar Nelson</b>, a quien en una actuación espectacular, dejaría KO minuto de la pelea. Ganando por este desempeño el bono a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/NwWHMuznF_Q?si=NRy-jpOUgQURTbgG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En su siguiente pelea se enfrentaría al siempre controvertido <b>Mike Perry</b>, en un evento de UFC organizado en Canadá, donde conseguiría luego de 3 asaltos hacerse con la victoria por decisión unánime. </p>
                    <p className={styles.peleador__article__text}>En el año 2018 sólo pelearía una vez, pero sería en un evento histórico, dado que el peleador argentino traería la UFC a su país natal por primera vez, en el <b>UFC Fight Night: Magny vs. Ponzinibbio</b> organizado en Buenos Aires. Además, lograría cerrar aquella noche histórica con un desempeño super destacable, dado que conseguiría dejar KO al entonces ranqueado #8 <b>Neil Magny</b> en el cuarto asalto de la pelea, ganándose por esto el bono a la Actuación de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/V-VPOFbvnp0?si=2hpMrlHzd5QDMccu" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h3>Santiago Ponzinibbio enfermedad</h3>
                    <p className={styles.peleador__article__text}>Después de su victoria en Argentina contra Magny, Ponzinibbio estaba en el pico de su carrera, con 7 victorias consecutivas que parecían tenerlo bastante encaminado a tener una oportunidad por el título. Sin embargo, las cosas se torcieron cuando según él mismo contó, comenzó a sufrir una infección de sangre dentro del cuerpo. La infección llegó a la sangre y tuvo dos tipos diferentes de bacterias. Debido a esto comenzó un tratamiento que desafortunadamente traería efectos secundarios.</p>
                    <p className={styles.peleador__article__text}>Los medicamentos que tomó le hicieron sufrir fiebre y le hicieron perder peso y por tanto musculatura. Esto lo llevó a estar hospitalizado 3 meses. Resultó ser que su infección estaba en los huesos, y esto llevó a que sus doctores le advirtieran de lo peligroso de seguir peleando.</p>
                    <p className={styles.peleador__article__text}>Afortunadamente, luego de meses de de reahibilitación, Santiago Ponzinibbio fue capaz de reponerse y de dar ejemplo de resiliencia. Luego de 2 años de batallar con sus problemas de salud, en enero de 2021 volvió al octagono y actualmente se encuentra activo peleando en UFC.</p>
                    <h3>La Vuelta de Ponzinibbio</h3>
                    <p className={styles.peleador__article__text}>Luego de estar poco más de 2 años fuera de los octágonos, volvería a subirse a la jaula el 16 de enero de 2021, enfrentando al siempre difícil peleador chino <b>Li Jingliang</b>, contra quien lastimosamente caería derrotado por KO finalizando el primer asalto. De igual forma, volvería a pelear unos pocos meses después, enfrentando el día 5 de junio de ese mismo año al estadounidense <b>Miguel Baeza</b>, contra quien lograría volver a la senda de la victoria, derrotando a su rival por decisión unánime, en una actuación que le haría ganador del bono a La Pelea de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/-rJqk5nFQEU?si=Qiio6G5GiTbNk8BV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>A finales de ese mismo año volvería a pelear para enfrentarse al americano <b>Geoff Neal</b> en el UFC 269, contra quien caería derrotado luego de 3 asaltos por decisión dividida. </p>
                    <p className={styles.peleador__article__text}>En el año 2022 tendría 2 peleas por delante, siendo la primera el 21 de mayo ante el brasileño <b>Michel Pereira</b>, en una tremenda pelea que se extendería hasta los 3 asaltos, en donde lastimosamente el argentino volvería a perder por decisión dividida. De igual manera, este combate le serviría a Ponzinibbio para ganar nuevamente el bono a La Pelea de la Noche. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/1Y9Gz8hlCV0?si=Iz9-Ilss9LrwIhGi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>El 10 de diciembre tendría el segundo combate del año, donde se vería cara a cara con el estadounidense <b>Alex Morono</b> en el UFC 282, logrando una impresionante victoria por TKO en el tercer asalto, en un desempeño que le haría merecedor del bono a la Actuación de la Noche, que ganaría por tercera vez en su carrera. </p>
                    <iframe className={styles.peleador__article__video} width="560" height="315" src="https://www.youtube.com/embed/KePnDjnGbFQ?si=kKAC4-gBJ-IiMpIb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <p className={styles.peleador__article__text}>En el 2023 sólo pelearía una vez, enfrentándose el día 8 de abril en el UFC 287 ante el estadounidense <b>Kevin Holland</b>, contra quien sufriría una dolorosa derrota por KO en el tercer asalto de la pelea. </p>
                    <p className={styles.peleador__article__text}>Santiago Ponzinibbio volvería a subirse al octágono el 13 de julio de 2024 para enfrentar al luchador daguestaní <b>Muslim Salikhov</b>, en un enfrentamiento que se extendería hasta los 3 asaltos, y en lo que fue una pelea bastante cerrada terminaría por perder nuevamente por decisión dividida. </p>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}