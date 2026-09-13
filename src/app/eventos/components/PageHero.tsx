import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc330 from '@/assets/eventos/ufc/0-150/0-15/ufc330.webp'
import silvaDelgado from '@/assets/eventos/fight-night/0-150/16-30/ufc_noche.webp'
import ufcBaku from '@/assets/eventos/fight-night/0-150/0-15/fiziev-torres.webp'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/eventos/ufc330'>
                <Image className={styles.pagehero__bigArticle__img} priority={true} quality={75} src={ufc330} alt='' />
                <h2 className={styles.page__title}>UFC 330: ¡Islam Makhachev Derrota a Ian Garry Por Decisión Unánime y Sigue Siendo Campeón! ¡Mackenzie Dern Derrota a Gillian Robertson por Decisión Unánime y Retiene el Cinturón!</h2>
                <p>¡Esteban Ribovics Noquea en el Segundo Asalto en el Retiro de Edson Barboza! ¡Chidi Njokuani Derrota a Joel Álvarez por Decisión Unánime!</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/eventos/fight-night-silva-delgado'>
                <Image className={styles.pagehero__article__img} quality={50} src={silvaDelgado} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>UFC Noche: ¡Jean Silva Somete a Jose Miguel Delgado en el Tercer Asalto!</h2>
                    <p>¡Brandon Moreno Derrota a Joseph Morales por Decisión Dividida! ¡Alexa Grasso Derrota a Maonon Fiorot por Decisión Unánime!</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/09/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/eventos/fight-night-fiziev-torres'>
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