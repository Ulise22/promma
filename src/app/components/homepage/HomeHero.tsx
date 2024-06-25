import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import magomedovOjo from '@/assets/articulos/previews/30-40/shara_magomedov_ojo-preview.jpg'
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import chandlerEspera from '@/assets/noticias/previews/20-30/michael_chandler_espera-preview.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/noticias/ufc302'>
                <Image className={styles.homehero__bigArticle__img} src={ufc302} alt='' />
                <h2 className={styles.home__title}>UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!</h2>
                <p>Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.</p>
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
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/michael-chandler-espera-mcgregor'>
                <Image className={styles.homehero__article__img} src={chandlerEspera} alt='' />
                <article className={styles.homehero__article__container}>
                <h2 className={styles.homehero__title}>¿Tiene Sentido Para Michael Chandler Esperar a McGregor?</h2>
                    <p>Michael Chandler lleva sin pelear desde noviembre de 2022, a la espera de una pelea con Conor McGregor, pero ¿Por qué lo espera tanto?</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>25/06/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}