import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/fight-night/0-150/16-30/cortes_acosta-vs-walker.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC Fight Night: ¡Waldo Cortes Acosta vs Johnny Walker!',
    description: 'Noche de UFC en el UFC META APEX, con el dominicano Waldo Cortes Acosta enfrentando la brasileño Johnny Walker en la pelea estelar, en un choque de pesos pesados espectacular. ',
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcortes_acosta-vs-walker.2373dc1e.webp&w=828&q=65',
        title: 'UFC Fight Night: ¡Waldo Cortes Acosta vs Johnny Walker!',
        description: 'Noche de UFC en el UFC META APEX, con el dominicano Waldo Cortes Acosta enfrentando la brasileño Johnny Walker en la pelea estelar, en un choque de pesos pesados espectacular. ',
        url: 'https://fullmma.org/eventos/ufc-fight-night-cortes-acosta-vs-walker',
    }
}

export default function CortesAcostaVsWalker () {
    return(
        <main>
            <ArticleHero title='UFC Fight Night: ¡Waldo Cortes Acosta vs Johnny Walker!' subtitle='¡Tatiana Suarez vs Virna Jandiroba!' image={hero} date='2026-11-07' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Gran evento de UFC tenemos esta noche, con un evento espectacular de último momento, luego de que se suspendiera la pelea programada entre <b>Sean Brady</b> y <b>Gabriel Bonfim</b>, siendo reemplazada por el grandioso combate entre <Link href='/peleadores/waldo-cortes-acosta'>Waldo Cortes Acosta</Link> y <Link href='/peleadores/johnny-walker'>Johnny Walker</Link>, en un choque literal de pesos pesados. </p>
                    <p>Por si fuera poco, tendremos un muy buen combate femenino en la pelea coestelar, con la #2 de peso mosca, la estadounidense <b>Tatiana Suarez</b>, enfrentando a la #3 de la división, la brasileña <b>Virna Jandiroba</b>. Además tendremos presencia latina en la cartelera preliminar, con el salvadoreño <b>Carlos Calderon</b>, enfrentando en peso pluma al estadounidense <b>Austin Bashi</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Preliminar</h2>
                    <h2>Jose Souza Noquea a Johnny Parsons en el Primer Asalto</h2>
                    <p>Espectacular manera de iniciar la cartelera de esta noche, con una finalización en el primer asalto, cortesía del brasileño <b>José Souza</b>, quien ya partía como favorito en el combate, haciendo valer esto ante el estadounidense <b>Johnny Parsons</b>. </p>
                    <h2>Seokhyeon Ko Derrota a Wellington Turman Por Decisión Unánime</h2>
                    <p>Gran victoria del luchador surcoreano <b>Seokhyeon Ko</b>, quien dominó de principio a fin al brasileño <b>Wellington Turman</b>, consiguiendo una meritoria victoria por decisión unánime 30-27. </p>
                    <h2>Andre Petroski Noquea a Mantas Kondratavicius en el Segundo Asalto</h2>
                    <p>Buena victoria del estadounidense <b>Andre Petroski</b>, quien fue capaz de resistir los golpes de su rival lituano en el primer asalto, que en mi opinión perdió, consiguiendo terminar por arriba en el suelo en el segundo asalto, castigando con ground & pound, hasta que finalmente el árbitro paró la pelea al no ver defensa por parte de Mantas. De esta forma, Andre Petroski se lleva la victoria por TKO en el segundo asalto. </p>
                    <h2>Austin Bashi Somete a Carlos Calderon en el Primer Asalto</h2>
                    <p>Espectacular finalización por parte del estadounidense <b>Austin Bashi</b>, quien acabó con el combate de manera precoz, al derribar y tomar la espalda de su rival, conectando un mataleón que obligaría al salvadoreño <b>Carlos Calderon</b> a tapear. De esta forma, el estadoundiense Austin Bashi vuelve a la victoria por la vía de la sumisión. </p>
                    <h2>Murtazali Magomedov Derrota a Jose Delano por Decisión Unánime y Mantiene el Invicto</h2>
                    <p>Peleón el que acabamos de presenciar, muy cerrado y muy competitivo, con ambos luchadores haciéndose mucho daño, siendo el luchador de Kirguistán <b>Murtazali Magomedov</b> quien finalmente saldría victorioso, luego de conseguir varios derribos a lo largo del combate, y aunque en el striking fue inferior a su rival brasileño, fue capaz de conectar unos golpes durísimos que casi noquean a su contricante, incluído un golpe letal a falta de 3 segundos que a punto estuvo de acabar con el combate ahí mismo. De esta forma, Magomedov extiende su récord invicto a 12-0. </p>
                    <h2>Karine Silva Derrota a Gabriella Fernandes por Decisión Unánime</h2>
                    <p>Gran victoria de la brasileña <b>Karine Silva</b>, quien venció a su compatriota <b>Gabriella Fernandes</b> en un combate bastante parejo, en donde pese a que Karine llevó la iniciativa y conectó más golpes totales, terminaron quedando parejas en golpes significantes. De esta forma, Karine Silva se lleva la victoria por decisión unánime y corta una racha de 2 derrotas consecutivas.</p>
                    <h2>Thomas Petersen Noquea a Gabriel Lorenco en el Tercer Asalto en la Pelea de la Noche</h2>
                    <p>Locura de combate el que acabamos de presenciar, con un <b>Gabriel Lorenco</b> que inició muy agresivo y que estuvo a punto de noquear a Petersen durante todo el primer asalto, fue tanto el dominio que mostró en este asalto, que terminó 40 golpes por encima de su rival, y que probablemente terminó ganando este asalto 10-8. Sin embargo, <b>Thomas Petersen</b> demostró un corazón sin igual, siendo capaz de resistir los 5 minutos, sobreviviendo como pudo, y finalmente dando vuelta la pelea, ganando el segundo asalto, a punto de noquear a su rival, y ganando el tercero, pero consiguiendo quedar por arriba de su rival en el suelo y castigarlo a golpes hasta que el árbitro paró la pelea, a casi 10 segundos de que terminé. De esta manera, el estadounidense <b>Thomas Petersen</b> ganó por TKO en el tercer asalto una pelea que a punto estuvo de acabar en empate. </p>
                    <h2>Ollie Schmid Derrota a Kellchiro Nakamura Por Decisión Unánime</h2>
                    <p>Gran victoria por parte del húngaro <b>Ollie Schmid</b>, quien en un combate muy cerrado, terminó llevándose la victoria por decisión unánime ante el japonés <b>Kellchiro Nakamura</b>, sobreviviendo a la avalancha de golpes que padeció en el último asalto, que apunto estuvieron de noquearlo. De esta forma, Ollie consigue su primer victoria en la UFC por decisión unánime 29-28.</p>
                    {/* <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2></h2>
                    <p></p> */}
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}