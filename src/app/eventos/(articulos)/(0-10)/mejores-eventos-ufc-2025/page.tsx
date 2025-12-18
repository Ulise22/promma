import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/articulos/0-10/mejores_eventos_ufc-2025.webp'
import { YouTubeEmbed } from '@next/third-parties/google'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'Los Mejores Eventos de UFC en 2025',
    description: "La lista de los mejores eventos de la UFC en el 2025, en el último año de la UFC en ESPN. ",
    openGraph: {
        images: '',
        title: 'Los Mejores Eventos de UFC en 2025',
        description: "La lista de los mejores eventos de la UFC en el 2025, en el último año de la UFC en ESPN. ",
        url: 'https://fullmma.org/eventos/mejores-eventos-ufc-2025'
    }
}

export default function MejoresEventos2025 () {
    return(
        <main>
            <ArticleHero title="Los Mejores Eventos de UFC en 2025" subtitle='La lista de los 3 mejores eventos de la UFC en el año 2025: Islam Makhachev, Alex Pereira, Merab Dvalishvili, Alexander Volkanovski.' image={hero} date='2025-12-17' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Este 2025 fue un gran año para las MMA, y concretamente para la UFC, que finalizó su último año con ESPN, terminando esta etapa con un montón de superpeleas y de eventos memorables de los que hablaremos hoy, en la previa al inicio de la nueva etapa de la compañía con su nuevo socio, Paramount. </p>
                    <p>Para comenzar, aclaremos que para hacer esta lista, tomé en cuenta la cálidad de la pelea estelar, la cantidad de superpeleas, la cálidad de la cartelera estelar de cada evento, y cómo se desarrolló finalmente el evento, es decir, que aunque una cartelera pintara bien en principio, si sus peleas terminaron decepcionando o no estuvieron a la altura de lo esperado, no entrarán en esta lista. Por lo que, habiendo visto todos los eventos del año, y habiendo cubierto una gran parte de ellos en esta página, pasemos a hablar de lo 3 mejores eventos de UFC del año 2025. </p>
                    <h2>3. UFC 314: ¡Alexander Volkanovski vs Diego Lopes!</h2>
                    <p>Comencemos hablando del <Link href='/covertura-ufc/ufc314'>UFC 314</Link>, que se organizó en Miami y contaba con un evento estelar espectacular, en donde luego de que el campeón de peso pluma <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link>, anunciara que dejaría vacante su título para buscar el doble campeonato, subiendo a peso ligero, se pondría en juego el título vacante de la división entre el histórico excampeón <Link href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link> y el joven contendiente brasileño/mexicano que venía de arrasar en sus peleas, <Link href='/peleadores/diego-lopes'>Diego Lopes</Link>, en lo que sería una de las mejores peleas del año, con ambos luchadores dándonos un show que a día de hoy recordamos. </p>
                    <p>Además, de esa misma cartelera salió el que será el próximo contendiente al título interino de peso ligero el año que viene, <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, que luego de aplastar a <Link href='/peleadores/michael-chandler'>Michael Chandler</Link>, escalaría hasta el puesto #5 en los rankings. </p>
                    <p>En esa misma cartelera, el peleador brasileño <b>Jean Silva</b>, perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, se metería en los rankings de la división de 145lbs al someter a <b>Bryce Mitchell</b>. Esa misma noche debutaría el ex doble campeón de BELLATOR, <b>Patricio Pitbull</b>, ante el mexicano <b>Yair Rodríguez</b>, en lo que sería una exhibición por parte del luchador latino. </p>
                    <h2>2. UFC 320: ¡Alex Pereira vs Magomed Ankalaev 2!</h2>
                    <p>En el segundo lugar está el <Link href='/eventos/ufc320'>UFC 320</Link>, en donde el brasileño <Link href='/peleadores/alex-pereira'>Alex Pereira</Link>, elevaría su estatus a luchador legendario cuando sería capaz de recuperar su cinturón, al noquear en el primer asalto a <Link href='/peleadores/magomed-ankalaev'>Magomed Ankalaev</Link> en su revancha. </p>
                    <p>Por si pareciera poco, el georgiano <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link> lograría otra gesta, al igualar el récord de máximas defensas en un año, con 3, al derrotar al retador estadounidense <b>Cory Sandhagen</b> por decisión unánime en otro desempeño sobresaliente por su parte. </p>
                    <p>En aquel evento también vimos uno de los combates más épicos del año, cuando <Link href='/peleadores/jiri-prochazka'>Jiri Prochazka</Link> sería capaz de dar vuelta una pelea que claramente estaba perdiendo ante <b>Khalil Rountree</b>, al entrar en modo ultra instinto, conectando una combinación letal de golpes que finalmente noquearían a su rival en el tercer asalto. También estuvo presente el marroquí de 145lbs <b>Youssef Zalal</b> que promete mucho para el próximo año, noqueando a un peleador peligrosísimo como <b>Josh Emmet</b> en el primer asalto. </p>
                    <h2>1. UFC 322: ¡Islam Makhachev vs Jack Della Maddalena!</h2>
                    <p>Finalmente, el que a mi criterio fue el mejor evento del año, es el <Link href='/eventos/ufc322'>UFC 322</Link>, que no contaba con 2 peleas del título cualquiera, sino con 2 peleas en las que el retador buscaba su segundo cinturón quien parecía su rival más complicado en toda su carrera, además de contar con 2 peleas que candidatearon a 2 luchadores a disputar el mismo cinturón, y por si fuera poco, metió a un peleador como <b>Benoit Saint Denis</b> en el top 10 de la división de peso ligero. Todo esto sin mencionar las peleas preliminares que tenían tremendas peleas como la de <b>Bo Nickal</b> contra <b>Rodolfo Vieira</b>, o la de <b>Gregory Rodrigues</b> ante <b>Roman Kopylov</b>, que le permitió al brasileño entrar a los rankings de su división. </p>
                    <p>El evento estelar contaba con <Link href='/peleadores/islam-makhachev'>Islam Makhachev</Link>, que acababa de dejar vacante su cinturón de peso ligero para subir a peso wélter en busca de su segundo cinturón, enfrentando para ello al reciente campeón <Link href='/peleadores/jack-della-maddalena'>Jack Della Maddalena</Link>, consiguiendo dominar completamente al australiano y consagrándose no sólo como doble campeón, sino como uno de los mejores peleadores de la historia de la UFC, y al criterio de los periodistas, como el #1 P4P. Además, la campeona china <Link href='/mujeres/zhang-weili'>Zhang Weili</Link>, intentaría lo mismo que Makhachev en la cartelera coestelar, aunque con menos suerte, siendo completamente dominada por la campeona de nacionalidad peruana <Link href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link>. </p>
                    <p>Además, tendríamos 3 nocauts en la cartelera estelar, con el francés <b>Benoit Saint Denis</b>, siendo capaz de noquear al histórico peleador de la división de peso ligero <b>Beneil Dariush</b>. Además, 2 de los prospectos más importantes de peso wélter tendrían una actuación sumamente destacada, con el brasileño <Link href='/peleadores/carlos-prates'>Carlos Prates</Link> noqueando en el segundo asalto al excampeón de la división <Link href='/peleadores/leon-edwards'>Leon Edwards</Link>, y con la grata sorpresa para el público latinoaméricano, al ver como el ecuatoriano <b>Michael Morales</b>, sería capaz de noquear en el primer asalto al entonces #2 de la división de 170lbs, con ambos luchadores posicionándose como uno de los mayores candidatos a retar el título que luego ganaría Makhachev. </p>
                    <YouTubeEmbed videoid='KziQ6Oz2Pjs' />
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}