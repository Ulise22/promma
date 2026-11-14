import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc334 from '@/assets/eventos/ufc/0-150/16-30/ufc334.webp'
import merabCardio from '@/assets/articulos/0-100/70-80/merab_dvalishvili-cardio.webp'
import dvalishviliNariz from '@/assets/articulos/0-100/90-100/merab_dvalishvili-nariz.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc334'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc334} alt='' />
                <h2 className={styles.home__title}>UFC 334: ¡Ciryl Gane vs Josh Hokit! ¡Kayla Harrison vs Amanda Nunes!</h2>
                <span>¡Caio Borralho vs Yousri Belgaroui! ¡Uros Medic vs Kevin Holland!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/articulos/merab-dvalishvili-cardio'>
                <Image className={styles.homehero__article__img} quality={50} src={merabCardio} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>El Cardio de Merab Dvalishvili</h2>
                    <p>¿Cómo Conseguir el Cardio de Merab Dvalishvili? El Secreto de Merab Para Tener un Cardio Inhumano.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>18/09/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/merab-dvalishvili-nariz'>
                <Image className={styles.homehero__article__img} quality={50} src={dvalishviliNariz} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Qué le pasó a Merab Dvalishvili en la Nariz?</h2>
                    <p>Un repaso completo a las tres fracturas de nariz de Merab Dvalishvili: cómo ocurrieron, qué le dijo el cirujano y por qué prefiere pelear con la nariz torcida antes que parar un año.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>20/10/2026</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}