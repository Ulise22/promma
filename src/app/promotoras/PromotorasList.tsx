import Image from 'next/image'
import ufc from '@/assets/promotoras/UFC.png'
import pfl from '@/assets/promotoras/pfl.webp'
import bellator from '@/assets/promotoras/bellator.png'
import one from '@/assets/promotoras/ONE.png'
import dogfight from '@/assets/promotoras/dogfight.jpg'
import kots from '@/assets/promotoras/kots.jpg'
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
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <Link className={styles.promotoras__list__info__link} href='/promotoras/bellator'><h2 className={styles.promotoras__list__info__title}>BELLATOR</h2></Link>
                        <p className={styles.promotoras__list__info__text}>Bellator MMA es una empresa de MMA en Estados Unidos fundada por Bjom Rebne en 2008.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={bellator} alt='bellator' />
                </article>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <Link className={styles.promotoras__list__info__link} href='/promotoras/one-championship'><h2 className={styles.promotoras__list__info__title}>ONE Championship</h2></Link>
                        <p className={styles.promotoras__list__info__text}>One Championship es una empresa de deportes de combate con sede en Singapur.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={one} alt='ONE' />
                </article>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <Link className={styles.promotoras__list__info__link} href='/promotoras/dogfight-wild-tournament'><h2 className={styles.promotoras__list__info__title}>Dogfight Wild Tournament</h2></Link>
                        <p className={styles.promotoras__list__info__text}>DWT es el evento de peleas del youtuber Jordi Wild iniciado en 2023.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={dogfight} alt='Dogfight Wild Tournament' />
                </article>
                <article className={styles.promotoras__list__container}>
                    <div className={styles.promotoras__list__info}>
                        <Link className={styles.promotoras__list__info__link} href='/promotoras/king-of-the-streets'><h2 className={styles.promotoras__list__info__title}>King Of The Streets</h2></Link>
                        <p className={styles.promotoras__list__info__text}>KOTS es un evento de lucha clandestina europeo, conocido también como el &quot;Club de la Lucha&quot;.</p>
                    </div>
                    <Image className={styles.promotoras__list__image} src={kots} alt='King Of The Streets' />
                </article>
            </section>
    )
}