import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/articulos/0-100/20-30/luchadores_ufc_mas_famosos.jpg'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Peleadores de UFC Famosos',
    description: '¿Quiénes son los luchadores de UFC más famosos y con más seguidores en redes sociales? Acá está el top 10 de peleadores más reconocidos de la UFC.',
    openGraph: {
        title: 'Peleadores de UFC Famosos',
        description: '¿Quiénes son los luchadores de UFC más famosos y con más seguidores en redes sociales? Acá está el top 10 de peleadores más reconocidos de la UFC.',
        url: 'https://fullmma.org/articulos/peleadores-de-ufc-famosos'
    }
}

export default function PeleadoresMasFamososUFC () {
    return(
        <main>
            <ArticleHero title='¿Quienes son los Peleadores de UFC Más Famosos? La lista de los 10 Peleadores con Más Seguidos' subtitle='Compartiremos la lista de los 10 peleadores de UFC con más seguidores en Instagram. Que nos ayudará a descubrir quién es el peleador más famoso de todos en la UFC.' image={hero} date='13/01/2025' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Desde FULLMMA nos preguntamos quiénes son los peleadores más famosos de la UFC. Por eso en este post, repasaremos la lista de los 10 peleadores con más influencia en redes sociales, basándonos en la cantidad de seguidores que poseen en instagram (porque en esta red social es donde más seguidores suelen tener todos los peleadores de MMA). 
                    </p>
                    <p>Vale como aclaración que sólo tomé en cuenta peleadores que se encuentren actualmente activos en el 2025, y que aunque en algunos casos puede ser discutible, debido a la poca actividad que han tenido en el último tiempo, como no están retirados de manera oficial los agregué de igual forma. Ejemplo de esto es <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, que está muy por encima del resto de luchadores a nivel mediático, en cuanto a fama y seguidores en redes sociales.</p>
                    <h2>1. Conor McGregor (47,1 mill)</h2>
                    <p>El puesto más claro de todos, que no sorprende a absolutamente nadie, es el que ocupa el irlandés <Link href='/peleadores/conor-mcgregor'>&quot;The Notorious&quot; Conor McGregor</Link>. Que con más de 45 millones de seguidores se posiciona como el atleta de la UFC más reconocido a nivel mundial, por mucha diferencia por sobre los demás.</p>
                    <p>A este punto, el nivel de fama que ha alcanzado el irlandés, trasciende lo hecho en las MMA. Estando activo en otros deportes como el Boxeo, o el Barenuckle, y protagonizando películas como <b>Road House</b>. Conor se convirtió en una figura cultural, y en parte por eso se explica porqué tanta diferencia en seguidores respecto al segundo de esta lista, casi que quintuplicándolo en seguidores.</p>
                    <YouTubeEmbed videoid='3mPPMCa8Nxw' />
                    <h2>2. Jon Jones (9,5 mill)</h2>
                    <p>El segundo puesto está ocupado por nada más ni nada menos que el GOAT del deporte, <Link href='/peleadores/jon-jones'>Jon Jones</Link>, el Messi de las MMA, el Michael Jordan de la UFC. Sin estar excento de controversias y conflictos extradeportivos que empañan su imagen a los ojos de algunos fanáticos, lo cierto es que un peleador como él, que supo convertirse en el <b>Campeón Más Joven de la Historia de la UFC</b>, defendiendo y volviendo a ganar cuando fue necesario su cinturón, durante más de 10 años, siendo doble campeón de las divisiones de peso semipesado y peso pesado de la compañía, es lógico que con tremendo curriculum el estadounidense se posicione como uno de los atletas más seguidos y reconocidos de este deporte. </p>
                    <h2>3. Islam Makhachev (9,1 mill)</h2>
                    <p>El tercer lugar está ocupado por el actual campeón de peso ligero de la UFC, <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, quien con 3 defensas del título, y estando por defender una cuarta vez el próximo sábado 18 de enero en el <b>UFC 311</b>, ante <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, es sin dudas uno de los mejores peleadores de la historia de su división.</p>
                    <p>Sus actuaciones dominantes, su victorias contundentes ante rivales tan duros como los que ha enfrentando para estar donde está, es lo que lo convierte en un peleador digno de admirar y de seguir. Esto sumado a que es un peleador de un país muy poblado y seguidor de las MMA como Rusia, creyente de una religión con fans acérrimos a los suyos, le han ganado una gran base de fanáticos. </p>
                    <h2>4. Khamzat Chimaev (9,1 mill)</h2>
                    <p>El checheno y actualmente invicto con un récord de 14-0 <Link href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link> es quien ocupa el cuarto puesto, con solo unos pocos miles de seguidores menos que su compatriota ruso Islam Makhachev. Siendo un peleador que ha finalizado a practicamente todos sus rivales, de manera contundente, cosa que viene muy bien acompañado de su personalidad peculiar, que le genera un aura de invencible y de peleador loco, hace dificil que Chimaev sea un peleador que se pueda pasar por alto.</p>
                    <p>Esto sumado obviamente a que es parte de un país gigante como Rusia, y que pertenece a la misma religión que Makhachev, que suele ser muy fanática de sus peleadores, hace que pese a que todavía no fue campeón, se convierta en uno de los peleadores más famosos de la UFC. </p>
                    <h2>5. Israel Adesanya (8,6 mill)</h2>
                    <p>Un peleador que se ha ganado su reconocimiento mediático a base de mérito es sin dudas <Link href='/peleadores/israel-adesanya'>Israel Adesanya</Link>. Sabiendo moverse y actuar muy bien para siempre generar atención y lograr que la gente tenga puestos sus ojos en él, ha respaldado su personalidad extrovertida con hechos dentro del octágono, siendo sin dudas uno de los mejores pesos medianos de la historia de la compañía, solo por detrás de <Link href='/leyendas/anderson-silva'>Anderson Silva</Link>. Habiendo sido 2 veces campeón, y habiendo tenido 5 defensas exitosas consecutivas del título, Adesanya se posiciona merecidamente en el top5 de peleadores más reconocidos de la compañía. </p>
                    <h2>6. Charles Oliveira (8 mill)</h2>
                    <p>El brasileño <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link> ocupa el sexto puesto de esta lista, siendo un peleador facilmente querible con una personalidad carismática a la que es imposible odiar.</p>
                    <p>Esto, sumado a la extensa trayectoria con la que cuenta, a punto de cumplir 15 años peleando en la UFC este 2025 es: el peleador con más finalizaciones en toda la historia de la UFC; siendo por tanto también el peleador con más bonos post pelea; el peleador con más victorias por sumisión en 2 divisiones diferentes, como lo son la de peso pluma y peso ligero; uno de los peleadores con la racha más larga de victorias en la división de peso ligero, habiendo sido campeón de esta división en 2021, cuando le ganó el cinturón vacante a <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>. </p>
                    <p>Razones para admirar a Oliveira sobran, y es por eso que cuenta con más de 8 millones de seguidores en su cuenta oficial de instagram. </p>
                    <YouTubeEmbed videoid='nh80a_lKljU' />
                    <h2>7. Ilia Topuria (6,3 mill)</h2>
                    <p>El español actualmente campeón de la división de peso pluma, <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, ha tenido en el último año un crecimiento mediático brutal. De tan sólo decir que si hubiera hecho este artículo hace un año no hubiera aparecido, se convirtió en una estrella de y en uno de las caras visibles de la compañía en tiempo récord, en base a respaldar en el octágono lo que decía con la boca, noqueando a 2 de los mejores peleadores de la historia de su división uno tras otro, como lo hizo con <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> y <Link href='/peleadores/max-holloway'>Max Holloway</Link>. </p>
                    <p>Estando invicto con un récord de 16-0, la fama y reconocimiento de Topuria sólo pued ir a más. Teniendo retos pendientes como llevar la UFC a España, o pelear por el doble cinturón en la división de peso ligero, que en caso de conseguir lo catapultarían varios puestos por arriba en esta lista. </p>
                    <h2>8. Alex Pereira (6,2 mill)</h2>
                    <p>Otro que ha tenido un ascenso mediático explosivo en el último año es el brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, que de igual forma, en base a ser un luchador activo, dispuesto a tomar peleas riesgosas que otros rechazarían, y a noquear a los rivales que se le pongan delante, el actual campeón de peso semipesado se convirtió en una, sino en la principal, de las caras visibles de la UFC. Siendo uno de los favoritos de los fans, no necesita pronunciar ninguna palabra en inglés para ser amado por el público estadounidese, donde se encuentran la mayoría de los fanáticos de este deporte. </p>
                    <h2>9. Dustin Poirier (5,3 mill)</h2>
                    <p>Uno de los peleadore veteranos que es adorado por la mayoría de los fanáticos, y que se encuentra pronto a retirase, es el estadounidense <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link>, quien en base a darnos muchas de las peleas más memorables que hemos visto en nuestras vidas, se ha ganado el merecido cariño del público que lo apoya a donde va. </p>
                    <p>Y no es para menos, puesto que junta a Edson Barboza, es el peleador con la mayor cantidad de bonos a la Pelea de la Noche en la historia de la UFC. Desafortunadamente nunca pudo alcanzar el título de la división de peso ligero, pese a haber peleado en 3 ocasiones con este cinturón en juego, siendo la última ante el ya mencionado en esta lista <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, en el <Link href='/covertura-ufc/ufc302'>UFC 302</Link>.</p>
                    <p>Dustin Poirier siendo un perro de pelea, y brindando espectáculo a donde va, merecidamente se encuentra entre los 10 peleadores más reconocidos de la UFC. </p>
                    <h2>10. Max Holloway (4,6 mill)</h2>
                    <p>Por último, quien ocupa el puesto #10 no es otro que el actual BMF de la compañía, <Link href='/peleadores/max-holloway'>Max Holloway</Link>. Quien cuenta con muchas de las características que destacamos en los otros peleadores, con una personalidad querible e imposible de odiar, Max se fue convirtiendo en un peleador mítico en base a los momentos inolvidables que nos ha dejado a lo largo de su carrera. Más allá de destacar sus logros, como el haber sido campeón de la división de peso pluma, o el haber ganado el cinturón del BMF, será recordado por momentos justamente como el que le hicieron ganar este último cinturón, en su pelea contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link> en el <Link href='/covertura-ufc/ufc300-main-event'>UFC 300</Link>, en uno de los momentos más épicos jamás vistos, cuando pese a estar ganando cómodamente la pelea, invitaría a su rival a intercambiar golpes en los últimos 10 segundos, logrando una victoria por nocaut justo en el último segundo del combate. </p>
                    <YouTubeEmbed videoid='h9KBcib8pHc' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}