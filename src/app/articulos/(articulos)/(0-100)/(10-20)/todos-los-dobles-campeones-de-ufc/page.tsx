import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/10-20/dobles-campeones.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Todos Los Dobles Campeones de UFC',
    description: 'El selecto grupo de dobles campeones de UFC está compuesto por 10 peleadores: Randy Couture, BJ Penn, Conor McGregor, George St-Pierre, Daniel Cormier, Amanda Nunes, Henry Cejudo, Jon Jones, Alex Pereira y más recientemente Ilia Topuria.',
    openGraph: {
        title: 'Todos Los Dobles Campeones de UFC',
        description: 'El selecto grupo de dobles campeones de UFC está compuesto por 10 peleadores: Randy Couture, BJ Penn, Conor McGregor, George St-Pierre, Daniel Cormier, Amanda Nunes, Henry Cejudo, Jon Jones, Alex Pereira y más recientemente Ilia Topuria.',
        url: 'https://fullmma.org/articulos/todos-los-dobles-campeones-de-ufc'
    }
}

export default function AllDoubleChamps () {
    return(
        <main>
            <ArticleHero title='Todos los Dobles Campeones de UFC' subtitle='¿Quiénes componen el selecto grupo de los campeones de 2 categorías de peso diferentes en la ufc? ¿Quién fue el primero en conseguirlo? ¿Cuántos peleadores fueron campeones de 2 divisiones simultaneamente?' image={hero} date='01/04/2024' author={null} updatedDate='2024-07-28' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>El selecto grupo de dobles campeones de UFC está compuesto por 10 peleadores: <Link href='/leyendas/randy-couture'>Randy Couture</Link>, <b>BJ Penn</b>, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link>, <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link>, <b>Henry Cejudo</b>, <Link href='/peleadores/jon-jones'>Jon Jones</Link>, <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y más recientemente <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>. </p>
                    <p>Desde su creación en 1993, la <Link href='/articulos/ufc'>UFC</Link> ha sido el epicentro del deporte de las artes marciales mixtas (MMA), por lo que convertirse en campeón de cualquiera de las divisiones de esta compañía te pone en una posición diferente del resto de peleadores, requiere de una cálidad muy distinguida por sobre los demás luchadores para conseguir tal logro. Por lo tanto aún más difícil es el covertirse en campeón no de 1, sino de 2 divisiones diferentes. Por eso hoy vamos a repasar la lista de todos los 9 dobles campeones de la UFC. </p>
                    <h2>1. Randy Couture</h2>
                    <p>El primero en conseguir dicha hazaña fue el estadounidense <Link href='/leyendas/randy-couture'>Randy Couture</Link>, quien practicamente pelea en la compañía desde sus inicios, siendo historia viva del UFC.</p>
                    <p>Primeramente conseguiría ser campeón de Peso Pesado contra <b>Maurice Smith</b>, en un combate que tuvo un asalto de 21 minutos y que se llevó por decisión mayoritaria. Como luego abandonaría la compañía, el título quedaría vacante. Volvería a ganar el título de Peso Pesado en su vuelta a UFC, al enfrentar y derrotar a <b>Kevin Randleman</b> por nocaut en el tercer asalto. </p>
                    <p>Luego de unas cuantas peleas más en la división de Peso Pesado, decidió bajar de división con los Semipesados, para enfrentar primero a <b>Chuck Liddell</b>, por el Campeonato Interino de Peso Semipesado de UFC, donde ganaría por nocaut en el tercer asalto. Sin embargo, terminaría de concretar la hazaña al enfrentar a <b>Tito Ortiz</b>, a quien le ganaría por decisión unánime, ganando y unificando el Campeonato de Peso Semipesado.</p>
                    <YouTubeEmbed videoid='pzwaoaED_EI' />
                    <h2>2. BJ Penn</h2>
                    <p>BJ Penn fue el segundo peleador en conseguir ser campeón en 2 divisiones diferentes, logrando primero ser campeón de la división de Peso Wélter, al enfrentar al estadounidense <b>Matt Hughes</b>, a quien sometería en el primer asalto por UFC 46. Este campeonato le sería despojado poco después por firmar con otra compañía llamada <b>K-1</b>.</p>
                    <p>Poco tiempo después volvería a la compañía, y luego de intentar con poco éxito recuperar su cinturón de peso wélter contra <b>Matt Hughes</b>, a quien en el pasado había ganado por el mismo cinturón. Sin embargo, en esta ocasión sería Matt quien se llevaría la pelea, logrando noquar a BJ Penn en el tercer asalto.</p>
                    <p>Producto de esto, BJ Penn decide bajar una categoría de peso, a la división de peso ligero, donde primero enfrentaría a <b>Jens Pulver</b>, a quien vencería por sumisión en el segundo asalto. Y luego de aquella pelea, tendría un combate por el título contra <b>Joe Stevenson</b>, a quien vencería por sumisión en el segundo asalto, consiguiendo así, la hazaña y la dicha de haber sido campeón en 2 divisiones diferentes de la UFC.</p>
                    <YouTubeEmbed videoid='ENLeaM4XvKk' />
                    <h2>3. Conor McGregor</h2>
                    <p>Conor sería el primero en conseguir este hito de forma simultánea, al proclamarse primero campeón de la división de peso pluma, al vencer al histórico <Link href='/leyendas/jose-aldo'>Jose Aldo</Link> por KO en el primer asalto, logrando además el nocaut más rápido en una pelea por el título en la historia de la UFC. </p>
                    <p>Tan sólo 11 meses después conseguiría la hazaña al enfrentar a Eddie Alvarez que recientemente se había convertido en el campeón de la división de peso ligero al vencer al brasileño <b>Rafael dos Anjos</b>. En aquella pelea, <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link> sería capaz de noquear a su rival en el segundo asalto, convirtiéndose de esta forma en el primer campeón simultáneo de 2 divisiones diferentes.</p>
                    <YouTubeEmbed videoid='HVLtIP6J5Hk' />
                    <h2>4. Georges St-Pierre</h2>
                    <p><Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> es otro de los que consiguió este hito, luego de dominar durante años y ser un campeón histórico de la división de peso wélter de la UFC, donde desde su segunda victoria contra Matt Hughes, había sido capaz de defender el cinturón de la división un total de 9 veces, siendo el luchador de la división que más veces ha defendido el título.</p>
                    <p>GSP tendría su último combate en la división en noviembre de 2013, contra Johny Hendricks, a quien vencería por decisión dividida. Luego de aquel combate se tomaría un tiempo de las artes marciales mixtas, y recién volvería a pelear en noviembre de 2017, esta vez por el Campeonato de Peso Medio de UFC, contra el británico <b>Michael Bisping</b>, a quien sería capaz de someter en el tercer asalto. Sumándose de esta manera, a esta lista de dobles campeones de la compañía.</p>
                    <YouTubeEmbed videoid='drN7gYW84w8' />
                    <h2>5. Daniel Cormier</h2>
                    <p><Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link> también fue capaz de campeonar en 2 divisiones diferentes, al conseguirlo primero en la división de peso semipesado, cuando <Link href='/peleadores/jon-jones'>Jon Jones</Link> fue despojado de su título por violar el código de conducta de la UFC, lo que le dió la oportunidad a DC de pelear contra <b>Anthony Johnson</b> el 23 de mayo de 2015 por el Campeonato Vacante de Peso Semipesado, que lograría ganar luego de someter en el segundo asalto a su compatriota.</p>
                    <p>Luego de unas cuantas defensas en la división, finalmente Daniel Cormier retornaría el 7 de julio de 2018 a la división de Peso Pesado para competir por el campeonato de la división contra el histórico <b>Stipe Miocic</b>, a quien sería capaz de vencer por KO en el primer asalto. De esta manera lograría lo que une a todos los peleadores de esta lista, además de, al igual que Conor, lograría ser campeón de ambas divisiones en simultáneo.</p>
                    <YouTubeEmbed videoid='SCaLh4OhEs0' />
                    <h2>6. Amanda Nunes</h2>
                    <p>La primera vez que <Link href='/leyendas/amanda-nunes'>Amanda Nunes</Link> logró campeonar, fue en la división de peso gallo femenino, cuando enfrentaría a la estadounidense <b>Miesha Tate</b> en el UFC 200, organizado el 9 de julio de 2016. Aquella noche sería capaz de someter a su rival en el primer asalto, y conseguiría también el bono a la pelea de la noche.</p>
                    <p>Luego de 3 defensas exitosas en la división, se movería a la división de Peso Pluma femenino para enfrentar a la brasileña <b>Cris Cyborg</b> por el campeonato el 29 de diciembre de 2018, a quien vencería por KO en el primer asalto. Aquella noche, se convertiría en la primera y (hasta ahora) única mujer en ser campeona de 2 títulos diferentes de la UFC, lográndolo además de forma simultánea.</p>
                    <YouTubeEmbed videoid='u6rj1JdIvX8' />
                    <h2>7. Henry Cejudo</h2>
                    <p>Henry cejudo se convertiría en campeón primero el 4 de agosto de 2018, destronando al histórico campeón de Peso Mosca <Link href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link>, quien hasta ese entonces parecía invencible, habiendo acumulado un total de 11 defensas del título exitosas consecutivas. Ganando aquel combate por decisión dividida.</p>
                    <p>Luego de defender su cinturón una vez al derrotar por TKO en el primer asalto al estadounidense <b>T.J. DIllashaw</b>, decidió subir de división para enfrentar al brasileño <b>Marlon Moraes</b> el 8 de junio de 2019, por el campeonato vacante de Peso Gallo de UFC, consiguiendo campeonar al derrotar por nocaut en el tercer asalto a su contrincante. Consiguiendo de esta forma sumarse a la lista de dobles campeones, logrando serlo de forma simultánea.</p>
                    <YouTubeEmbed videoid='Cpujg52kBU0' />
                    <h2>8. Jon Jones</h2>
                    <p>Quien para muchos es el mejor peleador de mma de todos los tiempos, también ocupa un lugar está honrosa lista. Luego de ser un campeón tan dominante en la división de semipesados, desde que lograra convertirse en campeón al vencer al brasileño <b>Maurício Rua</b> por TKO en el tercer asalto, allá por el año 2011, tendría una gran cantidad de defensas por el título, logrando salir victorioso en cada una de ellas.</p>
                    <p><Link href='/peleadores/jon-jones'>Jon Jones</Link> sabía que si quería agrandar su legado tenía que ser capaz de replicar lo hecho en la división de semipesados en la división de peso pesado, es por eso que se tomó su tiempo para prepararse para este nuevo reto, por lo que luego de unos 3 años de inactividad, volvió al octagono el 4 de marzo de 2023, donde por UFC 285 se enfrentó al francés <b>Ciryl Gane</b>, por el campeonato de peso pesado de UFC, donde luego de someter a su rival con una guillotina en el primer asalto, lograría ser el nuevo campeón de la división de peso pesado, sumándose además, a la lista de dobles campeones de la UFC.</p>
                    <YouTubeEmbed videoid='vfaa_nonqb8' />
                    <h2>9. Alex Peireira</h2>
                    <p>El caso más reciente de un peleador subiendo de división luego de perder su cinturón para conquistar otra división es el del brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que con sólo 7 peleas en la compañía lo conseguiría. Primero convirtiéndose en campeón de la división de peso medio, al derrotar al entonces campeón <b>Israel Adensanya</b> por TKO en el quinto y último asalto de la pelea. Y luego, un año después, el 11 de noviembre de 2023, cuando se enfrentaría al checo <b>Jiří Procházka</b> por el campeonato vacante de peso semipesado de UFC, a quien sería capaz de derrotar por TKO en el segundo asalto. Siendo de esta manera, el ejemplo más reciente de un peleador que es capaz de conquistar el campeonato de UFC en 2 divisiones diferentes.</p>
                    <h2>10. Ilia Topuria</h2>
                    <p>Y finalmnete el caso de reciente de un doble campeón es el de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, que alcanzó el estatus de estrella de forma meteórica al primero lograr convertirse en campeón de peso pluma en febrero de 2024, al arrebatarle el cinturón al histórico campeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link>. Defendería una vez el cinturón de las 145lbs, ante otra leyenda de la división como lo es <Link href='/peleadores/max-holloway'>Max Holloway</Link>, quien jamás había sido noqueado en su carrera hasta que enfrentó al Matador, quien en el tercer asalto de su pelea en octubre de ese mismo 2024 lo noqueó por primera vez. </p>
                    <p>Una vez habiendo derrotado y de manera contundente a los peleadores más duros que tenía para ofrecer la división de peso pluma, Ilia dejó vacante su cinturón en busqueda de un segundo aún más difícil de ganar, como lo es el de la división de peso ligero, a la que subió este junio de 2025, encabezando el <b>UFC 317</b> donde enfrentaría al excampeón de la división <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, logrando una espectacular victoria por KO en el primer asalto, logrando la gesta y una de las mejores rachas de 3 victorias jamás vistas, uniéndose a este selecto grupo de 10 peleadores en obtener 2 cinturones diferentes en la UFC. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}