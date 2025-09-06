import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc319 from '@/assets/eventos/ufc/0-150/0-15/ufc319.webp'
import walkerVSmingyang from '@/assets/eventos/fight-night/0-150/0-15/walker_vs_mingyang.webp'
import imavovBorralho from '@/assets/eventos/fight-night/0-150/0-15/imavov_vs_borralho.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc319'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc319} alt='' />
                <h2 className={styles.page__title}>UFC 319: ¡Khamzat Chimaev Derrota a Dricus Du Plessis y es Nuevo Campeón de Peso Medio! ¡Lerone Murphy Deja KO al Debutante de UFC Aaron Pico!</h2>
                <p>¡Loopy Godínez Derrota a Jéssica Andrade por Decisión Unánime en un Peleón! ¡Carlos Prates Noquea a Geoff Neal en el Primer Asalto con un Codazo Giratorio!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-imavov-borralho'>
                <Image className={styles.pagehero__article__img} quality={50} src={imavovBorralho} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Paris: ¡Nassourdine Imavov vs Caio Borralho!</h2>
                    <p>¡Benoit Saint Denis vs Mauricio Ruffy! ¡Ante Delija Debuta con Nocaut ante Marcin Tybura!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>06/09/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-walker-mingyang'>
                <Image className={styles.pagehero__article__img} quality={50} src={walkerVSmingyang} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Shanghai: ¡Johnny Walker Noquea a Zhang Mingyang en el Segundo Asalto en China!</h2>
                    <p>¡Aljamain Sterling Derrota Por Decisión Unánime a Brian Ortega 50-45! ¡Sergei Pavlovich Derrota a Waldo Cortes Acosta Por Decisión Unánime!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>23/08/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}