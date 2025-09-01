import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/70-80/mark_kerr.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Qué Le Pasó A Mark Kerr',
    description: '',
    openGraph: {
        images: 'http://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmark_kerr.1fdc047e.jpg&w=828&q=65',
        title: 'Qué Le Pasó A Mark Kerr',
        description: '',
        url: 'https://fullmma.org/articulos/que-le-paso-a-mark-kerr'
    }
}

export default function QueLePasoAMarkKerr () {
    return(
        <main>
            <ArticleHero title='¿Qué le Pasó a Mark Kerr?' subtitle='La historia de Mark Kerr, un peleador histórico de la UFC que supo ser el mejor del mundo y que tuvo una de las caídas más dolorosas en la carrera de un luchador.' image={hero} date='2025-08-28' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Fue 2 veces campeón de UFC y peleador de MMA que supo competir en PRIDE FC cuando esta estaba en su mejor momento, pero vivió una de las caídas más estrepitosas en la historia de las MMA, por lo que muchos se preguntan <b>¿qué le pasó a Mark Kerr?</b> quien pasó por momentos graves y complicados en su vida, relacionados con la adicción a los analgésicos y opiáceos, problemas con el uso de dopantes, una relación complicada y conflictiva con su esposa que terminó en un divorcio, y los problemas de salud que vinieron como consecuencia de su carrera como peleador profesional. </p>
                    <h2>Inicios de Mark Kerr</h2>
                    <p>Mark Kerr nació el 21 de diciembre de 1968 en Toledo, Ohio, Estados Unidos. Su padre Tom, era un hombre irlandés y su madre Mary, era una mujer puertorriqueña. Desde pequeño su sueño era ser un peleador de la WWE, por lo que siendo un niño organizaría peleas simuladas en su casa con sus hermanos. </p>
                    <p>En la secundaria comenzaría su carrera en Wrestling, donde conocería y compartiría la sala de lucha libre con el futuro campeón de UFC <b>Pat Miletich</b>. Pronto se convertiría en campeón estatal en la escuela Toledo Waite. En la lucha Mark había encontrado algo en lo que era realmente bueno, puesto que una vez iniciado su ciclo universitario lograría ser campeón de la División 1 en 190 libras y la All-American al derrotar en la final al que también se convertiría en futuro campeón de UFC <Link href='/leyendas/randy-couture'>Randy Couture</Link>. </p>
                    <p>Destacaría como un prodigio en Wrestling, logrando la medalla de plata en el Mundial de Wrestling en 1992, y la de oro en 1994. Ganaría la medalla de plata de 100kg en los Panamericanos organizados en Mar del Plata, Argentina, en 1995. Ganaría 4 medallas de oro en ADCC (1999, 2000, 2000, 2001). Obtendría una medalla de oro de NCAA. Finalmente tendría 1 medalla de plata de EIWA Championships en 1988, y 3 de oro (1989, 1991, 1992). </p>
                    <p>Sin embargo, debido a los problemas económicos que comenzó a sufrir, sus sueños de convertirse en un Wrestler profesional se comenzaron a desvanecer. Fue en estos momentos, cuando en busqueda de ganar algo de dinero, decidió seguir los pasos de otros de sus colegas wrestlers, como el mismo <Link href='/leyendas/randy-couture'>Randy Couture</Link>, o su compañero de entrenamiento <b>Mark Coleman</b>, quienes habían comenzado a pelear profesionalmente en MMA. </p>
                    <h2>Mark Kerr MMA</h2>
                    <p>De esta manera, Mark haría un viaje hasta el otro lado del continente hasta Brasil, para competir en <b>World Vale Tudo Championship</b>, que es una modalidad de MMA que se hacía en el pasado en el país sudamericano donde practicamente no hay reglas. A pesar de que Kerr se había arrentido de pelear a 10 minutos de que comenzara la pelea, su entrenador fue capaz de convencerlo de pelear de igual manera, argumentando que en un país como Brasil, si no se presentaba a pelear, los aficionados proablemente intentarían acabar con su vida. </p>
                    <p>Pese al miedo inicial, Kerr fue capaz de ganar su primer combate profesional por TKO a los 2 minutos del combate, ante el expeleador de UFC <b>Paul Varelans</b>. Esa misma noche debido a su victoria se en frenta a <b>Maestre Hulk</b>, a quien derrota por descalificación luego de que su rival abandonara el cuadrilatero. Y finalmente en la final de aquel torneo se enfrentaría a <b>Fabio Gurdel</b>, a quien derrotaría por decisión unánime. </p>
                    <h2>Mark Kerr: de UFC a PRIDE FC</h2>
                    <p>Luego de ganar aquel torneo de MMA en Brasil, Mark Kerr firmaría con nada menos que con la UFC, que en aquel entonces compartía el mismo formato de torneo en una noche. Debutaría en el UFC 14, donde lograría ganar el torneo de peso pesado al noquear primero a <b>Moti Horenstein</b> en el primer asalto y luego someter a <b>Dan Bobish</b> en el primer asalto. Participaría luego en el UFC 15, que volvería a ganar, luego de dejar KO con un rodillazo a <b>Greg Scott</b> y luego de someter con un mataleón a <b>Dwayne Cason</b> en la final. </p>
                    <YouTubeEmbed videoid='wwiw_zNrBHY' />
                    <p>Sin embargo, en aquella época, antes de los 2000, la UFC no gozaba de la popularidad que hoy tiene, y tenía fama de ser un deporte de bárbaros, por lo que terminó por prohibirse su transmisión por televisión en gran parte de los Estados Unidos, lo que significaba dejaba a la compañía sin una gran parte de sus ingresos. Debido a esto, Mark Kerr terminó abandonando la compañía para firmar con <b>Pride FC</b>, que en Japón gozaba de una mayor aceptación social, y que significaría una mayor paga para Kerr. </p>
                    <p>Fue acá donde Mark gozó de la mayor parte de su gloria, ganando 5 combates de manera consecutiva y luciéndose con KOs espectaculares y con sumisiones destacadas que le hicieron ganar la fama y el reconocimiento que merecía. </p>
                    <h2>Inicio de la caída de Mark Kerr</h2>
                    <p>El físico imponente que podemos apreciar de este luchador, de ninguna manera era natural, para alcanzarlo consumía de sustancias anabolizantes que mejoraban su rendimiento y le daban esa apariencia. Además, para tolerar la ansiedad que sufría previo a los combates consumía ansiolíticos. Y finalmente, para tolerar los dolores propios que generaban las peleas, consumía opioides. </p>
                    <h3>Mark Kerr y su Esposa Dawn Staples</h3>
                    <p>Además, la relación con su esposa parecía ser problemática y conflictiva. Dawn también cargaba con sus propios problemas sustancias, en este caso el alcohol, llegando incluso a pasar por alcoholicos anónimos. Ella misma reconocía ser muy celosa de Mark, y se le presentaba generándole dramas en los momentos más inoportunos. </p>
                    <p>Un día se presentó en un entrenamiento de Mark Kerr junto a <b>Bas Rutten</b>. Según contó este último, cuando Mark tiene combates, ella llegaba a casa borracha, comenzando a aporrear la puerta, desconcentrando completamente a Kerr de lo que debe hacer, generándole estrés en casa, que es todo lo contrario a lo que necesita un peleador previo a un combate. <b>&quot;Ellos deberían separarse, esa es mi opinión. Eso es todo&quot;</b>, había sentenciado Bas Rutten en el documental de HBO <b>The Smashing Machine (2002)</b>.</p>
                    <p>Unas semanas después, en medio de una discusión de pareja, su esposa Dawn agarró una pistola que gracias a Dios estaba descargada, teniendo nuestro protagonista que llamar a la policía. A pesar de esto, en el año de 2002 contraen matrimonio. </p>
                    <h2>La caída de Mark Kerr</h2>
                    <YouTubeEmbed videoid='s-aiMq-PTow' />
                    <p>Con estos problemas con las sustancias, sumado al estrés que le provocaba la relación que tenía con su esposa Dawn Staples, era lógico que comenzará a ver disminuído su rendimiento dentro del octágono. No es casualidad, que ese mismo año 2000, cuando se casó con su esposa, recibiera su primer derrota profesional, luego de haber acumulado un invicto de 12 victorias. Su primer derrota sería ante el japonés <b>Kuzuyuki Fujita</b>, por decisión unánime. </p>
                    <p>Y aunque volvería a ganar ese mismo año por sumisión ante <b>Igor Borisov</b>, tan sólo unos 4 meses después perdería nuevamente ante <b>Igor Vovchanchyn</b>, nuevamente por decisión. </p>
                    <p>6 meses después volvería a competir y nuevamente caería derrotado, en esta ocasión por TKO en el segundo asalto ante su compatriota <b>Heath Herring</b>. Tras esta derrota, Mark Kerr colapsa, debido a su problema con las sustancias, por lo que decide someterse a una terapia de rehabilitación, que lo deja fuera de las peleas durante 3 años. </p>
                    <p>Luego de 3 años, en febrero de 2004, volvería a competir enfrentando al japonés <b>Yoshihisa Yamamoto</b>, contra quien caería derrotado, luego de él mismo noquearse al intentar un derribo. Esta sería su última pelea en PRIDE FC, y a partir de este momento lo veríamos deambulando por diferentes compañías de MMA, donde ya se veía un claro deterioro físico que le impedía competir como supo hacerlo una vez. </p>
                    <p>Luego de aquella pelea sería noqueado 2 veces consecutivas, y aunque remontaría esta racha negativa de 5 derrotas, al obtener 2 victorias por sumisión en el primer asalto en noviembre de 2007 y en marzo de 2008, volvería a encadenar otra racha negativa de 5 derrotas, siendo sometido en 3 ocasiones y noqueado en 2. </p>
                    <p>Su última pelea profesional sería ante el futuro campeón de peso semipesado de Strikeforce <b>Muhammed Luwal</b>, contra quien caería noqueado a los 25 segundos de la pelea. Retirándose de esta manera con un récord profesional de 15-11. </p>
                    <h2>¿Qué fue de la vida de Mark Kerr?</h2>
                    <p>Lamentablemente las cifras que ganaba un peleador de MMA y UFC en aquella época, ni de cerca se aproximan a lo que se puede ganar hoy en día, es por eso que Mark, luego del retiro, tuvo que trabajar en un concesionario de autos para Toyota, y tuvo que dedicarse a las ventas farmacéuticas para poder subsistir. </p>
                    <p>Además trabajó como couch y se dedicó a dar charlas motivacionales, inspirado por la historia de vida que les acabo de contar. </p>
                    <p>Debido a los peligros que implica ser un peleador profesional, sumado a su problemas con las adicciones, Mark Kerr ha desarrollado varios problemas de salud. Padece una neuropatía periférica que le causa un dolor crónico. Con esta enfermedad padece limitaciones médicas para ser tratado debido a su historial con las adicciones, y además tuvo complicaciones para costear sus tratamientos no cubiertos por su seguro médico, debido a esto lanzó una campaña en <b>GoFundMe</b>, donde pedía ayuda económica para cubrir todos sus gastos médicos. </p>
                    <h3>Mark Kerr Salón de la Fama</h3>
                    <p>Pese a lo complicado de su situación después de pelear, y al deslucido final de carrera que tuvo, los reconocimientos por lo que fue una vez su carrera no faltaron. En 2022 fue incluído del ADCC por su carrera como Wrestler, y este mismo 2025 fue incluído en <b>el Salón de la Fama de la UFC</b> por <b>Dwayne &quot;La Roca&quot; Johnson</b>, quien protagonizará una biopic sobre su vida titulada <Link href='/noticias/the-smashing-machines'>The Smashing Machine</Link>, que se estranará a finales de este 2025. </p>
                    <YouTubeEmbed videoid='42aV6UuyfDg' />
                    <p>Mark Kerr pasó de ser una estrella de las MMA, y de ser considerada durante un lapso de tiempo como el mejor peleador del mundo, a caer producto de las adicciones y de problemas personales provocados por una relación tóxica. Hoy en día sigue viviendo las secuelas de esa vida, pero se ha ganado el reconocimiento de la comunidad. Su historia sirve como un fiel reflejo de las luces y sombras que puede vivir un artista marcial mixto cuando llega a la cima, y como un recordatorio de que a veces las peleas más difíciles, son las que se tienen fuera del octágono. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}