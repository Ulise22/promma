import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import type { Metadata } from 'next'
import Link from 'next/link'
/* Images */
import hero from '@/assets/articulos/previews/0-10/ufc-goats.jpg'

export const metadata: Metadata = {
    title: 'Los Mejores Peleadores de la Historia de UFC',
    description: '',
    openGraph: {
        title: 'Los Mejores Peleadores de la Historia de UFC',
        description: '',
        url: 'https://fullmma.org/articulos/top5-mejores-peleadores'
    }
}

export default function Top5 () {
    return(
        <main>
            <ArticleHero title='Los 5 Mejores Peleadores de la Historia de las MMA' subtitle='¿Quiénes son los mejores peleadores en la historia de las MMA? ¿Jon Jones? ¿Khabib? ¿George St-Pierre? ¿Anderson Silva?' image={hero} date={null} author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <h2>Los 5 Mejores Peleadores de la UFC de la Historia</h2>
                    <p>En esta lista, que no está ordenada en ningún ordén en partícular, hablaremos sobre los 5 peleadores que, en nuestra opinión, entran en la discusión sobre quien es el GOAT de la UFC.</p>
                    <h2>Jon Jones</h2>
                    <p>Para muchos es el estadounidense quien sin dudas debería ser reconocido como el mejor peleador de la historia de la UFC, entre ellos, el mismo presidente de la compañía, Dana White, que cuando se le preguntó por su top5 personal dijo: &quot;Es tan difícil de hacer porque cuando miras los 23 años que he estado en esto, ha habido tantos grandes peleadores. <b>Pero tienes que empezar con <Link href='/peleadores/jon-jones'>Jon Jones</Link></b>&quot;.</p>
                    <p>El estadounidense aún está en activo, y hasta el momento sostiene un récord de 27-1(1), habiendo destrozado a todos sus rivales. De hecho, es tal el nivel de superioridad que demostró en su carrera, que la única derrota que tiene es por descalificación, dado que en su combate con <b>Matt Hamill</b>, que en un combate que venía dominando, fue descalificado por unos codazos ilegales que aplicó contra Matt. </p>
                    <p>De sus 27 victorias, 10 han sido por nocaut, 7 por sumisión y 10 por decisión. Además tiene una pelea que quedó sin resultado contra el entonces campeón de la División de Peso Semipesado, <Link href='/leyendas/daniel-cormier'>Daniel Cormier</Link>, a quien originalmente había ganado por KO en el tercer asalto, pero que luego de dar positivo en un test de esteroides, se dejó sin resultado la pelea.</p>
                    <p>Toda esta excelente carrera, le sirvió para ser campeón de los pesos semipesados de la UFC, donde tuvo 11 defensas titulares exitosas, empatado con <b>Demetrious Johnson</b> como el que más defensas exitosas tiene en la compañía, donde tiene el reinado de Campeón de Peso Semipesado más largo en la historia de UFC (1501 días). Además, en su última pelea contra <b>Ciryl Gane</b>, se convertiría también en en el Campeón de Peso Pesado de la UFC, título que todavía no ha defendido, pero que sin embargo le sirvió para ser el octavo doble campeón de la UFC.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/ebeQBYvWKsw?si=ikc5CaTI1Xz8mDwB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>George St-Pierre</h2>
                    <p>Otro de los nombre que entra en la dicusión a la hora de hablar de los mejores peleadores que pasaron por la UFC es el de GSP, que con un récord de 26-2 supo destacar en su carrera principalmente en la compañía de Dana White, donde debutó el 31 de enero de 2004 con una victoria por decisión unánime contra el armenio <b>Karo Parisyan</b>.</p>
                    <p><Link href='/leyendas/george-st-pierre'>George St-Pierre</Link> supó ser un histórico campeón de la división de Peso Wélter, donde defendió el título 9 veces, siendo el que más defensas consecutivas tiene en la división, y el segundo que más tiene en la UFC. Además, en su último combate contra el inglés <b>Michael Bisping</b> en el UFC 217, se convertiría también el campeón de Peso Medio de la UFC, convirtiéndose en el septimo doble campeón de la compañía.</p>
                    <p>De sus 26 victorias, 8 fueron por nocaut, 6 fueron por sumisión y 14 por decisión. Además, sus únicas 2 derrotas fueron contra los estadounidense <b>Matt Hughes</b> y <b>Matt Serra</b>, contra quienes tuvo la oportunidad de enfrentarse en una revancha, venciendo tanto a Hughes, a quien luego de su derrota venció en 2 ocasiones, la primera vez por nocuat y la segunda por sumisión, y a Serra, aquien luego de se derrota volvió a enfrentar derrotandolo por nocaut.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/S5ZqBX9SMeQ?si=elgpfkNh3_1Dfwyd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Anderson Silva</h2>
                    <p><Link href='/leyendas/anderson-silva'>Anderson Silva</Link> es sin duda uno de los mejores peleadores de la historia de la UFC. Luego de convertirse en el campeón de Peso Medio al derrotar por KO al estadounidense <b>Rich Franklin</b>, defendería el cinturón de forma éxitosa en 10 ocasiones, convirtiendose en uno de los peleadores con más defensas consecutivas de la UFC, peleando entre medio con peleadores de peso semipesado venciendo a todos ellos, lo que le sirvió para acumular una racha de 16 victorias consecutivas en la empresa.</p>
                    <p>De sus 34 victorias, 20 fueron por la vía del nocuat, 6 por sumisión y 8 por decisión. Además tiene un combate que acabó sin resultado contra Nick Diaz, a quien había vencido por decisión unánime, pero que luego de dar positivo por testorena, dejaron sin resultado el combate.</p>
                    <p>Lamentablemente, lo que mancha un poco el legendario legado que Anderson dejó en las MMA, son sus últimos combates, dado que sólo ganaría 1 de sus últimas 9 peleas, perdiendo por nocaut con peleadores a priori, eran bastante inferiores a Silva, como lo fueron <b>Chris Weidman</b>, que lo venció 2 veces, <b>Jared Cannonier</b> y <b>Uriah Hall</b>.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/c96FlEr1V20?si=z_xyjSAgMLaPzF67" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Khabib Nurmagomedov</h2>
                    <p>De todos los peleadores que mencionamos en esta lista, el único en nunca perder un combate es <Link href='/leyendas/khabib-numagomedov'>Khabib Nurmagomedov</Link>, quien con un récord de 29-0 haría la mitad de su carrera en la UFC, y que luego de vencer por decisión unánime a <b>Al Iaquinta</b>, se convertiría en el primer peleador ruso y musulman en ser campeón de la compañia.</p>
                    <p>Luego de ganar el título, lo defendería en 3 ocasiones, ganando todos esos combates por sumisión, contra <Link href='/peleadores/conor-mcgregor'>Conor McGregor</Link>, <Link href='/peleadores/dustin-poirier'>Dustin Poirier</Link> y contra <Link href='/peleadores/justin-gaethje'>Justin Gaethje</Link>.</p>
                    <p>Quizás sea este dato el que le quite un par de puntos para ser considerado el mejor de la historia, las pocas defensas que tiene de su título, producto de su temprana retirada por razones personales. </p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/0rvIV_DGT1M?si=reXk8aOeKldBKIzn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <h2>Demetrious Johnson</h2>
                    <p><Link href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link> haría su debut en la UFC el 5 de febrero de 2011 ganando por decisión unánime contra el japonés <b>Norifumi Yamamoto</b>, y desde entonces sólo perdería en 2 ocasiones en sus casi 10 años peleando para la compañía. Se convertiría en campeón de la división de peso mosca al vencer a <b>Joseph Benavidez</b> por decisión dividida, y desde entonces defendería el título de forma exitosa en 11 ocasiones consecutivas, convirtiéndose en el peleador con más defensas titulares consecutivas en la historia de la UFC.</p>
                    <p>Su paso por la UFC fue de excelencia y los datos así lo demuestran. Sin embargo, por diferencias con Dana White entre los pagos y la cantidad de dinero que generaba o no Demetrious, ni bien perdió el título contra <b>Henry Cejudo</b> por decisión dividida, terminó abandonando la compañía, sin tener la oportunidad de volver a pelear allí.</p>
                    <p>Pese a esto, Demetrious Johnson encontró su lugar en el mundo en la promotra <Link href='/articulos/one-championship'>ONE</Link>, donde aparentemente es mejor pagado y donde ya supo ser ganador de <b>el Gran Premio de Peso Mosca de ONE</b>, que era un campeonato en forma de eliminatoria, además de ser campeón del campeonato de Peso Mosca de ONE en su combate contra el brasileño <b>Adriano Moraes</b>, contra quien además ya defendió de forma exitosa.</p>
                    <iframe className={styles.article__video} width="560" height="315" src="https://www.youtube.com/embed/b1zz3g1ItTs?si=6UvnSdqvhL5Qv208" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}