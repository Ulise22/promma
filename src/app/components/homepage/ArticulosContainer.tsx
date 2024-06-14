import ArticlePreview from '@/app/articulos/components/ArticlePreview'
import styles from './articulosContainer.module.css'
/* IMAGES */
import jonesYoungChamp from '@/assets/articulos/previews/0-10/campeon-mas-joven.jpg'
import IzziVsPereira from '@/assets/articulos/previews/0-10/izzy-vs-pereira_preview.jpg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import mostLoss from '@/assets/articulos/previews/10-20/most-loss_preview.jpg'
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/0-10/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'
import cortePeso from '@/assets/articulos/previews/0-10/corte-peso.jpg'
import texeira from '@/assets/articulos/previews/0-10/glover_teixeira.jpg'
import goats from '@/assets/articulos/previews/0-10/ufc-goats.jpg'
import mariusz from '@/assets/articulos/previews/10-20/mariusz-pudzianowski-preview.jpg'
import kots from '@/assets/articulos/previews/20-30/kots-preview.jpg'
import dwt from '@/assets/articulos/previews/20-30/dogfight.jpg'
import masvidalVsAskren from '@/assets/articulos/previews/0-10/masvidal-vs-askren_preview.jpeg'
import ufc from '@/assets/articulos/previews/20-30/ufc-preview.jpg'
import jimMiller from '@/assets/articulos/previews/20-30/jim-miller-preview.jpg'

export default function ArticulosContainer () {
    return(
        <section className={styles.articulos}>
            <h2 className={styles.articulos__title}>Artículos</h2>
            <article className={styles.articulos__container}>
                <ArticlePreview img={dwt} url='/articulos/dogfight-wild-tournament' title='Dogfight Wild Tournament' author={null} text='El evento de pelea más loco que se puede ver gratis en youtube y que es organizado en España por Jordi Wild.' date='05/06/2024' />
                <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' author={null} text='La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.' date={null} />
                <ArticlePreview img={ufc} url='/articulos/ufc' title='UFC: Historia e Información de la Compañía de MMA Más Grande del Mundo' author={null} text='Todo lo relacionado al origen, crecimiento y actualidad de la compañía UFC.' date='05/06/2024' />
                <ArticlePreview img={jimMiller} url='/articulos/jim-miller-historia' title='Jim Miller, el Peleador con Más Victorias en la Historia de la UFC y que Participó del UFC100, UFC200 y UCF300' author={null} text='La historia de uno de los peleadores más importantes en la historia de la compañía más grande de MMA, que cuenta con más de 40 peleas en UFC.' date='02/05/2024' />
                <ArticlePreview img={kots} url='/articulos/king-of-the-streets' title='King Of The Streets' author={null} text='La organización de peleas clandestinas más grande del mundo y popular en Youtube' date='05/06/2024' />
                <ArticlePreview img={mariusz} url='/articulos/mariusz-pudzianowski' title='El Polaco Que Fue 5 Veces el Hombre Más Fuerte del Mundo, y que con 45 Años Noquea a sus Rivales, Mariusz Pudzianowski' author={null} text='La historia del hombre nacido en Polonia, Mariusz Pudzianowski, que luego de haber desarrollado su carrera como Strongman, siendo elegido el hombre más fuerte del mundo en 5 oportunidades, se mudó a las MMA, donde sorprendió a todos con su impenente físico y su habilidad para noquear rivales con más experiencia que él.' date='30/04/2024' />
                <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' author={null} date={null} text='La historia detrás de todo el beef que hubo alrededor de estos 2 peleadores, y los conflictos que hubo después de su pelea.' />
                <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' author={null} date={null} text='El listado de las peleas que más vendieron en la historia de la UFC, dominada principalmente por Conor McGregor.' />
                <ArticlePreview img={khabibVferguson} url='/articulos/khabib-ferguson' title='Khabib vs Tony Ferguson: La pelea maldita que nunca pudo darse' author={null} date={null} text='La historia de la pelea que los fans querían ver y nunca pudo darse, pese a que se programó hasta 5 veces.' />
                <ArticlePreview img={cortePeso} url='/articulos/cortes-de-peso' title='Los durísimos cortes de peso a los que se someten los peleadores de UFC' author={null} date={null} text='El proceso para dar el peso antes de la pelea contado por el peleador español de UFC, Ilia Topuria.' />
                <ArticlePreview img={jonesYoungChamp} url='/articulos/campeon-mas-joven-ufc' title='El Campeón Más Joven en la Historia de la UFC' author={null} date={null} text='La historia de Jon Jones y cuál fue el camino que tuvo que pasar para convertirse en el campeón más joven de la historia con sólo 23 años.' />
                <ArticlePreview img={IzziVsPereira} url='/articulos/adesanya-vs-pereira' title='La Rivalidad entre Israel Adensanya y Alex Pereira' author={null} date={null} text='La historia de una de las mayores rivalidades que incluso traspasa la UFC, habiéndose enfrentado hasta 4 veces entre las MMA y el Kickboxing.' />
                <ArticlePreview img={mostLoss} url='/articulos/mas-peleas-perdidas-ufc' title='¿Quién es el Peleador Que Más Peleas Perdió de Forma Consecutiva?' author={null} date={null} text='Los peleadores con el poco honroso récord de ser quienes más peleas consecutivas perdieron en la historia de la UFC.' />
                <ArticlePreview img={texeira} url='/articulos/campeon-viejo-ufc' title='El campeón más viejo de la historia moderna de la UFC' author={null} date={null} text='El camino por el que pasó Glover Texeira, para contra todo pronostico, convertirse en campeón de la UFC con más de 40 años.' />
                <ArticlePreview img={goats} url='/articulos/top5-mejores-peleadores' title='Los 5 Mejores Peleadores de la Historia de UFC' author={null} date={null} text='Un listado de los 5 peleadores que consideramos que podrían ser considerados los mejores de la historia de la UFC.' />
                <ArticlePreview img={GoatFemUfc} url='/articulos/mejores-peleadoras-ufc' title='Las Mejores Peleadoras de la Historia de la UFC' author={null} date={null} text='El listado de las mejores peleadoras de la historia en haber peleado en la comapañía de Dana White.' />
            </article>
        </section>
    )
}