import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc319 from '@/assets/eventos/ufc/0-150/0-15/ufc319.webp'
import imavovBorralho from '@/assets/eventos/fight-night/0-150/0-15/imavov_vs_borralho.webp'
import lopesSilva from '@/assets/eventos/fight-night/0-150/0-15/lopes-vs-silva.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc319'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc319} alt='' />
                <h2 className={styles.page__title}>UFC 319: ¡Khamzat Chimaev Derrota a Dricus Du Plessis y es Nuevo Campeón de Peso Medio! ¡Lerone Murphy Deja KO al Debutante de UFC Aaron Pico!</h2>
                <p>¡Loopy Godínez Derrota a Jéssica Andrade por Decisión Unánime en un Peleón! ¡Carlos Prates Noquea a Geoff Neal en el Primer Asalto con un Codazo Giratorio!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-imavov-borralho'>
                <Image className={styles.pagehero__article__img} quality={50} src={imavovBorralho} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Paris: ¡Nassourdine Imavov Derrota a Caio Borralho Por Decisión Unánime en La Pelea de la Noche!</h2>
                    <p>¡Benoit Saint Denis Somete a Mauricio Ruffy en el Segundo Asalto! ¡Ante Delija Debuta con Nocaut ante Marcin Tybura!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>06/09/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-lopes-silva'>
                <Image className={styles.pagehero__article__img} quality={50} src={lopesSilva} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Noche: ¡Diego Lopes vs Jean Silva!</h2>
                    <p>¡David Martínez Derrota Rob Font y se Mete Al Top 10 de la División!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>13/09/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}