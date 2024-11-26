import Link from 'next/link'
import styles from './homeHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc309 from '@/assets/covertura_ufc/ufc/0-15/ufc309.jpg'
import iliaPeleador2024 from '@/assets/noticias/0-10/ilia_peleador_2024.jpg'
import kaiAsakura from '@/assets/noticias/0-10/kai_asakura.jpg'

export default function HomeHero () {
    return(
        <section className={styles.homehero}>
            <Link className={styles.homehero__bigArticle} href='/covertura-ufc/ufc309'>
                <Image className={styles.homehero__bigArticle__img} src={ufc309} alt='' />
                <h2 className={styles.home__title}>UFC 309: ¡Jon Jones Noquea a Stipe Miocic en el Tercer Asalto en su Primer Defensa del Título! ¡Charles Oliveira Derrota a Michael Chandler por Decisión en La Pelea de la Noche!</h2>
                <span>¡Bo Nical derrota a Paul Craig y mantiene su invicto de 7-0! Además el brasileño Mauricio Ruffy vence al peruano James Llontop por decisión en su segunda pelea en la UFC.</span>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal1}`} href='/noticias/quien-es-kai-asakura'>
                <Image className={styles.homehero__article__img} loading='lazy' src={kaiAsakura} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>¿Quién es Kai Asakura? La Estrella Japonesa Que Debutará Peleando Por el Tïtulo de UFC en el UFC 310 en Diciembre</h2>
                    <p>El luchador japonés Kai Asakura de 31 años que peleará por el Campeonato de Peso Mosca en su debut en la UFC.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>26/11/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.homehero__article} ${styles.normal2}`} href='/noticias/ilia-topuria-peleador-del-2024'>
                <Image className={styles.homehero__article__img} loading='lazy' src={iliaPeleador2024} alt='' />
                <article className={styles.homehero__article__container}>
                    <h2 className={styles.homehero__title}>Opinión: Ilia Topuria es el Peleador del Año 2024 en UFC</h2>
                    <p>Luego de lo realizado en el UFC 308, al Ilia Topuria noquear a Max Holloway, no quedan dudas de que Ilia Topuria es el peleador del año 2024.</p>
                    <div className={styles.homehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/10/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}