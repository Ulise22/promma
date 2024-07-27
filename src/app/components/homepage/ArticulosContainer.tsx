import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import jonesEscondido from '@/assets/articulos/previews/30-40/jones_se_esconde-preview.jpg'
import jorgeMasvidal from '@/assets/articulos/previews/30-40/jorge_masvidal-preview.jpg'
import daveBautista from '@/assets/articulos/previews/30-40/dave_bautista-preview.jpg'
import divisionGoats from '@/assets/articulos/previews/30-40/division_goats-preview.jpg'
import boxeadorVsMMA from '@/assets/articulos/previews/30-40/boxeador_vs_mma-preview.jpg'
import pridefc from '@/assets/articulos/previews/30-40/pridefc-preview.jpg'
import palhares from '@/assets/articulos/previews/30-40/rousimar_palhares-preview.jpg'
import mejoresPeleasUFC from '@/assets/articulos/previews/20-30/mejores_peleas_ufc-preview.jpg'
import LeeMurray from '@/assets/articulos/previews/40-50/lee_murray-preview.jpg'
import mmaVsBoxPeligro from '@/assets/articulos/previews/40-50/box_vs_mma_danger-preview.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle author='FULLMMA' date='23/07/2024' img={LeeMurray} link='/articulos/lee-murray' title='Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido' description='Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.' />
                <HomeArticle author='FULLMMA' date='21/07/2024' img={mmaVsBoxPeligro} link='/articulos/boxeo-vs-mma-peligroso' title='Boxeo vs MMA: ¿Cuál Es Más Peligroso?' description='2 de los deportes de combate más practicados en el mundo, pero uno de los 2 cuenta con la peculiaridad de ser más riesgoso durante su práctica para quien lo entrena.' />
                <HomeArticle author='FULLMMA' date='08/07/2024' img={jonesEscondido} link='/articulos/jon-jones-esconde-usada' title='El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado' description='La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.' />
                <HomeArticle author='FULLMMA' date='04/07/2024' img={jorgeMasvidal} link='/articulos/jorge-masvidal-historia' title='La Biografía de Jorge Masvidal' description='La historia de uno de los peleadores favoritos de los fans, que llegó a pelear 2 veces por el título y es recordado como el primer BMF de la UFC.' />
                <HomeArticle author='FULLMMA' date='28/06/2024' img={daveBautista} link='/articulos/dave-bautista-mma' title='Cuando el Actor de Hollywood Dave Bautista Hizo su Debut en MMA' description='El día en que se dió la pelea en MMA de Dave Bautista ante Vince Lucero.' />
                <HomeArticle author='FULLMMA' date='27/06/2024' img={divisionGoats} link='/articulos/mejores-peleadores-por-division-ufc' title='Los Mejores Peleadores de la Historia de Cada Division de UFC' description='La lista del mejor peleador histórico de cada división de la UFC.' />
                <HomeArticle author='FULLMMA' date='20/06/2024' img={boxeadorVsMMA} link='/articulos/boxeador-vs-mma' title='Boxeador vs MMA: Las Peleas Entre Boxeo y MMA' description='Los enfrentamientos entre luchadores de MMA y boxeadores que se han dado en boxeo.' />
                <HomeArticle author='FULLMMA' date='19/06/2024' img={pridefc} link='/articulos/que-paso-con-pride-fc' title='¿Qué Pasó con Pride FC?' description='Cómo el control de la mafia japonea Yakuza acabó con el reinado de la mayor compañía de MMA de la historia.' />
                <HomeArticle author='FULLMMA' date='19/06/2024' img={palhares} link='/articulos/peleador-mas-sucio-ufc' title='El Peleador Más Sucio de la Historia Expulsado de la UFC' description='Rousimar Palhares, el luchador más sucio de la historia de las MMA que por su comportamiento dentro del octagono fue expulsado de la UFC.' />
                <HomeArticle author='FULLMMA' date='18/06/2024' img={mejoresPeleasUFC} link='/articulos/mejores-peleas-ufc' title='Las Mejores Peleas de UFC de la Historia' description='El listado de las mejores peleas de la historia, basado en los World MMA Awards que premian a la mejor pelea del año desde 2008.' />
            </article>
        </section>
    )
}