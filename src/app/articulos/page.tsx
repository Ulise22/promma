import styles from './articulos.module.css'
import PageHero from './components/PageHero'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES */
import dwt2 from '@/assets/promotoras/dogfight.jpg'
import ufc298 from '@/assets/articulos/previews/10-20/ufc298_preview.jpg'
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/0-10/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'
import cortePeso from '@/assets/articulos/previews/0-10/corte-peso.jpg'
import texeira from '@/assets/articulos/previews/0-10/glover_teixeira.webp'
import goats from '@/assets/articulos/previews/0-10/ufc-goats.webp'
import bestStyles from '@/assets/articulos/previews/0-10/mejores-estilos_preview.jpg'
import ufc297 from '@/assets/articulos/previews/0-10/ufc297.jpg'
import ufc300 from '@/assets/articulos/previews/0-10/ufc300.jpg'
import queSonMma from '@/assets/articulos/previews/10-20/que-son-mma_preview.jpg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import mostLoss from '@/assets/articulos/previews/10-20/most-loss_preview.jpg'
import origenAM from '@/assets/articulos/previews/10-20/origen-am_preview.jpg'
import jonesYoungChamp from '@/assets/articulos/previews/10-20/campeon-mas-joven.jpg'
import masvidalVsAskren from '@/assets/articulos/previews/10-20/masvidal-vs-askren_preview.jpeg'
import IzziVsPereira from '@/assets/articulos/previews/10-20/izzy-vs-pereira_preview.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import karateDefensaPersonal from '@/assets/articulos/previews/20-30/karate-defensa-personal_preview.jpg'
import mostProFights from '@/assets/articulos/previews/20-30/most-pro-fights.jpg'
import allDoubleChamps from '@/assets/articulos/previews/20-30/dobles-campeones.jpg'
import ufc299 from '@/assets/articulos/previews/10-20/ufc299_preview.jpg'
import comebackMcGregor from '@/assets/articulos/previews/20-30/conor-mcgregor_volverapelear.jpg'
import ufc300EarlyPrelims from '@/assets/articulos/previews/20-30/ufc300_early-prelims.jpg'
import Noticias from '../components/homepage/Noticias'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                <ArticlePreview img={allDoubleChamps} url='/articulos/dobles-campeones-de-ufc' title='Todos los Dobles Campeones de UFC' author={null} text='¿Quiénes componen el selecto grupo de los campeones de 2 categorías de peso diferentes en la ufc?' date='01/04/2024' />
                <ArticlePreview img={mostProFights} url='/articulos/mas-peleas-profesionales' title='El Peleador de MMA con más Peleas y su Oscuro Final' author={null} date='24/03/2024' text='La historia detrás de Travis Fulton, el luchador con más peleas profesionales en MMA y que se suicidó en la carcel en 2021.' />
                <ArticlePreview img={GoatFemUfc} url='/articulos/mejores-peleadoras-ufc' title='Las Mejores Peleadoras de la Historia de la UFC' author={null} date={null} text='El listado de las mejores peleadoras de la historia en haber peleado en la comapañía de Dana White.' />
                <ArticlePreview img={mostLoss} url='/articulos/mas-peleas-perdidas-ufc' title='¿Quién es el Peleador Que Más Peleas Perdió de Forma Consecutiva?' author={null} date={null} text='Los peleadores con el poco honroso récord de ser quienes más peleas consecutivas perdieron en la historia de la UFC.' />
                <Noticias />
            </section>
            <h2 className={styles.articulos__title}>Artículos</h2>
            <section className={styles.articles__container}>
                <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' author={null} date={null} text='La historia detrás de todo el beef que hubo alrededor de estos 2 peleadores, y los conflictos que hubo después de su pelea.' />
                <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' author={null} date={null} text='La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.' />
                <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' author={null} date={null} text='El listado de las peleas que más vendieron en la historia de la UFC, dominada principalmente por Conor McGregor.' />
                <ArticlePreview img={khabibVferguson} url='/articulos/khabib-ferguson' title='Khabib vs Tony Ferguson: La pelea maldita que nunca pudo darse' author={null} date={null} text='La historia de la pelea que los fans querían ver y nunca pudo darse, pese a que se programó hasta 5 veces.' />
                <ArticlePreview img={cortePeso} url='/articulos/cortes-de-peso' title='Los durísimos cortes de peso a los que se someten los peleadores de UFC' author={null} date={null} text='El proceso para dar el peso antes de la pelea contado por el peleador español de UFC, Ilia Topuria.' />
                <ArticlePreview img={jonesYoungChamp} url='/articulos/campeon-mas-joven-ufc' title='El Campeón Más Joven en la Historia de la UFC' author={null} date={null} text='La historia de Jon Jones y cuál fue el camino que tuvo que pasar para convertirse en el campeón más joven de la historia con sólo 23 años.' />
                <ArticlePreview img={IzziVsPereira} url='/articulos/adesanya-vs-pereira' title='La Rivalidad entre Israel Adensanya y Alex Pereira' author={null} date={null} text='La historia de una de las mayores rivalidades que incluso traspasa la UFC, habiéndose enfrentado hasta 4 veces entre las MMA y el Kickboxing.' />
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