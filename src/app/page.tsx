import styles from './page.module.css'
import Link from 'next/link'
import HomeHero from './components/homepage/HomeHero'
import ArticlePreview from './articulos/components/ArticlePreview'
import Noticias from './components/homepage/noticias/Noticias'
import ArticulosContainer from './components/homepage/ArticulosContainer'
/*Articles PREVIEW */
import fightingNerds from '@/assets/articulos/0-100/10-20/fighting_nerds.jpg'
import salariosUFC from '@/assets/articulos/0-100/10-20/salarios_ufc.jpg'
import bispingOjo from '@/assets/articulos/0-100/20-30/michael_bisping_ojo.jpg'
import entrenarAlexPereira from '@/assets/articulos/0-100/60-70/pereira_entrenar_todos_los_dias.jpg'
import Image from 'next/image'
import plus from '@/assets/plus.png'
import CoverturaUFC from './components/homepage/coverturaUfc/CoverturaUfc'

export default function Home () {
  return(
    <main className={styles.home}>
      <HomeHero />
      <section className={styles.home__articlesHero}>
        <ArticlePreview img={fightingNerds} url='/articulos/fighting-nerds' title='¿Quiénes son los Fighting Nerds? El Mejor Equipo de MMA que Arrasa en la UFC' author={null} text='La historia del equipo Fighting Nerds, quiénes son, su filosofía, y cómo llegaron hasta lo más alto de las MMA, dominando por completo la UFC.' date='09/12/2024' />
        <ArticlePreview img={salariosUFC} url='/articulos/cuanto-gana-un-peleador-de-ufc' title='¿Cuánto le pagan a un peleador de UFC? Los salarios de los peleadores más importantes de MMA' author={null} text='Cuánto ganan los peleadores de UFC, desde los novatos, un peleador promedio, un campeón, y cómo sus resultados influyen en el sueldo. ' date='27/12/2025' />
        <ArticlePreview img={bispingOjo} url='/articulos/michael-bisping-ojo' title='Michael Bisping: El Luchador Inglés de UFC Que Perdió un Ojo Peleando' author={null} date='13/06/2024' text='La historia de cómo el peleador de Reino Unido perdió su ojo durante una pelea de UFC, y cómo a pesar de eso logró ser campeón.' />
        <ArticlePreview img={entrenarAlexPereira} url='/articulos/entrenar-todos-los-dias-alex-pereira' title='La Ventaja de Entrenar Todos Los Días Según Alex Pereira' author={null} text='El secreto detrás de la confianza de Alex Pereira, que radica en el entrenamiento diario. ' date='17/02/2025' />
      </section>
      <section className={styles.home__peleadores}>
        <h2 className={styles.home__peleadores__title}>Peleadores Campeones de la UFC</h2>
        <div className={styles.peleadores__container}>
          <Link href='/peleadores/alexander-volkanovski' className={`${styles.peleadores__card} ${styles.peleadores__card_volkanovski}`}>
            <h3 className={styles.peleadores__card__name}>Alexander Volkanovski</h3>
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
        <h2 className={styles.home__peleadores__title}>Peleadores Destacados</h2>
        <div className={styles.peleadores__container}>
          <Link href='/peleadores/conor-mcgregor' className={`${styles.peleadores__card} ${styles.peleadores__card_mcgregor}`}>
            <h3 className={styles.peleadores__card__name}>Conor Mcgregor</h3>
          </Link>
          <Link href='/peleadores/ilia-topuria' className={`${styles.peleadores__card} ${styles.peleadores__card_illia}`}>
            <h3 className={styles.peleadores__card__name}>Ilia Topuria</h3>
          </Link>
          <Link href='/peleadores/sean-strickland' className={`${styles.peleadores__card} ${styles.peleadores__card_strickland}`}>
            <h3 className={styles.peleadores__card__name}>Sean Strickland</h3>
          </Link>
        </div>
      </section>
      <ArticulosContainer />
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
      <CoverturaUFC />
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