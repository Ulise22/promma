import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import AsideChamps from '@/app/components/asides/AsideChamps'
import Link from 'next/link'
import Image from 'next/image'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/lewis-vs-nascimento-preview.jpg'
import EndArticle from '@/app/components/EndArticle'

export default function FightNightLewisNascimento () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡El Argentino Ribovics Noquea a su Rival a los 35 Segundos! ¡Lewis Noquea a Nascimento en el Tercer Asalto!' subtitle='En el UFC Fight Night Lewis vs Nascimento fuimos testigos de una espectacular patada de Ribovics a los pocos segundos de empezar el combate, de la victoria por nocaut de Derrick Lewis en el evento principal, de un nocaut a los 12 segundos por parte de Carlos Ulberg, y mucho más.' image={hero} date='2024-05-12' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>En uno de los Fight Night más entretenidos en mucho tiempo, pudimos ver pelear de vuelta a uno de los peleadores más queridos por lo fans y uno de los más graciosos como lo es Derrick Lewis, que no decepcionó en su combate al lograr finalizar a su rival en el tercer asalto. Además </p>
                    <h2>Esteban &quot;El gringo&quot; Ribovics Noquea su Mckinney a los 37 Segundos</h2>
                    <p>La que sin duda fue una de las actuaciones de la noche fue la del argentino <Link href='/peleadores/esteban-ribovics'>Esteban Ribovics</Link>, quien en tercer pelea para la UFC sólo necesitó de 37 segundos para finalizar a su oponente con una expectacular patada que dejó noqueado a su rival. De esta manera agranda su récord que está en 13-1, teniendo la impresionante característica de haber finalizado en 12 de sus 13 victorias, siendo justamente su última pelea antes de la de anoche, la única que llegó a la mano de los jueces, cuando enfrentó a Kamuela Kirk en su segunda pelea para la compañía.</p>
                    <h2>El Dominicano Waldo Cortes Sorprende y Derrota al Cubano Robelis Despaigne</h2>
                    <p>Quizás una de las actuaciones que decepcionó a muchos fanáticos fue la del cubano Robelis, quien había mostrado muchas cualidades en su última pelea en marzo, cuando en su debut para UFC noqueó a su rival a los 18 segundos de la pelea. En esta ocasión sin embargo, no pudo repetir lo hecho en el <Link href='/covertura-ufc/ufc299'>UFC 299</Link>, y se vió completamente dominado por el dominicano, que con 3 derribos de 4 intetados y con su lucha en el piso, controló por completo al cubano que poco pudo hacer.</p>
                    <h2>Carlos Ferreira Noquea a Mateusz Rebecki en el Tercer Asalto</h2>
                    <p>El luchador veterano de Brasil <b>Carlos Diego Ferreira</b> logra una espectacular victoria vía TKO en el tercer asalto de la pelea ante el polaco <b>Mateusz Rebecki</b>, en una actuación que le garantiza el cuarto bono de su carrera a la Actuación de la Noche. </p>
                    <p>Recordemos que Carlos venía de hace otra impresionante actuación en su pelea de hace un año ante <b>Michael Johnson</b>, a quien había logrado vencer por KO de igual forma en el segundo asalto de su pelea. Cortando con aquella victoria con una racha de 3 derrotas seguidas y con un año y medio de inactividad. De esta forma, con su ahora más reciente victoria, el luchador de 39 años extiende su récord profesional a 19-5. </p>
                    <h2>Carlos Ulberg Noquea a Menifield a los 12 Segundos de la Pelea</h2>
                    <p>En la pelea que tuvo a Carlos Ulberg enfrentando a un peleador ranqueado en la división de semipesados, no sólo estuvo a la altura del desafío, sino que sobrecumplió al noquear al #11 de la división, Alonzo Menifiel, en tan sólo 12 segundos, lo que lo hizo ganador del premio a la actuación de la noche.</p>
                    <h2>Joaquin Buckley derrota a Ruziboev</h2>
                    <p>El luchador estadounidense <b>Joaquin Buckley</b> logra una importante victoria por decisión unánime, luego de dominar durante la mayor parte del combate a su rival <b>Nursulton Ruziboev</b>. </p>
                    <p>De esta manera, Buckley logra su cuarta victoria consecutiva en la UFC desde que regresó a la división de peso wélter, y la segunda en lo que va del año, dado que el 30 de marzo de este mismo 2024, había sido capaz de noquear al brasileño <b>Vicente Luque</b>, en otra destacada actuación. </p>
                    <h2>Derrick Lewis Noquea a Nascimento en el Tercer Asalto</h2>
                    <p>El evento principal no decepcionó y nos mostró a un dominante Derrick Lewis, quien era favorito a priori, sabiendo ponerse de pie cuando fue derribado y logrando conectar una buena combinación de golpes en el tercer asalto que terminó con la finalización que le daría la victoria al estadounidense por sobre el brasileño.</p>
                    <p>Con este nuevo nocaut, Derrick Lewis alarga su récord de 15 victorias por nocaut en la UFC, siendo el peleador con más victorias por esta vía en la UFC, lo que lo convierte en un hombre histórico de la compañía.</p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}