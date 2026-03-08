import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc326.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 326: ¡Max Holloway vs Charles Oliveira 2!',
    description: "UFC 326 con Max Holloway y Charles Oliveira peleando por el título BMF en Las Vegas, además de la pelea entre Caio Borralho y Reiner De Ridder en la coestelar. ",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc326.6a575631.webp&w=828&q=65',
        title: 'UFC 326: ¡Max Holloway vs Charles Oliveira 2!',
        description: "UFC 326 con Max Holloway y Charles Oliveira peleando por el título BMF en Las Vegas, además de la pelea entre Caio Borralho y Reiner De Ridder en la coestelar. ",
        url: 'https://fullmma.org/eventos/ufc326'
    }
}

export default function UFC326 () {
    return(
        <main>
            <ArticleHero title="UFC 326: ¡Max Holloway vs Charles Oliveira 2!" subtitle='¡Caio Borralho Derrota a Reiner De Ridder por Decisión Unánime! ¡Raúl Rosas Jr. Derrota a Rob Font por Decisión Unánime y Se Mete en los Rankings!' image={hero} date='2026-03-07' author={null} updatedDate='2026-03-08' />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Espectacular evento de UFC el que tenemos esta noche, cuando el actual <b>BMF</b> <Link href='/peleadores/max-holloway'>Max Holloway</Link> ponga en juego su cinturón ante el excampeón de la división de peso ligero y querido por todos <Link href='/peleadores/charles-oliveira'>Charles Oliveira</Link>, con ambos luchadores viniendo de una meritoria victoria en sus últimas peleas. Además, la pelea coestelar promete ser igual de emocionante, cuando el brasileño perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <Link href='/peleadores/caio-borralho'>Caio Borralho</Link>, se enfrente al neerlandés <b>Reiner De Ridder</b>. </p>
                    <p>Los fanáticos latinos tendremos varias peleas a las que prestar atención esta noche, con la más importante siendo la que tendrá el joven mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link>, quien se enfrentará a la posibilidad de entrar a los rankings de peso gallo al enfrentar al puertoriqueño <b>Rob Font</b> en la cartelera estelar. También tendremos al Ilia Topuria venezolano <b>Alberto Montes</b> haciendo su debut ante <b>Ricky Turcios</b> en peso pluma. Y finalmente el mexicano <b>Jesus Aguilar</b> se enfrentará al chino <b>Sumudaerji</b> en las primeras preliminares de la noche. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Rodolfo Bellato Noquea a Luke Fernandez en el Primer Asalto</h2>
                    <p>Gran victoria del brasileño <b>Rodolfo Bellato</b>, quien comenzó sufriendo el primer asalto, recibiendo bastante golpes que no podía contraatacar, pero necesitó solo de un par de golpes para derribar a su rival al suelo, castigarlo a golpes desde ahí para finalmente llevarse la primer victoria de la noche por TKO en el primer asalto. </p>
                    <h2>Diyar Nurgozhay Derrota a Rafael Tobias por Decisión Unánime</h2>
                    <p>El kazajo <b>Diyar Nurgozhay</b> se hace con una gran victoria ante el brasileño <b>Rafael Tobias</b>, luego de conectar casi el doble de golpes totales, y casi el triple de golpes significantes en un claro dominio por parte del luchador de Kazajistán. </p>
                    <h2>Sumudaerji Derrota a Jesus Aguilar por Decisión Unánime</h2>
                    <p>Excelente victoria del peleador chino <b>Sumudaerji</b>, quien dominó completamente al luchador mexicano <b>Jesus Aguilar</b> durante los 3 asaltos, conectando de muchísima mejor manera, con el doble de golpes significantes, además de siendo capaz de derribar en 4 ocasiones a su rival, llevándose cómodamente la victoria por la vía de la decisión unánime. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Nyamjargal Tumendeberel Derrota a Cody Durden por Decisión Unánime</h2>
                    <p>Espectacular victoria del luchador de Mongolia <b>Nyamjargal Tumendeberel</b>, quien dominó por completo a su rival estadounidense <b>Cody Durden</b>, siendo capaz de defenderse en el suelo ante los intentos de derribo de su rival, y atacando de manera precisa a su contricante, conectando más golpes que hicieron mucho daño al luchador americano. De esta forma, el mongol <b>Nyamjargal Tumendeberel</b> se hace con la victoria por decisión unánime 30-27. </p>
                    <h2>Alberto Montes Somete a Ricky Turcios en el Segundo Asalto</h2>
                    <p>Brutal manera de debutar en la UFC por parte del venezolano <b>Alberto Montes</b>, quien luego de dominar en el striking durante el primer asalto del combate al estadounidense <b>Ricky Turcios</b>, fue capaz de conectar una anaconda luego de ser derribado para someter a su rival en el segundo asalto, en una sumisión que estuvo tan bien conectada y donde usó tanta fuerza que a Turcios no le dió ni tiempo de tapear, quedando desmayado producto de esta anaconda. De esta manera el venezolano debuta en la UFC con victoria por sumisión en el segundo asalto. </p>
                    <h2>Donte Johnson Derrota a Cody Brundage por Decisión Dividida</h2>
                    <p>Victoria para el estadounidense <b>Donte Johnson</b>, quien luego de perder el primer asalto de la pelea, fue capaz de reponerse ganando el segundo y haciendo un decente papel en el tercero, para derrota a su compatriota <b>Cody Brundage</b> por decisión dividida, con 1 de los jueces viéndolo perder ese tercer asalto y con 2 viéndolo ganar. </p>
                    <h2>Cody Garbrandt Derrota a Xiago Long por Decisión Unánime</h2>
                    <p>En una pelea donde sucedió algo que en lo personal nunca había visto, el ganandor del combate es el estadounidense <b>Cody Garbrandt</b> por decisión por 28-27, luego de que a su rival chino <b>Xiao Long</b> le descontaran 2 puntos por haber golpeado en las zonas bajas a su oponente, en 2 ocasiones diferentes durante el tercer asalto. Esta reducción de puntos debido a la reincidencia en la falta del luchador asiático, es lo que terminó definiendo el resultado de la pelea, dado que de no haber sucedido, el ganandor hubiera sido completamente diferente. De esta forma, el veterano e histórico excampeón de la división de peso gallo <b>Cody Garbrandt</b>, vuelve a la victoria después de sólo haber ganado el primer asalto de la pelea. </p>
                    <h2 className={styles.article__fightsHierarchy}>Cartelera Estelar</h2>
                    <h2>Gregory Rodrigues Noquea a Brunno Ferreira en el Primer Asalto</h2>
                    <p>Brutal lo de <b>Gregory &quot;Robocop&quot; Rodrigues</b>, quien consigue su venganza en esta revancha. Recordemos que estos 2 brasileños se habían enfrentando en el pasado, y <b>Brunno Ferreira</b> había ganado por nocaut en el primer asalto. En esta ocasión, recordando su último enfrentamiento, ambos luchadores arrancaron muy lento, espectantes y mostrando respeto por el poder de nocaut del otro, pero fue Robocop quien esta vez conectaría una mano derecha brutal que dejaría KO inmediatamente a su rival, en apenas el segundo golpe conectado. </p>
                    <h2>Drew Dober Noquea a Michael Johnson en el Segundo Asalto</h2>
                    <p>En lo que fue una locura de combate, el estadounidense <b>Drew Dober</b>, quien había arrancado perdiendo la pelea, ante un <b>Michael Johnson</b> que estaba peleando muy bien, fue capaz de encontrar un recto de izquierda que tumbaría a su compatriota, para terminar llevándose la pelea por la vía del nocaut en una actuación que lo candidatea a un bono por Actuación de la Noche, al haber dado vuelta el resultado de la pelea de esa forma. </p>
                    <h2>Raúl Rosas Jr. Derrota a Rob Font por Decisión Unánime</h2>
                    <p>Gran victoria para el joven mexicano <Link href='/peleadores/raul-rosas-jr'>Raúl Rosas Jr.</Link>, quien luego de dominar completamente a su rival <b>Rob Font</b>, derribándolo y manteniéndolo a ras de lona, consigue una victoria 30-27 que lo mente en los rankings de peso gallo de la UFC. </p>
                    <h2>¡Caio Borralho Derrota a Reiner De Ridder por Decisión Unánime!</h2>
                    <p>Genial victoria por parte del brasileño <Link href='/peleadores/caio-borralho'>Caio Borralho</Link> que hoy volvió a demostrar que pese a su última derrota, es una de los mejores peleadores que tiene la división de peso medio, siendo un luchador muy completo, que fue capaz de defender los intentos de derribo de su rival, fue capaz de controlarlo en el suelo que la pelea se fue a este sector, y fue quien conectó los golpes más letales, mostrando que pese a que las estadísiticas mostraban una mayor paridad en la cantidad de golpes conectados, claramente los más potentes venían por parte del de Brasil. De esta forma el brasileño se hace con la victoria, y al finalizar el combate no dudo en llamar al excampeón <Link href='/peleadores/du-plessis'>Dricus Du Plessis</Link> para enfrentarse en el futuro. </p>
                    <EndArticle />
                </article>
                <AsideChamps />
            </section>
            <ArticlesFooter />
        </main>
    )
}