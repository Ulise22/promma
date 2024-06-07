import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import conor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor_mcgregor.jpg'
import ufc302 from '@/assets/noticias/previews/10-20/ufc302-preview.jpg'
import ailin from '@/assets/peleadores__images/argentinos/ailin-perez/ailin-perez.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/noticias/ufc302'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc302} alt='' />
                <h2 className={styles.page__title}>UFC 302: ¡Islam Makhachev Somete a Poirier en el Último Asalto de la Pelea!</h2>
                <p>Islam Makhachev somete a Dustin Poirier en lo que hasta ahora parecería ser la última pelea de su carrera. Además Sean Strickland se lleva una esperable victoria contra Paulo Costa por decisión unánime.</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/noticias/mcgregor-cancela-pelea'>
                <Image className={styles.pagehero__article__img} src={conor} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>Conor McGregor vs Chandler: ¿McGregor Cancela la Pelea?</h2>
                    <p>A poco tiempo de que se celebre el UFC 303, McGregor canceló la rueda de prensa que estaba prevista para promocionar el evento, muchas cosas extrañas han sucedido desde entonces que desperteron todo tipo de rumores, ¿pero qué está pasando realmente?</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>07/06/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/noticias/ailin-vs-joselyne'>
                <Image className={styles.pagehero__article__img} src={ailin} alt='' />
                <article className={styles.pagehero__article__container}>
                <h2 className={styles.pagehero__title}>La Argentina Ailín Pérez Gana su Pelea por Decisión Unánime en UFC 302</h2>
                    <p>En un combate contra la panameña Joselyne Edwards, Ailín demostró ser la clara ganadora de un combate en el que incluso estuvo cerca de noquear a su rival.</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>01/06/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}