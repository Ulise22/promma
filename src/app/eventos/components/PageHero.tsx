import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc332 from '@/assets/eventos/ufc/0-150/0-15/ufc332.webp'
import allenDuncan from '@/assets/eventos/fight-night/0-150/16-30/allen-vs-duncan.webp'
import buckleyVSMallot from '@/assets/eventos/fight-night/0-150/16-30/buckley-vs-malott.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc332'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc332} alt='' />
                <h2 className={styles.page__title}>UFC 332: ¡Natalia Silva Derrota a Wang Cong y es la Nueva Campeona! ¡Payton Talbott Noquea a Deiveson Figueiredo en el Primer Asalto!</h2>
                <p>¡Esteban Ribovics Noquea a King Green en el Primer Asalto! ¡Roman Kopylov Noquea a Ateba Gautier en el Primer Asalto!</p>
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
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/ufc-fight-night-allen-vs-duncan'>
                <Image className={styles.pagehero__article__img} quality={50} src={allenDuncan} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Fight Night: ¡Brendan Allen Somete a Christian Leroy Duncan en el Quinto y Último Asalto!</h2>
                    <p>¡Loopy Godinez Derrota a Ketlen Souza por Decisión Unánime! ¡Francisco Prado Noquea a Ismael Bonfim en el Primer Asalto!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>10/10/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}