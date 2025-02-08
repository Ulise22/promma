import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import luchadorProfesionalMMA from '@/assets/articulos/0-100/60-70/ser_peleador_mma.jpg'
import luchagoresMasVictoriasUFC from '@/assets/articulos/0-100/50-60/10_peleadores_mas_victorias.jpg'
import luchadoresDaguestan from '@/assets/articulos/0-100/50-60/luchadores_daguestan.jpg'
import hermanosDiaz from '@/assets/articulos/0-100/50-60/hermanos_diaz.jpg'
import khabibDisciplina from '@/assets/articulos/0-100/50-60/khabib_disciplina.jpg'
import hermanosUFC from '@/assets/articulos/0-100/50-60/hermanos_ufc.jpg'
import llegarAUFC5Pasos from '@/assets/articulos/0-100/50-60/llegar_a_ufc_5pasos.jpg'
import joeRoganMA from '@/assets/articulos/0-100/30-40/joe_rogan_bestMA.jpeg'
import movimientosProhibidosUFC from '@/assets/articulos/0-100/20-30/movimientos_prohibidos_ufc.jpg'
import luchadoresFamososUFC from '@/assets/articulos/0-100/20-30/luchadores_ufc_mas_famosos.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle img={luchadorProfesionalMMA} link='/articulos/como-ser-un-peleador-de-mma-profesional' title='Como Ser un Peleador Profesional de MMA' author={null} description='Ayuda y consejos para las personas que quieran convertirse en peleadores profesionales y que quieran saber cómo pelear en MMA.' date='07/02/2025' />
                <HomeArticle img={luchagoresMasVictoriasUFC} link='/articulos/luchadores-ufc-con-mas-victorias' title='Los 10 Peleadores Con Más Victorias en la Historia de la UFC' author={null} description='Los Luchadores de UFC Con Más Victorias en la Historia de la Compañía.' date='05/02/2025' />
                <HomeArticle img={luchadoresDaguestan} link='/articulos/luchadores-de-daguestan-ufc' title='Los Luchadores Más Destacados de Daguestán en la UFC' author={null} description='Todos los luchadores de Daguestán que compiten actualmente en la UFC' date='31/01/2025' />
                <HomeArticle img={hermanosDiaz} link='/articulos/hermanos-diaz-ufc' title='La Historia de Nick y Nate Diaz, Los Hermanos Más Famosos de la UFC' author={null} description='Los hermanos Diaz en la UFC, una historia de resiliencia y lealtad por parte de la pareja de hermanos más reconocida y querida por los fans.' date='28/01/2025' />
                <HomeArticle img={khabibDisciplina} link='/articulos/khabib-disciplina' title='Las 3 Claves de la disciplina de Khabib Nurmagomedov' author={null} description='Los secreto detrás del arrollador éxito y disciplina espectacular de Khabib que supo trasladar a todo su equipo.' date='28/01/2025' />
                <HomeArticle img={hermanosUFC} link='/articulos/hermanos-ufc' title='Hermanos Que Pelearon en la UFC' author={null} description='La lista de las mejores parejas de hermanos que pelearon en la UFC ' date='26/01/2025' />
                <HomeArticle img={llegarAUFC5Pasos} link='/articulos/como-llegar-a-la-ufc-5-pasos' title='Descubre como llegar a pelear en la UFC en 5 pasos' author={null} description='Convierte tu sueño en realidad: Sigue estos 5 pasos para llegar a la UFC y ser un peleador profesional' date='24/01/2025' />
                <HomeArticle author='FULLMMA' date='17/01/2025' img={joeRoganMA} link='/articulos/mejor-arte-marcial-para-pelea-callejera-joe-rogan' title='La Mejor Arte Marcial Para Una Pelea Callejera Según Joe Rogan' description='El comentarista de la UFC Joe Rogan confirma cuál es para él la mejor arte marcial para peleas callejeras. ' />
                <HomeArticle author='FULLMMA' date='15/01/2025' img={movimientosProhibidosUFC} link='/articulos/movimientos-prohibidos-de-la-ufc' title='Todos Los Movimientos que Están Prohibidos en la UFC: Lo Que Jamás Verás en un Combate' description='La lista de los 28 golpes y movimientos que están prohibidos dentro de la UFC y que por lo tanto jamás verás realizarse, o al menos no deberías ver realizarse. ' />
                <HomeArticle author='FULLMMA' date='12/01/2025' img={luchadoresFamososUFC} link='/articulos/luchadores-ufc-mas-famosos' title='¿Quienes son los Peleadores de UFC Más Famosos? La lista de los 10 Peleadores con Más Seguidos' description='Compartiremos la lista de los 10 peleadores de UFC con más seguidores en Instagram. Que nos ayudará a descubrir quién es el peleador más famoso de todos en la UFC. ' />
            </article>
        </section>
    )
}