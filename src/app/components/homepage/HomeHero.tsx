import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc332 from '@/assets/eventos/ufc/0-150/0-15/ufc332.webp'
import jeanSilvaMadre from '@/assets/articulos/0-100/90-100/jean_silva-madre.webp'
import mackenzieDernDivorcio from '@/assets/articulos/0-100/90-100/mackenzie_dern-divorcio.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc332'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc332} alt='' />
                <h2 className={styles.home__title}>UFC 332: ¡Natalia Silva vs Wang Cong! ¡Deiveson Figeuiredo!</h2>
                <span>¡Esteban Ribovics Noquea a King Green en el Primer Asalto! ¡Roman Kopylov Noquea a Ateba Gautier en el Primer Asalto!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/jean-silva-historia-madre'>
                <Image className={styles.homehero__article__img} quality={50} src={jeanSilvaMadre} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La Trágica Historia de la Madre de Jean Silva</h2>
                    <p>Como el asesinato de un hermano, el abuso y encarcelamiento de su madre forjaron a Jean &quot;Lord&quot; Silva.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/09/2026</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/mackenzie-dern-divorcio'>
                <Image className={styles.homehero__article__img} quality={50} src={mackenzieDernDivorcio} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>El Turbulento Divorcio de Mackenzie Dern</h2>
                    <p>Descubre la historia detrás del divorcio de la campeona de UFC Mackenzie Dern, las acusaciones cruzadas de violencia y la manutencion que tiene que pagar Dern.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>12/08/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}