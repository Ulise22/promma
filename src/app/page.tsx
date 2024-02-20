import styles from './page.module.css'
import mmadescription from '../assets/mma-description.jpg'
import ponzinibbio from '../assets/santiago-ponsinibbio_argentina.jpg'
import Image from 'next/image'
import Link from 'next/link'
import PromotorasList from './promotoras/PromotorasList'
import PageHero from './articulos/components/PageHero'
import ArticlePreview from './articulos/components/ArticlePreview'
/*Articles PREVIEW */
import conorVkhabib from '@/assets/peleadores__images/peleadores__hero.jpg'
import mostppv from '@/assets/articulos/previews/mostppv.jpg'
import khabibVferguson from '@/assets/articulos/previews/khabibVferguson.jpg'

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
        <article className={styles.article}>
          <h2 className={styles.article__title}>¿Que son las MMA?</h2>
          <p className={styles.article__p}>Las MMA (por sus iniciales en inglés, Mixed Martial Arts), es un deporte de combate que combina diferentes disciplinas y artes marciales como el boxeo, el jiu-jitsu, el kickboxing o el muay thai.</p>
          <p className={styles.article__p}>Es un deporte relativamente nuevo, dado que comenzó a popularizarse y a conocerse como tal en los años 90, cuando se organizaron en Estados Unidos y Japón los primeros torneos de esta disciplina.</p>
          <Image className={styles.article__img} src={mmadescription} alt='2 peladores luchando, en una escuela de mma, durante un sparring, donde uno de ellos da una patada en el aire' />
          <p className={styles.article__p}>Su creciente popularidad en los últimos años, dió lugar a la creación de diferentes empresas y organizaciones de renombre como lo son la UFC (Ultimate Fighting Championship), o Bellator MMA, entre otras. Estas organizaciones organizan eventos donde los luchadores compiten en un octágono o un ring, y las peleas son transmitidas por televisión, con una cada vez mayor audiencia.</p>
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
        <article className={styles.article}>
          <h2 className={styles.article__title}>Mma argentina</h2>
          <p className={styles.article__p}>Las MMA en Argentina vienen creciendo como en todo el mundo, llegando a tener un peleador campeón de la Professional Fighthers League(PFL) como <Link className={styles.link} href='/argentinos/emiliano-sordi'><b>Emiliano Sordi</b></Link> o al capeón de peso welter en la compañía ARES como <b><Link className={styles.link} href='/argentinos/laureano-staropoli'>Laureano Staropoli</Link></b>. Además claro, de nuestros representantes en la UFC, como lo son <b><Link className={styles.link} href='/argentinos/santiago-ponzinibbio'> Santiago Ponzibbio</Link>, <Link className={styles.link} href='/argentinos/guido-cannetti'>Guido Cannetti</Link> y Marcelo Rojo</b> en la rama masculina, junto a <b>Silvana Gómez y <Link className={styles.link} href='/argentinos/ailin-perez'>Ailín Pérez</Link></b> en la rama femenina.</p>
          <Image className={styles.article__img} src={ponzinibbio} alt='Emiliano Sordi, campeon argentino de mma en la companía Professional Fighters League' width={500} />
        </article>
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
        <article className={styles.article}>
          <h2 className={styles.article__title}>Historia de las Artes Marciales</h2>
          <p className={styles.article__p}>La palabra &quot;Marcial&quot; o &quot;Marcialidad&quot; viene del Dios Guerrero de los romanos, Marte. Es por esto que la marcialidad hace referencia a todo lo que englobe la disciplina militar. Mientras que la palabra &quot;Arte&quot; hace referencia a las formas en que el hombre pueda expresar una emoción o sentimiento de forma bella. Por tanto, las &quot;Artes Marciales&quot; son los sistemas creados por los humanos para expresar y enseñar las mejores técnicas de defensa persona y de disciplina militar.</p>
          <p>Se cree que el origen de las Artes Marciales data de hace más de 4000 años, que según algunos historiadores, se expandieron por todo Oriente gracias a las enseñanzas de los monjes Budistas, quienes idearon un sistema de defensa personal para protejerse de los forajidos y de los animales salvajes durante sus viajes. Con el paso del tiempo cada país oriental fue creando y desarrollando sus propias artes marciales, de acuerdo a sus costumbres culturales y religiosas, entre las que destacan el <b>Karate</b> en Japón, el <b>Kung Fu</b> en China, o el <b>Taekwondo</b> en Corea.</p>
          <p>En sí, las Artes Marciales son un conjunto de técnicas y prácticas con el objetivo de someter, dañar o defenderse del rival, que se diferencian de un simple enfrentamiento físico en que con las artes marciales los golpes y ataques se hacen de forma coherente y buscando los métodos más efectivos. Hoy en día, las artes marciales se practican y son vistas como un deporte, para mantenerse en forma, para mejorar la salud, para saber cómo defenderse o para buscar alguna forma de desarrollo personal con la cual crecer y forjar el caracter y la confianza en uno mismo.</p>
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