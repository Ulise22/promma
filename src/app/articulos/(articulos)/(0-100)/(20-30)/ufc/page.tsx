import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/ufc.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'UFC',
    description: '',
    openGraph: {
        title: 'UFC',
        description: '',
        url: 'https://fullmma.org/articulos/ufc'
    }
}

export default function UFC () {
    return(
        <main>
            <ArticleHero title='UFC: Historia e Información de la Compañía de MMA Más Grande del Mundo' subtitle='Todo lo relacionado al origen, crecimiento y actualidad de la compañía UFC.' image={hero} date='05/06/2024' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Cuando hablamos de las artes marciales mixtas, es imposible no mencionar a las diferentes promotoras de este deporte, y cuando hablamos de dichas promotoras, la que destaca por encima de las demás, sin dudas, es la UFC, que con el paso de los años ha sabido convertirse en el gigante del deporte siendo quien concentra a las mayores estrellas y a los mejores peleadores del mundo. Por eso en este artículo vamos a hablar de su historia, las cosas por las que tuvo que pasar para llegar a ser la N°1 y mucho más.</p>
                    <h2>UFC Historia</h2>
                    <p>Aunque <b>Dana White</b> es el principal responsable de que la UFC goze del estatus que hoy tiene, lo cierto es que nada tuvo que ver en su creación. El nacimiento de la UFC comienza a mediados de 1992, con un ejecutivo llamado <b>Art Davie</b>, que comenzaba a darle vueltas a la idea de crear una competición de pelea, donde se enfrentaran peleadores de diferentes artes marciales para ver quien era el mejor. Sin embargo esta idea no contaba con el apoyo necesario, por lo que no fue hasta años más tarde, cuando conoció al brasileño <b>Rorion Gracie</b>, que pudo llevar a cabo su idea.</p>
                    <p>Entre estas 2 personas, junto con el empresario Bob Meyrowitz y el escritor Campbell McLarballzen comenzaron a idear el concepto de una competición donde se mezclaran diferentes artes marciales. Tomando la idea del octagono como lugar en el que pelearían, de una película de <b>Chuck Norris</b>, que tenía ese nombre. En aquella, por ser mediados de los años 90, era difícil organizar un torneo de artes marciales, dado que la mayoría, con excepción del karate, al ser visto como inofensivo, estaban prohibidas. Por lo que sabiendo esto, Davie decidió organizar el primer evento la ciudad de Denver, ubicada en el Estado de Colorado, que era menos estricta y prohibitiva con este tema.</p>
                    <p>El primer evento y las primeras peleas de la compañía, eran sin reglas y sin límite de tiempo. Esto por idea de Rorion Gracie, que quería evitar que cualquier peleador de algún arte marcial pusiera excusas en caso de perder, por no poder utilizar sus técnicas. Sólo había un arbitro que se encargaba de separar a los peleadores en caso de que haya un KO o una sumisión.</p>
                    <p>UFC 1, el primer evento de la compañía se celebraría el 12 de Noviembre de 1993 y sería un completo éxito. Con una curiosidad que a nivel de marketing sería muy llamativo, puesto que sería <Link href='/leyendas/royce-gracie'>Royce Gracie</Link> quien ganaría el primer campeonato, siendo el peleador más pequeño de todos los participantes. Cosa que además pondría a la familia Gracie, y a su arte marcial en el mapa.</p>
                    <YouTubeEmbed videoid='PO0WoldlGN8' />
                    <p>Con el éxito que había sido el primer evento, no tardaron en organizar varios más, que comenzarían a recibir numeración, de esta forma se celebrarían el UFC 2, UFC 3, UFC 4, etc. Sin embargo, rapidamente comenzaron a tener problemas con los políticos de Estados Unidos que no veían con buenos ojos el surgimiento y el crecimiento de un deporte como las Artes Marciales Mixtas.</p>
                    <p>Quien encabezó esta pelea contra la UFC y contra las MMA en el país norteamericano, fue el ex-senador del partido republicano <b>John McCain</b>. Aparentemente existía una movida con dicho político y su problema con las MMA, dado que había una empresa de cerveza que financiaba su campaña electoral, que además se patrocinaba en eventos de boxeo, y por esto no estaban contentos con el surgimiento de un deporte que pudiera competirles. </p>
                    <p>Este problema, que terminaba entorpeciendo el funcionamiento de la empresa, debido a regulaciones que se les imponían que les afectaban economicamente y a nivel de espectáculo, al punto tal que en uno de los eventos que organizaron, a los peleadores se les prohibió dar golpes con el puño cerrado. Sumado a la mala prensa que comenzaba a recibir su industria, comenzó a generarles dolor de cabeza a los ejecutivos Art Davie y Rorion Gracie.</p>
                    <YouTubeEmbed videoid='ub5gm00KNZk' />
                    <p>Fue por esta razón que los dueños de UFC comenzaron a considerar seriamente vender la compañía. Esta información se comenzó a esparcir como un rumor que llegó a los oídos de un joven <b>Dana White</b>, que en aquel momento trabajaba como representante de algunos peleadores de la compañía, y que a esta altura ya tenía contactos que le habían habilitado esta información. </p>
                    <p>Dana White todavía no contaba con el capital necesario para afrontar una compra de una empresa por sí solo, por lo que convenció a sus amigos empresarios, los hermanos Fertitta, <b>Lorenzo y Frank Fertitta</b>, de que confiaran en él para dirigir la compañía y se hicieran cargo de la compra. Sin duda fue un acierto por parte de estos empresarios el confiar en Dana, puesto que la compra se terminó oficializando en 2 Millones de dolares, contando hoy, según publico Forbes en abril de 2024, con un valor de 11.300 millones de dólares, siendo por lejos la compañía de deportes de combate mejor valuada.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}