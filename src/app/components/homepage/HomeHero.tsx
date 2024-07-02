import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import magomedovOjo from '@/assets/articulos/previews/30-40/shara_magomedov_ojo-preview.jpg'
import chandlerEspera from '@/assets/noticias/previews/20-30/michael_chandler_espera-preview.jpg'
import ufc303 from '@/assets/noticias/previews/20-30/ufc303-preview.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/noticias/ufc303'>
                <Image className={styles.homehero__bigArticle__img} src={ufc303} alt='' />
                <p className={styles.home__title}>UFC 303: ¡Alex Pereira Noquea a Jiri Prochazka en el Segundo Asalto!¡Diego Lopes Vence a Dan Ige Que Tomó la Pelea con 4 Horas de Antelación!</p>
                <span>En esta noche de MMA tenemos peleas fantásticas, con la pelea por el título de semipesados como evento estelar de esta jornada, y con la pelea inédita de Diego Lopes y de Dan Ige, que aceptó combatir unas pocas horas antes de la pelea.</span>
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