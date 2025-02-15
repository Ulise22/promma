import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc312 from '@/assets/covertura_ufc/ufc/0-100/15-30/ufc312.jpg'
import ufcBillonario from '@/assets/noticias/0-100/20-30/ufc_busca_millonada.jpg'
import pimblettNextFight2025 from '@/assets/noticias/0-100/30-40/pimblett_nextfight2025.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/covertura-ufc/ufc312'>
                <Image className={styles.homehero__bigArticle__img} src={ufc312} alt='' />
                <h2 className={styles.home__title}>UFC 312: ¡Dricus Du Plessis Derrota a Sean Strickland y Retiene el Cinturón de Peso Mediano!</h2>
                <span>¡Aleksandre Topuria debuta con victoria ante ante Colby Thicknesse! ¡Zhang Weili derrota a Tatiana Suarez y retiene su cinturón!</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/la-ufc-busca-contrato-billonario'>
                <Image className={styles.homehero__article__img} loading='lazy' src={ufcBillonario} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>La UFC Busca un Contrato Multimillonario de Mil Millones, Según Bloomberg, Por Sus Derechos Televisivos</h2>
                    <p>Este año 2025 expira el contrato actual de la UFC con ESPN, por lo que la empresa de MMA más grande del planeta estaría buscando aumentar su contrato actual a uno de 10 cifras. </p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>15/01/2025</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/paddy-pimblett-proxima-pelea-2025'>
                <Image className={styles.homehero__article__img} loading='lazy' src={pimblettNextFight2025} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Próxima Pelea de Paddy Pimblett 2025: ¿Paddy Pimblett vs Michael Chandler?</h2>
                    <p>Se acrecientan los rumores sobre la próxima pelea de Paddy Pimblett, con 2 rivales y 2 posibles ubicaciones para él, ¿Gamrot o Chandler? ¿UFC 314 o UFC 317 en el International Fight Week?</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>15/02/2025</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}