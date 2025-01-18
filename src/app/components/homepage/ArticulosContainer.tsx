import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import joeRoganMA from '@/assets/articulos/0-100/30-40/joe_rogan_bestMA.jpeg'
import movimientosProhibidosUFC from '@/assets/articulos/0-100/20-30/movimientos_prohibidos_ufc.jpg'
import luchadoresFamososUFC from '@/assets/articulos/0-100/20-30/luchadores_ufc_mas_famosos.jpg'
import requisitosEntrarUFC from '@/assets/articulos/0-100/20-30/requisitos_entrar_ufc.jpg'
import rankingsUFC from '@/assets/articulos/0-100/10-20/ufc_rankings.jpg'
import salariosUFC from '@/assets/articulos/0-100/10-20/salarios_ufc.jpg'
import talbottSkateboard from '@/assets/articulos/0-100/10-20/payton_talbott_skateboard.jpg'
import talbottTattoo from '@/assets/articulos/0-100/10-20/payton_talbott_tattoo.jpg'
import bestMAForMMA from '@/assets/articulos/0-100/10-20/best_ma_for_mma.jpg'
import titovsdana from '@/assets/articulos/0-100/0-10/dana_vs_ortiz.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle author='FULLMMA' date='17/01/2025' img={joeRoganMA} link='/articulos/mejor-arte-marcial-para-pelea-callejera-joe-rogan' title='La Mejor Arte Marcial Para Una Pelea Callejera Según Joe Rogan' description='El comentarista de la UFC Joe Rogan confirma cuál es para él la mejor arte marcial para peleas callejeras. ' />
                <HomeArticle author='FULLMMA' date='15/01/2025' img={movimientosProhibidosUFC} link='/articulos/movimientos-prohibidos-de-la-ufc' title='Todos Los Movimientos que Están Prohibidos en la UFC: Lo Que Jamás Verás en un Combate' description='La lista de los 28 golpes y movimientos que están prohibidos dentro de la UFC y que por lo tanto jamás verás realizarse, o al menos no deberías ver realizarse. ' />
                <HomeArticle author='FULLMMA' date='12/01/2025' img={luchadoresFamososUFC} link='/articulos/luchadores-ufc-mas-famosos' title='¿Quienes son los Peleadores de UFC Más Famosos? La lista de los 10 Peleadores con Más Seguidos' description='Compartiremos la lista de los 10 peleadores de UFC con más seguidores en Instagram. Que nos ayudará a descubrir quién es el peleador más famoso de todos en la UFC. ' />
                <HomeArticle author='FULLMMA' date='12/01/2025' img={requisitosEntrarUFC} link='/articulos/requisitos-para-entrar-a-ufc' title='¿Cómo ser peleador de la UFC? Las 5 formas de entrar a la UFC siendo peleador de MMA.' description='Los requisitos para entrar a la UFC y ser reclutado por la compañía. Las 5 vías por las que Dana White contrata peleadores profesionales.' />
                <HomeArticle author='FULLMMA' date='31/12/2024' img={rankingsUFC} link='/articulos/como-funciona-el-ranking-ufc' title='Cómo Funciona el Ranking de la UFC: Qué significa ser el #1 de la UFC' description='Te explico cómo funcionan los rankings en la UFC, cuándo se actualizan y cómo se hacen, explicando quienes hacen los rankings y que tienen en cuenta. ' />
                <HomeArticle author='FULLMMA' date='27/12/2024' img={salariosUFC} link='/articulos/cuanto-gana-un-peleador-de-ufc' title='¿Cuánto le pagan a un peleador de UFC? Los salarios de los peleadores más importantes de MMA' description='Cuánto ganan los peleadores de UFC, desde los novatos, un peleador promedio, un campeón, y cómo sus resultados influyen en el sueldo. ' />
                <HomeArticle author='FULLMMA' date='26/12/2024' img={talbottSkateboard} link='/articulos/payton-talbott-skateboard' title='Payton Talbott: Cómo el Skateboard Influye en su Carrera en la UFC' description='La influencia que puede tener el skate, junto con otros hobbies, en un peleador de UFC como Payton Talbott. Además te contamos la historia de cómo Payton Talbott conoció a la leyenda del skateboard, Tony Hawk.' />
                <HomeArticle author='FULLMMA' date='21/12/2024' img={talbottTattoo} link='/articulos/payton-talbott-tattoo' title='¿Qué significan los tatuajes de Payton Talbott?' description='El significado de los tatuajes del peleador de la UFC Payton Talbott. ' />
                <HomeArticle author='FULLMMA' date='23/09/2024' img={bestMAForMMA} link='/articulos/mejores-artes-marciales-para-mma' title='Las Mejores Artes Marciales Para MMA Según un Peleador Profesional' description='Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.' />
                <HomeArticle author='FULLMMA' date='14/09/2024' img={titovsdana} link='/articulos/dana-white-vs-tito-ortiz' title='La Pelea de Boxeo Entre Dana White y Tito Ortiz que Finalmente no Ocurrió' description='La historia de rivalidad entre Tito Ortiz y Dana White, y la pelea de boxeo entre estos 2 que se llegó a pactar pero que nunca se dió.' />
            </article>
        </section>
    )
}