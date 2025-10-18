import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc320 from '@/assets/eventos/ufc/0-150/0-15/ufc320.webp'
import oliveiraGamrot from '@/assets/eventos/fight-night/0-150/0-15/oliveira-vs-gamrot.webp'
import deridderAllen from '@/assets/eventos/fight-night/0-150/0-15/deridder-allen.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc320'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc320} alt='' />
                <h2 className={styles.page__title}>UFC 320: ¡Alex Pereira Noquea a Magomed Ankalaev en el Primer Asalto y Vuelve a Ser Campeón! ¡Merab Dvalishvili Derrota a Cory Sandhagen y Sigue Siendo Campeón!</h2>
                <p>¡Jiri Prochazka Noquea a Khalil Rountree en el Tercer Asalto en La Pelea de la Noche! ¡Youssef Zalal Somete a Josh Emmet en el Primer Asalto de la Pelea!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-deridder-allen'>
                <Image className={styles.pagehero__article__img} quality={50} src={deridderAllen} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Vancouever: ¡Reinier De Ridder vs Brendan Allen!</h2>
                    <p>¡Kevin Holland vs Mike Mallot! ¡Marlon Vera vs Aiemann Zahabi!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>18/10/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-oliveira-gamrot'>
                <Image className={styles.pagehero__article__img} quality={50} src={oliveiraGamrot} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Río: ¡Charles Oliveira Somete a Mateusz Gamrot en el Segundo Asalto!</h2>
                    <p>¡Deiveson Figueiredo Derrota a Montel Jackson Por Decisión Dividida! ¡Joel Álvarez Domina y Derrota a Vicente Luque por Decisión Unánime!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>11/10/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}