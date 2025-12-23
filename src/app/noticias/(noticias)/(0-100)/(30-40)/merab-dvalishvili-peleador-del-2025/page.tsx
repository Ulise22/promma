import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/noticias/0-100/30-40/merab_dvalishvili_foty2025.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))
const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Merab Dvalishvili: ¡El Peleador del Año de FULLMMA 2025!',
    description: "",
    openGraph: {
        images: '',
        title: 'Merab Dvalishvili: ¡El Peleador del Año de FULLMMA 2025!',
        description: "",
        url: 'https://fullmma.org/noticias/merab-dvalishvili-peleador-del-2025'
    }
}

export default function MerabDvalishviliFOTY2025 () {
    return(
        <main>
            <ArticleHero title='Merab Dvalishvili: ¡El Peleador del Año de FULLMMA 2025!' subtitle="Este año elegimos desde FULLMMA a Merab Dvalishvili como el Peleador del Año 2025 de la UFC. " image={hero} date='2025-12-23' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Habiendo acabado el año, al menos en lo que respecta a la UFC, ya sin eventos por delante, estamos en condiciones de debatir sobre quien debería ser elegido el peleador del año. Y aunque he visto nombrarse y candidatear a muchos otro peleadores, para mi no quedan dudas de que <b>el peleador del año 2025 es <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link></b>. </p>
                    <p>A lo largo del año 2025 el georgiano ha peleado un total de 4 veces, poniendo en juego su cinturón siempre luego de haberlo conseguido en septiembre del 2024, en aquel famoso evento de UFC organizado en <b>La Esfera</b> de Las Vegas. Durante estas 4 peleas se enfrentó siempre al principal contendiente que había para disputar el título, sin decirle que no a ninguno, y sin huir de ningún luchador por más fuerte que fuera, y esto en una época donde los campeones de UFC parecen defender cada vez menos sus cinturones, y donde parecen ser más selectivos con qué rivales enfrentar y cuales no, es algo que hay destacar y agradecer profundamente a Merab, y es, de hecho, una de las razones principales por la que lo elegimos el peleador del año.</p>
                    <p>Comenzó defendiendo su cinturón en enero de este año, en el evento coestelar del <Link href='/covertura-ufc/ufc311'>UFC 311</Link>, donde tuvo que enfrentar a un contendiente que fue evitado por practicamente toda la división, el ruso <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmadomedov</Link>, quien venía con un récord profesional invicto de 18-0, siendo además primo de <Link href='/leyendas/khabib-nurmagomedov'>Khabib</Link>, y contando con este en su esquina, el daguestaní se había convertido en un rival que nadie quiere enfrentar. Sin embargo, el georgiano tomó esta pelea con todo el impetu y toda la intención de quitarle el invicto, aceptando ser la pelea coestelar de <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link> en condiciones menos favorables, contando con menos tiempo de descanso que su rival varios años menor. Esa noche, Merab dió muestra de su cálidad como peleador y del cardio sobrenatural que posee, logrando dar vuelta una pelea que estaba perdiendo y hacerlo con un dominio pocas veces visto en un peleador de su división, ganando el bono a la Pelea de la Noche y convirtiéndose a partir de ese momento en uno de los peleadores favoritos de los fans. </p>
                    <YouTubeEmbed videoid='VazxJSDXUs4' />
                    <p>El 7 de junio volvería a subirse al octágono para defender otra vez su cinturón en una revancha ante el estadounidense <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link>, donde se vería aún más dominante, logrando esta vez finalizar a su rival, encontrando una sumisión en el tercer asalto que le daría el bono a la Actuación de la Noche. </p>
                    <p>Apenas 3 meses después, el 4 de octubre en el <Link href='/eventos/ufc320'>UFC 320</Link>, volvería a defender su cinturón en un evento que lo tendría como pelea coestelar ante el estadounidense <b>Cory Sandhagen</b>, donde estarían <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> enfrentándose. Aquella noche nuevamente Merab demostraría que está a otro nivel diferente del resto de su división, ganando por decisión unánime, alcanzando las 3 defensas del título en el año y en toda su carrera, igualando la marca de <b>Dominick Cruz</b> como el campeón con más defensas en las 135lbs. </p>
                    <p>Finalmente a Merab Dvalishvili por pedido de él, se lo programaría para pelear en el último evento numerado del año, apenas 2 meses después, el 6 diciembre ante el principal contendiente <Link href='/peleadores/petr-yan'>Petr Yan</Link>, en el <Link href='/eventos/ufc323'>UFC 323</Link>. Era su cuarta pelea en el año, y de ganar podría lograr un hito, rompiendo el récord de más defensas exitosas en un año, dejando atrás a <Link href='/peleadores/alex-pereira'>Alex Pereira</Link> y <Link href='/peleadores/jon-jones'>Jon Jones</Link>, que tienen 3 defensas, y podría convertirse en el campeón de peso gallo con más defensas en la historia. Sin embargo, aquella noche tanta actividad, tantos cortes de peso, y enfrentar a un rival tan duro como lo es Petr Yan, le pasarían factura, cayendo derrotado por decisión unánime luego de ser completamente dominado por su rival que le ganó 4 de los 5 asaltos. </p>
                    <YouTubeEmbed videoid='xmpyQM-q5Pc' />
                    <p>A pesar de esta derrota que finalmente lo dejó sin cinturón, ya el haber peleado 4 veces es todo un logro, y el haber obtenido una victoria en 3 de esas 4 peleas por el cinturón aún más, siendo de los pocos campeones que peleó tan seguido este año (de hecho el único con más de 2 peleas en el año). </p>
                    <h2>Otros Candidatos a Ser Peleador del Año</h2>
                    <p>Pese que para mí <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> es sin dudas el peleador del año, no deja de valer la pena mencionar a otros luchadores que por sus logros este año también podrían haber sido considerados como tales, comenzando por el más obvio, que es <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, que no sólo se convirtió en el campeón con más defensas en la historia de peso ligero al someter a <Link href='/peleadores/renato-moicano'>Renato Moicano</Link> en el primer asalto, sino que admeás logró el doble campeonato, subiendo de división para ganar el cinturón de peso wélter, luego de derrotar por decisión unánime a <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>. Aunque siendo completamente histórico y no quiero quitarle mérito a lo que hizo, peleó la mitad de veces que Merab y su última defensa del cinturón fue ante alguien como Moicano, que claramente no estaba al nivel para pelear por el título, aunque siempre vale la pena aclarar que esto no fue la culpa de Makhachev, ya que originalmente estaba programado para pelear contra <Link href='/peleadores/arman-tsarukyan'>Arman Tsarukyan</Link>, pero este se bajó de la pelea pocas horas antes, teniendo que ser reemplazado por el brasileño. </p>
                    <p>También se podría mencionar a <b>Joshua Van</b>, que tuvo un ascenso meteórico en la UFC, peleando al igual que Merab 4 veces en el año, con una victoria por nocaut ante <b>Bruno Gustavo da Silva</b> y una de las mejores peleas del año ante <b>Brandon Royval</b>, finalizando el año en el mismo <Link href='/eventos/ufc323'>UFC 323</Link> arrebatándole el cinturón a <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link>, luego de que este se lesionara el brazo en el medio del primer asalto, siendo incapaz de continuar peleando y dándole la victoria y por ende el cinturón, al luchador de Myanmar. Creo que lo único que le juega en contra para no ser considerado en tal alta estima es la manera accidentada en que ganó el cinturón, pero de vuelta, esto para nada fue su culpa y no lo hace menos campeón. </p>
                    <p>Finalmente, <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> es otro de los que son candidatos a ser el Peleador del Año, aunque sin haber peleador por el cinturón en ningún momento de este 2025, es sin dudas uno de los peleadores más entretenidos que hay en la UFC en estos momentos, siendo de esos pocos que te dan ganas de ver independientemente de en qué cartelera este presente, habiendo obtenido primero una victoria por TKO ante <b>Jamahal Hill</b> en enero de este año, donde ganó el bono a la Actuación de la Noche, y otra victoria ante <b>Khalil Rountree Jr.</b> en el <Link href='/eventos/ufc320'>UFC 320</Link>, en lo que fue uno de los mejores combates del año, derrotando a su rival por TKO en el tercer asalto en una pelea que parecía perdida, ganando en consecuencia 2 bonos, a La Pelea de la Noche y a la Actuación de la Noche, sin dudas merece un reconocimiento por lo hecho a lo largo del año. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}