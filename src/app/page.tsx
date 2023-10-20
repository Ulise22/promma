import Navbar from './Navbar'
import styles from './page.module.css'
import mmadescription from '../assets/mma-description.jpg'
import Image from 'next/image'

export default function Home () {
  return(
    <main>
      <Navbar />
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>MMA</h1>
      </section>
      <section className={styles.articles__container}>
        <article className={styles.article}>
          <h2 className={styles.article__title}>¿Que son las MMA?</h2>
          <p className={styles.article__p}>Las MMA (por sus iniciales en inglés, Mixed Martial Arts), es un deporte de combate que combina diferentes disciplinas y artes marciales como el boxeo, el jiu-jitsu, el kickboxing o el muay thai.</p>
          <p className={styles.article__p}>Es un deporte relativamente nuevo, dado que comenzó a popularizarse y a conocerse como tal en los años 90, cuando se organizaron en Estados Unidos y Japón los primeros torneos de esta disciplina.</p>
          <Image className={styles.article__img} src={mmadescription} alt='2 peladores luchando' />
          <p className={styles.article__p}>Su creciente popularidad en los últimos años, dió lugar a la creación de diferentes empresas y organizaciones de renombre como lo son la UFC (Ultimate Fighting Championship), o Bellator MMA, entre otras. Estas organizaciones organizan eventos donde los luchadores compiten en un octágono o un ring, y las peleas son transmitidas por televisión, con una cada vez mayor audiencia.</p>
        </article>
      </section>
    </main>
  )
}