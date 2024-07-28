import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import magomedovOjo from '@/assets/articulos/previews/30-40/shara_magomedov_ojo-preview.jpg'
import chandlerEspera from '@/assets/noticias/previews/20-30/michael_chandler_espera-preview.jpg'
import ufc304 from '@/assets/noticias/previews/20-30/ufc304-preview.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/noticias/ufc304'>
                <Image className={styles.homehero__bigArticle__img} src={ufc304} alt='' />
                <p className={styles.home__title}>UFC 304: ¡Belal Muhammad Vence Por Decisión Unánime a Leon Edwards y es Nuevo Campeón! ¡Tom Aspinall Noquea a Curtis Blaydes en el Primer Asalto!</p>
                <span>¡Paddy Pimblett somete a Bobby Green en el primer asalto de la pelea! Tom Aspinall logra otra victoria por nocaut en su revancha ante Blaydes. Belal Muhammad es nuevo campeón de peso wélter en la UFC.</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/shara-magomedov-ojo'>
                <Image className={styles.homehero__article__img} src={magomedovOjo} alt='' />
                <article className={styles.homehero__article__container}>
                    <p className={styles.homehero__title}>¿Qué le Pasó en el Ojo a Shara Magomedov?</p>
                    <span>Una de las mayores promesas de la UFC y cómo es capaz de pelear a pesar de haber perdido la visión en uno de sus ojos.</span>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>22/06/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/michael-chandler-espera-mcgregor'>
                <Image className={styles.homehero__article__img} src={chandlerEspera} alt='' />
                <article className={styles.homehero__article__container}>
                <p className={styles.homehero__title}>¿Tiene Sentido Para Michael Chandler Esperar a McGregor?</p>
                    <span>Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?</span>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>25/06/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}