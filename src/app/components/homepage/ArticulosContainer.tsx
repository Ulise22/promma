import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import rankingsUFC from '@/assets/articulos/0-100/10-20/ufc_rankings.jpg'
import salariosUFC from '@/assets/articulos/0-100/10-20/salarios_ufc.jpg'
import talbottSkateboard from '@/assets/articulos/0-100/10-20/payton_talbott_skateboard.jpg'
import talbottTattoo from '@/assets/articulos/0-100/10-20/payton_talbott_tattoo.jpg'
import bestMAForMMA from '@/assets/articulos/0-100/10-20/best_ma_for_mma.jpg'
import titovsdana from '@/assets/articulos/0-100/0-10/dana_vs_ortiz.jpg'
import popek from '@/assets/articulos/0-100/50-60/popek_monster.jpg'
import hollywood from '@/assets/articulos/0-100/50-60/ufc_hollywood.jpg'
import butterbean from '@/assets/articulos/0-100/50-60/eric_butterbean.jpg'
import kimboSlice from '@/assets/articulos/0-100/50-60/kimbo_slice.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle author='FULLMMA' date='31/12/2024' img={rankingsUFC} link='/articulos/como-funciona-el-ranking-ufc' title='Cómo Funciona el Ranking de la UFC: Qué significa ser el #1 de la UFC' description='Te explico cómo funcionan los rankings en la UFC, cuándo se actualizan y cómo se hacen, explicando quienes hacen los rankings y que tienen en cuenta. ' />
                <HomeArticle author='FULLMMA' date='27/12/2024' img={salariosUFC} link='/articulos/cuanto-gana-un-peleador-de-ufc' title='¿Cuánto le pagan a un peleador de UFC? Los salarios de los peleadores más importantes de MMA' description='Cuánto ganan los peleadores de UFC, desde los novatos, un peleador promedio, un campeón, y cómo sus resultados influyen en el sueldo. ' />
                <HomeArticle author='FULLMMA' date='26/12/2024' img={talbottSkateboard} link='/articulos/payton-talbott-skateboard' title='Payton Talbott: Cómo el Skateboard Influye en su Carrera en la UFC' description='La influencia que puede tener el skate, junto con otros hobbies, en un peleador de UFC como Payton Talbott. Además te contamos la historia de cómo Payton Talbott conoció a la leyenda del skateboard, Tony Hawk.' />
                <HomeArticle author='FULLMMA' date='21/12/2024' img={talbottTattoo} link='/articulos/payton-talbott-tattoo' title='¿Qué significan los tatuajes de Payton Talbott?' description='El significado de los tatuajes del peleador de la UFC Payton Talbott. ' />
                <HomeArticle author='FULLMMA' date='23/09/2024' img={bestMAForMMA} link='/articulos/mejores-artes-marciales-para-mma' title='Las Mejores Artes Marciales Para MMA Según un Peleador Profesional' description='Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.' />
                <HomeArticle author='FULLMMA' date='14/09/2024' img={titovsdana} link='/articulos/dana-white-vs-tito-ortiz' title='La Pelea de Boxeo Entre Dana White y Tito Ortiz que Finalmente no Ocurrió' description='La historia de rivalidad entre Tito Ortiz y Dana White, y la pelea de boxeo entre estos 2 que se llegó a pactar pero que nunca se dió.' />
                <HomeArticle author='FULLMMA' date='10/09/2024' img={popek} link='/articulos/popek-monster-mma' title='Popek: El Rapero Polaco y Pelador de MMA Más Loco del Mundo' description='La historia del rapero polaco Popek Monster, el caótico estilo de vida que lleva y su carrera en las artes marciales mixtas.' />
                <HomeArticle author='FULLMMA' date='10/09/2024' img={hollywood} link='/articulos/peleadores-de-ufc-en-peliculas' title='Top 5 Peleadores de UFC que Aparecieron en Películas de Hollywood' description='La Lista de 5 Campeones de UFC que aparecieron en el cine y televisión, teniendo una actuacion destacada.' />
                <HomeArticle author='FULLMMA' date='08/09/2024' img={butterbean} link='/articulos/biografia-de-eric-butterbean' title='¿Quién fue Eric Butterbean y por qué era tan famoso?' description='La historia de vida de Eric Butterbean, quien paso de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas.' />
                <HomeArticle author='FULLMMA' date='05/09/2024' img={kimboSlice} link='/articulos/kimbo-slice-historia' title='Kimbo Slice: El rey de los luchadores web' description='La historia de Kevin Ferguson, mejor conocido como Kimbo Slice, y su historia de superación que lo llevó de ser guardia de seguridad de un club nocturno, a ser un luchador profesional.' />
            </article>
        </section>
    )
}