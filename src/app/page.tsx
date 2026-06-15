import styles from './page.module.css'
import Link from 'next/link'
import HomeHero from './components/homepage/HomeHero'
import ArticlePreview from './articulos/components/ArticlePreview'
import Noticias from './components/homepage/noticias/Noticias'
import ArticulosContainer from './components/homepage/ArticulosContainer'
/*Articles PREVIEW */
import gaethjeFueCampeon from '@/assets/noticias/0-100/40-50/gaethje-fue-campeon.webp'
import pimblettOffCamp from '@/assets/articulos/0-100/80-90/pimblett-fuera-de-campamento.webp'
import saintDenisMilitar from '@/assets/articulos/0-100/80-90/saint_denis-militar.webp'
import JoshHokitPersonaje from '@/assets/articulos/0-100/90-100/johs_hokit-personaje.webp'
import Image from 'next/image'
import plus from '@/assets/plus.png'
import CoverturaUFC from './components/homepage/coverturaUfc/CoverturaUfc'

export default function Home () {
  return(
    <main className={styles.home}>
      <HomeHero />
      <section className={styles.home__articlesHero}>
        <ArticlePreview img={gaethjeFueCampeon} url='/noticias/justin-gaethje-fue-campeon-de-ufc' title='¿Justin Gaethje fue campeón de UFC?' author={null} text='La historia de los títulos interino de Justin Gaethje y su intento por ser campeón indiscutido de la UFC ¿La tercera es la vencida?' date='29/05/2026' />
        <ArticlePreview img={JoshHokitPersonaje} url='/articulos/josh-hokit-es-un-personaje' title='¿Josh Hokit es un personaje?' author={null} text='Como Josh Hokit usa personajes exagerados para ganar hype y dar atención a los pesos pesados.' date='10/06/2026' />
        <ArticlePreview img={saintDenisMilitar} url='/articulos/benoit-saint-denis-militar' title='El Pasado Militar de Benoit Saint Denis' author={null} text='Cómo Benoit Saint Denis pasó de ser un militar de las fuerzas especiales francesas a uno de los peleadores más emocionantes de la UFC. ' date='27/01/2026' />
        <ArticlePreview img={pimblettOffCamp} url='/articulos/paddy-pimblett-fuera-de-campamento' title='Paddy Pimblett Fuera de Campamento: ¿Por Qué Se Ve Tan Gordo?' author={null} text='Porque Paddy Pimblett engorda tanto cuando no está peleando. El antes y después de Paddy The Baddy en una pelea.' date='19/01/2026' />
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