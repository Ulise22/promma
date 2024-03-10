import styles from './articulos.module.css'
import PageHero from './components/PageHero'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES */
import ufc298 from '@/assets/articulos/previews/10-20/ufc298_preview.jpg'
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/0-10/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'
import cortePeso from '@/assets/articulos/previews/0-10/corte-peso.jpg'
import texeira from '@/assets/articulos/previews/0-10/glover_teixeira.webp'
import goats from '@/assets/articulos/previews/0-10/ufc-goats.webp'
import bestStyles from '@/assets/articulos/previews/0-10/mejores-estilos_preview.jpg'
import ufc297 from '@/assets/articulos/previews/0-10/ufc297.jpg'
import rivalsIlia from '@/assets/articulos/insideArticle/ilia-topuria_hero.jpg'
import queSonMma from '@/assets/articulos/previews/10-20/que-son-mma_preview.jpg'
import GoatFemUfc from '@/assets/leyendas/(peleadores)/0-10/amanda-nunes/amanda_card.jpg'
import mostLoss from '@/assets/articulos/previews/10-20/most-loss_preview.jpg'
import origenAM from '@/assets/articulos/previews/10-20/origen-am_preview.jpg'
import jonesYoungChamp from '@/assets/articulos/previews/10-20/campeon-mas-joven.jpg'
import masvidalVsAskren from '@/assets/articulos/previews/10-20/masvidal-vs-askren_preview.jpeg'
import IzziVsPereira from '@/assets/articulos/previews/10-20/izzy-vs-pereira_preview.jpg'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                <ArticlePreview img={ufc298} url='/articulos/ufc298' title='UFC 298: ¡Ilia Topuria Noquea a Volkanovski y es el Nuevo Campeón de UFC!' />
                <ArticlePreview img={ufc297} url='/articulos/ufc297' title='UFC 297: ¡Dricus Du Plessis y Raquel Pennington Nuevos Campeones de UFC!' />
                <ArticlePreview img={rivalsIlia} url='/articulos/proximos-rivales-topuria' title='Ahora que es campeón, ¿Cuál Será el Próximo Rival de Ilia Topuria?' />
                <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' />
                <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' />
                <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' />
                <ArticlePreview img={khabibVferguson} url='/articulos/khabib-ferguson' title='Khabib vs Tony Ferguson: La pelea maldita que nunca pudo darse' />
                <ArticlePreview img={cortePeso} url='/articulos/cortes-de-peso' title='Los durísimos cortes de peso a los que se someten los peleadores de UFC' />
                <ArticlePreview img={jonesYoungChamp} url='/articulos/campeon-mas-joven-ufc' title='El Campeón Más Joven en la Historia de la UFC' />
                <ArticlePreview img={IzziVsPereira} url='/articulos/adesanya-vs-pereira' title='La Rivalidad entre Israel Adensanya y Alex Pereira' />
                <ArticlePreview img={texeira} url='/articulos/campeon-viejo-ufc' title='El campeón más viejo de la historia moderna de la UFC' />
                <ArticlePreview img={mostLoss} url='/articulos/mas-peleas-perdidas-ufc' title='¿Quién es el Peleador Que Más Peleas Perdió de Forma Consecutiva?' />
                <ArticlePreview img={goats} url='/articulos/top5-mejores-peleadores' title='Los 5 Mejores Peleadores de la Historia de UFC' />
                <ArticlePreview img={GoatFemUfc} url='/articulos/mejores-peleadoras-ufc' title='Las Mejores Peleadoras de la Historia de la UFC' />
                <ArticlePreview img={bestStyles} url='/articulos/mejores-estilos-mma' title='Los Mejores Estilos de Pelea para las MMA' />
                <ArticlePreview img={queSonMma} url='/articulos/que-son-mma' title='¿Qué son las MMA?' />
                <ArticlePreview img={origenAM} url='/articulos/origen-artes-marciales' title='Origen de las Artes Marciales' />
            </section>
        </main>
    )
}