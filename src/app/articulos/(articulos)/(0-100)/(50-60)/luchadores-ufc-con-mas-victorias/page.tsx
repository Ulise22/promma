import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/50-60/10_peleadores_mas_victorias.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Peleadores de UFC Con Más Victorias',
    description: 'La lista de los 10 peleadores de UFC con más victorias en la historia de la compañía, desde Jon Jones, Max Holloway, Dustin Poirier, etc.',
    openGraph: {
        title: 'Luchadores de UFC Con Más Victorias',
        description: 'La lista de los 10 peleadores de UFC con más victorias en la historia de la compañía, desde Jon Jones, Max Holloway, Dustin Poirier, etc.',
        url: 'https://fullmma.org/articulos/luchadores-ufc-con-mas-victorias'
    }
}

export default function LuchadoresConMasVictoriasUFC () {
    return(
        <main>
            <ArticleHero title='Los 10 Peleadores Con Más Victorias en la Historia de la UFC' subtitle='Los Peleadores de UFC Con Más Victorias en la Historia de la Compañía.' image={hero} date='2025-02-05' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Ser uno de los peleadores de UFC con más victorias debe ser de las cosas más difíciles que hay, debido a que el solo hecho de competir en la UFC signífica que estás en la elite de los peleadores de MMA. Por lo que tus rivales son de igual o mayor nivel, debido a esto, el alcanza un alto número de victorias, requiere de que seas muy bueno en lo que haces, y de que lleves una cantidad de años peleando al más alto nivel anormal para cualquier peleador. Por eso hoy repasaremos a la lista de 10 peleadores que más victorias han obtenido en la historia de la UFC. </p>
                    <h2>10. Rafael Dos Anjos</h2>
                    <ul>
                        <li>Victorias: 21</li>
                        <li>Récord Profesional: 23-16</li>
                        <li>Debut en UFC: 15 de noviembre de 2008 (UFC 91)</li>
                        <li>Nacionalidad: Brasileño</li>
                    </ul>
                    <p>El veterano brasileño de 40 años, es uno de los luchadores históricos con los que cuenta esta compañía, habiendo sido campeón de peso ligero en el pasado, con una defensa exitosa del título, intercalo toda su carrera en la compañía entre las divisiones de peso ligero y peso wélter. Donde tuvo catuaciones más que destacadas, participando en 4 peleas por el cinturón de ambas divisiones. </p>
                    <p>Actualmente sigue siendo un luchador activo, con su última pelea siendo el 9 de marzo de 2024 en el <Link href='/covertura-ufc/ufc299'>UFC 299</Link>, en lo que fue una derrota por decisión unánime ante <b>Mateusz Gamrot</b>. </p>
                    <YouTubeEmbed videoid='rxecM-oK_cc' />
                    <h2>9. Jon Jones</h2>
                    <ul>
                        <li>Victorias: 22</li>
                        <li>Récord Profesional: 28-1 (1)</li>
                        <li>Debut en UFC: 9 de agosto de 2008 (UFC 87)</li>
                        <li>Nacionalidad: Estadounidense</li>
                    </ul>
                    <p>El GOAT de las MMA, quien probablemente sea el mejor peleador de la historia de este deporte, obviamente debía encontrarse en esta lista, al acumular un total de 22 victorias en la UFC, siendo 16 de estas victorias en una pelea por el cinturón. </p>
                    <p>El actual campeón de peso pesado, <Link href='/peleadores/jon-jones'>Jon Jones</Link>, todavía se encuentra activo, con su última pelea siendo una defensa del título ante <b>Stipe Miocic</b>, el pasado 17 de noviembre de 2024 en el <Link href='/covertura-ufc/ufc309'>UFC 309</Link>, donde conseguiría una victoria por TKO, luego de conectar una espectacular patada lateral giratoria. </p>
                    <YouTubeEmbed videoid='ebeQBYvWKsw' />
                    <h2>8. Neil Magny</h2>
                    <ul>
                        <li>Victorias: 22</li>
                        <li>Récord Profesional: 29-13</li>
                        <li>Debut en UFC: 23 de febrero de 2013 (UFC 157)</li>
                        <li>Nacionalidad: Estadounidense</li>
                    </ul>
                    <p>El estadounidense de 37 años Neil Magny, supo convertirse en uno de los peleadores más respetados de la división de peso wélter, en base a pelear constantemente y a conseguir una amplia cantidad de victorias en su récord. </p>
                    <p>Actualmente sigue activo, con su última pelea siendo el 9 de noviembre de 2024, en una cartelera protagonizada por él mismo, donde enfrentó al brasileño <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, contra quien lamentablemente caería derrotado por KO en el primer asalto. </p>
                    <YouTubeEmbed videoid='0gyAp1wFjUE' />
                    <h2>7. Demian Maia</h2>
                    <ul>
                        <li>Victorias: 22</li>
                        <li>Récord Profesional: 28-11</li>
                        <li>Debut en UFC: 20 de octubre de 2007 (UFC 77)</li>
                        <li>Nacionalidad: Brasileño</li>
                    </ul>
                    <p>El primer peleador retirado del que hablamos en esta lista no es otro que <b>Demian Maia</b>, quien supo ser uno de los luchadores más destacados de la compañía, peleando por el cinturón de peso medio en una ocasión ante el entonces campeón <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>. Además de pelear por el cinturón de peso wélter, tiempo más tarde, ante el entonces campeón <b>Tyron Woodley</b>. </p>
                    <p>Como mencioné anteriormente, Maia está retirado y ya no compite profesionalmente, con su última pelea siendo el 12 de junio de 2021 en el UFC 263, ante quien es hoy en día el actual campeón de peso wélter <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, con quien cayó derrotado por decisión unánime. </p>
                    <YouTubeEmbed videoid='2R2D39GVrXI' />
                    <h2>6. Max Holloway</h2>
                    <ul>
                        <li>Victorias: 22</li>
                        <li>Récord Profesional: 26-8</li>
                        <li>Debut en UFC: 4 de febrero de 2012 (UFC 143)</li>
                        <li>Nacionalidad: Estadounidense</li>
                    </ul>
                    <p>El actual BMF de la UFC, <Link href='/peleadores/max-holloway'>Max Holloway</Link>, es uno de los peleadores favoritos de los fanáticos, siendo aún hoy en día de los luchadores más destacados de la compañía, habiéndo sido campeón en el pasado de la división de peso pluma, donde consiguió defender su cinturón de forma exitosa en 4 oportunidades. </p>
                    <p>Con su última pelea siendo una derrota por KO ante el campeón español de peso pluma <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, en el <Link href='/covertura-ufc/ufc308'>UFC 308</Link>. Max es el peleador más joven de esta lista, con 33 años, habiendo anunciado que a partir de ahora competirá en peso ligero, no caben dudas de que seguramente en el futuro cercano avanzará unos cuantos puestos en esta lista. </p>
                    <YouTubeEmbed videoid='Fh-PoFV6Xdk' />
                    <h2>5. Dustin Poirier</h2>
                    <ul>
                        <li>Victorias: 22</li>
                        <li>Récord Profesional: 30-9 (1)</li>
                        <li>Debut en UFC: 1 de enero de 2011 (UFC 125)</li>
                        <li>Nacionalidad: Estadounidense</li>
                    </ul>
                    <p>Otro de los peleadores históricos de la compañía que integra esta lista, que sin dudas entrará al Hall of Fame de la UFC, es <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>. Quien desde que hizo su debut en la compañía en 2011, ha tenido un total de 31 combates, donde cosechó las 22 victorias que lo ponen en este puesto. Iniciando su carrera en peso pluma, transicionó a peso ligero, donde se convirtió en uno de los mejores peleadores que ha visto esta división, habiendo sido campeón interino de peso ligero, y habiendo competido por el cinturón en 3 ocasiones diferentes, siendo la última ante el actual campeón <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>, donde lamentablemente caería derrotado por sumisión en el quinto y último asalto de la pelea. </p>
                    <YouTubeEmbed videoid='71RyH3LbzOc' />
                    <h2>4. Andrei Arlovski</h2>
                    <ul>
                        <li>Victorias: 23</li>
                        <li>Récord Profesional: 34-24 (2)</li>
                        <li>Debut en UFC: 17 de noviembre del 2000 (UFC 28)</li>
                        <li>Nacionalidad: Bielorruso</li>
                    </ul>
                    <p>Uno de los luchadores con más combates encima de los que vamos a hablar, es el histórico excampeón de peso pesado <b>Andrei Arlovski</b>, quien tuvo 2 pasos por la compañía, con el primero siendo más exitoso que el segundo, al haber logrado ser campeón interino (más tarde promovido a campeón indiscutido), defendiendo su cinturón de manera exitosa en 2 oportunidades. </p>
                    <p>En su segunda etapa, siendo un luchador más veterano, sufriría bastante más sus combates ante luchadores más jovenes que él, siendo finalizado por peleadores como <Link href='/peleadores/francis-ngannou'>Francis Ngannou</Link> o <Link href='/peleadores/tom-aspinall'>Tom Aspinall</Link>. Debido a esto es que se retiraría perdiendo sus últimas 4 peleas en la compañía, con su último combate siendo en el <Link href='/covertura-ufc/ufc303'>UFC 303</Link>, donde caería derrotado por decisión dividida ante <b>Martin Buday</b>. </p>
                    <YouTubeEmbed videoid='VLJvso-8SV8' />
                    <h2>3. Donald Cerrone</h2>
                    <ul>
                        <li>Victorias: 23</li>
                        <li>Récord Profesional: 36-17 (2)</li>
                        <li>Debut en UFC: 5 de febrero de 2011 (126)</li>
                        <li>Nacionalidad: Estadounidense</li>
                    </ul>
                    <p>Otro de los peleadores históricos que integran esta lista es <b>Donald &quot;Cowboy&quot; Cerrone</b>, quien además enfrentó a varios de los que integran este top 10, consiguiendo victorias contra pasados y futuros campeones como <b>Charles Oliveira</b>, <b>Edson Barboza</b>, <b>Benson Henderson</b> o <b>Eddie Alvarez</b>. </p>
                    <p>Intercaló sus combates entre la división de peso ligero y peso wélter, alcanzando la sorprendente cantidad de 23 victorias. Lamentablemente terminaría su carrera en la compañía con 6 derrotas y 1 pelea sin resultado en sus últimas 7 peleas, aunque con los recientes rumores de un posible retorno desde el retiro por parte de Cowboy, es posible que escale en esta lista hasta ocupar el puesto #1. </p>
                    <YouTubeEmbed videoid='2gKhrV3nox0' />
                    <h2>2. Charles Oliveira</h2>
                    <ul>
                        <li>Victorias: 23</li>
                        <li>Récord Profesional: 35-10 (1)</li>
                        <li>Debut en UFC: 1 de agosto de 2010 (UFC Live: Jones vs. Matyushenko)</li>
                        <li>Nacionalidad: Brasileño</li>
                    </ul>
                    <p>Otro de los peleadores más queridos por el público y que forma parte de esta lista, es el brasileño excampeón de peso ligero <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, quien intercalando sus peleas entre peso pluma y peso ligero, consiguió un total de 23 victorias en la UFC, siendo la última la obtenida ante <Link href='/peleadores/michael-chandler'>Michael Chandler</Link> en el <Link href='/covertura-ufc/ufc309'>UFC 309</Link>. </p>
                    <YouTubeEmbed videoid='nh80a_lKljU' />
                    <h2>1. Jim Miller: El Peleadores con Más Victorias en UFC</h2>
                    <ul>
                        <li>Victorias: 27</li>
                        <li>Récord Profesional: 38-18 (1)</li>
                        <li>Debut en UFC: 18 de octubre de 2008 (UFC 89)</li>
                        <li>Nacionalidad: Estadounidense</li>
                    </ul>
                    <p>Finalmente, quien ocupa el primer puesto al ser el peleador con más victorias en la historia de la UFC, es <Link href='/articulos/jim-miller-historia'>Jim Miller</Link>, quien con 41 años, 27 victorias y estando aún activo, supo convertirse en un peleador histórico de la compañía en base a pelear constantemente y cosechar victorias para su récord personal. </p>
                    <p>Lleva un total de 45 peleas en la compañía de artes marciales mixtas más grande del mundo, y ha confesado que planea retirarse cuando alcance las 50, por lo que podría ser capaz de superar su propio récord, dado que va camino a eso, ya que su última pelea fue una victoria por sumisión en el primer asalto el pasado 16 de noviembre de 2024 en el <Link href='/covertura-ufc/ufc309'>UFC 309</Link>. </p>
                    <YouTubeEmbed videoid='Uu5xj5KdSwY' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}