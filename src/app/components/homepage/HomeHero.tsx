import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import magomedovOjo from '@/assets/articulos/previews/30-40/shara_magomedov_ojo-preview.jpg'
import ufc306 from '@/assets/covertura_ufc/ufc/0-15/ufc306-preview.jpg'
import iliaPromissKOHolloway from '@/assets/noticias/previews/10-20/ilia_promissko_holloway-preview.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/covertura-ufc/ufc306'>
                <Image className={styles.homehero__bigArticle__img} src={ufc306} alt='' />
                <h2 className={styles.home__title}>UFC 306: ¡Raúl Rosas Jr. Logra La Primer Victoria de la Noche en La Esfera!</h2>
                <span>Noche de UFC en La Esfera en Las Vegas por el Día de la Independencia de México</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/shara-magomedov-ojo'>
                <Image className={styles.homehero__article__img} src={magomedovOjo} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Qué le Pasó en el Ojo a Shara Magomedov?</h2>
                    <p>Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>22/06/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/ilia-promete-ko-a-holloway'>
                <Image className={styles.homehero__article__img} src={iliaPromissKOHolloway} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Ilia Promete KO en el Primer Asalto Contra Holloway</h2>
                    <p>Ilia Topuria habló de su pelea con Max Holloway, en la cual promote noquear en el primer asalto, además habló de la llegada de su hermano a la UFC, futuras peleas, Islam Makhachev, Volkanovski, Sean O&apos;Malley, Diego Lopes, etc.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>22/08/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}