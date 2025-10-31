import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import dellaMaddalenaNariz from '@/assets/articulos/0-100/70-80/jack-della-maddalena-nariz.webp'
import alexPereiraTribu from '@/assets/articulos/0-100/70-80/alex_pereira-tribu.webp'
import makhachevDerrota from '@/assets/articulos/0-100/70-80/makhachev-derrota.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/articulos/jack-della-maddalena-nariz'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={dellaMaddalenaNariz} alt='' />
                <h2 className={styles.home__title}>¿Qué Le Pasó a Jack Della Maddalena en la Nariz?</h2>
                <span>¿Qué le pasó en la nariz a Jack Della Maddalena? Como un rodillazo en la cabeza le deformó el tabique al campeón de la UFC.</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/islam-makhachev-unica-derrota'>
                <Image className={styles.homehero__article__img} quality={50} src={makhachevDerrota} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La Única Derrota de Islam Makhachev</h2>
                    <p>Primer derrota profesional en las MMA del luchador de Daguestán Islam Makhachev. </p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>10/09/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/alex-pereira-tribu'>
                <Image className={styles.homehero__article__img} quality={50} src={alexPereiraTribu} alt='Alex Pereira Pintado Como Si Formara Parte de una Tribu Indigena' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Cuál es la Tribu de Alex Pereira?</h2>
                    <p>El origen de Alex Pereira y su relación la tribu indigena brasileña Pataxó, de la que es descendiente</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>09/09/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}