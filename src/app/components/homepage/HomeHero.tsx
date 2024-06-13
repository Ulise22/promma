import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import chimaevCancel from '@/assets/noticias/previews/10-20/chimaev_whittaker-preview.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/noticias/ufc302'>
                <Image className={styles.homehero__bigArticle__img} src={ufc302} alt='' />
                <h2 className={styles.home__title}>UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!</h2>
                <p>Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.</p>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/mcgregor-cancela-pelea'>
                <Image className={styles.homehero__article__img} src={conor} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?</h2>
                    <p>A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>07/06/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/khamzat-whittaker-cancelada'>
                <Image className={styles.homehero__article__img} src={chimaevCancel} alt='' />
                <article className={styles.homehero__article__container}>
                <h2 className={styles.homehero__title}>Whittaker vs Chimaev ¿Cancelada?</h2>
                    <p>A un par de semanas para el enfrentamiento en Arabia Sáudita entre 2 de los mayores contendientes al título de Peso Medio de UFC, pareciera que se cae la pelea.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>13/06/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}