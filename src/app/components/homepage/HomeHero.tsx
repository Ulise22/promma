import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc330 from '@/assets/eventos/ufc/0-150/0-15/ufc330.webp'
import ianGarryEsposa from '@/assets/articulos/0-100/90-100/ian_garry-esposa.webp'
import mackenzieDernDivorcio from '@/assets/articulos/0-100/90-100/mackenzie_dern-divorcio.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/eventos/ufc330'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc330} alt='' />
                <h2 className={styles.home__title}>UFC 330: ¡Islam Makhachev vs Ian Garry! ¡Mackenzie Dern vs Gillian Robertson!</h2>
                <span>¡Esteban Ribovics vs Edson Barboza! ¡Joel Álvarez vs Chidi Njokuani!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/articulos/ian-garry-esposa-polemica'>
                <Image className={styles.homehero__article__img} quality={50} src={ianGarryEsposa} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Ian Garry y la Polémica Relación con su Esposa</h2>
                    <p>Conoce toda la polémica que rodea a la esposa de Ian Garry: la diferencia de edad, su libro &quot;How to Be a WAG&quot;, su exesposo y nutriocionista de Garry y las críticas de Sean Strickland</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>09/08/2026</p>
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