import styles from '@/app/eventos/components/articleEvents.module.css'
import ArticleHero from '@/app/articulos/components/ArticleHero'
import Link from 'next/link'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
/* Images */
import hero from '@/assets/eventos/ufc/0-150/0-15/ufc324.webp'

const AsideChamps = dynamic(() => import('@/app/components/asides/AsideChamps'))
const EndArticle = dynamic(() => import('@/app/components/EndArticle'))
const ArticlesFooter = dynamic(() => import('@/app/components/recomendedArticles/ArticlesFooter'))

export const metadata: Metadata = {
    title: 'UFC 324: ¡Paddy Pimblett vs Justin Gaethje! ¡Sean O&apos;Omalley vs Song Yadong!',
    description: "Primer evento de UFC del año y el primer evento de la era Paramount, con el título interino de peso ligero en disputa entre Paddy Pimblett y Justin Gaethje",
    openGraph: {
        images: 'https://fullmma.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fufc324.e6adceb6.webp&w=828&q=65',
        title: 'UFC 324: ¡Paddy Pimblett vs Justin Gaethje! ¡Sean O&apos;Omalley vs Song Yadong!',
        description: "Primer evento de UFC del año y el primer evento de la era Paramount, con el título interino de peso ligero en disputa entre Paddy Pimblett y Justin Gaethje",
        url: 'https://fullmma.org/eventos/ufc324'
    }
}

export default function UFC324 () {
    return(
        <main>
            <ArticleHero title="UFC 324: ¡Paddy Pimblett vs Justin Gaethje! ¡Sean O&apos;Omalley vs Song Yadong!" subtitle='¡Waldo Cortes Acosta! ¡Arnold Allen vs Jean Silva! ¡Umar Nurmagomedov vs Deiveson Figueiredo!' image={hero} date='2025-12-24' author={null} updatedDate={null} />
            <section className={styles.article__container}>
                <article className={styles.article}>
                    <p>Finalmente vuelve la UFC con el primer evento de la era Paramount y el primer evento del año que busca comenzar con el pie derecho, por lo que estamos llenos de peleas espectaculares en la cartelera. Comenzando con la pelea estelar, que será por el título interino de peso ligero, luego de que el campeón <Link href='/peleadores/ilia-topuria'>Ilia Topuria</Link> deba tomarse un tiempo fuera por problemas personales, tendremos al legendario <Link href='/peleadores/justin-gaethje'>Justin Geathje</Link> y la joven estrella inglesa <Link href='/peleadores/paddy-pimblett'>Paddy Pimblett</Link>, con el ganador teniendo la oportunidad de pelear a mediados de año por el título indiscutido ante el español. </p>
                    <p>En la pelea coestelar tendremos a <Link href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link> volver al octágono para enfrentar al peleador chino <b>Song Yadong</b>. También contaremos con presencia latina en la cartelera estelar, cuando el dominicano <b>Waldo Cortes Acosta</b> se enfrente al histórico luchador <b>Derrick Lewis</b>, quien tiene el récord de la mayor cantidad de nocauts en la historia de la UFC y hoy busca extender este récord. </p>
                    <p>También tendremos un combate femenino entre la #2 de peso mosca <b>Natalia Silva</b> y la histórica excampeona de la compañía <Link href='/mujeres/rose-namajunas'>Rose Namajunas</Link>. Además, para abrir la cartelera estelar estará el integrante de los <Link href='/articulos/fighting-nerds'>Fighting Nerds</Link> <Link href='/peleadores/jean-silva'>Jean Silva</Link>, buscando escalar en los rankings al enfrentar al inglés <b>Arnold Allen</b>, en la que apunta a ser de las mejores peleas de la noche. Por si fuera poco, como muestra de los stackeada que está esta cartelera, el daguestaní <Link href='/peleadores/umar-nurmagomedov'>Umar Nurmagomedov</Link> tendrá que pelear en las preliminares ante el brasileño excampeón de peso mosca <b>Deiveson Figueiredo</b>. </p>
                    <h2 className={styles.article__fightsHierarchy}>Primeros Preliminares</h2>
                    <h2>Ty Miller Noquea a Adam Fugitt en el Primer Asalto</h2>
                    <p>Espectacular debut del estadounidense <b>Ty Miller</b>, que inicia su carrera en la UFC con un nocat en el último segundo del primer asalto, para entrar pisando con el pie derecho a la compañía, al lograr la primer finalización de la era Paramount, luego de conectar un espectacular recto derecho en la cabeza de su rival, que llevaría al árbitro a parar la pelea. </p>
                    <h2>Josh Hokit Noquea a Denzel Freeman en el Primer Asalto</h2>
                    <p>Segundo asalto de la noche, en lo que fue una completa masterclass por parte del americano <b>Josh Hokit</b>, quien en menos de 10 segundo ya había derribado a su oponente, y que durante todo el combate tuvo contra las cuerdas a su rival, hasta que finalmente cuando estaba terminando el asalto, el árbitro notó que <b>Denzel Freeman</b> no podía continuar peleando luego de haber recibido tantos golpes, por lo que puso un freno a la pelea, dando como ganador a <b>Josh Hokit</b> por TKO.</p>
                    <h2 className={styles.article__fightsHierarchy}>Preliminares</h2>
                    <h2>Alex Perez Noquea a Charles Johnson en el Primer Asalto</h2>
                    <p>Espectacular pelea la que acabamos de ver en peso mosca, con <b>Alex Perez</b> dominando completamente a su rival <b>Charles Johnson</b>, a quien consiguió conectar desde todos los ángulos posibles, dando la sensación de que el nocat estaba por venir en cualquier momento, llegando finalmente a los 3 minutos de combate, cuando Perez fue capaz de conetar el gancho de izquierda que sería la que terminaría con esta pelea, con el árbitro parando el combate y dando como ganador al #11 de la división por TKO. </p>
                    <h2>Nikita Krilov Noquea a Modestas Bukauskas en el Tercer Asalto</h2>
                    <p>Seguimos con la racha de nocauts en este primer evento del año de UFC, con el ruso #13 de la división de peso semipesado <b>Nikita Krylov</b>, quien fue capaz de finalizar a su rival que partía como favorito para esta noche, pero que sin embargo se enfrentó a un veterano de la división que le mostró que todavía hay niveles. De esta manera, el ruso consigue la cuarta finalización de la noche por la vía del TKO. </p>
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