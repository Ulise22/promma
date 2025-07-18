import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc316 from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc316.webp'
import ufcBillonario from '@/assets/noticias/0-100/20-30/ufc_busca_millonada.jpg'
import modeloUFC from '@/assets/noticias/0-100/30-40/modelo_ufc.webp'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/covertura-ufc/ufc316'>
                <Image className={styles.homehero__bigArticle__img} loading='eager' quality={75} src={ufc316} alt='' />
                <h2 className={styles.home__title}>UFC 316: ¡Merab Dvalishvili Somete a Sean O&apos;Malley en el Primer Asalto! ¡Kayla Harrison Somete a Julianna Peña en el Segundo Asalto!</h2>
                <span>¡Kevin Holland Somete a Vicente Luque en el Segundo Asalto de la Pelea!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/la-ufc-busca-contrato-billonario'>
                <Image className={styles.homehero__article__img} quality={50} src={ufcBillonario} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La UFC Busca un Contrato Multimillonario de Mil Millones, Según Bloomberg, Por Sus Derechos Televisivos</h2>
                    <p>Este año 2025 expira el contrato actual de la UFC con ESPN, por lo que la empresa de MMA más grande del planeta estaría buscando aumentar su contrato actual a uno de 10 cifras. </p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>15/01/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/modelo-de-ufc'>
                <Image className={styles.homehero__article__img} quality={50} src={modeloUFC} alt='Islam Dulatov, el modelo de UFC' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Islam Dulatov: El Modelo de UFC Que Debuta en el UFC 318</h2>
                    <p>Conoce al alemán Islam Dulatov, que renunció a su exitosa carrera de modelo de Gucci y Hugo Boss para convertirse en peleador de MMA y debutar en la UFC.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>17/07/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}