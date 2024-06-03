import styles from './page.module.css'
import Link from 'next/link'
import PromotorasList from './promotoras/PromotorasList'
import PageHero from './articulos/components/PageHero'
import ArticlePreview from './articulos/components/ArticlePreview'
/*Articles PREVIEW */
import masvidalVsAskren from '@/assets/articulos/previews/0-10/masvidal-vs-askren_preview.jpeg'
import IzziVsPereira from '@/assets/articulos/previews/0-10/izzy-vs-pereira_preview.jpg'
import goats from '@/assets/articulos/previews/0-10/ufc-goats.jpg'
import texeira from '@/assets/articulos/previews/0-10/glover_teixeira.jpg'
import Noticias from './components/homepage/Noticias'
import ArticulosContainer from './components/homepage/ArticulosContainer'

export default function Home () {
  return(
    <main className={styles.home}>
      <PageHero />
      <section className={styles.home__articlesHero}>
        <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' author={null} date={null} text='La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.' />
        <ArticlePreview img={IzziVsPereira} url='/articulos/adesanya-vs-pereira' title='La Rivalidad entre Israel Adensanya y Alex Pereira' author={null} date={null} text='La historia de una de las mayores rivalidades que incluso traspasa la UFC, habiéndose enfrentado hasta 4 veces entre las MMA y el Kickboxing.' />
        <ArticlePreview img={texeira} url='/articulos/campeon-viejo-ufc' title='El campeón más viejo de la historia moderna de la UFC' author={null} date={null} text='El camino por el que pasó Glover Texeira, para contra todo pronostico, convertirse en campeón de la UFC con más de 40 años.' />
        <ArticlePreview img={goats} url='/articulos/top5-mejores-peleadores' title='Los 5 Mejores Peleadores de la Historia de UFC' author={null} date={null} text='Un listado de los 5 peleadores que consideramos que podrían ser considerados los mejores de la historia de la UFC.' />
      </section>
      <section className={styles.home__peleadores}>
        <h2 className={styles.home__peleadores__title}>Peleadores Campeones de UFC</h2>
        <div className={styles.peleadores__container}>
          <Link href='/peleadores/ilia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
            <h3 className={styles.peleadores__card__name}>Ilia Topuria</h3>
          </Link>
          <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
            <h3 className={styles.peleadores__card__name}>Islam Makhachev</h3>
          </Link>
          <Link href='/peleadores/jon-jones' className={`${styles.peleadores__card} ${styles.peleadores__card_jones}`}>
            <h3 className={styles.peleadores__card__name}>Jon Jones</h3>
          </Link>
        </div>
      </section>
      <Noticias />
      <section className={styles.home__peleadores}>
        <h2 className={styles.home__peleadores__title}>Leyendas de las MMA</h2>
        <div className={styles.peleadores__container}>
          <Link href='/leyendas/khabib-nurmagomedov' className={`${styles.peleadores__card} ${styles.peleadores__card_khabib}`}>
              <h3 className={styles.peleadores__card__name}>Khabib Nurmagomedov</h3>
          </Link>
          <Link href='/leyendas/george-st-pierre' className={`${styles.peleadores__card} ${styles.peleadores__card_gsp}`}>
              <h3 className={styles.peleadores__card__name}>George St-Pierre</h3>
          </Link>
          <Link href='/leyendas/anderson-silva' className={`${styles.peleadores__card} ${styles.peleadores__card_anderson}`}>
              <h3 className={styles.peleadores__card__name}>Anderson Silva</h3>
          </Link>
        </div>
      </section>
      <article className={styles.article__promotoras}>
        <h2 className={styles.home__peleadores__title}>Promotoras de MMA</h2>
        <PromotorasList />
      </article>
      <ArticulosContainer />
      <section className={styles.home__peleadores}>
        <h2 className={styles.home__peleadores__title}>Peleadores Destacados</h2>
        <div className={styles.peleadores__container}>
          <Link href='/peleadores/conor-mcgregor' className={`${styles.peleadores__card} ${styles.peleadores__card_mcgregor}`}>
            <h3 className={styles.peleadores__card__name}>Conor Mcgregor</h3>
          </Link>
          <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
            <h3 className={styles.peleadores__card__name}>Alexander Volkanovski</h3>
          </Link>
          <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
            <h3 className={styles.peleadores__card__name}>Sean Strickland</h3>
          </Link>
        </div>
      </section>
      <section className={styles.home__peleadores}>
        <h2 className={styles.home__peleadores__title}>Mujeres en MMA</h2>
        <div className={styles.peleadores__container}>
          <Link href='/mujeres/alexa-grasso' className={`${styles.peleadores__card} ${styles.peleadores__card_grasso}`}>
              <h3 className={styles.peleadores__card__name}>Alexa Grasso</h3>
          </Link>
          <Link href='/mujeres/zhang-weili' className={`${styles.peleadores__card} ${styles.peleadores__card_weili}`}>
              <h3 className={styles.peleadores__card__name}>Zhang Weili</h3>
          </Link>
          <Link href='/mujeres/julianna-pena' className={`${styles.peleadores__card} ${styles.peleadores__card_julianna}`}>
              <h3 className={styles.peleadores__card__name}>Julianna Peña</h3>
          </Link>
        </div>
      </section>
    </main>
  )
}