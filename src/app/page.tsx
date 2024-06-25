import styles from './page.module.css'
import Link from 'next/link'
import HomeHero from './components/homepage/HomeHero'
import ArticlePreview from './articulos/components/ArticlePreview'
import Noticias from './components/homepage/Noticias'
import ArticulosContainer from './components/homepage/ArticulosContainer'
/*Articles PREVIEW */
import ginaCarano from '@/assets/articulos/previews/30-40/gina_carano-preview.jpg'
import bispingOjo from '@/assets/articulos/previews/20-30/michael_bisping_ojo-preview.jpg'
import alexanderEmelianenko from '@/assets/articulos/previews/20-30/alexander-emelianenko-preview.jpg'
import yoelgenetica from '@/assets/articulos/previews/20-30/yoel_romero_genetica-preview.jpg'
import Image from 'next/image'
import plus from '@/assets/plus.png'

export default function Home () {
  return(
    <main className={styles.home}>
      <HomeHero />
      <section className={styles.home__articlesHero}>
        <ArticlePreview img={ginaCarano} url='/articulos/gina-carano-historia' title='Gina Carano: La Primera Estrella Femenina de las MMA' author={null} text='La historia de una de las mujeres más importantes en la historia de las MMA, que pasó de ser una de las procursoras de las MMA femeninas a una estrella de cine.' date='20/06/2024' />
        <ArticlePreview img={bispingOjo} url='/articulos/michael-bisping-ojo' title='Michael Bisping: El Luchador Inglés de UFC Que Perdió un Ojo Peleando' author={null} date='13/06/2024' text='La historia de cómo el peleador de Reino Unido perdió su ojo durante una pelea de UFC, y cómo a pesar de eso logró ser campeón.' />
        <ArticlePreview img={yoelgenetica} url='/articulos/yoel-romero-genetica' title='La Genética de Yoel Romero' author={null} text='Yoel Romero es un superhumano, el admirable prodigio genético que ha demostrado ser el luchador cubano para seguir activo con 47 años y para sorprender a los médicos con lo rápido de su recuperación.' date='12/06/2024' />
        <ArticlePreview img={alexanderEmelianenko} url='/articulos/alexander-emelianenko' title='Alexander Emelianenko: El Hermano de Fedor Emelianenko y su Relación con la Mafia Rusa' author={null} text='Los tatuajes de Alexander Emelianenko y el significado que tienen, ¿De verdad formó parte de la mafia rusa?' date='27/05/2024' />
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
          <Link href='/peleadores' className={`${styles.peleadores__card__plus}`}>
            <Image src={plus} alt=''/>
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
          <Link href='/leyendas' className={`${styles.peleadores__card__plus__gray}`}>
            <Image src={plus} alt=''/>
          </Link>
        </div>
      </section>
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
          <Link href='/peleadores' className={`${styles.peleadores__card__plus}`}>
            <Image src={plus} alt=''/>
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
          <Link href='/mujeres' className={`${styles.peleadores__card__plus}`}>
            <Image src={plus} alt=''/>
          </Link>
        </div>
      </section>
    </main>
  )
}