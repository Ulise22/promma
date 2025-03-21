import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/0-10/mostppv.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: '5 Combates que Más PPV Vendieron',
    description: '',
    openGraph: {
        title: '5 Combates que Más PPV Vendieron',
        description: '',
        url: 'https://fullmma.org/articulos/most-ppv'
    }
}

export default function MostPPV () {
    return(
        <main>
            <ArticleHero title='Los 5 Combates que más PPV Vendieron en la Historia' subtitle='Estas son las 5 peleas que más vendieron en la historia de las MMA, una lista completamente dominada por Conor McGregror.' image={hero} date={null} author={null} updatedDate={null}/>
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Las 5 Peleas que más Vendieron en la UFC</h2>
                    <p>A lo largo de la historia de las MMA, y en particular, de la <Link href='/articulos/ufc'>UFC</Link>, han habido grandes peleadores que supieron destacar de los demás, tanto en cuanto a su talento y habilidad en la pelea, estos luchadores son los que lograron posicionar al deporte en lo más alto, figuras <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>, <Link href='/campeones/jon-jones'>Jon Jones</Link>, <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, entre otros, fueron muy vendedores y ayudaron a agrandar la popularidad de las MMA alrededor del mundo. Sin embargo si hay uno que destaca en este sentido, con su carisma y su habilidad para vender y generar dinero, ese es <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, que ocupa todos los lugares de esta lista.</p>
                    <p>Las peleas que más vencieron PPV son: </p>
                    <h3>5. Conor McGregor vs Cowboy Cerrone</h3>
                    <p>El evento se dió en el UFC 246, luego de una considerable inactividad del irlandes, volvería a pelear el 18 de enero de 2020 contra el histórico <b>Cowboy Cerrone</b>, consiguiendo ganar por nocaut el combate en el primer asalto y logrando la sorprendente cifra de 1,353.459 PPV vendidos.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/w5pT92NRWhI?si=qOyalg8TntjWYOCw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>4. McGregor vs Poirier 2</h3>
                    <p>Posterior a su pelea contra Cowboy, Mcgregor volvería a pelear contra <Link href='/peleadores/dustin-poirier'>Dustin Porier</Link> en el UFC 257 el 23 de enero de 2021 organizado en Abu Dabi, a quien ya había enfrentado en 2014, en aquella ocasión venciendo por KO al estadounidense en el primer asalto y siendo la actuación de la noche. Sin embargo este combate terminaría muy diferente, dado que Poirier se llevaría la pelea por TKO en el segundo asalto. Aquella pelea vendería 1,600.000 de PPV.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/6yu2AWK4rxo?si=dudf4i1aBXAWVLQo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>3. McGregor vs Nate Diaz 2</h3>
                    <p>La revancha entre estos 2 peleadores se daría unos meses después de su primera pelea, en la que Conor Mcgregor había entrado en reemplazo del lesionado Rafael Dos Anjos en la categoría de Peso Wélter, donde Conor haría su debut. El primer enfrentamiento entre ambos terminaría con una victoria para Diaz por sumisión en el segundo asalto.</p>
                    <p>Sin embargo la revancha se daría el 20 de agosto de 2016 en el UFC 202 en Las Vegas. Dicho combate terminaría con una victoria por decisión para McGregor y vendería un total de 1,600.000 de PPV, superando al evento de UFC 100 que hasta entonces era el evento que más había vendido.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/7yp8U2WzvRc?si=NLcSdY9KX-x6vGgH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>2. McGregor vs Poirier 3</h3>
                    <p>El tercer combate entre estos 2 peleadores sería uno de los que más vendería en la historia. Terminaría generando interés, porque en la previa de la pelea se vería a un McGregor como el de antes, donde ya había dejado su faceta más respetuosa que mostró en su segundo enfrentamiento, y volvería a su &quot;trash talk&quot; que lo caracteriza y que genera tanto amor como odio por parte de los fans. El combate terminaría nuevamente con una victoria de <Link href='/peleadores/dustin-poirier'>Dustin Porier</Link> por TKO, debido a una fractura en la pierna que sufrió Conor que le impidió continuar peleando. Este combate tendría una audiencia de 1,800.000 espectadores.</p>
                    <h3>1. McGregor vs Khabib</h3>
                    <p>Finalmente, la que al menos hasta ahora es la pelea más vista de la historia de la UFC, es la de <Link href='/articulos/conor-vs-khabib'>Khabib vs McGregor</Link> en el UFC 229, organizado el 6 de octubre de 2018, en la que luego de que <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link> ganara el campeonato de Peso Ligero contra el estadounidense <b>Al Iaquinta</b>, defendería el título contra un Conor McGregor que venía de tomarse un tiempo de las MMA para competir en boxeo contra <b>Floyd Mayweather</b>. La previa de la pelea estuvo cargada de mucha polémica entre ambos, principalmente por la forma en que tiene McGregor de confrontar a sus rivales en las previas, hablando mierda y metiendose hasta con la familia del oponente. El combate finalmente terminaría en una victoria por sumisión para <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link> en el cuarto asalto, y se convertiría en la pelea que más PPV vendería con un total de 2,400.000.</p>
                    <iframe className={styles.article__video} loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/JuBBIJ7adjM?si=18R4CY1lI_jsVocm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}