import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufcWhiteHouse from '@/assets/eventos/ufc/0-150/0-15/ufc_casa_blanca.webp'
import topuriaPereira from '@/assets/noticias/0-100/40-50/topuria_and_pereira.webp'
import alexPereiraTripleCampeon from '@/assets/noticias/0-100/40-50/alex_pereira-triple_campeon.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc-casa-blanca'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufcWhiteHouse} alt='' />
                <h2 className={styles.home__title}>UFC Casa Blanca: ¡Ilia Topuria vs Justin Gaethje! ¡Ciryl Gane Noquea a Alex Pereira en el Segundo Asalto y es Campeón Interino Otra Vez!</h2>
                <span>¡Sean O&apos;Malley Noquea a Aiemann Zahabi en el Segundo Asalto! ¡Josh Hokit Noquea a Derrick Lewis en el Segundo Asalto!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/ilia-topuria-y-alex-pereira'>
                <Image className={styles.homehero__article__img} quality={50} src={topuriaPereira} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Ilia Topuria y Alex Pereira: La Amistad Menos Pensada</h2>
                    <p>Como Ilia Topuria se volvió amigo de Alex Pereira luego de la defensa ante Josh Hokit</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>26/05/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/alex-pereira-triple-campeon'>
                <Image className={styles.homehero__article__img} quality={50} src={alexPereiraTripleCampeon} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Será Alex Pereira el Primer Triple Campeón de la UFC?</h2>
                    <p>El histórico hito que podría alcanzar Alex Pereira de ganarle a Ciryl Gane: Convertirse en el primer triple campeón de la UFC.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>01/06/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}