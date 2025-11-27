import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/makhachev-next_fight.2026.webp'
import { YouTubeEmbed } from '@next/third-parties/google'
import Link from 'next/link'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Próxima Pelea de Islam Makhachev 2026: ¿Ian Garry? ¿Ilia Topuria? ¿Michael Morales?',
    description: "¿Sería Ilia Topuria?, ¿Michael Morales?, ¿Ian Garry? Ya adelanto mi opinión, para mi el próximo rival de Islam Makhachev es Ian Garry.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmakhachev-next_fight.2026.8670f312.webp&w=828&q=65',
        title: 'Próxima Pelea de Islam Makhachev 2026: ¿Ian Garry? ¿Ilia Topuria? ¿Michael Morales?',
        description: "¿Sería Ilia Topuria?, ¿Michael Morales?, ¿Ian Garry? Ya adelanto mi opinión, para mi el próximo rival de Islam Makhachev es Ian Garry.",
        url: 'https://fullmma.org/noticias/islam-makhachev-proxima-pelea-2026'
    }
}

export default function IslamMakhachevNextFight2026 () {
    return(
        <main>
            <ArticleHero title='Próxima Pelea de Islam Makhachev 2026: ¿Ian Garry? ¿Ilia Topuria? ¿Michael Morales?' subtitle="La división de peso wélter está más movida que nunca, y son muchos los candidatos a enfrentar al campeón de de UFC Islam Makhachev." image={hero} date='2025-11-27' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Adelantando lo que creo que va a suceder: Ian Garry se enfrentará a Islam Makhachev por el título de peso wélter de la UFC, por mérito, por lo mediático y por la posición que ocupa en los rankings. </p>
                    <p>La subida de a peso wélter por parte del daguestaní <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> ha provocado una revolución en la división de peso wélter, convirtiéndose en el nuevo campeón de la división en el <Link href='/eventos/'>UFC 322</Link> al derrotar a <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>, y en el #11 doble campeón de la UFC. Lo que queda por ver ahora es quién será su próximo rival, ahora que tiene el título de las 170lbs: ¿Sería <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>?, ¿Michael Morales?, ¿<Link href='/peleadores/ian-garry'>Ian Garry</Link>? Procederemos a mencionar todos los candidatos a ser el nuevo rival del ruso, y hablaremos de que tan probable es cada uno.</p>
                    <h2>1. Ilia Topuria</h2>
                    <p>Comencemos mencionando la pelea más mediática de todas las que se podrían hacer: la de <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> en peso wélter o peso ligero. Ya sea que Ilia decida hacer una locura, y busque un tercer cinturón, subiendo para eso a las 170lbs, o que sean capaces de convencer a Islam de que baje de categoría nuevamente para enfrentar a Topuria, la pelea entre estos 2 luchadores, que ocupan los puestos #1 y #2 en el ranking libra por libra, y están apenas a una división de distancia, sería el mayor combate en la historia que podría hacer la UFC. </p>
                    <p>No existe practicamente nadie que no quiera ver esta pelea, pero aún así dicho combate presenta un par de complicaciones. Comenzando que ambos campeones se ganaron su cinturón muy recientemente, por lo que todavía ninguno ha defendido su cinturón. Esto es un problema, porque el hacer esta pelea implicaría dejar paradas 2 de las divisiones más importantes para la UFC en estos momentos, con Ilia Topuria teniendo como mínimo a 3 contendientes en peso ligero esperando su oportunidad, como mencioné en <Link href='/noticias/ilia-topuria-proxima-pelea-2026'>su artículo</Link>, y con Islam Makhachev teniendo a otros 5 posibles contendientes que mencionaré a lo largo de este artículo. </p>
                    <p>Por eso mismo, aunque sinceramente me encantaría que se haga esta pelea el próximo año, lo veo poco probable, al menos hasta que ambos luchadores hagan un par de defensas más. </p>
                    <YouTubeEmbed videoid='Z3om6R6rDwY' />
                    <h2>2. Michael Morales</h2>
                    <p>Quien en lo personal me encantaría que se enfrente al ruso, proque lo merece, y porque es latino al igual que todos los que estamos acá, es el ecuatoriano <b>Michael Morales</b>, quien se encuentra invicto con un récord de 19-0, ocupa el #4 lugar en el ranking, y viene de darnos una sorpresa a muchos cuando noqueó al entonces #2 de peso wélter <b>Sean Brady</b> en el primer asalto en el <Link href='/eventos/ufc322'>UFC 322</Link>, misma cartelera donde Islam se proclamaría campeón. </p>
                    <p>Con lo conseguido hasta el momento, sería más que merecido el pelear ante el de Daguestán por el cinturón de la compañía. La única razón por la que me parece que existe la posibilidad de que finalmente no sea él quien terminará peleando contra Makhachev, es porque existe la posibilidad de que lo conseguido por <Link href='/peleadores/ian-garry'>Ian Garry</Link> el sábado pasado, aunque menos espectacular, puede haberlo puesto por encima a los ojos de la UFC, estando de hecho en el puesto #2 de los rankings, por encima de Michael Morales. </p>
                    <p>De igual forma, el mismo Michael Morales habló de la posibilidad de que necesite hacer una pelea más para ganarse su oportunidad, y no descartó aceptar pelear con <Link href='/peleadores/carlos-prates'>Carlos Prates</Link> de necesitarlo para ganarse su oportunidad titular, quien había peleado en la misma cartelera que él ante el excampeón <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, consiguiendo de igual forma una victoria por nocaut. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">“If I have to fight Carlos Prates before the belt, I’ll do it”<br /><br />- Michael Morales <a href="https://t.co/Q3MVCOVALk">pic.twitter.com/Q3MVCOVALk</a></p>&mdash; Dovy🔌 (@DovySimuMMA) <a href="https://twitter.com/DovySimuMMA/status/1993340679486161363?ref_src=twsrc%5Etfw">November 25, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>3. Ian Garry</h2>
                    <p>Quien yo creo que va a ser quien finalmente enfrente a Makhachev es <Link href='/peleadores/ian-garry'>Ian Garry</Link>, quien viene de dar una exhibición el sábado pasado, cuando fue capaz de dominar a un excampeón, y a uno de los peleadores más duros que hay en la división como lo es <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>. </p>
                    <p>Además, por estilo, parecería ser que Garry es el desafío perfecto para el daguestaní, puesto que tiene un striking muy pulido, es bastante alto y maneja de manera perfecta la distancia, además de que tiene una defensa de derribo muy trabajada a esta altura, cosa que es clave ante un peleador como Islam, siendo capaz de defender todos los intentos de derribo de Belal en su última pelea, ante un luchador que tiene el derribo como arma principal. </p>
                    <p>Además, de todos los peleadores que están mencionado en este artículo, Ian Garry es el que se encuentra más arriba, estando #2, sólo por detrás del último campeón <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>, convirtiéndose en el contendiente #1 en estos momentos. </p>
                    <h2>4. Shavkat Rakhmonov</h2>
                    <p>A quien quizás estemos dejando de lado, debido a la poca frecuencia con la que viene peleando, es al luchador de Kazajistán <Link href='/peleadores/shavkat-rakhmonov'>Shavkat Rakhmonov</Link>, que está #3 en la división, y sigue siendo invicto con un récord de 19-0, con su última pelea siendo en diciembre de 2024, cuando derrotó justamente a <Link href='/peleadores/ian-garry'>Ian Garry</Link>, quitándole el invicto. </p>
                    <p>A Shavkat ya se le había ofrecido la oportunidad de pelear por el título en 2 ocasiones, siendo la primera en diciembre del año pasado, cuando debía enfrentar al entonces campeón <Link href='/peleadores/belal-muhammad'>Belal Muhammad</Link>, pero desafortunadamente el luchador palestino no podría estar presente debido a una lesión, fue por eso que entró en reemplazo Ian Garry. Y la segunda ocasión fue a mediados de este 2025, cuando debía enfrentar al mismo Belal, pero la pelea se terminaría suspendiendo esta vez por una lesión del mismo Rakhmonov, teniendo que ser reemplazado por Jack Della Maddalena. </p>
                    <p>Por azares del destino el kazajo nunca pudo pelear por el cinturón, el tiempo fue pasando, y por lesiones que lo obligaron a estar inactivo, Rakhmonov va camino a pasar más de 1 año de inactividad, mientras que otros peleadores como Ian Garry, Carlos Prates o Michael Morales, tuvieron 2 o más peleas este año, obteniendo victorias que los dejan en mejor posición para pelear por el cinturón que él. </p>
                    <p>No sé que vaya a suceder con Rakhmonov, pero creo que su inactividad le juega muy en contra a la hora de presentarse como contendiente, aunque él considera ser el candidato #1 por encima de luchadores como Ian Garry, como lo mencionó recientemente en su cuenta de X. </p>
                    <blockquote className={`${styles.article__twitter__quote} twitter-tweet`}><p lang="en" dir="ltr">No trash talk, just facts: Ian Garry lost to me while I was injured. He hasn’t finished anyone in his last six fights, and Prates nearly stopped him. Doesn’t sound like a #1 contender to me</p>&mdash; Shavkat “Nomad” Rakhmonov (@Rakhmonov1994) <a href="https://twitter.com/Rakhmonov1994/status/1993493036639412369?ref_src=twsrc%5Etfw">November 26, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
                    <h2>5. Carlos Prates</h2>
                    <p>El brasileño, integrante de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <Link href='/peleadores/carlos-prates'>Carlos Prates</Link>, es otro que podría ser candidato a enfrentar a Islam, pero me parece que es de los menos probables. </p>
                    <p>Viene de una victoria por KO en el segundo asalto en el <Link href='/eventos/ufc322'>UFC 322</Link> ante el excampeón inglés <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, además de hilar 2 victorias consecutivas este año, y ocupar el puesto #6 en los rankings. </p>
                    <p>La razón por la que lo nombro, es porque creo que en caso de tener una victoria ante cualquiera de los luchadores antes mencionados, podría convertirse tranquilamente en el contendiente #1 de peso wélter. Y porque de todos los peleadores que mencioné, es el único al que veo aceptando una pelea de corto aviso en caso de necesitarse, por lo que en caso de que se programe a Makhachev para pelear con uno de los luchadores mencionados anteriormente, y finalmente este se caiga por lesión o por lo que sea, el único peleador del top 10 al que veo aceptando pelear en corto aviso sin importar el momento del año, es al brasileño Carlos Prates. </p>
                    <h2>6. Kamaru Usman</h2>
                    <p>Finalmente está el histórico campeón de la división <Link href='/peleadores/kamaru-usman'>Kamaru Usman</Link>, quien viene de una impresionante victoria ante <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> que pocos veníamos venir. </p>
                    <p>Pese a venir de una victoria, y de contar con una trayectoria intachable en su carrera, especialmente en esta división, creo que de todos los luchadores mencionados, Usman es quien tiene menos oportunidades de pelear con Islam, y es quien menos lo merece de todos los mencionados. La única razón por la que lo menciono en esta lista, es porque el mismo Makhachev dijo que la pelea que quería hacer es contra el nigeriano, y porque Dana White ha halagado en demasiadas ocasiones al excampeón. </p>
                    <YouTubeEmbed videoid='NwjOIy-ylWo' />
                    <h2>Conclusión</h2>
                    <p>En conclusión, lo que yo creo que va a pasar es que Ian Garry se va a enfrentar a Islam Makhachev por el título de las 170lbs. Carlos Prates y Michael Morales se van a enfrentar entre sí por ser el próximo contendiente. Además, en caso de que se haga una pelea entre Shavkat Rakhmonov y Kamaru Usman, quien tenga la victoria más espectacular entre ellos 2, Morales y Prates, será el próximo contendiente al título, luego de Garry. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}