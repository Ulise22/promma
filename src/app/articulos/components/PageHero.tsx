import Link from 'next/link'
import styles from './PageHero.module.css'
import Image from 'next/image'
/* IMAGES */
import ufc299 from '@/assets/articulos/previews/10-20/ufc299_preview.jpg'
import comebackMcGregor from '@/assets/articulos/previews/20-30/conor-mcgregor_volverapelear.jpg'
import poirierVsMakhachev from '@/assets/articulos/previews/20-30/poirier-vs-makhachev.jpg'

export default function PageHero () {
    return(
        <section className={styles.pagehero}>
            <Link className={styles.pagehero__bigArticle} href='/articulos/ufc299'>
                <Image className={styles.pagehero__bigArticle__img} src={ufc299} alt='' />
                <h2 className={styles.page__title}>UFC 299: ¡Sean Omalley vence a Chito y Sigue Siendo Campeón!¡Dustin Poirier Gana por Nocaut en el Segundo Asalto!</h2>
                <p>En una noche que nos regalos peleas espectaculares, Sean O&apos;malley defendió su título luego de dominar la pelea durante 5 asaltos y Dustin Poirier fue capaz de noquear a Saint Denis en el segundo asalto.</p>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal1}`} href='/articulos/volvera-a-pelear-mcgregor'>
                <Image className={styles.pagehero__article__img} src={comebackMcGregor} alt='' />
                <article className={styles.pagehero__article__container}>
                    <h2 className={styles.pagehero__title}>¿Cuándo Vuelve a Pelear Conor McGregor?</h2>
                    <p>Recientemente, en una entrevista promosionando su nueva película, Road House, ha declarado sus intenciones de volver a pelear este año, pero ¿lo hará realmente?</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>26/03/2024</p>
                    </div>
                </article>
            </Link>
            <Link className={`${styles.pagehero__article} ${styles.normal2}`} href='/articulos/pelea-poirier-vs-makhachev'>
                <Image className={styles.pagehero__article__img} src={poirierVsMakhachev} alt='' />
                <article className={styles.pagehero__article__container}>
                <h2 className={styles.pagehero__title}>¿Dustin Poirier vs Islam Makhachev por el Título de Peso Ligero?</h2>
                    <p>Luego las declaraciones cruzadas entre ambos peleadores y de la reciente victoria de Poirier contra Saint Denis, ¿se dará una pelea entre estos 2 por el título?</p>
                    <div className={styles.pagehero__article__info}>
                        <h4>FULLMMA</h4>
                        <p>27/03/2024</p>
                    </div>
                </article>
            </Link>
        </section>
    )
}