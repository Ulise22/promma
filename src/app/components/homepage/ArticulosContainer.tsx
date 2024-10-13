import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import bestMAForMMA from '@/assets/articulos/10-20/best_ma_for_mma.jpg'
import mmaMedieval from '@/assets/articulos/10-20/mma_medieval.jpeg'
import carJiujitsu from '@/assets/articulos/10-20/car_jiujitsu.jpg'
import titovsdana from '@/assets/articulos/0-10/dana_vs_ortiz.jpg'
import popek from '@/assets/articulos/previews/50-60/popel_monster-preview.jpg'
import hollywood from '@/assets/articulos/previews/50-60/ufc_hollywood-preview.jpg'
import butterbean from '@/assets/articulos/previews/50-60/butterbean-preview.webp'
import kimboSlice from '@/assets/articulos/previews/50-60/kimbo_slice-preview.jpg'
import cmpunk from '@/assets/articulos/previews/40-50/cm_punk_ufc-preview.jpg'
import nicoMontano from '@/assets/articulos/previews/40-50/nicco_montano-preview.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle author='FULLMMA' date='23/09/2024' img={bestMAForMMA} link='/articulos/mejores-artes-marciales-para-mma' title='Las Mejores Artes Marciales Para MMA Según un Peleador Profesional' description='Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.' />
                <HomeArticle author='FULLMMA' date='18/09/2024' img={mmaMedieval} link='/articulos/mma-medieval' title='¿Qué es el MMA Medieval?' description='Los combates de MMA organizados en un octágono, con armaduras y espadas que emulan las luchas medievales.' />
                <HomeArticle author='FULLMMA' date='17/09/2024' img={carJiujitsu} link='/articulos/car-jiu-jitsu' title='Car Jitsu: ¿Es real el Jiu Jitsu en coche?' description='La curiosa forma de practicar Jiu Jitsu en Rusia que va ganando cada vez más popularidad' />
                <HomeArticle author='FULLMMA' date='14/09/2024' img={titovsdana} link='/articulos/dana-white-vs-tito-ortiz' title='La Pelea de Boxeo Entre Dana White y Tito Ortiz que Finalmente no Ocurrió' description='La historia de rivalidad entre Tito Ortiz y Dana White, y la pelea de boxeo entre estos 2 que se llegó a pactar pero que nunca se dió.' />
                <HomeArticle author='FULLMMA' date='10/09/2024' img={popek} link='/articulos/popek-monster-mma' title='Popek: El Rapero Polaco y Pelador de MMA Más Loco del Mundo' description='La historia del rapero polaco Popek Monster, el caótico estilo de vida que lleva y su carrera en las artes marciales mixtas.' />
                <HomeArticle author='FULLMMA' date='10/09/2024' img={hollywood} link='/articulos/peleadores-de-ufc-en-peliculas' title='Top 5 Peleadores de UFC que Aparecieron en Películas de Hollywood' description='La Lista de 5 Campeones de UFC que aparecieron en el cine y televisión, teniendo una actuacion destacada.' />
                <HomeArticle author='FULLMMA' date='08/09/2024' img={butterbean} link='/articulos/biografia-de-eric-butterbean' title='¿Quién fue Eric Butterbean y por qué era tan famoso?' description='La historia de vida de Eric Butterbean, quien paso de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas.' />
                <HomeArticle author='FULLMMA' date='05/09/2024' img={kimboSlice} link='/articulos/kimbo-slice-historia' title='Kimbo Slice: El rey de los luchadores web' description='La historia de Kevin Ferguson, mejor conocido como Kimbo Slice, y su historia de superación que lo llevó de ser guardia de seguridad de un club nocturno, a ser un luchador profesional.' />
                <HomeArticle author='FULLMMA' date='03/09/2024' img={nicoMontano} link='/articulos/que-paso-con-nicco-montano' title='¿Qué Pasó con Nico Montaño? La Primer Campeona de Peso Mosca de UFC que Fue Despojada de su Título' description='La historia de la primer campeona de peso mosca en la UFC, y como esta fue maltratada por la compañía, siendo despojada de su título.' />
                <HomeArticle author='FULLMMA' date='31/08/2024' img={cmpunk} link='/articulos/cm-punk-ufc' title='La Historia de CM Punk, El peor Luchador de la historia de UFC' description='El mítico caso de CM Punk, quien abandonó la WWE para ir a la UFC y fracasó rotundamente, peleando únicamente en 2 ocasiones y perdiendo ambas peleas.' />
            </article>
        </section>
    )
}