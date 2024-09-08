import styles from './articulos.module.css'
import PageHero from './components/PageHero'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES */
/* 0-10 */
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/0-10/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'
import cortePeso from '@/assets/articulos/previews/0-10/corte-peso.jpg'
import texeira from '@/assets/articulos/previews/0-10/glover_teixeira.jpg'
import goats from '@/assets/articulos/previews/0-10/ufc-goats.jpg'
import bestStyles from '@/assets/articulos/previews/0-10/mejores-estilos_preview.jpg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import jonesYoungChamp from '@/assets/articulos/previews/0-10/campeon-mas-joven.jpg'
import IzziVsPereira from '@/assets/articulos/previews/0-10/izzy-vs-pereira_preview.jpg'
/* 10-20 */
import queSonMma from '@/assets/articulos/previews/10-20/que-son-mma_preview.jpg'
import mostLoss from '@/assets/articulos/previews/10-20/most-loss_preview.jpg'
import origenAM from '@/assets/articulos/previews/10-20/origen-am_preview.jpg'
import karateDefensaPersonal from '@/assets/articulos/previews/10-20/karate-defensa-personal_preview.jpg'
import mostProFights from '@/assets/articulos/previews/10-20/most-pro-fights.jpg'
import allDoubleChamps from '@/assets/articulos/previews/10-20/dobles-campeones.jpg'
import kravmaga from '@/assets/articulos/previews/10-20/kravmaga-preview.jpg'
import mariusz from '@/assets/articulos/previews/10-20/mariusz-pudzianowski-preview.jpg'
import masvidalVsAskren from '@/assets/articulos/previews/0-10/masvidal-vs-askren_preview.jpeg'
import jamesToney from '@/assets/articulos/previews/10-20/james_toney-preview.jpg'
/* 20-30 */
import jimMiller from '@/assets/articulos/previews/20-30/jim-miller-preview.jpg'
import one from '@/assets/articulos/previews/20-30/one_championship-preview.png'
import kots from '@/assets/articulos/previews/20-30/kots-preview.jpg'
import dwt from '@/assets/articulos/previews/20-30/dogfight.jpg'
import ufc from '@/assets/articulos/previews/20-30/ufc-preview.jpg'
import nateDiaz from '@/assets/articulos/previews/20-30/nate-diaz-preview.jpg'
import mejoresPeleasUFC from '@/assets/articulos/previews/20-30/mejores_peleas_ufc-preview.jpg'
import bispingOjo from '@/assets/articulos/previews/20-30/michael_bisping_ojo-preview.jpg'
/* 30-40 */
import palhares from '@/assets/articulos/previews/30-40/rousimar_palhares-preview.jpg'
import pridefc from '@/assets/articulos/previews/30-40/pridefc-preview.jpg'
import ginaCarano from '@/assets/articulos/previews/30-40/gina_carano-preview.jpg'
import boxeadorVsMMA from '@/assets/articulos/previews/30-40/boxeador_vs_mma-preview.jpg'
import magomedovOjo from '@/assets/articulos/previews/30-40/shara_magomedov_ojo-preview.jpg'
import divisionGoats from '@/assets/articulos/previews/30-40/division_goats-preview.jpg'
import daveBautista from '@/assets/articulos/previews/30-40/dave_bautista-preview.jpg'
import jorgeMasvidal from '@/assets/articulos/previews/30-40/jorge_masvidal-preview.jpg'
import jonesEscondido from '@/assets/articulos/previews/30-40/jones_se_esconde-preview.jpg'
/* 40-50 */
import mmaVsBoxPeligro from '@/assets/articulos/previews/40-50/box_vs_mma_danger-preview.jpg'
import LeeMurray from '@/assets/articulos/previews/40-50/lee_murray-preview.jpg'
import khabibPierde from '@/assets/articulos/previews/40-50/khabib_pierde-preview.jpeg'
import gspAliens from '@/assets/articulos/previews/40-50/gsp_aliens.jpg'
import helwaniVsWhite from '@/assets/articulos/previews/40-50/ariel_helwani_vs_dana_white.jpeg'
import bestFight from '@/assets/articulos/previews/40-50/bestfight-preview.jpeg'
import nickNewell from '@/assets/articulos/previews/40-50/nick_newell-preview.jpg'
import zabit from '@/assets/articulos/previews/40-50/zabit-preview.jpg'
import cmpunk from '@/assets/articulos/previews/40-50/cm_punk_ufc-preview.jpg'
import nicoMontano from '@/assets/articulos/previews/40-50/nicco_montano-preview.jpg'
/* 50-60 */ 
import kimboSlice from '@/assets/articulos/previews/50-60/kimbo_slice-preview.jpg'
import butterbean from '@/assets/articulos/previews/50-60/butterbean-preview.webp'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                {/* <ArticlePreview img={magomedovOjo} url='/articulos/shara-magomedov-ojo' title='¿Qué le Pasó en el Ojo a Shara Magomedov?' author={null} text='Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.' date='22/06/2024' /> */}
                <ArticlePreview img={butterbean} url='/articulos/biografia-de-eric-butterbean' title='¿Quién fue Eric Butterbean y por qué era tan famoso?' author={null} text='La historia de vida de Eric Butterbean, quien paso de ser un luchador aficionado en concursos de boxeo a convertirse en una estrella internacional en el mundo del boxeo y, eventualmente, en las artes marciales mixtas.' date='08/09/2024' />
                <ArticlePreview img={kimboSlice} url='/articulos/kimbo-slice-historia' title='Kimbo Slice: El rey de los luchadores web' author={null} text='La historia de Kevin Ferguson, mejor conocido como Kimbo Slice, y su historia de superación que lo llevó de ser guardia de seguridad de un club nocturno, a ser un luchador profesional.' date='05/09/2024' />
                <ArticlePreview img={nicoMontano} url='/articulos/que-paso-con-nicco-montano' title='¿Qué Pasó con Nico Montaño? La Primer Campeona de Peso Mosca de UFC que Fue Despojada de su Título' author={null} text='La historia de la primer campeona de peso mosca en la UFC, y como esta fue maltratada por la compañía, siendo despojada de su título.' date='03/09/2024' />
                <ArticlePreview img={cmpunk} url='/articulos/cm-punk-ufc' title='La Historia de CM Punk, El peor Luchador de la historia de UFC' author={null} text='El mítico caso de CM Punk, quien abandonó la WWE para ir a la UFC y fracasó rotundamente, peleando únicamente en 2 ocasiones y perdiendo ambas peleas.' date='31/08/2024' />
                </section>
            <h2 className={styles.articulos__title}>Artículos</h2>
            <section className={styles.articles__container}>
                <ArticlePreview img={zabit} url='/articulos/que-paso-con-zabit-magomedsharipov' title='Zabit Magomedsharipov: ¿Qué Pasó con la Bestia Daguestaní que se Retiró Demasiado Joven?' author={null} text='La historia de Zabit Magomedsharipov, ¿Quién es? ¿Por qué se retiró con tan sólo 28 años? y ¿Qué es de su vida actualmente?' date='31/08/2024' />
                <ArticlePreview img={nickNewell} url='/articulos/luchador-manco-de-mma' title='Nick Newell: El Luchador con una Mano en MMA' author={null} text='La historia de Nick Newell, el manco de las MMA que competía a nivel profesional y que llegó a ser campeón.' date='29/08/2024' />
                <ArticlePreview img={bestFight} url='/articulos/mejor-pelea-mma-de-la-historia' title='Don Frye vs Takayama: La Mejor Pelea de MMA en la Historia' author={null} text='La pelea más loca de todos los tiempos entre Don Frye y Yoshihiro Takayama que hizo historia en las MMA, y qué fue de la vida de los peleadores.' date='28/08/2024' />
                <ArticlePreview img={helwaniVsWhite} url='/articulos/ariel-helwani-vs-dana-white' title='El Periodista al que Dana White Detesta: ¿Por qué Dana White odia a Ariel Helwani?' author={null} text='La historia del qué pasó entre Ariel Helwani y UFC, y de qué sucedio entre Dana White y Ariel Helwani.' date='24/08/2024' />
                <ArticlePreview img={gspAliens} url='/articulos/george-st-pierre-aliens' title='George St-Pierre Tiene Miedo a los Aliens y su Plan Para Evitar ser Abducido' author={null} text='La leyenda y excampeón de la UFC y su peculiar miedo a los Aliens y la estrategia que ideó para lidiar con ellos.' date='22/08/2024' />
                <ArticlePreview img={khabibPierde} url='/articulos/khabib-nurmagomedov-pierde' title='La Única Derrota de Khabib Nurmagomedov' author={null} text='La historia y el vídeo de un joven Khabib de 17 años llorando después de perder una pelea de sambo en un campeonato ruso.' date='19/08/2024' />
                <ArticlePreview img={LeeMurray} url='/articulos/lee-murray' title='Lee Murray: El Luchador de UFC Que Realizó el Mayor Robo en Reino Unido' author={null} text='Lee Murray, luchador de MMA y expeleador de UFC que vivió su vida como si fuera un personaje de GTA, siendo uno de los perpetuadores del mayor robo de dinero en efectivo en la historia de Reino Unido.' date='23/07/2024' />
                <ArticlePreview img={mmaVsBoxPeligro} url='/articulos/boxeo-vs-mma-peligroso' title='Boxeo vs MMA: ¿Cuál Es Más Peligroso?' author={null} text='2 de los deportes de combate más practicados en el mundo, pero uno de los 2 cuenta con la peculiaridad de ser más riesgoso durante su práctica para quien lo entrena.' date='21/07/2024' />
                <ArticlePreview img={jonesEscondido} url='/articulos/jon-jones-esconde-usada' title='El Día Que Jon Jones se Escondió en Un Octagono Para No Ser Testeado' author={null} text='La curiosa anécdota sobre Jon Jones y cómo pasó el día entero escondido debajo de un octágono con tal de no ser testeado en las pruebas antidopaje.' date='08/07/2024' />
                <ArticlePreview img={jorgeMasvidal} url='/articulos/jorge-masvidal-historia' title='La Biografía de Jorge Masvidal' author={null} text='La historia de uno de los peleadores favoritos de los fans, que llegó a pelear 2 veces por el título y es recordado como el primer BMF de la UFC.' date='04/07/2024' />
                <ArticlePreview img={daveBautista} url='/articulos/dave-bautista-mma' title='Cuando el Actor de Hollywood Dave Bautista Hizo su Debut en MMA' author={null} text='El día en que se dió la pelea en MMA de Dave Bautista ante Vince Lucero.' date='28/06/2024' />
                <ArticlePreview img={divisionGoats} url='/articulos/mejores-peleadores-por-division-ufc' title='Los Mejores Peleadores de la Historia de Cada Division de UFC' author={null} text='La lista del mejor peleador histórico de cada división de la UFC' date='27/06/2024' />
                <ArticlePreview img={boxeadorVsMMA} url='/articulos/boxeador-vs-mma' title='Boxeador vs MMA: Las Peleas Entre Boxeo y MMA' author={null} text='Los enfrentamientos entre luchadores de MMA y boxeadores que se han dado en boxeo.' date='20/06/2024' />
                <ArticlePreview img={ginaCarano} url='/articulos/gina-carano-historia' title='Gina Carano: La Primera Estrella Femenina de las MMA' author={null} text='La historia de una de las mujeres más importantes en la historia de las MMA, que pasó de ser una de las procursoras de las MMA femeninas a una estrella de cine.' date='20/06/2024' />
                <ArticlePreview img={bispingOjo} url='/articulos/michael-bisping-ojo' title='Michael Bisping: El Luchador Inglés de UFC Que Perdió un Ojo Peleando' author={null} date='13/06/2024' text='La historia de cómo el peleador de Reino Unido perdió su ojo durante una pelea de UFC, y cómo a pesar de eso logró ser campeón.' />
                <ArticlePreview img={pridefc} url='/articulos/que-paso-con-pride-fc' title='¿Qué Pasó con Pride FC?' author={null} text='Cómo el control de la mafia japonea Yakuza acabó con el reinado de la mayor compañía de MMA de la historia.' date='19/06/2024' />
                <ArticlePreview img={palhares} url='/articulos/peleador-mas-sucio-ufc' title='El Peleador Más Sucio de la Historia Expulsado de la UFC' author={null} text='Rousimar Palhares, el luchador más sucio de la historia de las MMA que por su comportamiento dentro del octagono fue expulsado de la UFC.' date='19/06/2024' />
                <ArticlePreview img={mejoresPeleasUFC} url='/articulos/mejores-peleas-ufc' title='Las Mejores Peleas de UFC de la Historia' author={null} text='El listado de las mejores peleas de la historia, basado en los World MMA Awards que premian a la mejor pelea del año desde 2008.' date='18/06/2024' />
                <ArticlePreview img={jamesToney} url='/articulos/boxeador-en-mma' title='Boxeo Vs MMA: ¿Qué pasa cuando un boxeador pelea en MMA? Cuando las MMA Aplastaron al Boxeo' author={null} text='El día que un excampeón de boxeo se metió a competir en la UFC, y cómo terminó su enfrentamiento en el octagono.' date='14/06/2024' />
                <ArticlePreview img={ufc} url='/articulos/ufc' title='UFC: Historia e Información de la Compañía de MMA Más Grande del Mundo' author={null} text='Todo lo relacionado al origen, crecimiento y actualidad de la compañía UFC.' date='05/06/2024' />
                <ArticlePreview img={jimMiller} url='/articulos/jim-miller-historia' title='Jim Miller, el Peleador con Más Victorias en la Historia de la UFC y que Participó del UFC100, UFC200 y UCF300' author={null} text='La historia de uno de los peleadores más importantes en la historia de la compañía más grande de MMA, que cuenta con más de 40 peleas en UFC.' date='02/05/2024' />
                <ArticlePreview img={nateDiaz} url='/articulos/nate-diaz-historia' title='Nate Diaz, el Peleador Más Querido de la UFC' author={null} text='La historia de uno de los peleadores más carismáticos de la UFC, que supo ganarse el cariño de la gente con peleas memorables y con su forma de ser.' date='01/05/2024' />
                <ArticlePreview img={mariusz} url='/articulos/mariusz-pudzianowski' title='El Polaco Que Fue 5 Veces el Hombre Más Fuerte del Mundo, y que con 45 Años Noquea a sus Rivales, Mariusz Pudzianowski' author={null} text='La historia del hombre nacido en Polonia, Mariusz Pudzianowski, que luego de haber desarrollado su carrera como Strongman, siendo elegido el hombre más fuerte del mundo en 5 oportunidades, se mudó a las MMA, donde sorprendió a todos con su impenente físico y su habilidad para noquear rivales con más experiencia que él.' date='30/04/2024' />
                <ArticlePreview img={dwt} url='/articulos/dogfight-wild-tournament' title='Dogfight Wild Tournament' author={null} text='El evento de pelea más loco que se puede ver gratis en youtube y que es organizado en España por Jordi Wild.' date='05/06/2024' />
                <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' author={null} text='La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.' date={null} />
                <ArticlePreview img={kots} url='/articulos/king-of-the-streets' title='King Of The Streets' author={null} text='La organización de peleas clandestinas más grande del mundo y popular en Youtube' date='05/06/2024' />
                <ArticlePreview img={one} url='/articulos/one-championship' title='ONE Championship: La Principal Competencia de UFC' author={null} text='La historia y curiosidades de ONE Championship, el principal competidor asiático de la UFC' date='04/06/2024' />
                <ArticlePreview img={kravmaga} url='/articulos/sirve-el-krav-maga' title='¿Sirve el Krav Maga en un combate real?' author={null} text='La razón por la que muchos peleadores profesionales consideran que el Krav Maga y otro tipo de estilos de defensa personal NO sirven para una pelea callejera y para las MMA.' date='30/04/2024' />
                <ArticlePreview img={allDoubleChamps} url='/articulos/dobles-campeones-de-ufc' title='Todos los Dobles Campeones de UFC' author={null} text='¿Quiénes componen el selecto grupo de los campeones de 2 categorías de peso diferentes en la ufc?' date='01/04/2024' />
                <ArticlePreview img={mostProFights} url='/articulos/peleador-de-mma-con-mas-peleas' title='¿Qué luchador de MMA ha tenido más peleas?' author={null} date='24/03/2024' text='La historia detrás de Travis Fulton, el luchador con más peleas en MMA y su oscuro final.' />
                <ArticlePreview img={GoatFemUfc} url='/articulos/mejores-peleadoras-ufc' title='Las Mejores Peleadoras de la Historia de la UFC' author={null} date={null} text='El listado de las mejores peleadoras de la historia en haber peleado en la comapañía de Dana White.' />
                <ArticlePreview img={mostLoss} url='/articulos/mas-peleas-perdidas-ufc' title='¿Quién es el Peleador Que Más Peleas Perdió de Forma Consecutiva?' author={null} date={null} text='Los peleadores con el poco honroso récord de ser quienes más peleas consecutivas perdieron en la historia de la UFC.' />
                <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' author={null} date={null} text='La historia detrás de todo el beef que hubo alrededor de estos 2 peleadores, y los conflictos que hubo después de su pelea.' />
                <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' author={null} date={null} text='El listado de las peleas que más vendieron en la historia de la UFC, dominada principalmente por Conor McGregor.' />
                <ArticlePreview img={khabibVferguson} url='/articulos/khabib-vs-ferguson' title='Khabib Vs Ferguson: ¿Por Qué se Canceló Tantas Veces? La Pelea Maldita que Nunca se Dió' author={null} date={null} text='La historia de la pelea que los fans querían ver y nunca pudo darse, pese a que se programó hasta 5 veces.' />
                <ArticlePreview img={cortePeso} url='/articulos/cortes-de-peso-ufc' title='Los durísimos cortes de peso a los que se someten los peleadores de UFC' author={null} date='01/09/2024' text='¿Cómo son los cortes de peso en las MMA? Ilia Topuria en una entrevista en The Wild Project cuenta el durísimo proceso por el que tienen que pasar los peleadores para dar el peso antes de cada pelea.' />
                <ArticlePreview img={jonesYoungChamp} url='/articulos/campeon-mas-joven-de-ufc' title='El Campeón Más Joven en la Historia de la UFC' author={null} date={null} text='La historia de Jon Jones y cuál fue el camino que tuvo que pasar para convertirse en el campeón más joven de la historia con sólo 23 años.' />
                <ArticlePreview img={IzziVsPereira} url='/articulos/rivalidad-adesanya-y-pereira' title='La Rivalidad entre Israel Adensanya y Alex Pereira' author={null} date='01/09/2024' text='¿De dónde viene la rivalidad entre Israel Adesanya y Alex Pereira? La historia y trasfondo de una de la mayores rivalidades modernas de las MMA, entre estos peleadores que se han enfrentado hasta en 4 ocasiones.' />
                <ArticlePreview img={texeira} url='/articulos/campeon-viejo-ufc' title='El campeón más viejo de la historia moderna de la UFC' author={null} date={null} text='El camino por el que pasó Glover Texeira, para contra todo pronostico, convertirse en campeón de la UFC con más de 40 años.' />
                <ArticlePreview img={goats} url='/articulos/top5-mejores-peleadores' title='Los 5 Mejores Peleadores de la Historia de UFC' author={null} date={null} text='Un listado de los 5 peleadores que consideramos que podrían ser considerados los mejores de la historia de la UFC.' />
                <ArticlePreview img={bestStyles} url='/articulos/mejores-estilos-mma' title='Los Mejores Estilos de Pelea para las MMA' author={null} date={null} text='¿Cuáles son los estilos de pelea o artes marciales más útiles que debe dominar un peleador de MMA?' />
                <ArticlePreview img={queSonMma} url='/articulos/que-son-mma' title='¿Qué son las MMA?' author={null} date={null} text='Una descripción y breve historia del origen de las artes marciales mixtas.' />
                <ArticlePreview img={origenAM} url='/articulos/origen-artes-marciales' title='Origen de las Artes Marciales' author={null} date={null} text='¿Cuál es el origen de las artes marciales? ¿Cuál es el arte marcial más antiguo conocido por el hombre?' />
                <ArticlePreview img={karateDefensaPersonal} url='/articulos/karate-y-defensa-personal' title='Karate y Defensa Personal' author={null} date={null} text='Discutimos que tan útil es saber karate en caso de necesitarlo para defensa personal.' />
            </section>
        </main>
    )
}