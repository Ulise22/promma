import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc323.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 323: ¡Merab Dvalishvili vs Petr Yan 2! ¡Alexandre Pantoja vs Joshua Van!',
    description: "Último evento numerado de UFC en el año en este UFC 323 que nos trae las peleas de Merabd Dvalishvili vs Petr Yan 2 y Alexandre Pantoja vs Joshua Van.",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc323.36b13281.webp&w=828&q=65',
        title: 'UFC 323: ¡Merab Dvalishvili vs Petr Yan 2! ¡Alexandre Pantoja vs Joshua Van!',
        description: "Último evento numerado de UFC en el año en este UFC 323 que nos trae las peleas de Merabd Dvalishvili vs Petr Yan 2 y Alexandre Pantoja vs Joshua Van.",
        url: 'https://fullmma.org/eventos/ufc323'
    }
}

export default function UFC323 () {
    return(
        <main>
            <ArticleHero title="UFC 323: ¡Merab Dvalishvili vs Petr Yan 2! ¡Alexandre Pantoja vs Joshua Van!" subtitle='¡Brandon Moreno vs Tatsuro Taira! ¡Henry Cejudo vs Payton Talbott!' image={hero} date='2025-12-06' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Último evento numerado del año en este UFC 323 que estará encabezado por el campeón de peso gallo <Link href='/peleadores/merab-dvalishvili'>Merab Dvalishvili</Link>, que pondrá en juego su título, rompiendo un récord absoluto de defensas en un año al alcanzar las 4 defensas del cinturón, cuando enfrente en una revancha a un rival que ya venció, <Link href='/peleadores/petr-yan'>Petr Yan</Link>, que viene de una racha de 3 victorias consecutivas en la división. Además, en el evento coestelar habrá otro cinturón en juego, cuando el campeón de peso paja <Link href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link> defienda el título ante el #1 de la división, el super joven <b>Joshua Van</b>, que se convertirá en el primer peleador nacido después de los 2000 en pelear por un cinturón de UFC. </p>
                    <p>Además, contaremos con presencia latina en la cartelera, cuando vuelva a pelear el histórico campeón mexicano <Link href='/peleadores/brandon-moreno'>Brandon Moreno</Link>, que enfrentará al japonés <b>Tatsuro Taira</b>, en busca de una victoria que le vuelva a dar una pelea por el título de la división. Además, al final de la cartelera preliminar, estará peleando el también mexicano <b>Manuel Torres</b>, quien se enfrentará al #13 de la división de peso ligero, <b>Grant Dawson</b>, en busca de una oportunidad de entrar en los rankings de la UFC. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Mairon Santo Noquea a Muhammad Naimov en el Tercer Asalto</h2>
                    <p>Espectacular victoria del brasileño perteneciente a los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link>, <b>Mairon Santos</b>, quien en una pelea que parecía ir ganando fue capaz de finalizar al conectar una mano derecha espectacular que tumbaría a su rival <b>Muhammad Naimov</b> inmediatamente. De esta manera, el brasileño alcanza su sexta victoria consecutiva. </p>
                    <h2>Mansur Abdul-Malik Somete a Antonio Trocoli en el Primer Asalto</h2>
                    <p>Espectacular manera de finalizar el combate en poco más de un minuto por parte del estadounidense <b>Mansur Abdul-Malik</b>, quien mediante una guillotina que logró conectar desde el suelo, transicionando a estar de pie, fue capaz de someter a su rival brasileño <b>Antonio Trocoli</b>, que se vió obligado a tapear. </p>
                    <h2>¡Iwo Baraniewski Noquea a Ibo Aslam en el Primer Asalto!!</h2>
                    <p>Tremendo lo que acaba de hacer el polaco <b>Iwo Baraniewski</b>, que en medio de un torbellino de golpes que estaba recibiendo de su rival turco <b>Ibo Aslan</b>, es capaz de soportarlos y conectar una mano derecha para noquear a su rival en el primer asalto, en una locura de combate. </p>
                    <h2>Jalin Turner Noquea a Edson Barboza en el Primer Asalto</h2>
                    <p>Vaya manera de volver del retiro por parte del estadounidense <b>Jalin Turner</b>, que enfrentando a la leyenda brasileña <b>Edson Barboza</b>, es capaz de noqouearlo en el primer asalto, al primero conectar un codazo en la cabeza de su rival que le provocaría un corte en la cara, y luego golpearlo hasta tumbarlo al piso para llevarse la victoria por TKO en el primer asalto. </p>
                    <h2>Brunno Ferreira Derrota a Marvin Vettori por Decisión Unánime</h2>
                    <p>El brasileño <b>Brunno Ferreira</b> aprovecha su oportunidad y derrota al #14 de la división de peso medio <b>Marvin Vettori</b>, luego de 3 asaltos en los que la pelea se fue a la decisión, con todos los jueces dandólo como ganador al brasileño 29-28, consiguiendo de esta manera meterse de lleno en el top 15 de peso mediano de la UFC. </p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Fares Ziam Noquea a Nazim Sadykhov al Final del Segundo Asalto</h2>
                    <p>Tremendo nocaut el que consiguió el luchador francés <b>Fares Ziam</b> finalizando el segundo asalto, luego de dominar completamente a  <b>Nazim Sadykhov</b> durante todo el combate, es capaz de conectarle 2 codazos letales en la parte de atrás de la oreja, que dejaron noqueado a su rival, obligando al árbitro a parar la pelea para dar como ganador al luchador europeo por TKO en el último segundo del segundo asalto. </p>
                    <h2>Maycee Barber Derrota a Karine Silva por Decisión Unánime</h2>
                    <p>Gran victoria para la #5 de peso mosca femenino <b>Macy Barber</b>, quien fue capaz de reponerse a lo largo del combate, comenzando con un primer asalto que se le complicó mucho, llegando a perderlo, pero que a partir del segundo asalto fue a mejor, mostrando un ground&pound sobresaliente que lastimó mucho a su rival, y que terminó dándole la victoria por decisión unánime. </p>
                    <h2>Chris Duncan Somete a Terrance Mckinney en el Primer Asalto</h2>
                    <p>Espectacular pelea dieron estos 2 luchadores en apenas unos minutos, con un <b>Terrance Mckinney</b> que comenzó muy agresivo, aturdiendo a golpes a su rival, pero que rápidamente comenzó a encontrar contragolpes por parte del escocés <b>Chris Duncan</b>, quien buscando el clinch para dejar de recibir golpes, fue capaz de conectar un codazo que tumbaría a su rival, para luego de castigarlo con el ground&pound, finalizarlo con una guillotina. </p>
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