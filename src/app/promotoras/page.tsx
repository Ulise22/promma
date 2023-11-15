import Image from 'next/image'
import ufc from '@/assets/promotoras/UFC.png'
import pfl from '@/assets/promotoras/pfl.webp'
import styles from './Promotoras.module.css'

export default function Promotoras () {
    return(
        <main>
            <section className={styles.promotoras__hero}>
                <h1 className={styles.promotoras__hero__title}>Promotoras de MMA</h1>
            </section>
            <section className={styles.promotoras__list}>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <h2 className={styles.promotoras__list__info__title}>UFC</h2>
                        <p className={styles.promotoras__list__info__text}>The Ultimate Fighting Championship es una promotora de MMA, y es la más grande del mundo en este deporte.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={ufc} alt='ufc' />
                </article>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <h2 className={styles.promotoras__list__info__title}>PFL</h2>
                        <p className={styles.promotoras__list__info__text}>Professional Fighters League es una empresa de MMA con sede en Las Vegas y es la primera en la que los peleadores compiten en un formato de temporada regular.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={pfl} alt='pfl' />
                </article>
            </section>
        </main>
    )
}