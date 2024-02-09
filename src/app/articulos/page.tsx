import styles from './articulos.module.css'
import PageHero from './components/PageHero'
import ArticlePreview from '@/app/articulos/components/ArticlePreview'
/* IMAGES */
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/khabibVferguson.jpg'
import cortePeso from '@/assets/articulos/previews/corte-peso.jpg'
import texeira from '@/assets/articulos/previews/glover_teixeira.webp'
import goats from '@/assets/articulos/previews/ufc-goats.webp'

export default function Articulos () {
    return(
        <main className={styles.articulos}>
            <PageHero />
            <section className={styles.articles__container}>
                <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' />
                <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' />
                <ArticlePreview img={khabibVferguson} url='/articulos/khabib-ferguson' title='Khabib vs Tony Ferguson: La pelea maldita que nunca pudo darse' />
                <ArticlePreview img={cortePeso} url='/articulos/cortes-de-peso' title='Los durísimos cortes de peso a los que se someten los peleadores de UFC' />
                <ArticlePreview img={texeira} url='/articulos/campeon-viejo-ufc' title='El campeón más viejo de la historia moderna de la UFC' />
                <ArticlePreview img={goats} url='/articulos/top5-mejores-peleadores' title='Los 5 Mejores Peleadores de la Historia de UFC' />
            </section>
        </main>
    )
}