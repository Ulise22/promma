import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc320 from '@/assets/eventos/ufc/0-150/0-15/ufc320.webp'
import ulbergReyes from '@/assets/eventos/fight-night/0-150/0-15/ulberg-vs-reyes.webp'
import lopesSilva from '@/assets/eventos/fight-night/0-150/0-15/lopes-vs-silva.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc320'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc320} alt='' />
                <h2 className={styles.page__title}>UFC 320: ¡Magomed Ankalaev vs Alex Pereira 2! ¡Merab Dvalishvili vs Cory Sandhagen!</h2>
                <p>¡Jiri Prochazka Noquea a Khalil Rountree en el Tercer Asalto en La Pelea de la Noche! ¡Youssef Zalal Somete a Josh Emmet en el Primer Asalto de la Pelea!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-ulberg-reyes'>
                <Image className={styles.pagehero__article__img} quality={50} src={ulbergReyes} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Perth: ¡Carlos Ulberg Noquea a Dominick Reyes en el Primer Asalto!</h2>
                    <p>¡Jimmy Crute Somete a Ivan Erslan en el Primer Asalto! ¡Neil Magny Somete a Jake Matthews en el Tercer Asalto!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/09/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-lopes-silva'>
                <Image className={styles.pagehero__article__img} quality={50} src={lopesSilva} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Noche: ¡Diego Lopes Noquea a Jean Silva en el Segundo Asalto!</h2>
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