import styles from './page.module.css'
import Link from 'next/link'
import PageHero from './articulos/components/PageHero'
import ArticlePreview from './articulos/components/ArticlePreview'
import Noticias from './components/homepage/Noticias'
import ArticulosContainer from './components/homepage/ArticulosContainer'
/*Articles PREVIEW */
import masvidalVsAskren from '@/assets/articulos/previews/0-10/masvidal-vs-askren_preview.jpeg'
import jimMiller from '@/assets/articulos/previews/20-30/jim-miller-preview.jpg'
import nateDiaz from '@/assets/articulos/previews/20-30/nate-diaz-preview.jpg'
import alexanderEmelianenko from '@/assets/articulos/previews/20-30/alexander-emelianenko-preview.jpg'
import Image from 'next/image'
import plus from '@/assets/plus.png'

export default function Home () {
  return(
    <main className={styles.home}>
      <PageHero />
      <section className={styles.home__articlesHero}>
        <ArticlePreview img={masvidalVsAskren} url='/articulos/ko-mas-rapido-ufc' title='El KO Más Rápido en la Historia de la UFC' author={null} date={null} text='La historia detrás de Jorge Masvidal, Ben Askren y como el enfrentamiento entre estos 2 terminó con el KO más rápido en la historia de la UFC.' />
        <ArticlePreview img={nateDiaz} url='/articulos/nate-diaz-historia' title='Nate Diaz, el Peleador Más Querido de la UFC' author={null} text='La historia de uno de los peleadores más carismáticos de la UFC, que supo ganarse el cariño de la gente con peleas memorables y con su forma de ser.' date='01/05/2024' />
        <ArticlePreview img={jimMiller} url='/articulos/jim-miller-historia' title='Jim Miller, el Peleador con Más Victorias en la Historia de la UFC y que Participó del UFC100, UFC200 y UCF300' author={null} text='La historia de uno de los peleadores más importantes en la historia de la compañía más grande de MMA, que cuenta con más de 40 peleas en UFC.' date='02/05/2024' />
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