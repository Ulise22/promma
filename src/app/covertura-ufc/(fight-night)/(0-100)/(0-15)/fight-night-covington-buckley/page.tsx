import styles from '@/app/articulos/components/article.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/covertura_ufc/fight_night/0-100/0-15/covington-vs-buckley.jpg'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))

export const metadata: Metadata = {
    title: 'Colby Covington vs Joaquin Buckley',
    description: 'Noche de UFC en la ciudad de Tampa, Florida, que nos trae el regreso de Colby Covinton al octágono junto a Joquin Buckley...',
    openGraph: {
        title: 'Colby Covington vs Joaquin Buckley',
        description: 'Noche de UFC en la ciudad de Tampa, Florida, que nos trae el regreso de Colby Covinton al octágono junto a Joquin Buckley...',
        url: 'https://fullmma.org/covertura-ufc/fight-night-colvington-buckley'
    }
}

export default function CovingtonBuckley () {
    return(
        <main>
            <ArticleHero title='UFC TAMPA: ¡Joaquin Buckley Gana a Colby Covington por TKO! ¡Joel Álvarez Noquea a Drakkar Klose!' subtitle='Manel Kape logra una victoria por Nocaut en el tercer asalto de la pelea. Cub Swanson derrota a Billy Quarantillo por nocaut en el tercer asalto en la pelea de la noche. ' image={hero} date='2024-12-14' author={null} updatedDate='2024-12-15' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Tenemos el último evento de UFC en el año, que nos trae como protagonistas al excampeón interino de peso wélter <Link href='/peleadores/colby-covington'>Colby Covington</Link> ante el estadounidense <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link>, que viene de 3 victorias este año, siendo la última ante <b>Wonderboy Thompson</b> en el <Link href='/covertura-ufc/ufc307'>UFC 307</Link>. </p>
                    <p>Además tendremos las presencias hispanas de la venezolana <b>Piera Rodríguez</b>, del mexicano <b>Fernando Padilla</b>, del español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link> y del peruano <b>Daniel Marcos</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Felipe Lima Derrota a Miles Johns</h2>
                    <p>El peleador brasileño de peso pluma de 26 años logra una gran victoria por decisión unánime, luego de dominar la totalidad del enfrentamiento, ante un Miles Johns que nada pudo hacer ante la cálidad de Lima, quien aprovechando su altura y su alcance, logro conectar más golpes que su rival, casi sin recibir golpes por parte de su rival. </p>
                    <h2>Sean Woodson Noquea a Fernando Padilla en el Primer Asalto</h2>
                    <p>El estadounidense logra una increíble victoria por nocaut en el primer asalto, a 2 segundos de que termine, ante el mexicano <b>Fernando Padilla</b>, siendo este el primer nocaut de la noche. </p>
                    <p>En un enfrentamiento donde se veía a los 2 rivales golpeándose de lo lindo, siendo ambos capaces de conectarse mutuamente, fue finalmente Woodson quien consiguió quedarse con la victoria, al ser capaz de golpear más limpio en la cabeza de su rival, que poco hizo por esquivar o por bloquear los golpes del luchador americano. </p>
                    <h2>Joel Álvarez Noquea a Drakkar Klose en el Primer Asalto</h2>
                    <p>El español logra una impresionante victoria por nocaut en el primer asalto de la pelea, conectando unos buenos golpes, culminando con un rodillazo en la cabeza que parece ser el golpe que durmió a Klose. Joel sostuvo del cuello a su rival, castigándolo con puñetazos, hasta que finalmente el árbitro los separó, dándole la victoria al español <Link href='/peleadores/joel-alvarez'>Joel Álvarez</Link>, que sigue pudiendo decir que absolutamente todas sus victorias fueron por finalización. </p>
                    <h2>¡Michael Johnson Deja KO a Ottman Azaitar en el Segundo Asalto!</h2>
                    <p>El veterano luchador de 38 años logra una impresionante victoria por nocaut ante <b>Azaitar</b>, luego de conectar un derechazo que mandó a la lona a su rival inmediatamente. </p>
                    <p>Esta actuación seguramente termine en un bono por parte de Johnson, debido a lo espectacular del golpe que tumbó al marroquí. Y esta terminar por ser el tercer nocaut de la noche, en lo que es la última pelea de las preliminares. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Navajo Stirling Gana a Tuco Tokkos por Decisión Unánime</h2>
                    <p>Tremendo debut del luchador de 27 de Nueva Zelanda, <b>Navajo Stirling</b>, quien en su sexta pelea profesional, y en su primer pelea en la UFC, logró una gran victoria ante un muy buen luchador como lo es <b>Tuco Tokkos</b>, dominando completamente la pelea en el striking, conectando con potencia en varias oportunidades a su rival, al punto que incluso dió la sensación de que Stirling podía noquear en el primer asalto. Sin embargo, Tokkos demostró tener un alto instinto de supervivencia, y tener una mandibula envidiable, resistiendo las embestidas de su rival, que no fue capaz de finalizarlo. </p>
                    <h2>Daniel Marcos Derrota a Adrian Yanez por Decisión Dividida</h2>
                    <p>En una tremenda pelea, que fue bastante cerrada, quien finalmente se la llevó por decisión dividida fue el peruano <b>Daniel Marcos</b>, quien mantiene su invicto y extendiente su récord profesional a 17-0, siendo uno de los peleadores que más victorias lleva en la división de peso gallo de la UFC. </p>
                    <p>Fue una pelea en la que ambos luchadores intercambiaron golpes, siendo sin duda una de las mejores peleas que vimos esta noche. El peruano no dudó en pedir una pelea ante la leyenda <Link href='/leyendas/jose-aldo'>José Aldo</Link>, en busca de finalmente entrar al ranking de la división de peso gallo. </p>
                    <h2>¡Dustin Jacoby Noquea a Vitor Petrino en el Tercer Asalto!</h2>
                    <p>El estadounidense consigue una increíble victoria por KO en el tercer asalto, en lo que parecía ser una pelea que hasta el momento estaba perdiendo, recibiendo bastantes golpes a la cabeza por parte del brasileño <b>Vitor Petrino</b>, nos sorprendió a todos en el tercer asalto cuando encontró a su rival con una mano derecha que mandó a la lona al brasileño, en lo que es una de las mayores sorpresas de la noche, y que seguramente terminen significándole un bono de $50k a Dustin Jacoby. </p>
                    <h2>¡Manel Kape Vence por TKO a Bruno Silva en el Tercer Asalto!</h2>
                    <p>El luchador de Angola, <b>Manel Kape</b>, logra una increíble victoria por la vía del nocaut en el tercer asalto de la pelea, luego de dominar por completo el combate. En una pelea que por cierto, vale comentar, fue parada en hasta 3 ocasiones, debido a los golpes bajos que recibió el angoleño por parte del luchador de Brasil. </p>
                    <h2>¡Cub Swanson Noquea a Billy Quarantillo en el Tercer Asalto!</h2>
                    <p>El veterano <b>Cub Swanson</b> logra una tremenda victoria por la vía del nocaut, en lo que fue una tremenda pelea por parte de ambos luchadores. En la última pelea del año, 20 años después del debut profesional de Swanson, que tiene 41 años, logra regalarnos un tremendo espectáculo, en lo que quizás pueda ser elegida como la pelea del año, y que posiblemente le signifique un bono a Cub Swanson. </p>
                    <h2>¡Joaquin Buckley Vence por TKO a Colby Covington en el Tercer Asalto!</h2>
                    <p>El joven peleador <Link href='/peleadores/joaquin-buckley'>Joaquin Buckley</Link> consigue una tremenda victoria en la que posiblemente sea la pelea más importante de su carrera hasta el momento. Consiguiendo una victoria con una actuación super dominante ante un rival tan díficil como lo era <Link href='/peleadores/colby-covington'>Colby Covington</Link>, que pese a que intentó derribar a Buckley, sólo lo logró en una ocasión, y nada pudo hacer con el striking de su compatriota. </p>
                    <p>Aunque la victoria no terminó con un nocaut espectacular, Joaquin dominó por completo a Colby, generándole un corte en la ceja en el primer asalto de la pelea, que a medida que pasaba el combate solo empeoraba, terminando con el médico teniendo que intervenir, para dar por finalizado el combate, proclamando a Joaquin Buckley como el ganador de la pelea. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
        </main>
    )
}