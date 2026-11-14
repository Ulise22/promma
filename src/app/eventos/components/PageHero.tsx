import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc333 from '@/assets/eventos/ufc/0-150/0-15/ufc333.webp'
import cortesAcostaVSWalker from '@/assets/eventos/fight-night/0-150/16-30/cortes_acosta-vs-walker.webp'
import buckleyVSMallot from '@/assets/eventos/fight-night/0-150/16-30/buckley-vs-malott.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc333'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc333} alt='' />
                <h2 className={styles.page__title}>UFC 333: ¡Alexander Volkanovski Noquea a Movsar Evloev en el Segundo Asalto y Sigue Siendo Campeón de la UFC! ¡Petr Yan Derrota a Merab Dvalishvili en La Pelea de la Noche y Sigue Siendo Campeón!</h2>
                <p>¡Alexander Volkov Derrota a Rizvan Kuniev por Decisión Unánime! ¡Lone&apos;er Kavanagh Noquea a Ramazan Temirov en el Primer Asalto!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/ufc-fight-night-buckley-vs-malott'>
                <Image className={styles.pagehero__article__img} quality={50} src={buckleyVSMallot} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Fight Night: ¡Mike Malott Noquea a Joaquin Buckley en el Segundo Asalto!</h2>
                    <p>¡Jasmine Jasudavicius Derrota a Erin Blanchfield Por Decisión Unánime! ¡Cristian Perez Noquea a Kyle Nelson en el Primer Asalto!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>17/10/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/ufc-fight-night-cortes-acosta-vs-walker'>
                <Image className={styles.pagehero__article__img} quality={50} src={cortesAcostaVSWalker} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Fight Night: ¡Johnny Walker Noquea a Waldo Cortes Acosta en el Tercer Asalto y da la Sorpresa!</h2>
                    <p>¡Tatiana Suarez Derrota a Virna Jandiroba por Decisión Unánime!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>07/11/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}