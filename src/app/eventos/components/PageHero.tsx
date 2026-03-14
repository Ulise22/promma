import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc326 from '@/assets/eventos/ufc/0-150/0-15/ufc326.webp'
import stricklandVShernandez from '@/assets/eventos/fight-night/0-150/0-15/strickland_hernandez.webp'
import MorenoKavanagh from '@/assets/eventos/fight-night/0-150/0-15/moreno-vs-kavanagh.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc326'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc326} alt='' />
                <h2 className={styles.page__title}>UFC 326: ¡Charles Oliveira Derrota a Max Holloway y es el Nuevo BMF!</h2>
                <p>¡Caio Borralho Derrota a Reiner De Ridder por Decisión Unánime! ¡Raúl Rosas Jr. Derrota a Rob Font por Decisión Unánime y Se Mete en los Rankings!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-strickland-hernandez'>
                <Image className={styles.pagehero__article__img} quality={50} src={stricklandVShernandez} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>¡Sean Strickland Noquea a Anthony Hernandez en el Tercer Asalto!</h2>
                    <p>¡Uros Medic Noquea a Geoff Neal en el Primer Asalto! ¡Melquizael Costa Noquea a Dan Ige en el Primer Asalto!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>21/02/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-moreno-kavanagh'>
                <Image className={styles.pagehero__article__img} quality={50} src={MorenoKavanagh} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC México: ¡Loneer Kavanagh Derrota a Brandon Moreno por Decisión Unánime!</h2>
                    <p>¡Ailín Pérez Derrota a Macy Chiasso por Decisión Unánime! ¡David Martínez Derrota a Marlon Chito Vera por Decisión Unánime! ¡King Green Noquea a Daniel Zellhuber en el Segundo Asalto!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>28/02/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}