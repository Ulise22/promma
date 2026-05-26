import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufcWhiteHouse from '@/assets/noticias/0-100/40-50/ufc_casa_blanca.webp'
import topuriaPereira from '@/assets/noticias/0-100/40-50/topuria_and_pereira.webp'
import seanStricklandInfancia from '@/assets/articulos/0-100/80-90/sean_strickland-infancia.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/noticias/ufc-casa-blanca'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufcWhiteHouse} alt='' />
                <h2 className={styles.home__title}>UFC Casa Blanca: Todo lo que Tienes Que Saber Sobre el UFC Freedom 250</h2>
                <span>Todos los detalles sobre el evento de UFC organizado en la Casa Blanca por el 250 aniversario del Día de la Independencia en Estados Unidos</span>
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
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/sean-strickland-infancia'>
                <Image className={styles.homehero__article__img} quality={50} src={seanStricklandInfancia} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La Traumática Infancia de Sean Strickland</h2>
                    <p>Como fue la durísima infancia del excampeón de UFC Sean Strickland, marcada por la violencia, el odio y el miedo hacia un padre abusivo.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/02/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}