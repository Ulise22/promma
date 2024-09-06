import styles from './articulosContainer.module.css'
import HomeArticle from './noticias/HomeArticle'
/* IMAGES */
import LeeMurray from '@/assets/articulos/previews/40-50/lee_murray-preview.jpg'
import mmaVsBoxPeligro from '@/assets/articulos/previews/40-50/box_vs_mma_danger-preview.jpg'
import khabibPierde from '@/assets/articulos/previews/40-50/khabib_pierde-preview.jpeg'
import gspAliens from '@/assets/articulos/previews/40-50/gsp_aliens.jpg'
import helwaniVsWhite from '@/assets/articulos/previews/40-50/ariel_helwani_vs_dana_white.jpeg'
import bestFight from '@/assets/articulos/previews/40-50/bestfight-preview.jpeg'
import nickNewell from '@/assets/articulos/previews/40-50/nick_newell-preview.jpg'
import zabit from '@/assets/articulos/previews/40-50/zabit-preview.jpg'
import cmpunk from '@/assets/articulos/previews/40-50/cm_punk_ufc-preview.jpg'
import nicoMontano from '@/assets/articulos/previews/40-50/nicco_montano-preview.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Últimos Artículos</h2>
            <article className={styles.articulos__container}>
                <HomeArticle author='FULLMMA' date='03/09/2024' img={nicoMontano} link='/articulos/que-paso-con-nicco-montano' title='¿Qué Pasó con Nico Montaño? La Primer Campeona de Peso Mosca de UFC que Fue Despojada de su Título' description='La historia de la primer campeona de peso mosca en la UFC, y como esta fue maltratada por la compañía, siendo despojada de su título.' />
                <HomeArticle author='FULLMMA' date='31/08/2024' img={cmpunk} link='/articulos/cm-punk-ufc' title='La Historia de CM Punk, El peor Luchador de la historia de UFC' description='El mítico caso de CM Punk, quien abandonó la WWE para ir a la UFC y fracasó rotundamente, peleando únicamente en 2 ocasiones y perdiendo ambas peleas.' />
                <HomeArticle author='FULLMMA' date='31/08/2024' img={zabit} link='/articulos/que-paso-con-zabit-magomedsharipov' title='Zabit Magomedsharipov: ¿Qué Pasó con la Bestia Daguestaní que se Retiró Demasiado Joven?' description='La historia de Zabit Magomedsharipov, ¿Quién es? ¿Por qué se retiró con tan sólo 28 años? y ¿Qué es de su vida actualmente?' />
                <HomeArticle author='FULLMMA' date='29/08/2024' img={nickNewell} link='/articulos/luchador-manco-de-mma' title='Nick Newell: El Luchador con una Mano en MMA' description='La historia de Nick Newell, el manco de las MMA que competía a nivel profesional y que llegó a ser campeón.' />
                <HomeArticle author='FULLMMA' date='28/08/2024' img={bestFight} link='/articulos/mejor-pelea-mma-de-la-historia' title='Don Frye vs Takayama: La Mejor Pelea de MMA en la Historia' description='La pelea más loca de todos los tiempos entre Don Frye y Yoshihiro Takayama que hizo historia en las MMA, y qué fue de la vida de los peleadores.' />
                <HomeArticle author='FULLMMA' date='24/08/2024' img={helwaniVsWhite} link='/articulos/ariel-helwani-vs-dana-white' title='El Periodista al que Dana White Detesta: ¿Por qué Dana White odia a Ariel Helwani?' description='La historia del qué pasó entre Ariel Helwani y UFC, y de qué sucedio entre Dana White y Ariel Helwani.' />
                <HomeArticle author='FULLMMA' date='22/08/2024' img={gspAliens} link='/articulos/george-st-pierre-aliens' title='George St-Pierre Tiene Miedo a los Aliens y su Plan Para Evitar ser Abducido' description='La leyenda y excampeón de la UFC y su peculiar miedo a los Aliens y la estrategia que ideó para lidiar con ellos.' />
                <HomeArticle author='FULLMMA' date='19/08/2024' img={khabibPierde} link='/articulos/khabib-nurmagomedov-pierde' title='La Única Derrota de Khabib Nurmagomedov' description='La historia y el vídeo de un joven Khabib de 17 años llorando después de perder una pelea de sambo en un campeonato ruso.' />
                <HomeArticle author='FULLMMA' date='23/07/2024' img={LeeMurray} link='/articulos/lee-murray' title='Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido' description='Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.' />
                <HomeArticle author='FULLMMA' date='21/07/2024' img={mmaVsBoxPeligro} link='/articulos/boxeo-vs-mma-peligroso' title='Boxeo vs MMA: ¿Cuál Es Más Peligroso?' description='2 de los deportes de combate más practicados en el mundo, pero uno de los 2 cuenta con la peculiaridad de ser más riesgoso durante su práctica para quien lo entrena.' />
            </article>
        </section>
    )
}