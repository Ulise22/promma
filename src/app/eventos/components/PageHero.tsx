import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc318 from '@/assets/eventos/ufc/0-150/0-15/ufc318.webp'
import tairaVSpark from '@/assets/eventos/fight-night/0-150/0-15/taira_vs_park.webp'
import dolidzeVShernandez from '@/assets/eventos/fight-night/0-150/0-15/dolidze_hernandez.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc318'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc318} alt='' />
                <h2 className={styles.page__title}>UFC 318: ¡Max Holloway Derrota a Dustin Poirier en su Retirada y Sigue Siendo el BMF!</h2>
                <p>¡Paulo Costa Regresa Mejor Que Nunca y Derrota Roman Kopylov! ¡Michael Johnson Derrota a Daniel Zellhuber por Decisión Unánime!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-dolidze-hernandez'>
                <Image className={styles.pagehero__article__img} quality={50} src={dolidzeVShernandez} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Vegas 109: ¡Roman Dolidze vs Anthony Hernandez!</h2>
                    <p>¡Steve Erceg vs Ode&apos; Osburne! ¡Joselyne Edwards vs Priscila Cachoeira!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>09/08/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-taira-park'>
                <Image className={styles.pagehero__article__img} quality={50} src={tairaVSpark} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Vegas 108: ¡Tatsura Taira Soemte Hyunsung Park en el Segundo Asalto!</h2>
                    <p>¡Los Argentinos Esteban Ribovics y Kevin Vallejos Protagonistas en la UFC Ganando las Mejores Peleas de la Noche!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>02/08/2025</p>
                    </div>
                </article>
            </Link>
            
        </section>
    )
}