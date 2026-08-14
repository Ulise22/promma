import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc329 from '@/assets/eventos/ufc/0-150/0-15/ufc329.webp'
import emmetVSvallejos from '@/assets/eventos/fight-night/0-150/0-15/emmet_vallejos.webp'
import ufcBaku from '@/assets/eventos/fight-night/0-150/0-15/fiziev-torres.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc329'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc329} alt='' />
                <h2 className={styles.page__title}>UFC 329: ¡Conor McGregor Se Lesiona Nuevamente y Cae Derrota ante Holloway! ¡Paddy Pimblett Somete a Benoit Saint Denis en el Primer Asalto!</h2>
                <p>¡Mario Bautista Derrota a Cory Sandhagen por Decisión Unánime! ¡Brandon Royval Somete a Loneer Kavanagh en el Tercer Asalto!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-emmet-vallejos'>
                <Image className={styles.pagehero__article__img} quality={50} src={emmetVSvallejos} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Fight Night: ¡Kevin Vallejos Noquea a Josh Emmet en el Primer Asalto!</h2>
                    <p>¡Gillian Robertson Derrota a Amanda Lemos Por Decisión Unánime! ¡El español Hecher Sosa Debuta con Victoria!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>14/03/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-fiziev-torres'>
                <Image className={styles.pagehero__article__img} quality={50} src={ufcBaku} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Baku: ¡Rafael Fiziev Noquea a Manuel Torres en el Segundo Asalto!</h2>
                    <p>¡Shara Magomedov Derrota a Michel Pereira por Decisión Unánime! ¡Kaan Ofli Somete a Javier Reyes en el Primer Asalto!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/06/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}