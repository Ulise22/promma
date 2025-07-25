import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/30-40/division_goats.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'GOATS de Cada División de la UFC',
    description: 'La lista con el mejor peleador histórico de cada división de la UFC',
    openGraph: {
        title: 'Gina Carano: La Primera Estrella Femenina de las MMA',
        description: 'La historia de una de las precursoras de las MMA femeninas y su posterior inserción en el mundo de Hollywood.',
        url: 'https://fullmma.org/articulos/mejores-peleas-por-division-ufc'
    }
}

export default function PeleadorMasSucioUFC () {
    return(
        <main>
            <ArticleHero title='Los Mejores Peleadores de la Historia de Cada Division de UFC' subtitle='La lista del mejor peleador histórico de cada división de la UFC' image={hero} date='2024-06-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>A lo largo de los más de 30 años que tiene de existencia la <Link href='/articulos/ufc'>UFC</Link>, han pasado una incontable cantidad de peleadores por cada una de las divisiones de la compañía, algunos tan buenos que dejaron una huella tan grande que diificilmente sea opacada por otro peleador. Por eso hoy decidimos hacer un listado con los mejores peleadores de la historia de la UFC en cada una de las 8 divisiones existentes. Teniendo en cuenta que sólo mencionaremos peleadores que hayan sido campeones en sus divisiones y hayan conseguido defender su título de forma exitosa.</p>
                    <h2>Demetrious Johnson: El Mejor Peso Mosca de la Historia de UFC</h2>
                    <p>Comenzando con la división más liviana de las categorías masculinas, pocos casos son tan evidentes y tan claros como este, donde el GOAT indiscutido de los peso mosca es <Link href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link>, quien desde su arribo a la UFC en 2011, arrazó con todo lo que se le puso delante.</p>
                    <p>Demetrious se convirtió en campeón de la división el 22 de septiembre de 2012 en el UFC 152, donde luego de vencer por decisión dividida al campeón <b>Joseph Benavidez</b> se coronaría él como el rey de los pesos mosca. Desde entonces conseguiría defender su título de forma exitosa en 11 ocasiones, hasta agosto de 2018. Completando de esta manera, no sólo el récord a la mayor cantidad de defensas de un campeón en los peso mosca, sino la mayor cantidad de defensas consecutivas que tuvo cualquier otro peleador de la UFC en la historia.</p>
                    <YouTubeEmbed videoid='VCuQczMI52E' />
                    <h2>Dominick Cruz: El Mejor Peso Gallo de la Historia de UFC</h2>
                    <p>Es difícil elegir al mejor peleador de la historia de esta división, dado que el título de peso gallo de la UFC fue uno que cambió de manos de forma recurrente. Sin embargo, elegimos al primer campeón de esta división, <b>Dominick Cruz</b>, quien se fue el campeón de peso gallo en <b>WEC</b>, defendiendo en 3 ocasiones su cinturón, y convirtiéndose en el campeón de la UFC, cuando esta compró la compañía en la que Dominick estuvo compitiendo.</p>
                    <p>Una vez en la UFC, Dominick defendió su título ante peleadores de la talla de <Link href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link>, concretando 2 defensas consecutivas. Sin embargo perdió el cinturón por razones que escaban a lo deportivo, ya que las lesiones que sufrió le impidieron defender. Sin embargo supo volver a recuperar el cinturón y defenderlo una vez. Por lo que, contando su estancia en WEC, Dominick Cruz suma un total de 7 victorias en peleas por el título, siendo el que más tiene en la historia de la división.</p>
                    <YouTubeEmbed videoid='vQcVCiYgy5w' />
                    <h2>José Aldo: El Mejor Peso Pluma de la Historia de UFC</h2>
                    <p>El brasileño <Link href='/leyendas/jose-aldo'>José Aldo</Link> es sin duda el mejor peleador en la historia de los peso pluma de la UFC. Siendo el primer campeón de la compañía, completó un total de 7 defensas en estas, y de 9, si contamos su estancia en WEC, que al igual que con Dominick Cruz, una vez siendo esta promotora comprada por la compañía de <b>Dana White</b>, Aldo es ascendido a campeón de UFC.</p>
                    <p>Con sus 7 defensas del título que consiguió durante su reinado, hasta que fue derrotado por <Link href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link>, es el peleador con más defensas en la historia de la división. Siendo seguido de cerca por un <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> que tenía 5, hasta que fue derrotado por <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, lo que hace ver difícil que el legado y el récord de José Aldo pueda ser superado en los próximos años.</p>
                    <YouTubeEmbed videoid='L8oht5ZNwFM' />
                    <h2>Khabib: El Mejor Peso Ligero de la Historia de UFC</h2>
                    <p>Una de las divisiones donde es muy difícil elegir al mejor es en la de peso ligero, puesto que por este peso pasaron demasiados peleadores excelentes, pero elegimos a <Link href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link> por ser uno de los que más defensas tuvo mientras fue campeón con 3, siendo todas estas defensas victorias por finalización por la vía de la sumisión, habiendo defendido ante el excampeón de esta misma división, <b>Conor Mcgreogr</b>, ante <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> y ante <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>. </p>
                    <p>El elegido para esta división no es tan indiscutible como otros de los mencionados en esta lista, lamentablemente el combate <Link href='/peleadores/tony-ferguson'>Tony Ferguson</Link> nunca pudo ocurrir, y lamentablemente Khabib se retiró bastante joven, lo que complica que se lo pueda mencionar con tanta contundencia, de igual forma, mientras fue un peleador activo nunca perdió y todas sus defensas por el título fueron victorias contundentes por finalización. </p>
                    <YouTubeEmbed videoid='jN07H_jL_AM' />
                    <h2>George St-Pierre: El Mejor Peso Wélter de la Historia de UFC</h2>
                    <p>Pocos campeones tan dominantes como <Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> ha habido en la historia de la UFC, al punto que no sólo es considerado el mejor peleador de la historia del peso wélter, sino que muchos lo ponen en la discusión sobre el mejor peleador de la historia en general.</p>
                    <p>Con 9 defensas consecutivas del título, es por lejos el peleador que más defendió su título. Se retiró ganando, sin nadie que haya sido capaz de arrebatarle su cinturón desde que lo ganara en diciembre de 2007, y con sólo 2 derrotas en su récord, que pudo vengar tiempo después, ganando las revanchas que le pusieron en frente. </p>
                    <YouTubeEmbed videoid='S5ZqBX9SMeQ' />
                    <h2>Anderson Silva: El Mejor Peso Medio de la Historia de UFC</h2>
                    <p>Otro de los campeones dominantes que no es sólo uno de los mejores peleadores en la historia de su división, sino que es uno de los mejores en la historia de la compañía, es <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, quien es el segundo peleador con más defensas consecutivas en la historia del compañía con 10. Sosteniendo un reinado que inició en octubre de 2006 al vencer por TKO <b>Rich Franklin</b>, y que se prolongó hasta el año 2013.</p>
                    <YouTubeEmbed videoid='6-XzIacyFT8' />
                    <h2>Jon Jones: El Mejor Peso Semipesado de la Historia de UFC</h2>
                    <p><Link href='/peleadores/jon-jones'>Jon Jones</Link>, el que seguramente sea el mejor peleador de la historia de las MMA, fue el peleador más fácil de elegir de esta lista. Llegando a defender hasta 8 veces consecutivas, luego de en 2011 haber convertido en el <Link href='/articulos/campeon-mas-joven-ufc'>Campeón más joven de la historia de UFC</Link>, Jon Jones sólo perdió su cinturón por razones extradeportivas, sin haber caído derrotado en ningún momento de su carrera.</p>
                    <p>Con defensas ante excelentes peleadores que como <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link> o <Link href='/articulos/campeon-viejo-ufc'>Glover Teixeira</Link>, enfretando y derrotando a todo el que le pusieron delante, Jon Jones se corona como el mejor peleador de la historia de la división de semipesados.</p>
                    <YouTubeEmbed videoid='8lKirrARb0w' />
                    <h2>Stipe Miocic: El Mejor Peso Pesado de la Historia de UFC</h2>
                    <p>Con 4 defensas del título y 6 victorias por el campeonato, <b>Stipe Miocic</b> es considerado por muchos el mejor de la historia de los pesos pesados, habiendo defendido ante peleadores complicadísimos como <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link>, <b>Alistair Overeem</b>, o el mismo <b>Daniel Cormier</b>, acumulando un sin fín de victorias por nocaut, Stipe se gana el merecido reconocimiento como el mejor peso pesado de la historia.</p>
                    <YouTubeEmbed videoid='Jm4Qdx-RhJE' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}