import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/0-10/campeones_viejos_ufc.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Los 5 Campeones Más Viejos de UFC',
    description: 'El próximo sábado, el luchador estadounidense de 42 años, peleará por el cinturón de peso pesado ante Jon Jones, donde podría convertirse en uno de los campeones más añejos de la historia.',
    openGraph: {
        title: 'Los 5 Campeones Más Viejos de UFC',
        description: 'El próximo sábado, el luchador estadounidense de 42 años, peleará por el cinturón de peso pesado ante Jon Jones, donde podría convertirse en uno de los campeones más añejos de la historia.',
        url: 'https://fullmma.org/noticias/5-campeones-mas-viejos-ufc'
    }
}

export default function CampeonesMasViejosUFC () {
    return(
        <main>
            <ArticleHero title='Los 5 Campeones Más Viejos de la UFC: La Lista a la que se Puede Sumar Stipe Miocic' subtitle='El próximo sábado, el luchador estadounidense de 42 años, peleará por el cinturón de peso pesado ante Jon Jones, donde podría convertirse en uno de los campeones más añejos de la historia.' image={hero} date='2024-11-11' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>No es novedad que la edad nos pasa factura a todos, y que, con el paso del tiempo, los años nos hacen disminuir el rendimiento físico que podemos llegar a dar. Sin embargo, en el mundo de las artes marciales mixtas, y de las peleas en general, pareciera que hay hombres que desafían esta regla de la naturaleza, logrando proezas a una avanzada edad que nos hacen preguntar que tan cierta es la afirmación anterior. Por eso, y porque el próximo sábado Stipe Miocic puede llegar a entrar a esta honrosa lista, es que hoy vamos a hablar de los 5 peleadores más añejos en ser campeones en la historia de la <Link href='/articulos/ufc'>UFC</Link>.</p>
                    <h2>5. Jan Blachowicz (37 años y 7 meses)</h2>
                    <p>Comenzamos esta lista citando al luchador polaco Jan Blachowicz, quien, con sus 37 años, lograría ser el primer campeón de la división de Peso Semipesado, luego de lo que fue la era absolutamente dominante de <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link> y <Link href='/peleadores/jon-jones'>Jon Jones</Link>, quien acababa de dejar el cinturón vacante. Lograría esto el día 27 de septiembre de 2020 en la pelea coestelar del UFC 253, al enfrentar al estadounidense Dominick Reyes, de ese entonces 30 años, que venía con un récord de 12-1, habiendo perdido solamente una controvertida pelea con <Link href='/peleadores/jon-jones'>Jon Jones</Link>, donde muchos, incluido el mismo Dana White, lo habían visto como ganador. Pese a la avanzada edad del polaco, y del hecho que se estaba enfrentando a un rival durísimo que era casi una década más joven que él, Jan Blachowicz lograría noquear en el segundo asalto a su rival, convirtiéndose en el campeón de la división de los pesos semipesados y ganando el bono a la Actuación de la Noche. </p>
                    <YouTubeEmbed videoid='dd1F57oTTTs' />
                    <p>La hazaña de este peleador no sólo quedaría aquí, dado que unos meses después, y ya habiendo cumplido los 38 años, sería capaz de defender de forma exitosa su cinturón ante el entonces campeón de peso medio <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>, a quien el 6 de marzo de 2021 en el UFC 259, sería capaz de derrotar por decisión unánime. </p>
                    <p>Este luchador hoy en día sigue siendo un peleador activo, posicionado en el puesto #4 de los rankings de la división, y ya con 41 años (en febrero del año que viene cumple los 42), es posible que pueda incluso escalar más puestos en esta lista. </p>
                    <h2>4. Fabricio Werdum (37 años y 11 meses)</h2>
                    <p>Siguiendo en esta lista de campeones añejos, hay que hablar del brasileño Fabrício Werdum, quien con casi 38 años lograría convertirse en campeón de la división de peso semipesado de la UFC, el día 13 de junio de 2015 en el UFC 188. Para esa fecha, Fabricio llegaba siendo campeón interino, luego de noquear al neozelandés Mark Hunt en el segundo asalto, por lo que se vería cara a cara con el campeón indiscutido Caín Velzásquez, en busca de lograr él convertirse en el campeón indiscutido de la división y de unificar los cinturones. Aquella noche, el brasileño lograría someter al estadounidense en el tercer asalto de la noche, ganando el bono a la Actuación de la Noche, y logrando ganar y unificar el campeonato de peso semipesado de la UFC con sus casi 38 años de edad. </p>
                    <YouTubeEmbed videoid='5UzYUIxrv24' />
                    <h2>3. Daniel Cormier (39 años)</h2>
                    <p>Quien ocupa el tercer lugar de esta lista, es el estadounidense <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, quien luego de haber sido campeón de la división de peso semipesado, defendiendo su cinturón de forma exitosa en 3 oportunidades, buscaría la hazaña con sus más de 39 años, al intentar ser doble campeón subiendo a los pesos pesados. Para ello, el día 7 de julio de 2018 en el UFC 226, se enfrentaría al entonces campeón Stipe Miocic, logrando aquella noche vencerlo por KO en el primer asalto, ganando el bono a la Actuación de la Noche, y convirtiéndose en uno de los campeones más viejos en conseguir ser campeón de la UFC, con 39 años. </p>
                    <p>Además, lograría defender el cinturón de forma exitosa en una ocasión, al derrotar por sumisión a Derrick Lewis en el segundo asalto de la pelea ese mismo 2018. Hasta que perdería su cinturón, ya con 40 años cumplidos, al caer derrotado por nocaut en su revancha ante Stipe en agosto de 2019.</p>
                    <YouTubeEmbed videoid='ib-qGDrgbQ8' />
                    <h2>2. Glover Teixeira (42 años)</h2>
                    <p>El segundo lugar en ocupar esta lista, es uno del que cuya historia ya hemos cubierto en este espacio, y no es otro que el brasileño <Link href='/articulos/campeon-viejo-ufc'>Glover Teixeira</Link>, quien, con 42 años, 2 días después de su cumpleaños, lograría la hazaña impensada por muchos, al conseguir el día 30 de octubre de 2021 en el UFC 267, convertirse en campeón luego de que, de forma épica, sometiera al campeón polaco Jan Blachowicz en el segundo asalto de la pelea. Este desempeño le haría ganar el bono a la Actuación de la Noche, y lo convertiría en el peleador más viejo en ganar el título por primera vez en su carrera. </p>
                    <YouTubeEmbed videoid='ILlgifH9XiA' />
                    <h2>1. Randy Couture (43 años)</h2>
                    <p>En primer lugar, el luchador más viejo en convertirse en campeón, no es otro que la leyenda de las MMA <Link href='/leyendas/randy-couture'>Randy Couture</Link>, quien luego de haber sido campeón de las divisiones de peso pesado y semipesado en varias ocasiones, venía de perder su cinturón de las 205lbs ante <Link href='/leyendas/chuck-liddell'>Chuck Liddell</Link>, decidiría volver a intentar competir por el cinturón de peso pesado. Teniendo que enfrentar al entonces campeón Tim Sylvia, el día 3 de marzo de 2007 en el UFC 68, consiguiendo luego de 5 asaltos llevarse la victoria por decisión unánime, convirtiéndose de esta manera en el campeón más viejo en ganar un cinturón de la UFC con 43 años, récord que hasta la fecha no pudo ser roto. </p>
                    <p>Además, sería capaz de defender de forma exitosa el cinturón el día 25 de agosto de 2007, ya con 44 años recientemente cumplidos, al noquear en el tercer asalto al brasileño Gabriel Gonzaga. Hasta que posteriormente perdería el campeonato ante el estadounidense y expeleador de WWE <Link href='/leyendas/brock-lesnar'>Brock Lesnar</Link>, el 15 de noviembre de 2008, luego de ser noqueado en el segundo asalto, a una pelea a la que llegaría con la impresionante edad de 45 años. </p>
                    <YouTubeEmbed videoid='PV28qas35hA' />
                    <p><Link href='/leyendas/randy-couture'>Randy Couture</Link> seguiría peleando y por ende seguiría rompiendo récords de longevidad, siendo además el peleador más viejo en ganar una pelea en la historia de la UFC, luego de que el 14 de noviembre de 2009, fuera capaz de vencer a Brandon Vera por decisión unánime, con 46 años. Su última pelea en la compañía sería el 30 de abril de 2011 en el UFC 129, en una pelea a la que llegaría con casi 48 años (faltando 2 meses para cumplirlos), ante el brasileño Lyoto Machida, con quien caería derrotado por KO en el segundo asalto. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}