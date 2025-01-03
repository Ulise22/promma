import styles from './articulos.module.css'
import PageHero from './components/PageHero'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES */
/* 0-10 */
import titovsdana from '@/assets/articulos/0-10/dana_vs_ortiz.jpg'
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/0-10/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/0-10/khabibVferguson.jpg'
import cortePeso from '@/assets/articulos/0-10/corte-peso.jpg'
import texeira from '@/assets/articulos/0-10/glover_teixeira.jpg'
import goats from '@/assets/articulos/0-10/ufc-goats.jpg'
import jonesYoungChamp from '@/assets/articulos/0-10/campeon_mas_joven.jpg'
import IzziVsPereira from '@/assets/articulos/0-10/izzy_vs_pereira.jpg'
import masvidalVsAskren from '@/assets/articulos/0-10/masvidal_vs_askren.jpeg'
/* 10-20 */
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import bestMAForMMA from '@/assets/articulos/10-20/best_ma_for_mma.jpg'
import mostProFights from '@/assets/articulos/10-20/most_pro_fights.jpg'
import allDoubleChamps from '@/assets/articulos/10-20/dobles-campeones.jpg'
import mariusz from '@/assets/articulos/10-20/mariusz_pudzianowski.jpg'
import fightingNerds from '@/assets/articulos/10-20/fighting_nerds.jpg'
import talbottTattoo from '@/assets/articulos/10-20/payton_talbott_tattoo.jpg'
import talbottSkateboard from '@/assets/articulos/10-20/payton_talbott_skateboard.jpg'
import salariosUFC from '@/assets/articulos/10-20/salarios_ufc.jpg'
import rankingsUFC from '@/assets/articulos/10-20/ufc_rankings.jpg'
/* 20-30 */
import jimMiller from '@/assets/articulos/20-30/jim-miller.jpg'
import ufc from '@/assets/articulos/20-30/ufc.jpg'
import nateDiaz from '@/assets/articulos/20-30/nate_diaz.jpg'
import mejoresPeleasUFC from '@/assets/articulos/20-30/mejores_peleas_ufc.jpg'
import bispingOjo from '@/assets/articulos/20-30/michael_bisping_ojo.jpg'
/* 30-40 */
import palhares from '@/assets/articulos/30-40/rousimar_palhares.jpg'
import pridefc from '@/assets/articulos/30-40/pridefc.jpg'
import ginaCarano from '@/assets/articulos/30-40/gina_carano.jpg'
import boxeadorVsMMA from '@/assets/articulos/30-40/boxeador_vs_mma.jpg'
import magomedovOjo from '@/assets/articulos/30-40/shara_magomedov_ojo.png'
import divisionGoats from '@/assets/articulos/30-40/division_goats.jpg'
import jorgeMasvidal from '@/assets/articulos/30-40/jorge_masvidal.png'
import jonesEscondido from '@/assets/articulos/30-40/jones_se_esconde.jpg'
/* 40-50 */
import mmaVsBoxPeligro from '@/assets/articulos/40-50/box_vs_mma_danger.jpg'
import LeeMurray from '@/assets/articulos/40-50/lee_murray.jpg'
import gspAliens from '@/assets/articulos/40-50/gsp_aliens.jpg'
import helwaniVsWhite from '@/assets/articulos/40-50/ariel_helwani_vs_dana_white.jpeg'
import bestFight from '@/assets/articulos/40-50/bestfight.jpeg'
import nickNewell from '@/assets/articulos/40-50/nick_newell.jpg'
import zabit from '@/assets/articulos/40-50/zabit.jpg'
import cmpunk from '@/assets/articulos/40-50/cm_punk.jpg'
import nicoMontano from '@/assets/articulos/40-50/nicco_montano.jpg'
/* 50-60 */ 
import kimboSlice from '@/assets/articulos/50-60/kimbo_slice.jpg'
import butterbean from '@/assets/articulos/50-60/eric_butterbean.jpg'
import hollywood from '@/assets/articulos/50-60/ufc_hollywood.jpg'
import popek from '@/assets/articulos/50-60/popek_monster.jpg'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                <ArticlePreview img={rankingsUFC} url='/articulos/como-funciona-el-ranking-ufc' title='Cómo Funciona el Ranking de la UFC: Qué significa ser el #1 de la UFC' author={null} text='Te explico cómo funcionan los rankings en la UFC, cuándo se actualizan y cómo se hacen, explicando quienes hacen los rankings y que tienen en cuenta. ' date='31/12/2024' />
                <ArticlePreview img={salariosUFC} url='/articulos/cuanto-gana-un-peleador-de-ufc' title='¿Cuánto le pagan a un peleador de UFC? Los salarios de los peleadores más importantes de MMA' author={null} text='Cuánto ganan los peleadores de UFC, desde los novatos, un peleador promedio, un campeón, y cómo sus resultados influyen en el sueldo. ' date='27/12/2024' />
                <ArticlePreview img={talbottSkateboard} url='/articulos/payton-talbott-skateboard' title='Payton Talbott: Cómo el Skateboard Influye en su Carrera en la UFC' author={null} text='La influencia que puede tener el skate, junto con otros hobbies, en un peleador de UFC como Payton Talbott. Además te contamos la historia de cómo Payton Talbott conoció a la leyenda del skateboard, Tony Hawk.' date='26/12/2024' />
                <ArticlePreview img={talbottTattoo} url='/articulos/payton-talbott-tattoo' title='¿Qué significan los tatuajes de Payton Talbott?' author={null} text='El significado de los tatuajes del peleador de la UFC Payton Talbott. ' date='21/12/2024' />
            </section>
            <h2 className={styles.articulos__title}>Artículos</h2>
            <section className={styles.articles__container}>
                <ArticlePreview img={fightingNerds} url='/articulos/fighting-nerds' title='¿Quiénes son los Fighting Nerds? El Mejor Equipo de MMA que Arrasa en la UFC' author={null} text='La historia del equipo Fighting Nerds, quiénes son, su filosofía, y cómo llegaron hasta lo más alto de las MMA, dominando por completo la UFC.' date='09/12/2024' />
                <ArticlePreview img={bestMAForMMA} url='/articulos/mejores-artes-marciales-para-mma' title='Las Mejores Artes Marciales Para MMA Según un Peleador Profesional' author={null} text='Repasamos cuáles son las mejores artes marciales para una pelea de MMA, según el luchador profesional Jeff Chan.' date='23/09/2024' />
                <ArticlePreview img={titovsdana} url='/articulos/dana-white-vs-tito-ortiz' title='La Pelea de Boxeo Entre Dana White y Tito Ortiz que Finalmente no Ocurrió' author={null} text='La historia de rivalidad entre Tito Ortiz y Dana White, y la pelea de boxeo entre estos 2 que se llegó a pactar pero que nunca se dió.' date='14/09/2024' />
                <ArticlePreview img={popek} url='/articulos/popek-monster-mma' title='Popek: El Rapero y Pelador Polaco de MMA Más Loco del Mundo' author={null} text='La historia del rapero polaco Popek Monster, el caótico estilo de vida que lleva y su carrera en las artes marciales mixtas.' date='10/09/2024' />
                <ArticlePreview img={hollywood} url='/articulos/peleadores-de-ufc-en-peliculas' title='Top 5 Peleadores de UFC que Aparecieron en Películas de Hollywood' author={null} text='La Lista de 5 Campeones de UFC que aparecieron en el cine y televisión, teniendo una actuacion destacada.' date='10/09/2024' />
                <ArticlePreview img={butterbean} url='/articulos/biografia-de-eric-butterbean' title='¿Quién fue Eric Butterbean y por qué era tan famoso?' author={null} text='La historia de vida de Eric Butterbean, quien paso de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas.' date='08/09/2024' />
                <ArticlePreview img={kimboSlice} url='/articulos/kimbo-slice-historia' title='Kimbo Slice: El rey de los luchadores web' author={null} text='La historia de Kevin Ferguson, mejor conocido como Kimbo Slice, y su historia de superación que lo llevó de ser guardia de seguridad de un club nocturno, a ser un luchador profesional.' date='05/09/2024' />
                <ArticlePreview img={nicoMontano} url='/articulos/que-paso-con-nicco-montano' title='¿Qué Pasó con Nico Montaño? La Primer Campeona de Peso Mosca de UFC que Fue Despojada de su Título' author={null} text='La historia de la primer campeona de peso mosca en la UFC, y como esta fue maltratada por la compañía, siendo despojada de su título.' date='03/09/2024' />
                <ArticlePreview img={cmpunk} url='/articulos/cm-punk-ufc' title='La Historia de CM Punk, El peor Luchador de la historia de UFC' author={null} text='El mítico caso de CM Punk, quien abandonó la WWE para ir a la UFC y fracasó rotundamente, peleando únicamente en 2 ocasiones y perdiendo ambas peleas.' date='31/08/2024' />
                <ArticlePreview img={zabit} url='/articulos/que-paso-con-zabit-magomedsharipov' title='Zabit Magomedsharipov: ¿Qué Pasó con la Bestia Daguestaní que se Retiró Demasiado Joven?' author={null} text='La historia de Zabit Magomedsharipov, ¿Quién es? ¿Por qué se retiró con tan sólo 28 años? y ¿Qué es de su vida actualmente?' date='31/08/2024' />
                <ArticlePreview img={nickNewell} url='/articulos/luchador-manco-de-mma' title='Nick Newell: El Luchador con una Mano en MMA' author={null} text='La historia de Nick Newell, el manco de las MMA que competía a nivel profesional y que llegó a ser campeón.' date='29/08/2024' />
                <ArticlePreview img={bestFight} url='/articulos/mejor-pelea-mma-de-la-historia' title='Don Frye vs Takayama: La Mejor Pelea de MMA en la Historia' author={null} text='La pelea más loca de todos los tiempos entre Don Frye y Yoshihiro Takayama que hizo historia en las MMA, y qué fue de la vida de los peleadores.' date='28/08/2024' />
                <ArticlePreview img={helwaniVsWhite} url='/articulos/ariel-helwani-vs-dana-white' title='El Periodista al que Dana White Detesta: ¿Por qué Dana White odia a Ariel Helwani?' author={null} text='La historia del qué pasó entre Ariel Helwani y UFC, y de qué sucedio entre Dana White y Ariel Helwani.' date='24/08/2024' />
                <ArticlePreview img={gspAliens} url='/articulos/george-st-pierre-aliens' title='George St-Pierre Tiene Miedo a los Aliens y su Plan Para Evitar ser Abducido' author={null} text='La leyenda y excampeón de la UFC y su peculiar miedo a los Aliens y la estrategia que ideó para lidiar con ellos.' date='22/08/2024' />
                <ArticlePreview img={LeeMurray} url='/articulos/lee-murray' title='Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido' author={null} text='Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.' date='23/07/2024' />
                <ArticlePreview img={mmaVsBoxPeligro} url='/articulos/boxeo-vs-mma-peligroso' title='Boxeo vs MMA: ¿Cuál Es Más Peligroso?' author={null} text='2 de los deportes de combate más practicados en el mundo, pero uno de los 2 cuenta con la peculiaridad de ser más riesgoso durante su práctica para quien lo entrena.' date='21/07/2024' />
                <ArticlePreview img={jonesEscondido} url='/articulos/jon-jones-esconde-usada' title='El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado' author={null} text='La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.' date='08/07/2024' />
                <ArticlePreview img={jorgeMasvidal} url='/articulos/jorge-masvidal-historia' title='La Biografía de Jorge Masvidal' author={null} text='La historia de uno de los peleadores favoritos de los fans, que llegó a pelear 2 veces por el título y es recordado como el primer BMF de la UFC.' date='04/07/2024' />
                <ArticlePreview img={divisionGoats} url='/articulos/mejores-peleadores-por-division-ufc' title='Los Mejores Peleadores de la Historia de Cada Division de UFC' author={null} text='La lista del mejor peleador histórico de cada división de la UFC' date='27/06/2024' />
                <ArticlePreview img={magomedovOjo} url='/articulos/shara-magomedov-ojo' title='¿Qué le Pasó en el Ojo a Shara Magomedov?' author={null} text='Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.' date='22/06/2024' />
                <ArticlePreview img={boxeadorVsMMA} url='/articulos/boxeador-vs-mma' title='Boxeador vs MMA: Las Peleas Entre Boxeo y MMA' author={null} text='Los enfrentamientos entre luchadores de MMA y boxeadores que se han dado en boxeo.' date='20/06/2024' />
                <ArticlePreview img={ginaCarano} url='/articulos/gina-carano-historia' title='Gina Carano: La Primera Estrella Femenina de las MMA' author={null} text='La historia de una de las mujeres más importantes en la historia de las MMA, que pasó de ser una de las procursoras de las MMA femeninas a una estrella de cine.' date='20/06/2024' />
                <ArticlePreview img={bispingOjo} url='/articulos/michael-bisping-ojo' title='Michael Bisping: El Luchador Inglés de UFC Que Perdió un Ojo Peleando' author={null} date='13/06/2024' text='La historia de cómo el peleador de Reino Unido perdió su ojo durante una pelea de UFC, y cómo a pesar de eso logró ser campeón.' />
                <ArticlePreview img={pridefc} url='/articulos/que-paso-con-pride-fc' title='¿Qué Pasó con Pride FC?' author={null} text='Cómo el control de la mafia japonea Yakuza acabó con el reinado de la mayor compañía de MMA de la historia.' date='19/06/2024' />
                <ArticlePreview img={palhares} url='/articulos/peleador-mas-sucio-ufc' title='El Peleador Más Sucio de la Historia Expulsado de la UFC' author={null} text='Rousimar Palhares, el luchador más sucio de la historia de las MMA que por su comportamiento dentro del octagono fue expulsado de la UFC.' date='19/06/2024' />
                <ArticlePreview img={mejoresPeleasUFC} url='/articulos/mejores-peleas-ufc' title='Las Mejores Peleas de UFC Por Año Desde el 2008 a la Actualidad' author={null} text='El listado de las mejores peleas de la historia, basado en los World MMA Awards que premian a la mejor pelea del año desde el año 2008 hasta la actualidad.' date='18/06/2024' />
                <ArticlePreview img={ufc} url='/articulos/ufc' title='UFC: Historia e Información de la Compañía de MMA Más Grande del Mundo' author={null} text='Todo lo relacionado al origen, crecimiento y actualidad de la compañía UFC.' date='05/06/2024' />
                <ArticlePreview img={jimMiller} url='/articulos/jim-miller-historia' title='Jim Miller, el Peleador con Más Victorias en la Historia de la UFC y que Participó del UFC100, UFC200 y UCF300' author={null} text='La historia de uno de los peleadores más importantes en la historia de la compañía más grande de MMA, que cuenta con más de 40 peleas en UFC.' date='02/05/2024' />
                <ArticlePreview img={nateDiaz} url='/articulos/nate-diaz-historia' title='Nate Diaz, el Peleador Más Querido de la UFC' author={null} text='La historia de uno de los peleadores más carismáticos de la UFC, que supo ganarse el cariño de la gente con peleas memorables y con su forma de ser.' date='01/05/2024' />
                <ArticlePreview img={mariusz} url='/articulos/mariusz-pudzianowski' title='El Polaco Que Fue 5 Veces el Hombre Más Fuerte del Mundo, y que con 45 Años Noquea a sus Rivales, Mariusz Pudzianowski' author={null} text='La historia del hombre nacido en Polonia, Mariusz Pudzianowski, que luego de haber desarrollado su carrera como Strongman, siendo elegido el hombre más fuerte del mundo en 5 oportunidades, se mudó a las MMA, donde sorprendió a todos con su impenente físico y su habilidad para noquear rivales con más experiencia que él.' date='30/04/2024' />
                <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' author={null} text='La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.' date={null} />
                <ArticlePreview img={allDoubleChamps} url='/articulos/dobles-campeones-de-ufc' title='Todos los Dobles Campeones de UFC' author={null} text='¿Quiénes componen el selecto grupo de los campeones de 2 categorías de peso diferentes en la ufc?' date='01/04/2024' />
                <ArticlePreview img={mostProFights} url='/articulos/peleador-de-mma-con-mas-peleas' title='¿Qué luchador de MMA ha tenido más peleas? La historia detrás de Travis Fulton, el luchador con más peleas en MMA y su oscuro final.' author={null} date='24/03/2024' text='El caso del luchador estadounidense Travis Fulton, que con más de 300 peleas profesionales, posee el récord de más combates en un octágono de MMA.' />
                <ArticlePreview img={GoatFemUfc} url='/articulos/mejores-peleadoras-ufc' title='Las Mejores Peleadoras de la Historia de la UFC' author={null} date={null} text='El listado de las mejores peleadoras de la historia en haber peleado en la comapañía de Dana White.' />
                <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' author={null} date={null} text='La historia detrás de todo el beef que hubo alrededor de estos 2 peleadores, y los conflictos que hubo después de su pelea.' />
                <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' author={null} date={null} text='El listado de las peleas que más vendieron en la historia de la UFC, dominada principalmente por Conor McGregor.' />
                <ArticlePreview img={khabibVferguson} url='/articulos/khabib-vs-ferguson' title='Khabib Vs Ferguson: ¿Por Qué se Canceló Tantas Veces? La Pelea Maldita que Nunca se Dió' author={null} date={null} text='La historia de la pelea que los fans querían ver y nunca pudo darse, pese a que se programó hasta 5 veces.' />
                <ArticlePreview img={cortePeso} url='/articulos/cortes-de-peso-ufc' title='Los durísimos cortes de peso a los que se someten los peleadores de UFC' author={null} date='01/09/2024' text='¿Cómo son los cortes de peso en las MMA? Ilia Topuria en una entrevista en The Wild Project cuenta el durísimo proceso por el que tienen que pasar los peleadores para dar el peso antes de cada pelea.' />
                <ArticlePreview img={jonesYoungChamp} url='/articulos/campeon-mas-joven-de-ufc' title='El Campeón Más Joven en la Historia de la UFC' author={null} date={null} text='La historia de Jon Jones y cuál fue el camino que tuvo que pasar para convertirse en el campeón más joven de la historia con sólo 23 años.' />
                <ArticlePreview img={IzziVsPereira} url='/articulos/rivalidad-adesanya-y-pereira' title='La Rivalidad entre Israel Adensanya y Alex Pereira' author={null} date='01/09/2024' text='¿De dónde viene la rivalidad entre Israel Adesanya y Alex Pereira? La historia y trasfondo de una de la mayores rivalidades modernas de las MMA, entre estos peleadores que se han enfrentado hasta en 4 ocasiones.' />
                <ArticlePreview img={texeira} url='/articulos/campeon-viejo-ufc' title='El campeón más viejo de la historia moderna de la UFC' author={null} date={null} text='El camino por el que pasó Glover Texeira, para contra todo pronostico, convertirse en campeón de la UFC con más de 40 años.' />
                <ArticlePreview img={goats} url='/articulos/top5-mejores-peleadores' title='Los 5 Mejores Peleadores de la Historia de UFC' author={null} date={null} text='Un listado de los 5 peleadores que consideramos que podrían ser considerados los mejores de la historia de la UFC.' />
            </section>
        </main>
    )
}