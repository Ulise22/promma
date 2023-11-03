import styles from './page.module.css'
import mmadescription from '../assets/mma-description.jpg'
import emisordi from '../assets/Emiliano_Sordi.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return(
    <main>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>PROMMA, toda la información de las artes marciales mixtas</h1>
      </section>
      <section className={styles.articles__container}>
        <article className={styles.article}>
          <h2 className={styles.article__title}>¿Que son las MMA?</h2>
          <p className={styles.article__p}>Las MMA (por sus iniciales en inglés, Mixed Martial Arts), es un deporte de combate que combina diferentes disciplinas y artes marciales como el boxeo, el jiu-jitsu, el kickboxing o el muay thai.</p>
          <p className={styles.article__p}>Es un deporte relativamente nuevo, dado que comenzó a popularizarse y a conocerse como tal en los años 90, cuando se organizaron en Estados Unidos y Japón los primeros torneos de esta disciplina.</p>
          <Image className={styles.article__img} src={mmadescription} alt='2 peladores luchando, en una escuela de mma, durante un sparring, donde uno de ellos da una patada en el aire' />
          <p className={styles.article__p}>Su creciente popularidad en los últimos años, dió lugar a la creación de diferentes empresas y organizaciones de renombre como lo son la UFC (Ultimate Fighting Championship), o Bellator MMA, entre otras. Estas organizaciones organizan eventos donde los luchadores compiten en un octágono o un ring, y las peleas son transmitidas por televisión, con una cada vez mayor audiencia.</p>
        </article>
        <article>
          <h2 className={styles.article__title}>Tipos de Artes Marciales</h2>
          <p className={styles.article__p}>Existen diferentes tipos de artes marciales que se utilizan en las mma, aunque los más utilizados son los siguientes: </p>
          <ul>
            <li>Boxeo (<Link href='./estilos/boxeo'>Ver info</Link>) </li>
            <li>Jiu-jitsu(<Link href='./estilos/jiujitsu'>Ver info</Link>)</li>
            <li>Karate</li>
            <li>Kickboxing</li>
            <li>Taekwondo</li>
            <li>Muay Thai(<Link href='./estilos/muay-thai'>Ver info</Link>)</li>
            <li>Lucha Libre</li>
            <li>Judo</li>
          </ul>
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>Mma argentina</h2>
          <p className={styles.article__p}>Las MMA en Argentina vienen creciendo como en todo el mundo, llegando a tener un peleador campeón de la Professional Fighthers League(PFL) como <Link className={styles.link} href='/peleadores/emiliano-sordi'><b>Emiliano Sordi</b></Link> o al capeón de peso welter en la compañía ARES como <b>Laureano Staropoli</b>. Además claro, de nuestros representantes en la UFC, como lo son <b>Santiago Ponzibbio, Guido Cannetti y Marcelo Rojo</b> en la rama masculina, junto a <b>Silvana Gómez y Ailín Pérez</b> en la rama femenina.</p>
          <Image className={styles.article__img} src={emisordi} alt='Emiliano Sordi, campeon argentino de mma en la companía Professional Fighters League' width={500} />
        </article>
      </section>
    </main>
  )
}