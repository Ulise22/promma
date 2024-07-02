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
        <p className={styles.home__peleadores__title}>Peleadores Campeones de UFC</p>
        <div className={styles.peleadores__container}>
          <Link href='/peleadores/ilia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
            <p className={styles.peleadores__card__name}>Ilia Topuria</p>
          </Link>
          <Link href='/peleadores/islam-makhachev' className={`${styles.peleadores__card} ${styles.peleadores__card_makhachev}`}>
            <p className={styles.peleadores__card__name}>Islam Makhachev</p>
          </Link>
          <Link href='/peleadores/jon-jones' className={`${styles.peleadores__card} ${styles.peleadores__card_jones}`}>
            <p className={styles.peleadores__card__name}>Jon Jones</p>
          </Link>
          <Link href='/peleadores' className={`${styles.peleadores__card__plus}`}>
            <Image src={plus} alt=''/>
          </Link>
        </div>
      </section>
      <Noticias />
      <section className={styles.home__peleadores}>
        <p className={styles.home__peleadores__title}>Leyendas de las MMA</p>
        <div className={styles.peleadores__container}>
          <Link href='/leyendas/khabib-nurmagomedov' className={`${styles.peleadores__card} ${styles.peleadores__card_khabib}`}>
              <p className={styles.peleadores__card__name}>Khabib Nurmagomedov</p>
          </Link>
          <Link href='/leyendas/george-st-pierre' className={`${styles.peleadores__card} ${styles.peleadores__card_gsp}`}>
              <p className={styles.peleadores__card__name}>George St-Pierre</p>
          </Link>
          <Link href='/leyendas/anderson-silva' className={`${styles.peleadores__card} ${styles.peleadores__card_anderson}`}>
              <p className={styles.peleadores__card__name}>Anderson Silva</p>
          </Link>
          <Link href='/leyendas' className={`${styles.peleadores__card__plus__gray}`}>
            <Image src={plus} alt=''/>
          </Link>
        </div>
      </section>
      <ArticulosContainer />
      <section className={styles.home__peleadores}>
        <p className={styles.home__peleadores__title}>Peleadores Destacados</p>
        <div className={styles.peleadores__container}>
          <Link href='/peleadores/conor-mcgregor' className={`${styles.peleadores__card} ${styles.peleadores__card_mcgregor}`}>
            <p className={styles.peleadores__card__name}>Conor Mcgregor</p>
          </Link>
          <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
            <p className={styles.peleadores__card__name}>Alexander Volkanovski</p>
          </Link>
          <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
            <p className={styles.peleadores__card__name}>Sean Strickland</p>
          </Link>
          <Link href='/peleadores' className={`${styles.peleadores__card__plus}`}>
            <Image src={plus} alt=''/>
          </Link>
        </div>
      </section>
      <section className={styles.home__peleadores}>
        <p className={styles.home__peleadores__title}>Mujeres en MMA</p>
        <div className={styles.peleadores__container}>
          <Link href='/mujeres/alexa-grasso' className={`${styles.peleadores__card} ${styles.peleadores__card_grasso}`}>
              <p className={styles.peleadores__card__name}>Alexa Grasso</p>
          </Link>
          <Link href='/mujeres/zhang-weili' className={`${styles.peleadores__card} ${styles.peleadores__card_weili}`}>
              <p className={styles.peleadores__card__name}>Zhang Weili</p>
          </Link>
          <Link href='/mujeres/julianna-pena' className={`${styles.peleadores__card} ${styles.peleadores__card_julianna}`}>
              <p className={styles.peleadores__card__name}>Julianna Peña</p>
          </Link>
          <Link href='/mujeres' className={`${styles.peleadores__card__plus}`}>
            <Image src={plus} alt=''/>
          </Link>
        </div>
      </section>
    </main>
  )
}