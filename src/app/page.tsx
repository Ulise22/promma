import styles from './page.module.css'
import Link from 'next/link'
import PromotorasList from './promotoras/PromotorasList'
import PageHero from './articulos/components/PageHero'
import ArticlePreview from './articulos/components/ArticlePreview'
/*Articles PREVIEW */
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/0-10/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/0-10/khabibVferguson.jpg'

export default function Home () {
  return(
    <main className={styles.articles__container}>
      <PageHero />
      <section className={styles.articlesPreview__container}>
        <ArticlePreview img={conorVkhabib} url='/articulos/conor-vs-khabib' title='Conor McGregor vs Khabib Nurmagomedov: ¿Qué pasó realmente?' />
        <ArticlePreview img={mostppv} url='/articulos/most-ppv' title='Top 5: Las peleas de MMA que más PPV vendieron' />
        <ArticlePreview img={khabibVferguson} url='/articulos/khabib-ferguson' title='Khabib vs Tony Ferguson: La pelea maldita que nunca pudo darse' />
      </section>
      <section>
        <article>
          <h2 className={styles.article__title}>Peleadores Campeones de UFC</h2>
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
        </article>
        <article>
          <h2 className={styles.article__title}>Peleadores Destacados</h2>
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
        </article>
        {/* <article>
          <h2 className={styles.article__title}>Tipos de Artes Marciales</h2>
          <p className={styles.article__p}>En las MMA cada luchador es libre de elegir qué estilo de pelea utilizar, además de que pueden ir evolucionando y adoptando diferentes artes marciales a su repertorio, buscando así ser más completos. Entre las diferentes artes marciales que están permitidas en las competiciones de MMA, algunas de las que más destacan son:</p>
          <ul>
            <li><Link href='./estilos/boxeo'>Boxeo</Link> </li>
            <li><Link href='./estilos/jiujitsu'>Jiu-jitsu</Link></li>
            <li>Karate</li>
            <li>Kickboxing</li>
            <li>Taekwondo</li>
            <li><Link href='./estilos/muay-thai'>Muay Thai</Link></li>
            <li>Lucha Libre</li>
            <li>Judo</li>
          </ul>
        </article> */}
        <article>
          <h2 className={styles.article__title}>Leyendas de las MMA</h2>
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
        </article>
        <article className={styles.article__promotoras}>
          <h2 className={styles.article__title}>Promotoras de MMA</h2>
          <PromotorasList />
        </article>
        <article>
          <h2 className={styles.article__title}>Mujeres en MMA</h2>
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
        </article>
      </section>
    </main>
  )
}