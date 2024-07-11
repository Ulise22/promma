import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import jonesEscondido from '@/assets/articulos/previews/30-40/jones_se_esconde-preview.jpg'
import jorgeMasvidal from '@/assets/articulos/previews/30-40/jorge_masvidal-preview.jpg'
import daveBautista from '@/assets/articulos/previews/30-40/dave_bautista-preview.jpg'
import divisionGoats from '@/assets/articulos/previews/30-40/division_goats-preview.jpg'
import boxeadorVsMMA from '@/assets/articulos/previews/30-40/boxeador_vs_mma-preview.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle author='FULLMMA' date='08/07/2024' img={jonesEscondido} link='/articulos/jon-jones-esconde-usada' title='El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado' description='La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.' />
                <HomeArticle author='FULLMMA' date='04/07/2024' img={jorgeMasvidal} link='/articulos/jorge-masvidal-historia' title='La Biografía de Jorge Masvidal' description='La historia de uno de los peleadores favoritos de los fans, que llegó a pelear 2 veces por el título y es recordado como el primer BMF de la UFC.' />
                <HomeArticle author='FULLMMA' date='28/06/2024' img={daveBautista} link='/articulos/dave-bautista-mma' title='Cuando el Actor de Hollywood Dave Bautista Hizo su Debut en MMA' description='El día en que se dió la pelea en MMA de Dave Bautista ante Vince Lucero.' />
                <HomeArticle author='FULLMMA' date='27/06/2024' img={divisionGoats} link='/articulos/mejores-peleadores-por-division-ufc' title='Los Mejores Peleadores de la Historia de Cada Division de UFC' description='La lista del mejor peleador histórico de cada división de la UFC.' />
                <HomeArticle author='FULLMMA' date='20/06/2024' img={boxeadorVsMMA} link='/articulos/boxeador-vs-mma' title='Boxeador vs MMA: Las Peleas Entre Boxeo y MMA' description='Los enfrentamientos entre luchadores de MMA y boxeadores que se han dado en boxeo.' />
            </article>
        </section>
    )
}