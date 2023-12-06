import Image from 'next/image'
import ufc from '@/assets/promotoras/UFC.png'
import pfl from '@/assets/promotoras/pfl.webp'
import styles from './Promotoras.module.css'
import Link from 'next/link'

export default function PromotorasList () {
    return(
        <section className={styles.promotoras__list}>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <Link className={styles.promotoras__list__info__link} href='/promotoras/ufc'><h2 className={styles.promotoras__list__info__title}>UFC</h2></Link>
                        <p className={styles.promotoras__list__info__text}>The Ultimate Fighting Championship es una promotora de MMA, y es la más grande del mundo en este deporte.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={ufc} alt='ufc' />
                </article>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <Link className={styles.promotoras__list__info__link} href='/promotoras/pfl'><h2 className={styles.promotoras__list__info__title}>PFL</h2></Link>
                        <p className={styles.promotoras__list__info__text}>Professional Fighters League es una empresa de MMA con sede en Las Vegas y es la primera en la que los peleadores compiten en un formato de temporada regular.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={pfl} alt='pfl' />
                </article>
            </section>
    )
}