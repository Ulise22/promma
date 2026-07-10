import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufcWhiteHouse from '@/assets/eventos/ufc/0-150/0-15/ufc_casa_blanca.webp'
import emmetVSvallejos from '@/assets/eventos/fight-night/0-150/0-15/emmet_vallejos.webp'
import ufcBaku from '@/assets/eventos/fight-night/0-150/0-15/fiziev-torres.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc-casa-blanca'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufcWhiteHouse} alt='' />
                <h2 className={styles.page__title}>UFC Casa Blanca: ¡La Esquina de Ilia Topuria Abandona el Combate y Justin Gaethje es Nuevo Campeón por TKO! ¡Ciryl Gane Noquea a Alex Pereira en el Segundo Asalto y es Campeón Interino Otra Vez!</h2>
                <p>¡Sean O&apos;Malley Noquea a Aiemann Zahabi en el Segundo Asalto! ¡Josh Hokit Noquea a Derrick Lewis en el Segundo Asalto!</p>
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